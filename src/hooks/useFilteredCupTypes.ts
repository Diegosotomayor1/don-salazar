import { useMemo } from "react";
import { cupTypes, brewingMethods } from "../constants";

export const useFilteredCupTypes = (brewingMethodId: string | null) => {
  const filteredCupTypes = useMemo(() => {
    // If no brewing method selected, return all cup types
    if (!brewingMethodId) {
      return cupTypes;
    }

    // Find the selected brewing method
    const selectedMethod = brewingMethods.find(
      (method) => method.id === brewingMethodId
    );

    // If method not found, return all cup types
    if (!selectedMethod) {
      return cupTypes;
    }

    // If the method is immersion, filter out copa_hielo (Alalau)
    if (selectedMethod.type === "inmersion") {
      return cupTypes.filter((cup) => cup.id !== "copa_hielo");
    }

    // For filtration methods, return all cup types
    return cupTypes;
  }, [brewingMethodId]);

  return filteredCupTypes;
};
