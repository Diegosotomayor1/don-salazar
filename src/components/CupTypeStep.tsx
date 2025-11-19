import { motion } from "framer-motion";
import { ArrowLeft, Coffee, Plus } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { UserData } from "@/types";
import { cupTypes } from "@/constants";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

export function CupTypeStep({
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
  const handleCupTypeSelect = (cupTypeId: string) => {
    setUserData({ ...userData, cupType: cupTypeId });
    nextStep();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
    >
      <div className="p-2 pt-0">
        <Button
          onClick={goBack}
          variant="ghost"
          className="w-full text-muted-foreground hover:text-foreground hover:bg-primary/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver
        </Button>
      </div>
      <Card className="luxury-card">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Coffee className="h-6 w-6 text-primary" />
            <CardTitle className="text-2xl text-foreground">
              Tipo de taza
            </CardTitle>
          </div>
          <CardDescription className="text-muted-foreground">
            Selecciona cómo quieres disfrutar tu café
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-2">
          {cupTypes.map((cup, index) => (
            <motion.div
              key={cup.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                onClick={() => handleCupTypeSelect(cup.id)}
                className="relative w-full p-4 rounded-2xl border border-primary/50 bg-transparent text-foreground hover:bg-primary/10 hover:text-foreground transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-center flex-col gap-4 text-center">
                  {!cup.img && <div className="text-3xl">{cup.icon}</div>}
                  {cup.img && (
                    <motion.div
                      animate={{ rotate: [0, 12, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5,
                      }}
                      className="relative flex items-center justify-center"
                    >
                      <Image
                        src={cup.img}
                        alt={cup.name}
                        width={80}
                        height={80}
                      />
                      <div className="absolute inset-0 bg-accent/30 blur-lg rounded-lg -z-10 animate-[pulse_2s_ease-in-out_infinite] scale-70"></div>
                    </motion.div>
                  )}

                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      {cup.name}
                    </h3>
                    {/* <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p> */}
                  </div>
                  {cup?.extraCost && cup.extraCost > 0 && (
                    <div className="absolute top-2 right-2 flex items-center text-xs text-black font-medium z-10 bg-accent rounded-full px-1.5 py-0.5">
                      <Plus className="mr-0.5 h-2.5 w-2.5" /> S/ {cup.extraCost}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}
