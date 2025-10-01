"use client";

import { NameStep } from "@/components/NameStep";
import { PreparationStep } from "@/components/PreparationStep";
import { OptionsStep } from "@/components/OptionsStep";
import { CoffeeTypeStep } from "@/components/CoffeeTypeStep";
import { BrewingMethodStep } from "@/components/BrewingMethodStep";
import { CupTypeStep } from "@/components/CupTypeStep";
import { RecommendationsStep } from "@/components/RecommendationsStep";
import { SummaryStep } from "@/components/SummaryStep";
import { CoffeeQuizStep } from "@/components/CoffeeQuizStep";
import { FinalRecommendationStep } from "@/components/FinalRecommendationStep";
import { Step, UserData } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function DonSalazarWizard() {
  const [currentStep, setCurrentStep] = useState<Step>("name");
  const [userData, setUserData] = useState<UserData>({
    name: "",
    preparationType: null,
    selectedOption: null,
    coffeeType: "",
    brewingMethod: "",
    cupType: "",
  });

  const getNextStep = (currentStep: Step): Step => {
    const stepFlow: Record<Step, Step> = {
      name: "preparation",
      preparation: "options",
      options: "coffeeType",
      coffeeType: "brewingMethod",
      brewingMethod: "cupType",
      cupType: "summary",
      summary: "summary",
      recommendations: "recommendations",
      quiz: "quiz",
      finalRecommendation: "finalRecommendation",
    };

    return stepFlow[currentStep];
  };

  const nextStep = () => {
    const next = getNextStep(currentStep);
    setCurrentStep(next);
  };

  const goToRecommendations = () => {
    setCurrentStep("recommendations");
  };

  const goToQuiz = () => {
    setCurrentStep("quiz");
  };

  const goToFinalRecommendation = () => {
    setCurrentStep("finalRecommendation");
  };

  const goBack = () => {
    if (
      currentStep === "recommendations" ||
      currentStep === "quiz" ||
      currentStep === "finalRecommendation"
    ) {
      setCurrentStep("options");
      return;
    }

    if (currentStep === "summary") {
      setCurrentStep("cupType");
      return;
    }

    if (currentStep === "cupType") {
      setCurrentStep("brewingMethod");
      return;
    }

    if (currentStep === "brewingMethod") {
      setCurrentStep("coffeeType");
      return;
    }

    if (currentStep === "coffeeType") {
      setCurrentStep("options");
      return;
    }

    if (currentStep === "options") {
      setCurrentStep("preparation");
      return;
    }

    if (currentStep === "preparation") {
      setCurrentStep("name");
      return;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative  ">
      <Image
        src="/fondo.jpg"
        alt="Logo"
        width={1000}
        height={1000}
        className="absolute top-0 left-0 w-screen h-screen object-cover -z-10 blur-md opacity-20 md:opacity-30 motion-safe:animate-[pulse_8s_ease-in-out_infinite]"
      />
      <div className="w-full max-w-3xl">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image
              src="/logo-don-salazar-variant.png"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>
          <p className="text-muted-foreground text-lg">
            Tu experiencia perfecta de café
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {currentStep === "name" && (
            <NameStep
              key="name"
              userData={userData}
              setUserData={setUserData}
              nextStep={nextStep}
            />
          )}

          {currentStep === "preparation" && (
            <PreparationStep
              key="preparation"
              userData={userData}
              setUserData={setUserData}
              nextStep={nextStep}
              goBack={goBack}
            />
          )}

          {currentStep === "options" && (
            <OptionsStep
              key="options"
              userData={userData}
              setUserData={setUserData}
              nextStep={nextStep}
              goToRecommendations={goToRecommendations}
              goToQuiz={goToQuiz}
              goBack={goBack}
            />
          )}

          {currentStep === "coffeeType" && (
            <CoffeeTypeStep
              key="coffeeType"
              userData={userData}
              setUserData={setUserData}
              nextStep={nextStep}
              goBack={goBack}
            />
          )}

          {currentStep === "brewingMethod" && (
            <BrewingMethodStep
              key="brewingMethod"
              userData={userData}
              setUserData={setUserData}
              nextStep={nextStep}
              goBack={goBack}
            />
          )}

          {currentStep === "cupType" && (
            <CupTypeStep
              key="cupType"
              userData={userData}
              setUserData={setUserData}
              nextStep={nextStep}
              goBack={goBack}
            />
          )}

          {currentStep === "summary" && (
            <SummaryStep key="summary" userData={userData} goBack={goBack} />
          )}

          {currentStep === "recommendations" && (
            <RecommendationsStep
              key="recommendations"
              userData={userData}
              goBack={goBack}
            />
          )}

          {currentStep === "quiz" && (
            <CoffeeQuizStep
              key="quiz"
              userData={userData}
              setUserData={setUserData}
              goToFinalRecommendation={goToFinalRecommendation}
              goBack={goBack}
            />
          )}

          {currentStep === "finalRecommendation" && (
            <FinalRecommendationStep
              key="finalRecommendation"
              userData={userData}
              goBack={goBack}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
