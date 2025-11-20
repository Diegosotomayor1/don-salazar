import {
  brewingMethods,
  coffeeTypes,
  cupTypes,
  piquantPhrases,
} from "@/constants";
import { UserData } from "@/types";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function SummaryStep({
  userData,
  goBack,
  goToQuiz,
}: {
  userData: UserData;
  goBack: () => void;
  goToQuiz?: () => void;
}) {
  // Si viene del quiz, usar la información del finalRecommendation
  const coffeeTypeId =
    userData.finalRecommendation?.grano.id || userData.coffeeType;
  const brewingMethodId =
    userData.finalRecommendation?.metodo.id || userData.brewingMethod;
  const cupTypeId = userData.finalRecommendation?.taza.id || userData.cupType;

  const selectedCoffeeType = coffeeTypes.find((c) => c.id === coffeeTypeId);
  const selectedBrewingMethod = brewingMethods.find(
    (m) => m.id === brewingMethodId
  );
  const selectedCupType = cupTypes.find((c) => c.id === cupTypeId);

  // Obtener la frase pícara (siempre se muestra, independiente de la selección)
  const piquantPhrase =
    (piquantPhrases as Record<string, Record<string, Record<string, string>>>)[
      coffeeTypeId
    ]?.[brewingMethodId]?.[cupTypeId] ||
    "Una experiencia única y personalizada solo para ti.";

  // Calcular precios
  const basePrice = selectedCoffeeType?.price || 0;
  const extraCostBrewing = selectedBrewingMethod?.extraCost || 0;
  const extraCostCup = selectedCupType?.extraCost || 0;
  const extraCost = extraCostBrewing + extraCostCup;
  const totalPrice = basePrice + extraCost;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
    >
      <Card className="luxury-card">
        <CardHeader className="text-center">
          <CardTitle className="text-xl text-foreground">
            <p>Esta es la experiencia</p>{" "}
            <p className="text-2xl font-bold capitalize"> {userData.name} </p>{" "}
            <p className="text-sm"> by Don Salazar </p>
          </CardTitle>
          <CardDescription className="border border-accent bg-accent/10 text-accent px-4 py-0.5 w-fit rounded-xl mx-auto text-xs font-semibold">
            👇 Muestra al barista esto 👇
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex w-full relative h-40">
            <motion.div
              initial={{ rotate: 12, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
              className="absolute top-0 left-0 z-0"
            >
              <motion.div>
                <Image
                  src={selectedCoffeeType?.img || ""}
                  alt={selectedCoffeeType?.name || ""}
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
                {selectedCoffeeType?.price && (
                  <motion.div className="absolute top-0 left-0 z-10 bg-primary font-bold rounded-xl p-1 py-0 text-black">
                    <p className="text-sm">S/ {selectedCoffeeType.price}</p>
                  </motion.div>
                )}
                <p className="text-xs font-bold bg-primary rounded-xl px-1.5 py-0.5 text-black w-fit absolute bottom-0 left-0 z-10">
                  {selectedCoffeeType?.name}
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ rotate: 12, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
              className="absolute top-0 left-1/2 -translate-x-1/2 z-10"
            >
              <motion.div>
                <Image
                  src={selectedBrewingMethod?.img || ""}
                  alt={selectedBrewingMethod?.name || ""}
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
                {!!(
                  selectedBrewingMethod?.extraCost &&
                  selectedBrewingMethod?.extraCost > 0
                ) && (
                  <motion.div className="absolute top-0 left-0 z-10 bg-primary font-bold rounded-xl p-1 py-0 text-black">
                    <p className="text-sm">
                      + S/ {selectedBrewingMethod?.extraCost}
                    </p>
                  </motion.div>
                )}
                <p className="absolute bottom-0 right-1/2 translate-x-1/2 text-xs font-bold bg-primary rounded-xl px-1.5 py-0.5 text-black w-fit z-10">
                  {selectedBrewingMethod?.name}
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ rotate: 12, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8, type: "spring" }}
              className="absolute top-0 right-0 z-0"
            >
              <motion.div>
                <Image
                  src={selectedCupType?.img || ""}
                  alt={selectedCupType?.name || ""}
                  width={150}
                  height={150}
                  className="rounded-lg"
                />

                {selectedCupType?.extraCost &&
                  selectedCupType?.extraCost > 0 && (
                    <motion.div className="absolute top-0 left-0 z-10 bg-primary font-bold rounded-xl p-1 py-0 text-black">
                      <p className="text-sm">
                        + S/ {selectedCupType.extraCost}
                      </p>
                    </motion.div>
                  )}
                <p className="text-xs font-bold bg-primary rounded-xl px-1.5 py-0.5 text-black w-fit absolute bottom-0 right-0 z-10">
                  {selectedCupType?.name}
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Precio Total */}
          <div className="px-4 py-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl border-2 border-primary/30">
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-foreground text-lg">Total:</h4>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">
                  S/ {totalPrice}
                </p>
                {extraCost > 0 && (
                  <p className="text-xs text-muted-foreground">
                    (Base: S/ {basePrice}
                    {extraCostBrewing > 0 &&
                      ` + Método: S/ ${extraCostBrewing}`}
                    {extraCostCup > 0 && ` + Taza: S/ ${extraCostCup}`})
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Frase Pícara (siempre se muestra) */}
          <div className="px-4 py-2 bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl border border-accent/20">
            <p className="text-foreground/90 italic leading-relaxed text-sm">
              &quot;💫 {piquantPhrase}&quot;
            </p>
          </div>

          <Button
            onClick={userData.finalRecommendation ? goToQuiz || goBack : goBack}
            variant="outline"
            className="w-full rounded-2xl gold-border bg-transparent text-foreground hover:bg-primary/10 hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {userData.finalRecommendation
              ? "Volver al cuestionario"
              : "Cambiar selección"}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
