import { UserData } from "@/types";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CircleQuestionMark,
  Coffee,
  Flame,
  Apple,
  Snowflake,
} from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export function OptionsStep({
  userData,
  setUserData,
  nextStep,
  goToRecommendations,
  goToQuiz,
  goBack,
}: {
  userData: UserData;
  setUserData: Dispatch<SetStateAction<UserData>>;
  nextStep: () => void;
  goToRecommendations: () => void;
  goToQuiz: () => void;
  goBack: () => void;
}) {
  const [open, setOpen] = useState(false);
  const handleOptionSelect = (
    option: "choose" | "recommendations" | "quiz"
  ) => {
    if (option === "choose") {
      // Reset selection data when switching to manual selection
      setUserData({
        ...userData,
        selectedOption: option,
        coffeeType: "",
        brewingMethod: "",
        cupType: "",
        finalRecommendation: undefined,
      });
      nextStep();
    } else if (option === "recommendations") {
      setUserData({ ...userData, selectedOption: option });
      goToRecommendations();
    } else if (option === "quiz") {
      setUserData({ ...userData, selectedOption: option });
      goToQuiz();
    }
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
            ¡Hola {userData.name}! 👋
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            ¿Qué te gustaría hacer hoy?
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={() => handleOptionSelect("choose")}
              className="luxury-button w-full p-6 text-lg cursor-pointer"
            >
              <Coffee className="mr-3 h-6 w-6" />
              Elige tu mismo
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={() => setOpen(true)}
              className="luxury-button flex items-center gap-1 w-full py-6 px-2 text-sm cursor-pointer"
            >
              <CircleQuestionMark className="h-6 w-6" />
              Responde a la encuesta y elegimos por ti
            </Button>
          </motion.div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-lg" onClose={() => setOpen(false)}>
              <DialogHeader className="text-center">
                <DialogTitle className="text-xl text-foreground flex items-center justify-center gap-2">
                  <Coffee className="w-6 h-6 text-accent" />
                  Encuesta de Experiencia de Café
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                <p className="text-center text-muted-foreground leading-relaxed">
                  Para ayudarte a descubrir tu café ideal, cuéntale a nuestro
                  barista tus 3 preferencias:
                </p>

                <div className="space-y-4">
                  <motion.div
                    className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-accent/20"
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "rgba(176, 156, 96, 0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <Flame className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Intensidad que buscas
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        suave, medio o fuerte
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-accent/20"
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "rgba(176, 156, 96, 0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <Apple className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Sabor que buscas
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        floral, frutal, cacao
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-accent/20"
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "rgba(176, 156, 96, 0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <Snowflake className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Temperatura de tu café
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        caliente o con hielo
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="text-center pt-4 border-t border-accent/20">
                  <p className="text-sm text-muted-foreground italic">
                    Con esta información, nuestro barista te guiará hacia la
                    experiencia perfecta.
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>

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
