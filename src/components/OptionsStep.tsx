import { UserData } from "@/types";
import { motion } from "framer-motion";
import { ArrowLeft, CircleQuestionMark, Coffee } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

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
  const handleOptionSelect = (
    option: "choose" | "recommendations" | "quiz"
  ) => {
    setUserData({ ...userData, selectedOption: option });
    if (option === "choose") {
      nextStep();
    } else if (option === "recommendations") {
      goToRecommendations();
    } else if (option === "quiz") {
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
              onClick={() => handleOptionSelect("quiz")}
              className="luxury-button flex items-center gap-1 w-full py-6 px-2 text-sm cursor-pointer"
            >
              <CircleQuestionMark className="h-6 w-6" />
              Responde a la encuesta y elegimos por ti
            </Button>
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
