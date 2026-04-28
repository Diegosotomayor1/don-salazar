import { SEDES } from "@/types";
import { LANGUAGE } from "@/types/dictionary";

const languageParamMap: Record<string, LANGUAGE> = {
  es: LANGUAGE.ES,
  en: LANGUAGE.EN,
};

const localParamMap: Record<string, SEDES> = {
  "san-isidro": SEDES.SAN_ISIDRO,
  "la-fontana": SEDES.FONTANA,
  miraflores: SEDES.MIRAFLORES,
  salaverry: SEDES.SALAVERRY,
  "san-miguel": SEDES.SAN_MIGUEL,
  pacifico: SEDES.UNIVERSIDAD_DEL_PACIFICO,
  jockey: SEDES.JOCKEY_PLAZA,
  higuereta: SEDES.HIGUERETA,
};

export const getLanguageFromParam = (
  languageParam?: string | null
): LANGUAGE | undefined => {
  if (!languageParam) {
    return undefined;
  }

  return languageParamMap[languageParam.toLowerCase()];
};

export const getSedeFromLocalParam = (
  localParam?: string | null
): SEDES | undefined => {
  if (!localParam) {
    return undefined;
  }

  return localParamMap[localParam.toLowerCase()];
};

export const getCatalogSearchSuffix = (search: string): string => {
  return search ? `?${search}` : "";
};

export const getCurrentCatalogSearchSuffix = (): string => {
  if (typeof window === "undefined") {
    return "";
  }

  return getCatalogSearchSuffix(window.location.search.replace(/^\?/, ""));
};

export const getCurrentCatalogQueryValues = (): {
  language?: LANGUAGE;
  sede?: SEDES;
} => {
  if (typeof window === "undefined") {
    return {};
  }

  const searchParams = new URLSearchParams(window.location.search);

  return {
    language: getLanguageFromParam(searchParams.get("language")),
    sede: getSedeFromLocalParam(searchParams.get("local")),
  };
};
