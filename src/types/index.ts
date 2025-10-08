export type Step =
  | "name"
  | "preparation"
  | "comingSoon"
  | "options"
  | "coffeeType"
  | "brewingMethod"
  | "cupType"
  | "summary"
  | "recommendations"
  | "quiz"
  | "finalRecommendation";

export interface UserData {
  name: string;
  preparationType: "barista" | "self" | null;
  selectedOption: "choose" | "recommendations" | "quiz" | null;
  coffeeType: string;
  brewingMethod: string;
  cupType: string;
  quizAnswers?: QuizAnswer[];
  finalRecommendation?: FinalRecommendation;
}

// Nuevos tipos para el sistema de recomendación
export interface QuizAnswer {
  questionIndex: number;
  selectedOption: RecommendationOption;
}

export interface RecommendationOption {
  texto: string;
  recomienda: {
    tipo: "granos" | "metodos" | "tazas";
    clave: string;
  };
}

export interface QuizQuestion {
  pregunta: string;
  opciones: RecommendationOption[];
}

export interface CatalogItem {
  nombre: string;
  descripcion: string;
}

export interface FinalRecommendation {
  grano: CatalogItem;
  metodo: CatalogItem;
  taza: CatalogItem;
}

export interface SistemaRecomendacion {
  catalogo: {
    granos: Record<string, CatalogItem>;
    metodos: Record<string, CatalogItem>;
    tazas: Record<string, CatalogItem>;
  };
  cuestionario: QuizQuestion[];
}

export type Category = {
  id: string;
  name: string;
  description: string;
  icon: string;
  characteristics: string[];
  qrId: string;
};

export type CoffeeType = {
  id: string;
  name: string;
  description: string;
  icon: string;
  img: string;
  price: number;
};

export type MenuProducts = {
  name: string;
  price: number;
  description: string;
  tags: string[];
};
