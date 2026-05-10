import { en } from "./en";
import { tr } from "./tr";

export const translations = {
  en,
  tr,
};

export type Language = "en" | "tr";
export type TranslationType = typeof en;

export function getTranslation(lang: Language): TranslationType {
  return translations[lang] || translations.en;
}
