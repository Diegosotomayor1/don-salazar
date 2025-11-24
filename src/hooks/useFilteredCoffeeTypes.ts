import { useMemo } from "react";
import { useSede } from "./useSede";
import { getTypeCardFromSede } from "@/utils";
import { coffeeTypes } from "../constants";

export const useFilteredCoffeeTypes = () => {
  const { sede } = useSede();

  const filteredCoffeeTypes = useMemo(() => {
    if (!sede) {
      // If no sede selected, return all coffee types
      return coffeeTypes;
    }

    const typeCard = getTypeCardFromSede(sede);

    if (!typeCard) {
      // If no type card found, return all coffee types
      return coffeeTypes;
    }

    // Filter based on type card
    switch (typeCard) {
      case "LUXURY":
        return coffeeTypes.filter(
          (coffee) =>
            coffee.id === "el_balanceado" ||
            coffee.id === "el_obata" ||
            coffee.id === "el_tupi"
        );

      case "PREMIUM":
      case "PREMIUM_FONTANA":
        return coffeeTypes.filter((coffee) => coffee.id === "el_obata");

      default:
        return coffeeTypes;
    }
  }, [sede]);

  return filteredCoffeeTypes;
};
