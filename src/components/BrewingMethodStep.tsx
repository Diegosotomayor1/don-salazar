import { motion } from "framer-motion";
import { ArrowLeft, Filter, Droplets, Zap, Plus } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { UserData } from "@/types";
import { brewingMethods } from "@/constants";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

export function BrewingMethodStep({
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
  const handleMethodSelect = (methodId: string) => {
    setUserData({ ...userData, brewingMethod: methodId });
    nextStep();
  };

  const filtradoMethods = brewingMethods.filter(
    (method) => method.type === "filtrado"
  );
  const inmersionMethods = brewingMethods.filter(
    (method) => method.type === "inmersion"
  );

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
          className="w-full text-muted-foreground hover:text-foreground hover:bg-primary/10 border border-primary/50"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver
        </Button>
      </div>
      <Card className="luxury-card">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-foreground">
            Método de preparación
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Elige entre filtrado o inmersión
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 px-4 md:px-6">
          {/* Métodos de Filtrado */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">
                Filtrado
              </h3>
              <div className="flex items-center gap-2 animate-pulse ml-2 relative">
                <Zap className="h-4 w-4 text-primary " />
                <div className="absolute right-0 -top-[12px] text-[9px] italic">
                  Intensidad
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 border-2 bg-primary rounded-full" />
                  <div className="w-3 h-3 border-2 bg-primary rounded-full" />
                  <div className="w-3 h-3 border-2 bg-primary rounded-full" />
                  <div className="relative w-3 h-3 border-2 border-primary rounded-full overflow-hidden">
                    <div
                      className="absolute inset-0 bg-primary rounded-full"
                      style={{
                        clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
                      }}
                    ></div>
                  </div>
                  <div className="w-3 h-3 border-2 rounded-full" />
                  <div className="w-3 h-3 border-2 rounded-full" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 px-0">
              {filtradoMethods.map((method, index) => (
                <motion.div
                  key={method.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    onClick={() => handleMethodSelect(method.id)}
                    className="relative h-full w-full px-2 py-4 md:p-5 rounded-2xl border border-primary/50 bg-transparent text-foreground hover:bg-primary/10 hover:text-foreground transition-all duration-300 cursor-pointer"
                  >
                    <div className="relative h-full flex flex-col items-center text-center gap-4">
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
                          src={method.img}
                          alt={method.name}
                          width={80}
                          height={80}
                        />
                        <div className="absolute inset-0 bg-accent/30 blur-lg rounded-lg -z-10 animate-[pulse_2s_ease-in-out_infinite] scale-70"></div>
                      </motion.div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-base text-foreground">
                          {method.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {method.description}
                        </p>
                      </div>
                      {method.extraCost > 0 && (
                        <div className="absolute top-3 right-3 flex items-center text-sm text-primary font-medium z-10 bg-accent/20 rounded-full px-2 py-1">
                          +S/ {method.extraCost}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Métodos de Inmersión */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Droplets className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">
                Inmersión
              </h3>
              <div className="flex items-center gap-2 animate-pulse ml-2 relative">
                <Zap className="h-4 w-4 text-primary " />
                <div className="absolute right-0 -top-[12px] text-[9px] italic">
                  Intensidad
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 border-2 bg-primary rounded-full" />
                  <div className="w-3 h-3 border-2 bg-primary rounded-full" />
                  <div className="w-3 h-3 border-2 bg-primary rounded-full" />
                  <div className="w-3 h-3 border-2 bg-primary rounded-full" />
                  <div className="w-3 h-3 border-2 bg-primary rounded-full" />
                  <div className="w-3 h-3 border-2 rounded-full" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 px-0">
              {inmersionMethods.map((method, index) => (
                <motion.div
                  key={method.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (filtradoMethods.length + index) * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    onClick={() => handleMethodSelect(method.id)}
                    className="relative h-full w-full px-2 py-4 md:p-5 rounded-2xl border border-primary/50 bg-transparent text-foreground hover:bg-primary/10 hover:text-foreground transition-all duration-300 cursor-pointer"
                  >
                    <div className="relative h-full flex flex-col items-center text-center gap-4">
                      <motion.div
                        animate={{ rotate: [0, 12, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="relative flex items-center justify-center"
                      >
                        <Image
                          src={method.img}
                          alt={method.name}
                          width={80}
                          height={80}
                        />
                        <div className="absolute inset-0 bg-accent/30 blur-lg rounded-lg -z-10 animate-[pulse_2s_ease-in-out_infinite] scale-70"></div>
                      </motion.div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-base text-foreground">
                          {method.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {method.description}
                        </p>
                      </div>
                      {method.extraCost > 0 && (
                        <div className="absolute -top-5 -right-4 flex items-center text-xs text-black font-medium z-10 bg-accent rounded-full px-1.5 py-0.5">
                          <Plus className="mr-0.5 h-2.5 w-2.5" /> S/{" "}
                          {method.extraCost}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
