"use client";

import { LANGUAGE } from "@/types/dictionary";
import { useLanguage } from "@/hooks/useLanguage";

export const LanguageToggle = () => {
  const { language, changeLanguage } = useLanguage();

  if (!language) return null; // Don't show if language not set

  return (
    <button
      onClick={() =>
        changeLanguage(language === LANGUAGE.ES ? LANGUAGE.EN : LANGUAGE.ES)
      }
      className="px-3 py-1 bg-accent/10 hover:bg-accent/20 text-accent border border-accent/20 rounded-lg text-sm transition-colors"
    >
      {language === LANGUAGE.ES ? "🇪🇸 ES" : "🇺🇸 EN"}
    </button>
  );
};
