import type { Dictionary } from "./types";
import { Lang } from "./config";
import es from "./dictionaries/es";
import en from "./dictionaries/en";
import kr from "./dictionaries/kr";

const dictionaries: Record<Lang, Dictionary> = { es, en, kr };

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang];
}

export type { Dictionary };
