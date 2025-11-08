"use client";

import { useLanguage } from "./useLanguage";
import { categoriesTranslations } from "@/translations/categories";
import { productsTranslations } from "@/translations/products";
import { workshopsTranslations } from "@/translations/workshops";
import { uiTranslations } from "@/translations/ui";
import { LANGUAGE } from "@/types/dictionary";

// Tipos para las traducciones
type TranslationObject = Record<string, any>;
type TranslationKey = string;

export const useTranslations = () => {
  const { language } = useLanguage();
  let languageDefault = LANGUAGE.ES;

  /**
   * Función principal para obtener traducciones
   * @param key - La clave de traducción (ej: "cafes-de-siempre.name")
   * @param translations - El objeto de traducciones correspondiente
   * @returns La traducción en el idioma actual o la clave si no existe
   */
  const t = (key: TranslationKey, translations: TranslationObject): string => {
    const keys = key.split(".");
    let value: any = translations;

    // Navegar por la estructura anidada
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key; // Retornar la clave si no se encuentra
      }
    }

    // Si el valor es un objeto con idiomas, retornar el del idioma actual
    if (value && typeof value === "object" && language! in value) {
      return value[language ?? languageDefault];
    }

    // Si es un string directo, retornarlo
    if (typeof value === "string") {
      return value;
    }

    return key;
  };

  /**
   * Función específica para traducciones de categorías
   */
  const tCategory = (key: string) => t(key, categoriesTranslations);

  /**
   * Función específica para traducciones de productos
   */
  const tProduct = (key: string) => t(key, productsTranslations);

  /**
   * Función específica para traducciones de talleres
   */
  const tWorkshop = (key: string) => t(key, workshopsTranslations);

  /**
   * Función específica para traducciones de UI
   */
  const tUI = (key: string) => t(key, uiTranslations);

  /**
   * Función para obtener todas las traducciones de una categoría
   */
  const getCategoryTranslations = (categoryId: string) => {
    return categoriesTranslations[
      categoryId as keyof typeof categoriesTranslations
    ];
  };

  /**
   * Función para obtener traducciones de productos usando el nombre del producto
   */
  const getProductTranslations = (productName: string) => {
    // Normalizar el nombre del producto para usarlo como clave
    const normalizedKey = productName
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "") // Remove special characters
      .replace(/\s+/g, "") // Remove spaces
      .replace(/á/g, "a")
      .replace(/é/g, "e")
      .replace(/í/g, "i")
      .replace(/ó/g, "o")
      .replace(/ú/g, "u")
      .replace(/ñ/g, "n");

    return (
      productsTranslations[
        normalizedKey as keyof typeof productsTranslations
      ] || {
        name: { [language!]: productName },
        description: { [language!]: "" },
        tags: {},
      }
    );
  };

  /**
   * Función para obtener todas las traducciones de un taller
   */
  const getWorkshopTranslations = (workshopId: string) => {
    return workshopsTranslations[
      workshopId as keyof typeof workshopsTranslations
    ];
  };

  return {
    t,
    tCategory,
    tProduct,
    tWorkshop,
    tUI,
    getCategoryTranslations,
    getProductTranslations,
    getWorkshopTranslations,
    language,
  };
};
