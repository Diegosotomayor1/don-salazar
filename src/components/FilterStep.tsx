import { filterOptions } from "@/constants";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
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

export function FilterStep({
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
  const handleFilterSelect = (filterId: string) => {
    setUserData({ ...userData, filterType: filterId });
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
            ¿Qué método de filtrado prefieres?
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Elige tu método de preparación favorito
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filterOptions.map((filter) => (
              <motion.div
                key={filter.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  className={`cursor-pointer transition-all duration-300 rounded-2xl h-full ${
                    userData.filterType === filter.id
                      ? "gold-border bg-primary/5"
                      : "border-2 border-border/30 hover:border-primary/50 bg-card/50"
                  }`}
                  onClick={() => handleFilterSelect(filter.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <span className="text-3xl">{filter.icon}</span>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {filter.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {filter.description}
                        </p>
                      </div>
                      {userData.filterType === filter.id && (
                        <CheckCircle className="h-6 w-6 text-primary" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              onClick={goBack}
              variant="outline"
              className="flex-1 rounded-2xl gold-border bg-transparent text-foreground hover:bg-primary/10 hover:text-foreground cursor-pointer"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver
            </Button>

            <Button
              onClick={nextStep}
              disabled={!userData.filterType}
              className="luxury-button flex-1 cursor-pointer"
            >
              Elegir tamaño
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
