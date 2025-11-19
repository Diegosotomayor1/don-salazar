import { motion } from "framer-motion";
import { ArrowLeft, Coffee } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { UserData } from "@/types";
import { coffeeTypes } from "@/constants";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

export function CoffeeTypeStep({
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
  const handleCoffeeTypeSelect = (coffeeTypeId: string) => {
    setUserData({ ...userData, coffeeType: coffeeTypeId });
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
              Elige tu tipo de café
            </CardTitle>
          </div>
          <CardDescription className="text-muted-foreground">
            Selecciona el grano que más te llame la atención
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-3 gap-2 px-4 md:px-6">
          {coffeeTypes.map((coffee, index) => (
            <motion.div
              key={coffee.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                onClick={() => handleCoffeeTypeSelect(coffee.id)}
                className="w-full h-full px-2 py-4 md:p-5  rounded-2xl border border-primary/50 bg-transparent text-foreground hover:bg-primary/10 hover:text-foreground transition-all duration-300 cursor-pointer relative"
              >
                <div className="flex flex-col items-center gap-4">
                  <motion.div
                    animate={{ rotate: [0, 12, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                    className="relative flex flex-col items-center justify-center"
                  >
                    <Image
                      src={coffee.img}
                      alt={coffee.name}
                      width={80}
                      height={80}
                    />
                    <div className="absolute inset-0 bg-accent/30 blur-lg rounded-lg -z-10 animate-[pulse_2s_ease-in-out_infinite] scale-70"></div>
                  </motion.div>
                  {/*  <div className="text-3xl">{coffee.icon}</div> */}
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-md text-foreground mb-2 text-center">
                      {coffee.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-center">
                      {/* {coffee.description} */}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}
