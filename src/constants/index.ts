import {
  Category,
  CoffeeType,
  MenuProducts,
  SistemaRecomendacion,
} from "@/types";

export const coffeeCategories: Category[] = [
  {
    id: "cafes-de-siempre",
    name: "El calor del grano",
    description: "Bebidas calientes: Clásicos espressos, lattes y cappuccinos",
    icon: "☕",
    characteristics: ["Clásico", "Tradicional", "Espresso"],
    qrId: "1",
  },
  {
    id: "bebidas-frias-cafe",
    name: "La frescura del grano",
    description: "Bebidas frias: Refrescantes combinaciones con café",
    icon: "🧊",
    characteristics: ["Refrescante", "Frío", "Innovador"],
    qrId: "2",
  },
  {
    id: "bebidas-sin-cafe",
    name: "Más allá del grano",
    description: "Bebidas sin café: Tés, chocolates y jugos naturales",
    icon: "🍵",
    characteristics: ["Sin Cafeína", "Natural", "Variado"],
    qrId: "3",
  },
  {
    id: "cocteles",
    name: "Cócteles con historia",
    description: "Mezclas únicas con y sin alcohol",
    icon: "🍸",
    characteristics: ["Premium", "Único", "Sofisticado"],
    qrId: "4",
  },
  {
    id: "salados",
    name: "Acompañamientos Salazar",
    description: "Salados: Empanadas, sándwichs...",
    icon: "🥪",
    characteristics: ["Fresco", "Artesanal", "Sabroso"],
    qrId: "5",
  },
  {
    id: "dulces",
    name: "Manajares Salazar",
    description: "Dulces: Postres, tortas y galletas caseras",
    icon: "🍰",
    characteristics: ["Dulce", "Casero", "Irresistible"],
    qrId: "6",
  },
  {
    id: "piqueos",
    name: "Selección de la casa",
    description: "Piqueos: Empanadas, sándwiches y croissants",
    icon: "🥘",
    characteristics: ["Compartir", "Variado"],
    qrId: "7",
  },
  {
    id: "talleres",
    name: "Barista por un día",
    description:
      "Aprende el arte del café con nuestros talleres especializados",
    icon: "🎓",
    characteristics: ["Educativo", "Práctico", "Experiencial"],
    qrId: "8",
  },
];

// Productos por categoría
export const menuProducts: Record<string, MenuProducts[]> = {
  "cafes-de-siempre": [
    {
      name: "Espresso",
      price: 8,
      description: "Un shot de sabor intenso y aroma envolvente. ",
      tags: ["Alto en cafeína"],
      video: "/carta/el calor del grano/espresso_comprimido.mp4",
    },
    {
      name: "Espresso Doble",
      price: 12,
      description: "Doble shot de sabor intenso y aroma envolvente. ",
      tags: ["Alto en cafeína"],
      video:
        "/carta/el calor del grano/Espresso_Doble_Nueva_Carta_comprimido.mp4",
    },
    {
      name: "Americano",
      price: 11,
      description: "Suave y deliciosa mezcla de espresso y agua caliente. ",
      tags: [],
      video: "/carta/el calor del grano/Americano_nueva_carta_comprimido.mp4",
    },
    {
      name: "Macchiato",
      price: 11,
      description:
        'Macchiato o "Manchado" es un espresso intenso con un toque de espuma de leche. ',
      tags: [],
      video: "/carta/el calor del grano/macchiato_nueva_carta_comprimido.mp4",
    },
    {
      name: "Cortado",
      price: 11,
      description: "Espresso intenso con un toque de leche liquida. ",
      tags: [],
      video: "/carta/el calor del grano/Cortado_nueva_carta_comprimido.mp4",
    },
    {
      name: "Cappuccino",
      price: 13,
      description:
        "Mezcla de espresso, leche vaporizada y una densa capa de espuma. ",
      tags: [],
      video: "/carta/el calor del grano/Cappuccino_nueva_carta_comprimido.mp4",
    },
    {
      name: "Latte",
      price: 13,
      description: "Espresso suave con abundante leche vaporizada. ",
      tags: [],
      video: "/carta/el calor del grano/Latte_nueva_carta_comprimido.mp4",
    },
    {
      name: "Mocaccino",
      price: 15,
      description:
        "Combinación perfecta de espresso, leche vaporizada y chocolate. ",
      tags: [],
      video: "/carta/el calor del grano/mocaccino_comprimido.mp4",
    },
    {
      name: "Flat White",
      price: 14,
      description: "Espresso intenso y microespuma suave. ",
      tags: [],
      video: "/carta/el calor del grano/Flat_white_nueva_carta_comprimido.mp4",
    },
    {
      name: "Stumpy",
      price: 14,
      description: "Espresso doble, leche vaporizada y microespuma suave. ",
      tags: [],
      video: "/carta/el calor del grano/Stumpy_Nueva_Carta_comprimido.mp4",
    },
    {
      name: "White Cappuccino",
      price: 16,
      description:
        "Espresso intenso con leche vaporizada y sabor irresistible a vainilla. ",
      tags: [],
      video:
        "/carta/el calor del grano/White_Cappuccino_Nueva_Carta_comprimido.mp4",
    },
    {
      name: "Pink Cappuccino",
      description:
        "Espresso intenso con leche vaporizada y sabor exquisito a fresa. ",
      price: 16,
      tags: [],
      video:
        "/carta/el calor del grano/Pink_Cappuccino_nueva_carta_comprimido.mp4",
    },
    {
      name: "Green Cappuccino",
      description:
        "Espresso intenso con leche vaporizada con un toque de menta. ",
      price: 16,
      tags: [],
      video: "/carta/el calor del grano/Green_cappuccino_comprimido.mp4",
    },
    {
      name: "Black Cappuccino ★",
      description:
        "Espresso intenso con leche vaporizada y con un toque caramel con carbón activado. ",
      price: 17,
      tags: [],
      video: "/carta/el calor del grano/Black_Cappuccino_comprimido.mp4",
    },
  ],
  "bebidas-frias-cafe": [
    {
      name: "Americano Frío",
      price: 12,
      description: "El clásico americano en una versión refrescante con hielo.",
      tags: [],
      video: "/carta/la frescura del grano/Americano_Frio_comprimido.mp4",
    },
    {
      name: "Orange Coffee",
      price: 16,
      description:
        "Refrescante jugo de naranja natural con doble shot de cold brew.",
      tags: [],
      video: "/carta/la frescura del grano/Orange_Coffee_comprimido.mp4",
    },
    {
      name: "Iced Cappuccino",
      price: 17,
      description: "Shot de espresso con leche y abundante hielo.",
      tags: [],
      video: "/carta/la frescura del grano/Iced_Cappuccino_comprimido.mp4",
    },
    {
      name: "Iced White Cappuccino",
      price: 18,
      description:
        "Shot de espresso con leche fresca, esencia de vainilla y abundante hielo.",
      tags: [],
      video:
        "/carta/la frescura del grano/Iced_White_Cappuccino_comprimido.mp4",
    },
    {
      name: "Iced Pink Cappuccino",
      price: 18,
      description:
        "Shot de espresso con leche fresca, sabor a fresa y abundante hielo.",
      tags: [],
      video: "/carta/la frescura del grano/Iced_Pink_Cappuccino_comprimido.mp4",
    },
    {
      name: "Iced Green Cappuccino",
      price: 18,
      description:
        "Shot de espresso con leche fresca, con un toque de menta y abundante hielo.",
      tags: [],
      video:
        "/carta/la frescura del grano/Iced_Green_Cappuccino_comprimido.mp4",
    },
    {
      name: "Iced Black Cappuccino",
      price: 19,
      description:
        "Shot de espresso con leche fresca, con un toque caramel con carbón activado y abundante hielo.",
      tags: [],
      video:
        "/carta/la frescura del grano/Iced_Black_Cappuccino_comprimido.mp4",
    },
    {
      name: "Cold Brew",
      price: 17,
      description:
        "Café filtrado en frío durante 24 horas en la majestuosa torre Yamacold.",
      tags: ["Alto en cafeína"],
      video: "/carta/la frescura del grano/Cold_Brew_comprimido.mp4",
    },
    {
      name: "Frappe Don Salazar",
      price: 17,
      description: "Un frappe, pero de especialidad.",
      tags: [],
      video: "/carta/la frescura del grano/Frappe_Don_Salazar_comprimido.mp4",
    },
    {
      name: "Frappe de Oreo",
      price: 18,
      description: "Un frappe de Oreo, pero de especialidad.",
      tags: [],
      video: "/carta/la frescura del grano/Frappe_de_Oreo_comprimido.mp4",
    },
    {
      name: "Sparkling Coffee Clásico",
      price: 17,
      description:
        "Café con limón, jarabe de goma, Ginger Ale y un toque burbujeante de cold brew.",
      tags: [],
      video:
        "/carta/la frescura del grano/Sparkling_Coffee_Clasico_comprimido.mp4",
    },
    {
      name: "Sparkling Coffee Maracumango",
      price: 19,
      description:
        "Mix de maracuyá, mango y limón, con Ginger Ale burbujeante y un toque de cold brew.",
      tags: [],
      video:
        "/carta/la frescura del grano/Sparkling_Maracumango_comprimido.mp4",
    },
    {
      name: "Sparkling Dragon Coffee",
      price: 20,
      description:
        "Burbujeante mezcla de frutos rojos y limón, con Ginger Ale y un toque de cold brew.",
      tags: [],
      video:
        "/carta/la frescura del grano/Sparkling_Dragon_Coffee_comprimido.mp4",
    },
  ],
  "bebidas-sin-cafe": [
    {
      name: "Jugo de Naranja",
      price: 12,
      description: "El clásico jugo de naranja natural exprimido al momento.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Chocolate Caliente",
      price: 14,
      description:
        "Caliente, elaborado con chocolate derretido y leche cremosa. ",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Orange Fizz",
      price: 15,
      description:
        "Bebida burbujeante de naranja con un toque cítrico y dulce.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Tropical Fizz",
      price: 15,
      description: "Refresco con gas, mezcla de sabores tropicales frutales.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Alivio Don Salazar",
      price: 14,
      description: "Infusión natural con hierbas que ayudan a la digestión.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Amor de Jamaica",
      price: 14,
      description:
        "Infusión caliente de flor de jamaica, con sabor refrescante y ligeramente ácido.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Cerveza Don Salazar",
      price: 25,
      description:
        "Cerveza artesanal de la casa elaborada con nuestro café de especialidad, sabor único, equilibrado y refrescante.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Agua Evian con Gas",
      price: 13,
      description: "Agua de 330 ml de manantial con gas.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Agua Evian sin Gas",
      price: 13,
      description: "Agua de 500 ml de manantial sin gas.",
      tags: [],
      video: "/cafe.mp4",
    },
  ],
  piqueos: [
    {
      name: "Bowl Delicia del Sol",
      price: 32,
      description: "Bowl fresco con frutas, yogurt y granola artesanal.",
      tags: ["Selección de la Casa"],
      video: "/cafe.mp4",
    },
    {
      name: "Pizza del Don",
      price: 25,
      description:
        "Base de croissant hojaldrado con queso fundido, pollo, tomate, albahaca y salsa de yogurt para un toque cremoso y equilibrado.",
      tags: ["Selección de la Casa"],
      video: "/cafe.mp4",
    },
    {
      name: "5 Mini Churros con Queso y Jamón",
      price: 18,
      description: "",
      tags: ["Selección de la Casa"],
      video: "/cafe.mp4",
    },
    {
      name: "Tabla de Quesos",
      price: 35,
      description:
        "Cubos de queso con hierbas, jamón pizzero, salame y frutos rojos en almibar.",
      tags: ["Selección de la Casa"],
      video: "/cafe.mp4",
    },
  ],
  salados: [
    {
      name: "Empanada de Carne Prime",
      price: 12,
      description:
        "El clásico irresistible, relleno de abundante carne jugosa de res.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Croissant de Pollo",
      price: 20,
      description:
        "Croissant de mantequilla y hojaldrado, relleno de pollo desmenuzado con mayonesa casera.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Empanada Bechamel",
      price: 12,
      description:
        "Rellena de jugoso pollo, champiñones frescos y una suave salsa bechamel.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Tostón con Palta y Pollo",
      price: 24,
      description:
        "Pan campesino con palta y mantequilla bañado en aceite de oliva.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Empanada Napolitana",
      price: 12,
      description:
        "Relleno mediterráneo de tomate, mozzarella, jamón y albahaca.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Maison QhiChé",
      price: 25,
      description:
        "Tarta salada con base crujiente, rellena de vegetales y queso.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Empanada Cheese Burger",
      price: 14,
      description:
        "Empanada rellena de carne, queso y sabor estilo hamburguesa.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Focaccia Capresse",
      price: 19,
      description:
        "Pan focaccia con mantequilla cajamarquina, tomate, mozzarella, albahaca y aceite de oliva.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Sandwich de Pollo",
      price: 15,
      description: "Pechuga de pollo desmenuzada con cremosa mayonesa casera.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Croissant Mixto",
      price: 17,
      description:
        "Croissant de mantequilla relleno de jamón de pierna y queso cajamarquino.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Focaccia Ahumado",
      price: 25,
      description:
        "Pan focaccia con mantequilla cajamarquina, tocino, lomo ahumado, mozzarella y salsa especial.",
      tags: [],
      video: "/cafe.mp4",
    },
  ],
  dulces: [
    {
      name: "Galletas Chocochip",
      price: 7,
      description:
        "Galleta grande y suave con abundantes chispas de chocolate.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Brownie",
      price: 9,
      description:
        "Brownie de chocolate intenso con vainilla, nueces y fudge casero.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Muffin Triple Chocolate",
      price: 12,
      description:
        "Muffin esponjoso de cacao intenso con trozos y chispas de chocolate.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Muffin de Queso y Arándanos",
      price: 12,
      description: "Muffin esponjoso de queso crema con arándanos frescos.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Galletón de Nutella",
      price: 12,
      description: "Galleta grande y suave, rellena de cremosa Nutella.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Crumble Cookie Pistacho",
      price: 12,
      description: "Galleta suave con crumble crocante y trozos de pistacho.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Torta de Chocolate",
      price: 18,
      description: "Bizcocho de chocolate húmedo con abundante fudge casero.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Queque Artesanal",
      price: 12,
      description: "El clásico de clásicos. Consultar sabores disponibles.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Affogato",
      price: 18,
      description: "Helado de vainilla Madagascar con un shot de espresso.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Carrot Cake",
      price: 18,
      description: "Pastel de zanahoria con nueces y cremoso queso crema.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Cheesecake Maracumango",
      price: 18,
      description:
        "Cheesecake cremoso con base crujiente y topping de maracuyá y mango.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Cheesecake Frutos Rojos",
      price: 18,
      description: "Cheesecake cremoso con cobertura de frutos rojos frescos.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Waffle",
      price: 25,
      description: "Waffles con arándanos y fresa bañados en miel.",
      tags: [],
      video: "/cafe.mp4",
    },
  ],
  cocteles: [
    {
      name: "La Chica del Bikini Azul",
      price: 28,
      description:
        "Cóctel refrescante de pisco, curacao azul, naranja, limón, Ginger Ale y cold brew.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "La Incondicional",
      price: 28,
      description:
        "Mezcla de pisco, maracumango, limón y menta fresca, con un toque de Ginger Ale y cold brew.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Sex on the Farm",
      price: 28,
      description:
        "Cóctel de pisco con frutos rojos, fresa, menta, Ginger Ale y cold brew.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Pisco Sour Tradicional",
      price: 28,
      description:
        "Pisco aromático, limón, jarabe de goma y clara de huevo, con un toque de angostura.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Don Kofi Sour",
      price: 32,
      description:
        "El tradicional pisco sour al estilo Don Salazar: con licor de café, Amaretto y el café de la casa.",
      tags: [],
      video: "/cafe.mp4",
    },
    {
      name: "Don Espresso Martini",
      price: 38,
      description:
        "Una elegante y cremosa mezcla de vodka, licor de café, jarabe de caramelo y el café de la casa.",
      tags: [],
      video: "/cafe.mp4",
    },
  ],
};

export const sistemaRecomendacion: SistemaRecomendacion = {
  catalogo: {
    granos: {
      el_obata: {
        nombre: "El obatá",
        descripcion:
          "Un café de sabor reconfortante y familiar, con notas claras a chocolate con leche, nueces tostadas y un dulzor a caramelo. Es bajo en acidez y tiene un cuerpo cremoso.",
      },
      el_balanceado: {
        nombre: "El balanceado",
        descripcion:
          "La taza perfecta para quienes buscan equilibrio. Combina la dulzura del chocolate con un toque frutal muy sutil, resultando en una bebida amable y fácil de tomar.",
      },
      el_tupi: {
        nombre: "El tupí",
        descripcion:
          "Una experiencia vibrante y refrescante. Este café explota con sabores a frutos rojos y cítricos como la mandarina, con una acidez brillante que lo hace muy jugoso en boca.",
      },
    },
    metodos: {
      v60: {
        nombre: "V60",
        descripcion:
          "Es un método de filtrado que produce una bebida increíblemente limpia, delicada y ligera, muy parecida a un té, donde podemos apreciar las notas más sutiles y la acidez de tu café.",
      },
      aeropress: {
        nombre: "Aeropress",
        descripcion:
          "Este método combina inmersión y presión. Logra una taza redonda, sedosa y muy rica en sabor, pero sin amargura ni sedimentos, ideal si buscas más cuerpo.",
      },
      sifon_japones: {
        nombre: "Sifón Japonés",
        descripcion:
          "Más que un método, es un espectáculo. Usando vacío y presión de vapor, se crea la taza más aromática y compleja de todas, con una claridad excepcional. Es una experiencia única.",
      },
    },
    tazas: {
      taza_cerrada: {
        nombre: "Taza cerrada",
        descripcion:
          "Su diseño con una boca más estrecha está pensado para capturar y concentrar todos los aromas. Es perfecta para una experiencia aromática completa y mantiene tu bebida caliente.",
      },
      copa_hielo: {
        nombre: "Copa con Hielo",
        descripcion:
          "Ideal para una bebida refrescante. El vidrio no retiene sabores y la forma abierta permite disfrutar del café frío de forma rápida y directa.",
      },
      taza_abierta: {
        nombre: "Taza abierta",
        descripcion:
          "La taza clásica y cómoda. Su boca ancha permite que el café se enfríe un poco más rápido, ideal para beber de forma más casual y sin complicaciones.",
      },
    },
  },
  cuestionario: [
    {
      pregunta:
        "Cuando piensas en tu momento ideal con un café, ¿qué sabores te atraen más?",
      opciones: [
        {
          texto: "Frutas y notas cítricas. Busco algo vibrante y refrescante.",
          recomienda: { tipo: "granos", clave: "el_tupi" },
        },
        {
          texto: "Chocolate, nueces y caramelo. Prefiero un sabor más clásico.",
          recomienda: { tipo: "granos", clave: "el_obata" },
        },
        {
          texto: "Un poco de todo. Busco un equilibrio perfecto, sin extremos.",
          recomienda: { tipo: "granos", clave: "el_balanceado" },
        },
      ],
    },
    {
      pregunta: "¿Cómo describirías la sensación que buscas en tu taza?",
      opciones: [
        {
          texto: "Ligera y delicada, casi como un té, muy limpia.",
          recomienda: { tipo: "metodos", clave: "v60" },
        },
        {
          texto: "Con cuerpo y una textura sedosa, que se sienta presente.",
          recomienda: { tipo: "metodos", clave: "aeropress" },
        },
        {
          texto: "Intensa y memorable. Una experiencia fuera de lo común.",
          recomienda: { tipo: "metodos", clave: "sifon_japones" },
        },
      ],
    },
    {
      pregunta: "Finalmente, ¿cómo quieres disfrutar tu café en este momento?",
      opciones: [
        {
          texto: "Caliente y muy aromático, para disfrutar con calma.",
          recomienda: { tipo: "tazas", clave: "taza_cerrada" },
        },
        {
          texto: "Refrescante y frío, para un día caluroso.",
          recomienda: { tipo: "tazas", clave: "copa_hielo" },
        },
        {
          texto: "Caliente y práctico, una taza clásica y cómoda.",
          recomienda: { tipo: "tazas", clave: "taza_abierta" },
        },
      ],
    },
  ],
};

// Nuevas constantes para el flujo de selección de café
export const coffeeTypes: CoffeeType[] = [
  {
    id: "el_obata",
    name: "El obatá",
    description:
      "Un café de sabor reconfortante y familiar, con notas claras a chocolate con leche, nueces tostadas y un dulzor a caramelo. Es bajo en acidez y tiene un cuerpo cremoso.",
    icon: "☕",
    img: "/experiences/obata.png",
    price: 20,
  },
  {
    id: "el_balanceado",
    name: "El balanceado",
    description:
      "La taza perfecta para quienes buscan equilibrio. Combina la dulzura del chocolate con un toque frutal muy sutil, resultando en una bebida amable y fácil de tomar.",
    icon: "⚖️",
    img: "/experiences/balanceado.png",
    price: 20,
  },
  {
    id: "el_tupi",
    name: "El tupí",
    description:
      "Una experiencia vibrante y refrescante. Este café explota con sabores a frutos rojos y cítricos como la mandarina, con una acidez brillante que lo hace muy jugoso en boca.",
    icon: "🍊",
    img: "/experiences/tupi.png",
    price: 20,
  },
];

export const brewingMethods = [
  // Métodos de Filtrado
  {
    id: "v60",
    name: "V60",
    description:
      "Es un método de filtrado que produce una bebida increíblemente limpia, delicada y ligera, muy parecida a un té, donde podemos apreciar las notas más sutiles y la acidez de tu café.",
    type: "filtrado",
    icon: "⚪",
    img: "/experiences/v60.png",
    extraCost: 0,
  },
  {
    id: "chemex",
    name: "Chemex",
    description:
      "Método de filtrado que produce una taza muy limpia y brillante, con cuerpo medio y excelente claridad de sabores.",
    type: "filtrado",
    icon: "🧪",
    img: "/experiences/chemex.png",
    extraCost: 0,
  },
  {
    id: "origami",
    name: "Origami",
    description:
      "Dripper versátil que permite diferentes técnicas de extracción, produciendo tazas complejas y balanceadas.",
    type: "filtrado",
    icon: "📐",
    img: "/experiences/origami.png",
    extraCost: 0,
  },
  {
    id: "sifon_japones",
    name: "Sifón Japonés",
    description:
      "Más que un método, es un espectáculo. Usando vacío y presión de vapor, se crea la taza más aromática y compleja de todas, con una claridad excepcional. Es una experiencia única.",
    type: "inmersion",
    icon: "🔬",
    img: "/experiences/sifon_japones.png",
    extraCost: 10,
  },
  // Métodos de Inmersión
  {
    id: "aeropress",
    name: "Aeropress",
    description:
      "Este método combina inmersión y presión. Logra una taza redonda, sedosa y muy rica en sabor, pero sin amargura ni sedimentos, ideal si buscas más cuerpo.",
    type: "inmersion",
    icon: "🔄",
    img: "/experiences/aeropress.png",
    extraCost: 0,
  },
  {
    id: "press2go",
    name: "Press2go",
    description:
      "Método de inmersión portátil que produce una taza con cuerpo completo y sabores concentrados, perfecto para llevar.",
    type: "inmersion",
    icon: "🚀",
    img: "/experiences/press2go.png",
    extraCost: 0,
  },
];

export const cupTypes = [
  {
    id: "taza_abierta",
    name: "Taza abierta",
    description:
      "La taza clásica y cómoda. Su boca ancha permite que el café se enfríe un poco más rápido, ideal para beber de forma más casual y sin complicaciones.",
    icon: "☕",
    img: "/experiences/abierto.png",
  },
  {
    id: "taza_cerrada",
    name: "Taza cerrada",
    description:
      "Su diseño con una boca más estrecha está pensado para capturar y concentrar todos los aromas. Es perfecta para una experiencia aromática completa y mantiene tu bebida caliente.",
    icon: "🫖",
    img: "/experiences/cerrado.png",
  },
  {
    id: "copa",
    name: "Copa",
    description:
      "Elegante copa de vidrio que permite apreciar visualmente el café y concentra los aromas para una experiencia sensorial completa.",
    icon: "🍷",
    img: "/experiences/copa.png",
  },
  {
    id: "copa_hielo",
    name: "Copa con hielo",
    description:
      "Ideal para una bebida refrescante. El vidrio no retiene sabores y la forma abierta permite disfrutar del café frío de forma rápida y directa.",
    icon: "🧊",
    img: "/experiences/copa_con_hielo.png",
  },
];

// Talleres Don Salazar
export const workshops = [
  {
    id: "coffee-for-dummies",
    name: "Coffee for Dummies",
    subtitle: "El taller donde aprender de café es tan fácil como tomarlo.",
    description:
      "No necesitas saber nada. Solo necesitas las ganas de aprender, reírte y llevarte una experiencia que, créenos, vas a recordar cada vez que huelas café.",
    icon: "☕",
    characteristics: [
      "Aprendes lo básico sin aburrirte",
      "Toda la cadena de valor del café",
      "Usas tus manos",
      "Te llevas el dato",
      "Lo disfrutas",
    ],
    benefits: [
      "Qué es el café de especialidad, cómo se prepara, qué tipos existen",
      "Desde la finca hasta la taza final",
      "Tú preparas tu propia taza con métodos fáciles y pro",
      "Molienda, tueste, ratio y más",
      "Es en grupo, es relajado, es divertido",
    ],
    idealFor:
      "Es ideal si estás empezando, si amas el café pero no sabes por qué, o si simplemente quieres vivir algo distinto con tu gente.",
    pricing: {
      single: 149,
      double: 250,
    },
    duration: "2 horas",
    type: "Teórico y práctico",
    whatsappLink: "https://wa.link/mvt90k",
  },
  {
    id: "arte-latte-for-dummies",
    name: "Arte Latte para Dummies",
    subtitle: "La espuma nunca fue tan divertida.",
    description:
      "Este taller es para quienes quieren ir más allá del café… y entrar al mundo donde la leche se convierte en arte. Sí, vas a dibujar con leche. Y lo vas a hacer tú mism@. 💫",
    icon: "🎨",
    characteristics: [
      "Aprendes a texturizar leche como un pro",
      "Practicas y juegas",
      "Te ríes",
      "Te llevas la experiencia completa",
    ],
    benefits: [
      "Cremosa, sedosa, brillante… esa que hace que el café parezca de revista",
      "Te enseñamos los trucos, los movimientos, y luego… ¡a crear corazones, tulipanes, espirales y mucho más!",
      "Porque acá no importa si te sale un cisne o una nube amorfa. Lo importante es disfrutar el proceso",
      "Tips de barista, técnica real, y mucho estilo para cuando quieras lucirte",
    ],
    idealFor:
      "Es perfecto para los que aman el café con leche y quieren aprender a hacer dibujos en su taza",
    pricing: {
      single: 149,
      double: 250,
    },
    duration: "2 horas",
    type: "Teórico y práctico",
    whatsappLink: "https://wa.link/wgjwng",
  },
  {
    id: "extraccion-metodos-barista",
    name: "Extracción de métodos de barista para Dummies",
    subtitle: "El taller donde te enamoras (de verdad) del café.",
    description:
      "Si ya probaste café de especialidad y te sorprendió… espera a prepararlo tú mismo. Este taller es para los curiosos, los que quieren entender por qué un mismo café puede saber tan distinto… solo cambiando el método o la manera de prepararlo.",
    icon: "⚗️",
    characteristics: [
      "Te presentamos los métodos top del mundo barista",
      "Aprendes qué los hace únicos",
      "Comparas, pruebas y alucinas",
      "Te vas con el conocimiento y el paladar afinado",
    ],
    benefits: [
      "V60, Chemex, Aeropress, Sifón Japonés… sí, esos que siempre ves en Instagram",
      "Tiempo, temperatura, molienda, filtros… todo explicado fácil y sin complicaciones",
      "Preparas el mismo café en diferentes métodos y descubres cómo cambia el sabor",
      "Para que nunca más vuelvas a tomar café quemado",
    ],
    idealFor:
      "Este taller es para quienes quieren dar el siguiente paso, para los que aman experimentar, o simplemente para vivir una experiencia sensorial diferente.",
    pricing: {
      single: 179,
      double: 310,
    },
    duration: "2 horas",
    type: "Teórico y práctico",
    whatsappLink: "https://wa.link/3rh5dv",
  },
];
