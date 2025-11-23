"use client";

import { motion, AnimatePresence } from "framer-motion";
import { LANGUAGE } from "@/types/dictionary";
import { SEDES } from "@/types";
import { useLanguage } from "@/hooks/useLanguage";
import { useSede } from "@/hooks/useSede";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();
  const { sede, changeSede } = useSede();
  const [currentStep, setCurrentStep] = useState<"language" | "sede">(
    "language"
  );

  const handleLanguageSelect = (selectedLanguage: LANGUAGE) => {
    changeLanguage(selectedLanguage);
    setCurrentStep("sede");
  };

  const handleSedeSelect = (selectedSede: SEDES) => {
    changeSede(selectedSede);
  };

  const isVisible = !language || !sede;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white shadow-2xl p-8 max-w-md w-full text-center border border-gray-200"
          >
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <Image
                src="/logo-don-salazar-black.png"
                alt="Don Salazar Logo"
                width={80}
                height={80}
              />
            </div>

            {/* Language Step */}
            {(!language || currentStep === "language") && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Selecciona tu idioma
                  </h2>
                  <p className="text-gray-600 text-lg">Choose your language</p>
                </div>

                <div className="space-y-4">
                  <Button
                    onClick={() => handleLanguageSelect(LANGUAGE.ES)}
                    className="w-full bg-accent hover:bg-accent/90 text-white py-5 text-xl font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-accent/25"
                  >
                    🇪🇸 Español
                  </Button>

                  <Button
                    onClick={() => handleLanguageSelect(LANGUAGE.EN)}
                    variant="outline"
                    className="w-full border-2 border-accent text-accent hover:bg-accent hover:text-white py-5 text-xl font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    🇺🇸 English
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Sede Step */}
            {language && (!sede || currentStep === "sede") && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Selecciona tu sede
                  </h2>
                  <p className="text-gray-600 text-lg">Choose your location</p>
                </div>

                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {Object.values(SEDES).map((sedeOption) => (
                    <Button
                      key={sedeOption}
                      onClick={() => handleSedeSelect(sedeOption)}
                      variant="outline"
                      className="w-full border-2 border-accent rounded-none bg-transparent text-accent hover:bg-accent hover:text-white py-4 text-lg font-semibold transition-all duration-300 transform hover:shadow-lg"
                    >
                      📍 {sedeOption}
                    </Button>
                  ))}
                </div>

                <div className="mt-6">
                  <Button
                    onClick={() => setCurrentStep("language")}
                    variant="ghost"
                    className="text-accent hover:text-accent/80 text-sm"
                  >
                    ← Cambiar idioma
                  </Button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
