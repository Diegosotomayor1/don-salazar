import { atom, useAtom } from "jotai";
import { useCallback } from "react";
import { LANGUAGE } from "../types/dictionary";
import { getLanguageFromParam } from "@/utils/catalogQueryParams";

const getInitialLanguage = (): LANGUAGE | undefined => {
  if (typeof window === "undefined") {
    return undefined;
  }

  return getLanguageFromParam(
    new URLSearchParams(window.location.search).get("language")
  );
};

const languageAtom = atom<LANGUAGE | undefined>(getInitialLanguage());

export const useLanguage = () => {
  const [language, setLanguage] = useAtom(languageAtom);

  const changeLanguage = useCallback(
    (newLanguage: LANGUAGE) => {
      setLanguage(newLanguage);
    },
    [setLanguage]
  );

  return { language, changeLanguage };
};
