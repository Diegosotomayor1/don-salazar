import { motion } from "framer-motion";
import { ArrowLeft, User, ChefHat, DollarSign } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { UserData } from "@/types";
import { Dispatch, SetStateAction } from "react";

export function PreparationStep({
  userData,
  setUserData,
  nextStep,
  goBack,
}: {
  userData: UserData;
  setUserData: Dispatch<SetStateAction<UserData>>;
  nextStep: () => void;
  goBack: () => void;
}) {
  const handlePreparationSelect = (preparationType: "barista" | "self") => {
    setUserData({ ...userData, preparationType });
    nextStep();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
    >
      <Card className="luxury-card">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-foreground">
            ¿Cómo prefieres tu café, {userData.name}?
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Elige quién preparará tu experiencia perfecta
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Opción Barista */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <div
              onClick={() => handlePreparationSelect("barista")}
              className="luxury-button w-full p-2 text-lg cursor-pointer"
            >
              <div className="flex items-center justify-between w-full p-2">
                <div className="flex items-center">
                  <ChefHat className="mr-3 h-6 w-6" />
                  <div className="text-left">
                    <div className="font-semibold text-base">
                      Que lo haga el barista
                    </div>
                    <div className="text-sm opacity-90">
                      Preparación profesional
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-sm">Precio normal</div>
              </div>
            </div>
          </motion.div>

          {/* Opción Hacerlo uno mismo */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <div
              onClick={() => handlePreparationSelect("self")}
              className="w-full p-2 text-lg rounded-2xl gold-border bg-transparent text-foreground hover:bg-primary/10 hover:text-foreground transition-all duration-300"
            >
              <div className="flex items-center justify-between w-full p-2">
                <div className="flex items-center">
                  <User className="mr-3 h-6 w-6" />
                  <div className="text-left">
                    <div className="font-semibold text-base">
                      Hacerlo yo mismo
                    </div>
                    <div className="text-sm opacity-70">
                      Experiencia personalizada
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-sm text-primary">
                  + Costo adicional
                </div>
              </div>
            </div>
          </motion.div>

          <Button
            onClick={goBack}
            variant="ghost"
            className="w-full mt-4 text-muted-foreground hover:text-foreground hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
