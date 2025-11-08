"use client";

import { useLanguage } from "@/hooks/useLanguage";

export const WelcomeMessage = () => {
  const { language } = useLanguage();

  const messages = {
    es: "¡Bienvenido a Don Salazar!",
    en: "Welcome to Don Salazar!",
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold text-primary">
        {language ? messages[language] : messages.es}
      </h1>
    </div>
  );
};
