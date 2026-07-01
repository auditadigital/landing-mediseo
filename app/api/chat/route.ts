// Route handler que hace de proxy a Google Gemini para el chat del demo
// (Seoul Glow Clinic). La API key nunca se hardcodea: se lee de GEMINI_API_KEY.
//
// El widget (public/demo/widget.js) hace POST { messages, lang } y espera
// { reply, lead } (o { error }).

export const runtime = "nodejs";

// Alias "latest": apunta al flash actual y usa la cuota del tier de la key.
const MODEL = "gemini-flash-latest";

const IDIOMAS: Record<string, string> = { en: "inglés", es: "español", ko: "coreano" };

const SYSTEM_PROMPT = `Sos el asistente virtual de "Seoul Glow Clinic", una clínica
de estética y odontología ubicada en Seúl, Corea del Sur, especializada en turismo médico.

# Idioma
Detectá el idioma del usuario y respondé SIEMPRE en ese mismo idioma.
Soportás inglés, español y coreano. Si el idioma no es claro, usá inglés.

# Tono
Cálido, profesional y conciso. Respuestas breves (2-4 frases). Sin tecnicismos innecesarios.

# Qué hacés
Respondés dudas frecuentes sobre:
- Tratamientos: estética facial (botox, fillers, lifting), cuidado de la piel,
  blanqueamiento y carillas dentales, implantes.
- Precios ORIENTATIVOS (siempre aclarando que son aproximados y se confirman en consulta):
  · Botox: desde 150 USD por zona
  · Fillers: desde 300 USD por jeringa
  · Blanqueamiento dental: desde 250 USD
  · Carillas: desde 400 USD por pieza
  · Implante dental: desde 900 USD
- Tiempos de estadía sugeridos: 3 a 7 días según el tratamiento.
- Idiomas de atención: inglés, español y coreano.
- Cómo agendar: dejando sus datos, el equipo lo contacta para coordinar.

# Calificación del paciente (lead)
De forma NATURAL y conversacional (no como un formulario), andá recolectando:
- nombre
- tratamiento de interés
- fechas tentativas del viaje
- ciudad de origen
- forma de contacto (WhatsApp o email, con el dato concreto)

# Reglas importantes
- NUNCA des diagnósticos médicos ni prometas resultados. Derivá siempre a la consulta
  con un especialista.
- No inventes promociones ni precios cerrados.

# Salida estructurada del lead
Cuando ya tengas TODOS estos datos (nombre, tratamiento, fechas, ciudad/origen y contacto),
agregá al FINAL de tu mensaje, en una línea aparte, un bloque EXACTAMENTE con este formato:
<LEAD>{"nombre":"...","idioma":"es|en|ko","tratamiento":"...","fechas":"...","contacto":"..."}</LEAD>
- El campo "idioma" es el idioma en el que venís conversando.
- El campo "contacto" incluye el medio y el dato (ej "WhatsApp +54 9 11 1234-5678" o "email ana@mail.com").
- Antes del bloque, agradecé al paciente y avisale que el equipo lo va a contactar.
- Mientras falten datos, NO incluyas el bloque <LEAD>; seguí preguntando con naturalidad.`;

type Msg = { role: string; content: string };

// Extrae el bloque <LEAD>...</LEAD> del texto del bot, si existe.
function extraerLead(texto: string): { texto: string; lead: unknown | null } {
  const match = texto.match(/<LEAD>\s*([\s\S]*?)\s*<\/LEAD>/);
  if (!match) return { texto, lead: null };

  let lead: unknown = null;
  try {
    lead = JSON.parse(match[1]);
  } catch (e) {
    console.warn("No se pudo parsear el bloque LEAD:", (e as Error).message);
  }
  const textoLimpio = texto.replace(/<LEAD>[\s\S]*?<\/LEAD>/, "").trim();
  return { texto: textoLimpio, lead };
}

// "Guarda" el lead. En serverless el filesystem es efímero, así que solo logueamos
// (conectar a un CRM/Sheet es el siguiente paso).
function guardarLead(lead: unknown) {
  const registro = { ...(lead as object), recibido: new Date().toISOString() };
  console.log("NUEVO LEAD:", JSON.stringify(registro));
}

// Gemini usa role "user" y "model" (no "assistant"); el system va aparte.
function aContentsGemini(messages: Msg[]) {
  return messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: String(m.content || "") }],
  }));
}

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...CORS },
  });
}

export async function OPTIONS() {
  return new Response(null, { status: 200, headers: CORS });
}

export async function POST(req: Request) {
  const API_KEY = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  if (!API_KEY) {
    return json({ error: "Falta configurar GEMINI_API_KEY." }, 500);
  }

  try {
    const { messages, lang } = (await req.json()) as { messages?: Msg[]; lang?: string };
    if (!Array.isArray(messages) || messages.length === 0) {
      return json({ error: "Falta el array 'messages'." }, 400);
    }

    let system = SYSTEM_PROMPT;
    if (lang && IDIOMAS[lang]) {
      system += `\n\n# Idioma elegido\nEl usuario eligió conversar en ${IDIOMAS[lang]}. Respondé en ese idioma salvo que cambie explícitamente.`;
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-goog-api-key": API_KEY },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: system }] },
        contents: aContentsGemini(messages),
        generationConfig: {
          maxOutputTokens: 1024,
          temperature: 0.7,
          thinkingConfig: { thinkingBudget: 0 },
        },
      }),
    });

    if (!resp.ok) {
      const detalle = await resp.text();
      console.error("Error de Gemini:", resp.status, detalle);
      return json({ error: "Error del proveedor de IA." }, 502);
    }

    const data = await resp.json();
    const textoCrudo = (data.candidates?.[0]?.content?.parts || [])
      .map((p: { text?: string }) => p.text || "")
      .join("")
      .trim();

    if (!textoCrudo) {
      console.warn("Respuesta vacía de Gemini:", JSON.stringify(data).slice(0, 300));
      return json({
        reply: "Disculpá, no pude generar una respuesta. ¿Podés reformular tu consulta?",
        lead: null,
      });
    }

    const { texto, lead } = extraerLead(textoCrudo);
    if (lead) guardarLead(lead);

    return json({ reply: texto, lead });
  } catch (err) {
    console.error("Error procesando el mensaje:", err);
    return json({ error: "Error procesando el mensaje." }, 500);
  }
}
