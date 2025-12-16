"use client";

import { NameStep } from "@/components/NameStep";
import { PreparationStep } from "@/components/PreparationStep";
import { ComingSoonStep } from "@/components/ComingSoonStep";
import { OptionsStep } from "@/components/OptionsStep";
import { CoffeeTypeStep } from "@/components/CoffeeTypeStep";
import { BrewingMethodStep } from "@/components/BrewingMethodStep";
import { CupTypeStep } from "@/components/CupTypeStep";
import { RecommendationsStep } from "@/components/RecommendationsStep";
import { SummaryStep } from "@/components/SummaryStep";
import { CoffeeQuizStep } from "@/components/CoffeeQuizStep";
import { FinalRecommendationStep } from "@/components/FinalRecommendationStep";
import LocationModal from "@/components/LocationModal";
import { Step, UserData } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { useSede } from "@/hooks/useSede";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function DonSalazarWizard() {
  const [currentStep, setCurrentStep] = useState<Step>("name");
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const { sede } = useSede();
  const [userData, setUserData] = useState<UserData>({
    name: "",
    preparationType: null,
    selectedOption: null,
    coffeeType: "",
    brewingMethod: "",
    cupType: "",
  });

  // Show location modal if no sede is selected
  useEffect(() => {
    if (!sede) {
      setIsLocationModalOpen(true);
    }
  }, [sede]);

  const getNextStep = (currentStep: Step): Step => {
    const stepFlow: Record<Step, Step> = {
      name: "coffeeType",
      preparation: "options",
      comingSoon: "comingSoon",
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

  const goToSummary = () => {
    setCurrentStep("summary");
  };

  const goToComingSoon = () => {
    setCurrentStep("comingSoon");
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

    // Si está en summary y viene del quiz, volver al quiz
    if (currentStep === "summary" && userData.finalRecommendation) {
      setCurrentStep("quiz");
      return;
    }

    if (currentStep === "comingSoon") {
      setCurrentStep("preparation");
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
      setCurrentStep("name");
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
    <div className="min-h-[100dvh] flex items-center justify-center p-4 relative  ">
      <Image
        src="/fondo.jpg"
        alt="Logo"
        width={1000}
        height={1000}
        className="absolute top-0 left-0 w-screen h-[100dvh] object-cover -z-10 blur-md opacity-20 md:opacity-30 motion-safe:animate-[pulse_8s_ease-in-out_infinite]"
      />
      <div className="w-full max-w-3xl">
        {currentStep === "name" && (
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4 relative">
              <Image
                src="/logo-don-salazar-white.png"
                alt="Logo"
                width={100}
                height={100}
                className=" z-10"
              />
              <Image
                src="/logo-don-salazar-white.png"
                alt="Logo"
                width={100}
                height={100}
                className="absolute top-0 right-1/2 translate-x-1/2 blur-md animate-pulse"
              />
            </div>
            {/* Location indicator */}
            {sede && (
              <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
                <span>📍</span>
                <span>Local: {sede}</span>
                <button
                  onClick={() => setIsLocationModalOpen(true)}
                  className="text-accent hover:text-accent/80 underline ml-2"
                >
                  (cambiar)
                </button>
              </div>
            )}
            {/* <p className="text-muted-foreground text-lg">
            Tu experiencia perfecta de café
          </p> */}
          </motion.div>
        )}

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
              goToComingSoon={goToComingSoon}
            />
          )}

          {currentStep === "comingSoon" && (
            <ComingSoonStep key="comingSoon" goBack={goBack} />
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
            <SummaryStep
              key="summary"
              userData={userData}
              goBack={goBack}
              goToQuiz={goToQuiz}
            />
          )}

          {currentStep === "recommendations" && (
            <RecommendationsStep key="recommendations" goBack={goBack} />
          )}

          {currentStep === "quiz" && (
            <CoffeeQuizStep
              key="quiz"
              userData={userData}
              setUserData={setUserData}
              goToFinalRecommendation={goToSummary}
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

      {/* Location Modal */}
      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
      />
    </div>
  );
}
