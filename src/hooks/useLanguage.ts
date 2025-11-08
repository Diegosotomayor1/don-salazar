import { atom, useAtom } from "jotai";
import { LANGUAGE } from "../types/dictionary";

const languageAtom = atom<LANGUAGE | undefined>(undefined);

export const useLanguage = () => {
  const [language, setLanguage] = useAtom(languageAtom);

  const changeLanguage = (newLanguage: LANGUAGE) => {
    setLanguage(newLanguage);
  };

  return { language, changeLanguage };
};
