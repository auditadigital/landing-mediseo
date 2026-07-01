export interface Dictionary {
  meta: { title: string; description: string };
  nav: { how: string; benefits: string; ai: string; pricing: string; cta: string };
  hero: {
    greetings: string[];
    h1: string;
    sub: string;
    cta1: string;
    cta2: string;
    ctaDemo: string;
    trust: string;
    chatStatus: string;
    chatInputPh: string;
  };
  stats: { v: string; l: string }[];
  how: { title: string; sub: string; steps: { t: string; d: string }[] };
  why: { title: string; sub: string; items: { t: string; d: string }[] };
  ai: { eyebrow: string; title: string; sub: string; features: string[] };
  pricing: {
    title: string;
    sub: string;
    popular: string;
    note: string;
    plans: { name: string; price: string; per: string; features: string[]; cta: string }[];
  };
  testimonials: {
    title: string;
    items: { quote: string; name: string; role: string }[];
  };
  faq: { title: string; items: { q: string; a: string }[] };
  cta: { title: string; sub: string; btn: string };
  footer: { tag: string };
  chatDemo: ChatStep[];
}

export type ChatStep =
  | { who: "p" | "b"; t: string; d: number }
  | { who: "typing" | "restart"; d: number };
