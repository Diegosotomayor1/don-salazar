import { LANGUAGE } from "@/types/dictionary";

// Traducciones para textos de interfaz de usuario
export const uiTranslations = {
  // Header y branding
  brand: {
    name: {
      [LANGUAGE.ES]: "Don Salazar",
      [LANGUAGE.EN]: "Don Salazar",
    },
    subtitle: {
      [LANGUAGE.ES]: "Speciality Coffee",
      [LANGUAGE.EN]: "Speciality Coffee",
    },
  },

  // Navegación y botones
  navigation: {
    "view-products": {
      [LANGUAGE.ES]: "Ver productos",
      [LANGUAGE.EN]: "View products",
    },
    "back-to-categories": {
      [LANGUAGE.ES]: "Volver a categorías",
      [LANGUAGE.EN]: "Back to categories",
    },
    "select-category": {
      [LANGUAGE.ES]:
        "Selecciona una categoría para explorar nuestros cafés especializados",
      [LANGUAGE.EN]: "Select a category to explore our specialty coffees",
    },
  },

  // Estados y mensajes
  states: {
    "category-not-found": {
      [LANGUAGE.ES]: "Categoría no encontrada",
      [LANGUAGE.EN]: "Category not found",
    },
    loading: {
      [LANGUAGE.ES]: "Cargando...",
      [LANGUAGE.EN]: "Loading...",
    },
    "no-products": {
      [LANGUAGE.ES]: "No hay productos disponibles",
      [LANGUAGE.EN]: "No products available",
    },
  },

  // Modal y overlays
  modal: {
    close: {
      [LANGUAGE.ES]: "Cerrar",
      [LANGUAGE.EN]: "Close",
    },
    "view-more": {
      [LANGUAGE.ES]: "Ver más",
      [LANGUAGE.EN]: "View more",
    },
    "add-to-cart": {
      [LANGUAGE.ES]: "Agregar al carrito",
      [LANGUAGE.EN]: "Add to cart",
    },
    "select-location": {
      [LANGUAGE.ES]: "Selecciona tu sede",
      [LANGUAGE.EN]: "Choose your location",
    },
  },

  // Información general
  info: {
    "price-prefix": {
      [LANGUAGE.ES]: "S/",
      [LANGUAGE.EN]: "S/",
    },
    currency: {
      [LANGUAGE.ES]: "Soles",
      [LANGUAGE.EN]: "Soles",
    },
    "extra-shot": {
      [LANGUAGE.ES]: "+S/4 añade un shot de espresso adicional",
      [LANGUAGE.EN]: "+S/4 adds an extra espresso shot",
    },
    "extra-ice-cream": {
      [LANGUAGE.ES]:
        "+S/8 añade una bola de helado natural de vainilla Madagascar",
      [LANGUAGE.EN]:
        "+S/8 adds a scoop of natural Madagascar vanilla ice cream",
    },
  },

  // Talleres específicos
  workshops: {
    "barista-for-day": {
      [LANGUAGE.ES]: "Barista por un día",
      [LANGUAGE.EN]: "Barista for a day",
    },
  },

  // Modal description
  "modal-description": {
    [LANGUAGE.ES]: "Te gustó el producto? Pídelo con nuestro barista",
    [LANGUAGE.EN]: "Did you like the product? Order it with our barista",
  },
};
