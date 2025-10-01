import { motion } from "framer-motion";
import { ArrowLeft, Filter, Droplets, DollarSign } from "lucide-react";
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
      <Card className="luxury-card">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-foreground">
            Método de preparación
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Elige entre filtrado o inmersión
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Métodos de Filtrado */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">
                Filtrado
              </h3>
            </div>
            <div className="space-y-3">
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
                    className="w-full p-4 rounded-2xl gold-border bg-transparent text-foreground hover:bg-primary/10 hover:text-foreground transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex items-start gap-3 ${
                          method.extraCost > 0 ? "w-[calc(100%-4rem)]" : ""
                        }`}
                      >
                        {/* <div className="text-2xl">{method.icon}</div> */}
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
                            width={50}
                            height={50}
                          />
                          <div className="absolute inset-0 bg-accent/30 blur-lg rounded-lg -z-10 animate-[pulse_2s_ease-in-out_infinite] scale-70"></div>
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-base text-foreground mb-1">
                            {method.name}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {method.description}
                          </p>
                        </div>
                      </div>
                      {method.extraCost > 0 && (
                        <div className="flex items-center text-sm text-primary font-medium">
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
            </div>
            <div className="space-y-3">
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
                    className="w-full p-4 rounded-2xl gold-border bg-transparent text-foreground hover:bg-primary/10 hover:text-foreground transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      {/* <div className="text-2xl">{method.icon}</div> */}
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
                          width={50}
                          height={50}
                        />
                        <div className="absolute inset-0 bg-accent/30 blur-lg rounded-lg -z-10 animate-[pulse_2s_ease-in-out_infinite] scale-70"></div>
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-base text-foreground mb-1">
                          {method.name}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
        <div className="p-6 pt-0">
          <Button
            onClick={goBack}
            variant="ghost"
            className="w-full text-muted-foreground hover:text-foreground hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
