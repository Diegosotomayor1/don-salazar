import { atom, useAtom } from "jotai";
import { useCallback } from "react";
import { SEDES } from "../types";
import { getSedeFromLocalParam } from "@/utils/catalogQueryParams";

const getInitialSede = (): SEDES | undefined => {
  if (typeof window === "undefined") {
    return undefined;
  }

  return getSedeFromLocalParam(
    new URLSearchParams(window.location.search).get("local")
  );
};

const sedeAtom = atom<SEDES | undefined>(getInitialSede());

export const useSede = () => {
  const [sede, setSede] = useAtom(sedeAtom);

  const changeSede = useCallback(
    (newSede: SEDES) => {
      setSede(newSede);
    },
    [setSede]
  );

  return { sede, changeSede };
};
