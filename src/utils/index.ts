import { SEDES, TYPE_CARD } from "@/types";

export const getTypeCardFromSede = (sede: SEDES): TYPE_CARD | undefined => {
  const sedesMap: Record<TYPE_CARD, SEDES[]> = {
    LUXURY: [SEDES.SAN_MIGUEL, SEDES.MIRAFLORES, SEDES.SAN_ISIDRO],
    PREMIUM: [
      SEDES.HIGUERETA,
      SEDES.JOCKEY_PLAZA,
      SEDES.SALAVERRY,
      SEDES.PUNTA_MAR,
      SEDES.UNIVERSIDAD_DEL_PACIFICO,
    ],
    PREMIUM_FONTANA: [SEDES.FONTANA],
  };

  for (const [typeCard, sedes] of Object.entries(sedesMap)) {
    if (sedes.includes(sede)) {
      return typeCard as TYPE_CARD;
    }
  }
  return undefined;
};
