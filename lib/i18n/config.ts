export const LANGS = ["es", "en", "kr"] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = "kr";

// <html lang="..."> — "kr" no es un código válido; el idioma coreano es "ko".
export const HTML_LANG: Record<Lang, string> = {
  es: "es",
  en: "en",
  kr: "ko",
};

export function isLang(v: string): v is Lang {
  return (LANGS as readonly string[]).includes(v);
}
