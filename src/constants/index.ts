import { Step } from "@/types";

export const coffeeOptions = [
  {
    id: "espresso",
    name: "Espresso",
    description: "Intenso y concentrado",
    icon: "☕",
    requiresMilk: false,
    nextStep: "size" as Step,
  },
  {
    id: "americano",
    name: "Americano",
    description: "Espresso con agua caliente",
    icon: "🫖",
    requiresMilk: false,
    nextStep: "size" as Step,
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    description: "Espresso con leche vaporizada y espuma",
    icon: "🥛",
    requiresMilk: true,
    nextStep: "milkType" as Step,
  },
  {
    id: "latte",
    name: "Latte",
    description: "Espresso con mucha leche vaporizada",
    icon: "🍼",
    requiresMilk: true,
    nextStep: "milkType" as Step,
  },
  {
    id: "macchiato",
    name: "Macchiato",
    description: "Espresso 'manchado' con leche",
    icon: "☕",
    requiresMilk: true,
    nextStep: "milkType" as Step,
  },
  {
    id: "filtrado",
    name: "Café Filtrado",
    description: "V60, Chemex o Prensa Francesa",
    icon: "⚗️",
    requiresMilk: false,
    requiresFilter: true,
    nextStep: "filterType" as Step,
  },
];

export const milkOptions = [
  {
    id: "entera",
    name: "Leche Entera",
    description: "Cremosa y tradicional",
    icon: "🥛",
  },
  {
    id: "deslactosada",
    name: "Deslactosada",
    description: "Sin lactosa, mismo sabor",
    icon: "🥛",
  },
  {
    id: "avena",
    name: "Leche de Avena",
    description: "Vegetal, cremosa y dulce",
    icon: "🌾",
  },
  {
    id: "almendra",
    name: "Leche de Almendra",
    description: "Ligera y con sabor a nuez",
    icon: "🌰",
  },
  {
    id: "coco",
    name: "Leche de Coco",
    description: "Tropical y cremosa",
    icon: "🥥",
  },
  {
    id: "sin-leche",
    name: "Sin Leche",
    description: "Solo café, intenso",
    icon: "☕",
  },
];

export const sizeOptions = [
  {
    id: "pequeño",
    name: "Pequeño",
    description: "8 oz (240 ml)",
    price: "S/ 8.00",
    icon: "🥃",
  },
  {
    id: "mediano",
    name: "Mediano",
    description: "12 oz (360 ml)",
    price: "S/ 12.00",
    icon: "☕",
  },
  {
    id: "grande",
    name: "Grande",
    description: "16 oz (480 ml)",
    price: "S/ 16.00",
    icon: "🫖",
  },
];

export const filterOptions = [
  {
    id: "v60",
    name: "V60",
    description: "Sabor limpio y brillante, requiere técnica",
    icon: "⚗️",
  },
  {
    id: "prensa-francesa",
    name: "Prensa Francesa",
    description: "Sabor intenso y robusto, fácil de usar",
    icon: "☕",
  },
  {
    id: "chemex",
    name: "Chemex",
    description: "Café suave y aromático, elegante",
    icon: "🫖",
  },
  {
    id: "aeropress",
    name: "AeroPress",
    description: "Versátil y rápido, sabor concentrado",
    icon: "🔧",
  },
  {
    id: "kalita-wave",
    name: "Kalita Wave",
    description: "Extracción uniforme, sabor equilibrado",
    icon: "🌊",
  },
];
