import type { ChatStep } from "../types";

// Demo del hero: guión fijo multilingüe (EN/ES), igual en las 3 versiones de UI.
export const CHAT_SCRIPT: ChatStep[] = [
  { who: "p", t: "Hi! Do you do dental implants? 🦷", d: 1500 },
  { who: "typing", d: 1100 },
  { who: "b", t: "Yes — I can help in English, Español or 한국어. 😊", d: 2000 },
  { who: "p", t: "¿Tienen turno la próxima semana?", d: 1600 },
  { who: "typing", d: 1100 },
  { who: "b", t: "¡Claro! Te muestro horarios y reservo por vos. 📅", d: 2600 },
  { who: "restart", d: 1000 },
];
