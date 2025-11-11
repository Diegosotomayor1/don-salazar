import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ArrowLeft, Coffee } from "lucide-react";
import { Button } from "./ui/button";
import { UserData } from "@/types";
import { coffeeTypes, brewingMethods, cupTypes } from "@/constants";

export function SummaryStep({
  userData,
  goBack,
}: {
  userData: UserData;
  goBack: () => void;
}) {
  const selectedCoffeeType = coffeeTypes.find(
    (c) => c.id === userData.coffeeType
  );
  const selectedBrewingMethod = brewingMethods.find(
    (m) => m.id === userData.brewingMethod
  );
  const selectedCupType = cupTypes.find((c) => c.id === userData.cupType);

  // Calcular precios
  const basePrice = selectedCoffeeType?.price || 0;
  const extraCost = selectedBrewingMethod?.extraCost || 0;
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
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <div className="p-4 rounded-full gold-border bg-primary/10 w-fit mx-auto mb-4">
              <Coffee className="h-16 w-16 text-primary" />
            </div>
          </motion.div>
          <CardTitle className="text-xl text-foreground">
            <p>Esta es la experiencia</p>{" "}
            <p className="text-2xl font-bold capitalize"> {userData.name} </p>{" "}
            <p> by Don Salazar </p>
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Tu café perfecto según tus preferencias
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="gold-border bg-card/30 p-6 rounded-2xl">
            <h3 className="font-semibold text-foreground mb-4">
              Pedido para <span className="capitalize">{userData.name}</span>:
            </h3>
            <div className="space-y-4">
              {/* Tipo de Café */}
              <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-xl">
                <span className="text-2xl">{selectedCoffeeType?.icon}</span>
                <div className="flex-1">
                  <p className="font-medium  text-muted-foreground">
                    {selectedCoffeeType?.name}
                  </p>
                  <p className="text-sm text-foreground">Tipo de Café:</p>
                </div>
                <div className="text-primary font-medium text-sm">
                  S/ {basePrice}
                </div>
              </div>

              {/* Método de Preparación */}
              <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-xl">
                <span className="text-2xl">{selectedBrewingMethod?.icon}</span>
                <div className="flex-1">
                  <p className="font-medium text-foreground">
                    {selectedBrewingMethod?.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {selectedBrewingMethod?.type}
                  </p>
                  <p className="text-xs text-primary font-medium capitalize">
                    Método de Preparación
                  </p>
                </div>
                {extraCost > 0 && (
                  <div className="text-primary font-medium text-sm">
                    +S/ {extraCost}
                  </div>
                )}
              </div>

              {/* Tipo de Taza */}
              <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-xl">
                <span className="text-2xl">{selectedCupType?.icon}</span>
                <div className="flex-1">
                  <p className="font-medium text-foreground">
                    {selectedCupType?.name}
                  </p>
                  <p className="text-sm text-muted-foreground">Tipo de Taza</p>
                </div>
              </div>

              {/* Tipo de Preparación */}
              <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-xl">
                <span className="text-2xl">
                  {userData.preparationType === "barista" ? "👨‍🍳" : "👤"}
                </span>
                <div className="flex-1">
                  <p className="font-medium text-foreground">
                    {userData.preparationType === "barista"
                      ? "Preparado por el barista"
                      : "Hazlo tú mismo"}
                  </p>
                  <p className="text-sm text-muted-foreground">Preparación</p>
                </div>
                {userData.preparationType === "self" && (
                  <div className="text-primary font-medium text-sm">
                    + Costo adicional
                  </div>
                )}
              </div>

              {/* Resumen Final */}
              <div className="mt-4 p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">
                  ✨ Tu pedido personalizado:
                </h4>
                <p className="text-foreground">
                  <strong>{selectedCoffeeType?.name}</strong> preparado con{" "}
                  <strong>{selectedBrewingMethod?.name}</strong> servido en{" "}
                  <strong>{selectedCupType?.name}</strong>
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {selectedCoffeeType?.description}
                </p>
                {extraCost > 0 && (
                  <p className="text-sm text-primary font-medium mt-2">
                    Costo adicional por método especial: +S/ {extraCost}
                  </p>
                )}
              </div>

              {/* Total */}
              <div className="mt-4 p-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl border-2 border-primary/30">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-foreground text-lg">
                    💰 Total:
                  </h4>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">
                      S/ {totalPrice}
                    </p>
                    {extraCost > 0 && (
                      <p className="text-xs text-muted-foreground">
                        (Base: S/ {basePrice} + Extra: S/ {extraCost})
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Button
            onClick={goBack}
            variant="outline"
            className="w-full rounded-2xl gold-border bg-transparent text-foreground hover:bg-primary/10 hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Cambiar selección
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
