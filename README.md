# Landing Mediseo

Landing B2B de **Mediseo** en Next.js (App Router) + TypeScript. Reconstrucción de
producción a partir del design-canvas de `../handoff/`.

## Correr

```bash
npm install
cp .env.example .env.local   # completá GEMINI_API_KEY para el chat del demo
npm run dev                  # http://localhost:3000  (redirige / → /kr)
npm run build && npm run start
```

## Demo interactivo

- Página del demo (clínica "Seoul Glow Clinic") en `public/demo/` → `/demo/index.html`.
  El botón "Ver demo en vivo" del hero la abre en pestaña nueva.
- El chat con IA usa `app/api/chat/route.ts` (proxy a Google Gemini). Necesita
  `GEMINI_API_KEY` (local en `.env.local`, en Vercel como Environment Variable).
  Sin la key la página y el widget cargan, pero al enviar un mensaje devuelve error.
- Key gratis: https://aistudio.google.com/apikey

## Estructura

- `app/[lang]/` — layout (fuentes + metadata SEO/OG por idioma) y page (ensambla secciones).
- `app/globals.css` — variables de marca (Seoul Glow) + keyframes de animación.
- `middleware.ts` — `/` → idioma por defecto (`kr`).
- `components/` — una sección por archivo. Client only: `RotatingGreeting`, `ChatDemo`,
  `LanguageSwitcher`, `Reveal`.
- `lib/i18n/` — `config.ts` (idiomas), `dictionaries/{es,en,kr}.ts` (todo el copy).

## i18n

Rutas por idioma: `/es`, `/en`, `/kr`. Para editar textos, tocá los tres diccionarios
en `lib/i18n/dictionaries/`. El default se cambia en `lib/i18n/config.ts` (`DEFAULT_LANG`).

## Pendientes antes de publicar (del handoff)

- [ ] Precios reales — hoy `₩390.000 / ₩790.000` son de ejemplo (con nota).
- [ ] Testimonios reales — hoy "Dirección" / "Gerencia".
- [ ] CTA "Agendá una demo" — hoy es ancla `#cta`; conectar a Calendly/formulario.
- [ ] `GEMINI_API_KEY` en Vercel (para el chat del demo en producción).
- [ ] Leads del chat: hoy solo se loguean; conectar a CRM/Google Sheet si se quiere persistir.
- [ ] Fotos reales (si se agregan; el diseño actual es SVG + gradientes, sin fotos).
- [ ] Revisión nativa del coreano.

## Deploy

Listo para Vercel (framework Next.js autodetectado). `npm run build` pasa limpio.
