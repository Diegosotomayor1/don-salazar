import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Coffee, CheckCircle } from "lucide-react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { UserData, QuizAnswer, FinalRecommendation } from "@/types";
import { sistemaRecomendacion } from "@/constants";

export function CoffeeQuizStep({
  userData,
  setUserData,
  goToFinalRecommendation,
  goBack,
}: {
  userData: UserData;
  setUserData: (data: UserData) => void;
  goToFinalRecommendation: () => void;
  goBack: () => void;
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [isAnswering, setIsAnswering] = useState(false);

  const currentQuestion =
    sistemaRecomendacion.cuestionario[currentQuestionIndex];
  const isLastQuestion =
    currentQuestionIndex === sistemaRecomendacion.cuestionario.length - 1;

  const handleOptionSelect = (optionIndex: number) => {
    if (isAnswering) return;

    setIsAnswering(true);
    const selectedOption = currentQuestion.opciones[optionIndex];
    const newAnswer: QuizAnswer = {
      questionIndex: currentQuestionIndex,
      selectedOption,
    };

    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);

    // Esperar un poco para mostrar la selección antes de continuar
    setTimeout(() => {
      if (isLastQuestion) {
        // Generar recomendación final
        const finalRecommendation = generateFinalRecommendation(updatedAnswers);
        const updatedUserData = {
          ...userData,
          quizAnswers: updatedAnswers,
          finalRecommendation,
        };
        setUserData(updatedUserData);
        goToFinalRecommendation();
      } else {
        // Ir a la siguiente pregunta
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsAnswering(false);
      }
    }, 800);
  };

  const generateFinalRecommendation = (
    quizAnswers: QuizAnswer[]
  ): FinalRecommendation => {
    const recommendations = {
      grano: sistemaRecomendacion.catalogo.granos["el_balanceado"], // default
      metodo: sistemaRecomendacion.catalogo.metodos["v60"], // default
      taza: sistemaRecomendacion.catalogo.tazas["taza_abierta"], // default
    };

    // Procesar cada respuesta para construir la recomendación
    quizAnswers.forEach((answer) => {
      const { tipo, clave } = answer.selectedOption.recomienda;

      if (tipo === "granos" && sistemaRecomendacion.catalogo.granos[clave]) {
        recommendations.grano = sistemaRecomendacion.catalogo.granos[clave];
      } else if (
        tipo === "metodos" &&
        sistemaRecomendacion.catalogo.metodos[clave]
      ) {
        recommendations.metodo = sistemaRecomendacion.catalogo.metodos[clave];
      } else if (
        tipo === "tazas" &&
        sistemaRecomendacion.catalogo.tazas[clave]
      ) {
        recommendations.taza = sistemaRecomendacion.catalogo.tazas[clave];
      }
    });

    return recommendations;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
    >
      <div className="space-y-6">
        <CardHeader className="text-center">
          <CardDescription className="text-muted-foreground">
            Pregunta {currentQuestionIndex + 1} de{" "}
            {sistemaRecomendacion.cuestionario.length}
          </CardDescription>

          {/* Barra de progreso */}
          <div className="w-full bg-card/30 rounded-full h-2 mt-4">
            <div
              className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${
                  ((currentQuestionIndex + 1) /
                    sistemaRecomendacion.cuestionario.length) *
                  100
                }%`,
              }}
            />
          </div>
        </CardHeader>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="luxury-card">
              <CardHeader>
                <CardTitle className="text-xl text-foreground text-center">
                  {currentQuestion.pregunta}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentQuestion.opciones.map((opcion, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button
                      onClick={() => handleOptionSelect(index)}
                      disabled={isAnswering}
                      className={`w-full p-6 h-auto text-left justify-start rounded-2xl transition-all duration-300 cursor-pointer ${
                        isAnswering
                          ? "opacity-50 cursor-not-allowed"
                          : "luxury-button-outline hover:luxury-button hover:text-background"
                      }`}
                      variant="outline"
                    >
                      <div className="flex items-center gap-3 w-full justify-center">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-primary/30 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-primary/20" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm leading-relaxed">
                            {opcion.texto}
                          </p>
                        </div>
                      </div>
                    </Button>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-4">
          <Button
            onClick={goBack}
            variant="outline"
            className="flex-1 rounded-2xl gold-border bg-transparent text-foreground hover:bg-primary/10 hover:text-foreground cursor-pointer"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
