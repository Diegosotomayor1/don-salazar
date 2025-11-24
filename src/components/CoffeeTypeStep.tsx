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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { UserData } from "@/types";
import { useFilteredCoffeeTypes } from "@/hooks/useFilteredCoffeeTypes";
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { useTranslations } from "@/hooks/useTranslations";

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
  const { language } = useTranslations();
  const filteredCoffeeTypes = useFilteredCoffeeTypes();
  const [selectedCoffee, setSelectedCoffee] = useState<
    (typeof filteredCoffeeTypes)[number] | null
  >(null);

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
          className="w-full text-muted-foreground hover:text-foreground hover:bg-primary/10 border border-primary/50"
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
        <CardContent
          className={`grid grid-cols-${Math.min(
            filteredCoffeeTypes.length,
            3
          )} gap-2 px-4 md:px-6 h-full`}
        >
          {filteredCoffeeTypes.map((coffee, index) => (
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
                className="w-full h-[calc(100%-36px)] px-2 py-4 md:p-5 rounded-2xl border border-primary/50 bg-transparent text-foreground hover:bg-primary/10 hover:text-foreground transition-all duration-300 cursor-pointer relative"
              >
                <div className="flex flex-col items-center gap-4 h-full">
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

                  <div className="flex flex-col items-center">
                    <h3 className="font-semibold text-md text-foreground mb-2 text-center">
                      {coffee.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-center">
                      {coffee.shortDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* "Ver más" button outside the card container */}
              <Button
                variant="outline"
                size="sm"
                className="mt-2 rounded-full px-4 py-1 text-xs w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCoffee(coffee);
                }}
              >
                Ver más
              </Button>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      {/* Dialog for coffee description */}
      <Dialog
        open={!!selectedCoffee}
        onOpenChange={(open) => !open && setSelectedCoffee(null)}
      >
        <DialogContent onClose={() => setSelectedCoffee(null)}>
          <DialogHeader>
            <div className="flex flex-col items-center gap-4">
              <motion.div
                animate={{ rotate: [0, 12, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <Image
                  src={selectedCoffee?.img || ""}
                  alt={selectedCoffee?.name || ""}
                  width={120}
                  height={120}
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-accent/30 blur-lg rounded-lg -z-10 animate-[pulse_2s_ease-in-out_infinite] scale-110"></div>
              </motion.div>
              <DialogTitle className="text-center text-xl">
                {selectedCoffee?.name}
              </DialogTitle>
            </div>
            <DialogDescription className="text-center text-sm leading-relaxed mt-2">
              {selectedCoffee?.description}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
