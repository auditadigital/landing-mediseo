import type { Dictionary } from "../types";
import { CHAT_SCRIPT } from "./chat-script";

const en: Dictionary = {
  meta: {
    title: "Mediseo — Global patients, Korean care",
    description:
      "Multilingual digital presence + an AI that answers, books and handles intake for international patients, for Korean aesthetic and dental clinics.",
  },
  nav: {
    how: "How it works",
    benefits: "Benefits",
    ai: "AI",
    pricing: "Pricing",
    cta: "Book a demo",
  },
  hero: {
    greetings: ["Hola", "Hello", "안녕하세요"],
    h1: "International patients, ready for your clinic.",
    sub: "Mediseo pairs your multilingual digital presence —web and Instagram— with an AI that answers, books and handles intake for English- and Spanish-speaking patients. Your team just focuses on care.",
    cta1: "Book a demo",
    cta2: "See how it works",
    ctaDemo: "See live demo",
    trust: "No lock-in · Live in 2 weeks · Support in 3 languages",
    chatStatus: "Replies instantly · 24/7",
    chatInputPh: "Type your message…",
  },
  stats: [
    { v: "3", l: "languages · ES · EN · KR" },
    { v: "24/7", l: "automated replies" },
    { v: "2 wks", l: "to launch" },
    { v: "1", l: "dashboard for everything" },
  ],
  how: {
    title: "Three steps. Zero friction.",
    sub: "We plug in without adding work to your team.",
    steps: [
      {
        t: "We connect your clinic",
        d: "We build your multilingual presence: web and Instagram ready to win global patients.",
      },
      {
        t: "The AI answers and books",
        d: "The chatbot answers questions, books appointments and completes intake —in their language, 24/7.",
      },
      {
        t: "You get ready patients",
        d: "They arrive informed, confirmed and pre-qualified. Your team just treats.",
      },
    ],
  },
  why: {
    title: "Why clinics choose Mediseo",
    sub: "More international patients, without hiring or hassle.",
    items: [
      {
        t: "Multilingual presence",
        d: "Web and Instagram in Spanish, English and Korean, optimized to convert.",
      },
      {
        t: "24/7 AI chatbot",
        d: "Replies instantly in three languages, even overnight.",
      },
      {
        t: "Automated booking & intake",
        d: "Books appointments and collects medical history with no effort from you.",
      },
      {
        t: "Pre-qualified patients",
        d: "They arrive informed and with clear expectations.",
      },
      {
        t: "Trust & professionalism",
        d: "A verified profile and polished communication that reassures.",
      },
      {
        t: "Zero extra load",
        d: "Your team adds no tasks —we run acquisition for you.",
      },
    ],
  },
  ai: {
    eyebrow: "The assistant that never sleeps",
    title: "An AI that speaks every patient's language",
    sub: "It detects the language, replies, books and hands off to a person when needed.",
    features: [
      "Detects and replies in ES, EN and Korean",
      "Books appointments and sends reminders",
      "Completes intake and medical history",
      "Hands off to your team in complex cases",
    ],
  },
  pricing: {
    title: "Plans for every clinic",
    sub: "Start simple and scale when demand arrives.",
    popular: "Most popular",
    note: "Sample pricing · tailored to your clinic.",
    plans: [
      {
        name: "Essential",
        price: "₩390,000",
        per: "/mo",
        features: [
          "Multilingual website",
          "AI chatbot · 2 languages",
          "Automated booking",
        ],
        cta: "Get started",
      },
      {
        name: "Growth",
        price: "₩790,000",
        per: "/mo",
        features: [
          "Everything in Essential",
          "3 languages (ES·EN·KR)",
          "Managed Instagram",
          "Automated intake",
        ],
        cta: "Book a demo",
      },
      {
        name: "Premium",
        price: "Custom",
        per: "",
        features: [
          "Everything in Growth",
          "Dedicated campaigns",
          "Priority support",
          "Custom integrations",
        ],
        cta: "Talk to sales",
      },
    ],
  },
  testimonials: {
    title: "Clinics already welcoming the world",
    items: [
      {
        quote:
          "We went from answering messages at midnight to a calendar full of international patients.",
        name: "Director",
        role: "Dental clinic · Gangnam, Seoul",
      },
      {
        quote:
          "The chatbot handles Spanish and English faster and better than we did. It changed our workflow.",
        name: "Manager",
        role: "Aesthetic clinic · Seoul",
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Which languages does it support?",
        a: "Spanish, English and Korean, with automatic detection of the patient's language.",
      },
      {
        q: "How long does setup take?",
        a: "Usually 2 weeks: digital presence and chatbot configured and tested.",
      },
      {
        q: "Does it integrate with my booking system?",
        a: "Yes. We connect to your calendar or you use ours —your choice.",
      },
      {
        q: "What about patient data?",
        a: "It's handled securely and in line with local health-data regulations.",
      },
    ],
  },
  cta: {
    title: "Ready to welcome patients from around the world?",
    sub: "Book a 20-minute demo and we'll show your clinic running in three languages.",
    btn: "Book a demo",
  },
  form: {
    name: "Name",
    clinic: "Clinic",
    email: "Email",
    message: "Tell us what you need (optional)",
    submit: "Request a demo",
    sending: "Sending…",
    success: "Thanks! We'll reach out by email very soon.",
    error: "Couldn't send. Please try again or email us.",
    subject: "New demo request — Mediseo",
  },
  footer: {
    tag: "Global patients, Korean care.",
  },
  chatDemo: CHAT_SCRIPT,
};

export default en;
