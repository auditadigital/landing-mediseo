import type { Dictionary } from "../types";
import { CHAT_SCRIPT } from "./chat-script";

const es: Dictionary = {
  meta: {
    title: "Mediseo — Pacientes globales, cuidado coreano",
    description:
      "Presencia digital multilingüe + IA que atiende, agenda y hace el intake de pacientes internacionales para clínicas estéticas y dentales de Corea.",
  },
  nav: {
    how: "Cómo funciona",
    benefits: "Beneficios",
    ai: "IA",
    pricing: "Precios",
    cta: "Agendá una demo",
  },
  hero: {
    greetings: ["Hola", "Hello", "안녕하세요"],
    h1: "Pacientes internacionales, listos para tu clínica.",
    sub: "Mediseo une tu presencia digital multilingüe —web e Instagram— con una IA que atiende, agenda y hace el intake de pacientes de habla inglesa y española. Tu equipo solo se enfoca en tratar.",
    cta1: "Agendá una demo",
    cta2: "Ver cómo funciona",
    ctaDemo: "Ver demo en vivo",
    trust: "Sin permanencia · Listo en 2 semanas · Soporte en 3 idiomas",
    chatStatus: "Responde al instante · 24/7",
    chatInputPh: "Escribí tu mensaje…",
  },
  stats: [
    { v: "3", l: "idiomas · ES · EN · KR" },
    { v: "24/7", l: "respuesta automática" },
    { v: "2 sem", l: "para lanzar" },
    { v: "1", l: "panel para todo" },
  ],
  how: {
    title: "Tres pasos. Cero fricción.",
    sub: "Te integramos sin sumar trabajo a tu equipo.",
    steps: [
      {
        t: "Conectamos tu clínica",
        d: "Creamos tu presencia multilingüe: web e Instagram listos para captar pacientes globales.",
      },
      {
        t: "La IA atiende y agenda",
        d: "El chatbot responde dudas, reserva turnos y completa el intake —en su idioma, 24/7.",
      },
      {
        t: "Recibís pacientes listos",
        d: "Llegan informados, confirmados y pre-calificados. Tu equipo solo trata.",
      },
    ],
  },
  why: {
    title: "Por qué las clínicas eligen Mediseo",
    sub: "Más pacientes internacionales, sin contratar ni complicarte.",
    items: [
      {
        t: "Presencia multilingüe",
        d: "Web e Instagram en español, inglés y coreano, optimizados para captar.",
      },
      {
        t: "Chatbot con IA 24/7",
        d: "Responde al instante en tres idiomas, también de madrugada.",
      },
      {
        t: "Reservas e intake automáticos",
        d: "Agenda turnos y recolecta la historia clínica sin tu intervención.",
      },
      {
        t: "Pacientes pre-calificados",
        d: "Llegan informados y con expectativas claras.",
      },
      {
        t: "Confianza y profesionalismo",
        d: "Perfil verificado y comunicación cuidada que da seguridad.",
      },
      {
        t: "Cero carga extra",
        d: "Tu equipo no suma tareas: operamos la captación por vos.",
      },
    ],
  },
  ai: {
    eyebrow: "El asistente que nunca duerme",
    title: "Una IA que habla el idioma de cada paciente",
    sub: "Detecta el idioma, responde, agenda y deriva a una persona cuando hace falta.",
    features: [
      "Detecta y responde en ES, EN y coreano",
      "Agenda turnos y envía recordatorios",
      "Completa el intake e historia clínica",
      "Deriva a tu equipo en casos complejos",
    ],
  },
  pricing: {
    title: "Planes para cada clínica",
    sub: "Empezá simple y escalá cuando llegue la demanda.",
    popular: "Más elegido",
    note: "Precios de ejemplo · se ajustan a tu clínica.",
    plans: [
      {
        name: "Esencial",
        price: "₩390.000",
        per: "/mes",
        features: [
          "Web multilingüe",
          "Chatbot IA · 2 idiomas",
          "Reservas automáticas",
        ],
        cta: "Empezar",
      },
      {
        name: "Crecimiento",
        price: "₩790.000",
        per: "/mes",
        features: [
          "Todo lo de Esencial",
          "3 idiomas (ES·EN·KR)",
          "Instagram gestionado",
          "Intake automático",
        ],
        cta: "Agendá una demo",
      },
      {
        name: "Premium",
        price: "A medida",
        per: "",
        features: [
          "Todo lo de Crecimiento",
          "Campañas dedicadas",
          "Soporte prioritario",
          "Integraciones a medida",
        ],
        cta: "Hablar con ventas",
      },
    ],
  },
  testimonials: {
    title: "Clínicas que ya reciben al mundo",
    items: [
      {
        quote:
          "Pasamos de responder mensajes a medianoche a tener la agenda llena de pacientes extranjeros.",
        name: "Dirección",
        role: "Clínica dental · Gangnam, Seúl",
      },
      {
        quote:
          "El chatbot atiende en español e inglés mejor y más rápido que nosotros. Nos cambió el flujo.",
        name: "Gerencia",
        role: "Clínica estética · Seúl",
      },
    ],
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿En qué idiomas atiende?",
        a: "Español, inglés y coreano, con detección automática del idioma del paciente.",
      },
      {
        q: "¿Cuánto tarda la implementación?",
        a: "Normalmente 2 semanas: presencia digital y chatbot configurados y probados.",
      },
      {
        q: "¿Se integra con mi sistema de turnos?",
        a: "Sí. Conectamos con tu calendario o usás el nuestro; vos elegís.",
      },
      {
        q: "¿Qué pasa con los datos de los pacientes?",
        a: "Se manejan de forma segura y conforme a la normativa local de datos de salud.",
      },
    ],
  },
  cta: {
    title: "¿Listos para recibir pacientes del mundo?",
    sub: "Escribinos y coordinamos una demo a tu medida: te mostramos tu clínica funcionando en tres idiomas.",
    btn: "Agendá una demo",
  },
  form: {
    name: "Nombre",
    clinic: "Clínica",
    email: "Email",
    message: "Contanos qué necesitás (opcional)",
    submit: "Solicitar una demo",
    sending: "Enviando…",
    success: "¡Gracias! Te contactamos por email muy pronto.",
    error: "No se pudo enviar. Probá de nuevo o escribinos por email.",
    subject: "Nueva solicitud de demo — Mediseo",
  },
  footer: {
    tag: "Pacientes globales, cuidado coreano.",
  },
  chatDemo: CHAT_SCRIPT,
};

export default es;
