/* widget.js — chat embebible en HTML/JS vanilla.
   Se carga con un solo <script>. Crea un botón flotante + panel de chat,
   y conversa con la serverless function /api/chat (Google Gemini).

   Flujo:
     1. Al abrir, el cliente elige idioma con 3 botones (EN / ES / KO).
     2. El bot saluda en ese idioma y pregunta/sugiere qué necesita.
     3. La conversación sigue; el idioma elegido se manda al backend.

   Configuración opcional (antes de cargar este script):
     <script>window.SGC_CONFIG = { apiUrl: "https://tu-app.vercel.app/api/chat" };</script>
   Si no se define apiUrl, usa "/api/chat" (mismo dominio). */

(function () {
  "use strict";

  var CONFIG = window.SGC_CONFIG || {};
  var API_URL = CONFIG.apiUrl || "/api/chat";
  // "right" (default) o "left", por si la esquina derecha ya está ocupada.
  var SIDE = CONFIG.position === "left" ? "sgc-left" : "";

  // Idiomas ofrecidos en el selector inicial.
  var LANGS = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "ko", label: "한국어" },
  ];

  // Saludo del bot por idioma (estático: no gasta tokens). Pregunta qué necesita.
  var GREETINGS = {
    en: "Hi! 👋 I'm the Seoul Glow Clinic assistant. What treatment are you interested in? I can help with aesthetics, skin care or dental work — or suggest popular options.",
    es: "¡Hola! 👋 Soy el asistente de Seoul Glow Clinic. ¿Qué tratamiento te interesa? Puedo ayudarte con estética, cuidado de la piel u odontología, o sugerirte opciones populares.",
    ko: "안녕하세요! 👋 Seoul Glow Clinic 어시스턴트입니다. 어떤 시술에 관심이 있으신가요? 미용, 피부 관리, 치과 진료를 도와드리거나 인기 옵션을 추천해 드릴게요.",
  };

  // Placeholder del input por idioma.
  var PLACEHOLDERS = {
    en: "Type your message…",
    es: "Escribí tu mensaje…",
    ko: "메시지를 입력하세요…",
  };

  // Estado
  var messages = [];      // historial enviado al backend
  var chosenLang = null;  // idioma elegido en el selector

  // ---- Inyectamos la hoja de estilos (junto al widget.js) -------------------
  function inyectarCSS() {
    var current = document.currentScript;
    var base = current ? current.src.replace(/widget\.js.*$/, "") : "";
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = CONFIG.cssUrl || base + "widget.css";
    document.head.appendChild(link);
  }

  // ---- Construcción del DOM --------------------------------------------------
  var panel, launcher, messagesEl, textarea, sendBtn;

  function crearUI() {
    launcher = document.createElement("button");
    launcher.className = "sgc-launcher " + SIDE;
    launcher.innerHTML = "💬";
    launcher.setAttribute("aria-label", "Abrir chat");
    launcher.onclick = togglePanel;

    panel = document.createElement("div");
    panel.className = "sgc-panel " + SIDE;
    panel.innerHTML =
      '<div class="sgc-header">' +
      "<strong>Seoul Glow Clinic</strong>" +
      "<span>Estética &amp; odontología · Seúl</span>" +
      "</div>" +
      '<div class="sgc-messages"></div>' +
      '<div class="sgc-input">' +
      '<textarea rows="1" placeholder="…"></textarea>' +
      "<button>➤</button>" +
      "</div>";

    document.body.appendChild(launcher);
    document.body.appendChild(panel);

    messagesEl = panel.querySelector(".sgc-messages");
    textarea = panel.querySelector("textarea");
    sendBtn = panel.querySelector(".sgc-input button");

    // El input arranca deshabilitado hasta elegir idioma.
    setInputHabilitado(false);

    sendBtn.onclick = enviar;
    textarea.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        enviar();
      }
    });
  }

  function togglePanel() {
    var abierto = panel.classList.toggle("sgc-open");
    // Al abrir, paramos el "zumbido" del botón.
    launcher.classList.toggle("sgc-quiet", abierto);
    // Primera apertura: mostramos el selector de idioma.
    if (abierto && messagesEl.children.length === 0) {
      mostrarSelectorIdioma();
    }
  }

  // ---- Paso 1: selector de idioma -------------------------------------------
  function mostrarSelectorIdioma() {
    var wrap = document.createElement("div");
    wrap.className = "sgc-langpick";

    var prompt = document.createElement("p");
    prompt.className = "sgc-langprompt";
    prompt.textContent = "Choose your language · Elegí tu idioma · 언어 선택";
    wrap.appendChild(prompt);

    var row = document.createElement("div");
    row.className = "sgc-langrow";
    LANGS.forEach(function (l) {
      var btn = document.createElement("button");
      btn.className = "sgc-langbtn";
      btn.textContent = l.label;
      btn.onclick = function () {
        elegirIdioma(l.code, wrap);
      };
      row.appendChild(btn);
    });
    wrap.appendChild(row);
    messagesEl.appendChild(wrap);
  }

  function elegirIdioma(code, wrapSelector) {
    chosenLang = code;
    if (wrapSelector) wrapSelector.remove();       // quitamos el selector
    textarea.placeholder = PLACEHOLDERS[code] || "…";
    setInputHabilitado(true);
    // Paso 2: el bot saluda y pregunta qué necesita (estático, sin tokens).
    pintarMensaje("bot", GREETINGS[code]);
    textarea.focus();
  }

  // ---- Pintado de mensajes ---------------------------------------------------
  function pintarMensaje(rol, texto) {
    var div = document.createElement("div");
    div.className = "sgc-msg sgc-" + rol;
    div.textContent = texto;
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return div;
  }

  // ---- Envío al backend ------------------------------------------------------
  function enviar() {
    if (!chosenLang) return; // todavía no eligió idioma
    var texto = textarea.value.trim();
    if (!texto) return;

    pintarMensaje("user", texto);
    messages.push({ role: "user", content: texto });
    textarea.value = "";
    setEnviando(true);

    var typing = pintarMensaje("bot", "…");
    typing.classList.add("sgc-typing");

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: messages, lang: chosenLang }),
    })
      .then(function (r) {
        return r.json();
      })
      .then(function (data) {
        typing.remove();
        if (data.error) {
          pintarMensaje("bot", "Lo siento, hubo un problema. Probá de nuevo en un momento.");
          return;
        }
        pintarMensaje("bot", data.reply);
        messages.push({ role: "assistant", content: data.reply });
      })
      .catch(function () {
        typing.remove();
        pintarMensaje("bot", "No pude conectarme. Revisá tu conexión e intentá otra vez.");
      })
      .finally(function () {
        setEnviando(false);
        textarea.focus();
      });
  }

  function setEnviando(estado) {
    sendBtn.disabled = estado;
    textarea.disabled = estado;
  }

  function setInputHabilitado(estado) {
    textarea.disabled = !estado;
    sendBtn.disabled = !estado;
  }

  // ---- Init ------------------------------------------------------------------
  function init() {
    inyectarCSS();
    crearUI();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
