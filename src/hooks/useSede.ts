import { atom, useAtom } from "jotai";
import { SEDES } from "../types";

const sedeAtom = atom<SEDES | undefined>(undefined);

export const useSede = () => {
  const [sede, setSede] = useAtom(sedeAtom);

  const changeSede = (newSede: SEDES) => {
    setSede(newSede);
  };

  return { sede, changeSede };
};
