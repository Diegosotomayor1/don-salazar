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
  description_complete: string;
}

export interface FinalRecommendation {
  grano: CatalogItem & { id: string };
  metodo: CatalogItem & { id: string };
  taza: CatalogItem & { id: string };
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
  nameKey: string;
  descriptionKey: string;
  icon: string;
  characteristicsKeys: string[];
  qrId: string;
};

export type CoffeeType = {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
  img: string;
  price: number;
};

export type MenuProducts = {
  id?: string; // Para identificar el producto en traducciones
  name: string;
  nameEn: string;
  price: number;
  description: string;
  descriptionEn: string;
  tags: string[];
  video?: string;
  img?: string;
  bestSelling?: boolean;
};

export enum TYPE_CARD {
  LUXURY = "LUXURY",
  PREMIUM = "PREMIUM",
  PREMIUM_FONTANA = "PREMIUM_FONTANA",
}

export enum SEDES {
  SAN_MIGUEL = "San Miguel",
  FONTANA = "Fontana",
  SAN_ISIDRO = "San Isidro",
  MIRAFLORES = "Miraflores",
  UNIVERSIDAD_DEL_PACIFICO = "Universidad del Pacífico",
  HIGUERETA = "Higuereta",
  JOCKEY_PLAZA = "Jockey Plaza",
  SALAVERRY = "Salaverry",
  PUNTA_MAR = "Punta Mar",
}
