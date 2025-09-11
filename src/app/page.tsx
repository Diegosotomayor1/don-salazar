"use client";

import { CoffeeTypeStep } from "@/components/CoffeTypeStep";
import { FilterStep } from "@/components/FilterStep";
import { MilkTypeStep } from "@/components/MilkTypeStep";
import { NameStep } from "@/components/NameStep";
import { OptionsStep } from "@/components/OptionsStep";
import { RecommendationsStep } from "@/components/RecommendationsStep";
import { SizeStep } from "@/components/SizeStep";
import { SummaryStep } from "@/components/SummaryStep";
import { coffeeOptions } from "@/constants";
import { Step, UserData } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function DonSalazarWizard() {
  const [currentStep, setCurrentStep] = useState<Step>("name");
  const [userData, setUserData] = useState<UserData>({
    name: "",
    selectedOption: null,
    coffeeType: "",
    milkType: "",
    filterType: "",
    coffeeSize: "",
  });

  const getNextStep = (currentStep: Step): Step => {
    if (currentStep === "coffeeType") {
      const selectedCoffee = coffeeOptions.find(
        (coffee) => coffee.id === userData.coffeeType
      );
      return selectedCoffee?.nextStep || "size";
    }

    const stepFlow: Record<Step, Step> = {
      name: "options",
      options: "coffeeType",
      coffeeType: "size", // Default, overridden above
      milkType: "size",
      filterType: "size",
      size: "summary",
      summary: "summary",
      recommendations: "recommendations",
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

  const goBack = () => {
    const stepOrder: Step[] = [
      "name",
      "options",
      "coffeeType",
      "milkType",
      "filterType",
      "size",
      "summary",
    ];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex > 0) {
      if (currentStep === "size" && userData.coffeeType) {
        const selectedCoffee = coffeeOptions.find(
          (coffee) => coffee.id === userData.coffeeType
        );
        if (selectedCoffee?.requiresFilter) {
          setCurrentStep("filterType");
          return;
        }
        if (selectedCoffee?.requiresMilk) {
          setCurrentStep("milkType");
          return;
        }
      }
      setCurrentStep(stepOrder[currentIndex - 1]);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
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

          {currentStep === "options" && (
            <OptionsStep
              key="options"
              userData={userData}
              setUserData={setUserData}
              nextStep={nextStep}
              goToRecommendations={goToRecommendations}
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

          {currentStep === "milkType" && (
            <MilkTypeStep
              key="milkType"
              userData={userData}
              setUserData={setUserData}
              nextStep={nextStep}
              goBack={goBack}
            />
          )}

          {currentStep === "filterType" && (
            <FilterStep
              key="filterType"
              userData={userData}
              setUserData={setUserData}
              nextStep={nextStep}
              goBack={goBack}
            />
          )}

          {currentStep === "size" && (
            <SizeStep
              key="size"
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
        </AnimatePresence>
      </div>
    </div>
  );
}
