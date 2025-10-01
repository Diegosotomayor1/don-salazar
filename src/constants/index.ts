import { Category, CoffeeType, SistemaRecomendacion } from "@/types";

export const coffeeCategories: Category[] = [
  {
    id: "cafes-de-siempre",
    name: "Los Cafés de Siempre",
    description: "Clásicos espressos, lattes y cappuccinos",
    icon: "☕",
    characteristics: ["Clásico", "Tradicional", "Espresso"],
    qrId: "1",
  },
  {
    id: "bebidas-frias-cafe",
    name: "Bebidas Frías con Café",
    description: "Refrescantes combinaciones con café",
    icon: "🧊",
    characteristics: ["Refrescante", "Frío", "Innovador"],
    qrId: "2",
  },
  {
    id: "bebidas-sin-cafe",
    name: "Bebidas sin Café",
    description: "Tés, chocolates y jugos naturales",
    icon: "🫖",
    characteristics: ["Sin Cafeína", "Natural", "Variado"],
    qrId: "3",
  },
  {
    id: "cocteles",
    name: "Cócteles",
    description: "Mezclas únicas con y sin alcohol",
    icon: "🍸",
    characteristics: ["Premium", "Único", "Sofisticado"],
    qrId: "4",
  },
  {
    id: "salados",
    name: "Salados",
    description: "Empanadas, sándwiches y croissants",
    icon: "🥪",
    characteristics: ["Fresco", "Artesanal", "Sabroso"],
    qrId: "5",
  },
  {
    id: "dulces",
    name: "Dulces",
    description: "Postres, tortas y galletas caseras",
    icon: "🍰",
    characteristics: ["Dulce", "Casero", "Irresistible"],
    qrId: "6",
  },
];

// Productos por categoría
export const menuProducts = {
  "cafes-de-siempre": [
    {
      name: "Espresso",
      price: 8,
      description: "Doble shot de sabor intenso y aroma envolvente.",
      tags: ["Alto en cafeína"],
    },
    {
      name: "Espresso Doble",
      price: 12,
      description: "Doble intensidad para los amantes del café puro.",
      tags: ["Alto en cafeína"],
    },
    {
      name: "Ristretto",
      price: 8,
      description: "Espresso concentrado con máxima intensidad.",
      tags: ["Alto en cafeína"],
    },
    {
      name: "Americano",
      price: 11,
      description: "Espresso alargado con agua caliente.",
      tags: [],
    },
    {
      name: "Macchiato",
      price: 11,
      description: "Espresso intenso con un toque de leche líquida.",
      tags: [],
    },
    {
      name: "Cortado",
      price: 11,
      description: "Equilibrio perfecto entre espresso y leche.",
      tags: [],
    },
    {
      name: "Cappuccino",
      price: 13,
      description: "Espresso con leche vaporizada y espuma cremosa.",
      tags: [],
    },
    {
      name: "Latte",
      price: 13,
      description: "Espresso suave con abundante leche vaporizada.",
      tags: [],
    },
    {
      name: "Vainilla Latte",
      price: 16,
      description:
        "Espresso intenso con leche vaporizada y sabor irresistible a vainilla.",
      tags: [],
    },
    {
      name: "Pink Latte",
      price: 16,
      description:
        "Espresso intenso con leche vaporizada y sabor exquisito a fresa.",
      tags: [],
    },
    {
      name: "Mocaccino",
      price: 15,
      description: "Deliciosa combinación de espresso, chocolate y leche.",
      tags: [],
    },
    {
      name: "Flat White",
      price: 14,
      description: "Espresso doble con microespuma de leche.",
      tags: [],
    },
    {
      name: "Stumpy",
      price: 15,
      description: "Especialidad de la casa con carácter único.",
      tags: ["Recomendación del barista"],
    },
  ],
  "bebidas-frias-cafe": [
    {
      name: "Sparkling Coffee Clásico",
      price: 17,
      description:
        "Combinación perfecta de café y cítricos en una bebida refrescante. Limón y jarabe de goma como base, relleno de un mix entre agua gasificada y Ginger Ale para una experiencia burbujeante y toque final de cold brew.",
      tags: [],
    },
    {
      name: "Sparkling Coffee Maracumango",
      price: 19,
      description:
        "Deliciosa mezcla de maracuyá y mango, junto con un toque cítrico de limón y relleno de Ginger Ale burbujeante. Complementado finalmente con la energía del cold brew.",
      tags: [],
    },
    {
      name: "Sparkling Dragon Coffee",
      price: 20,
      description:
        "Bebida burbujeante que combina la dulzura de los frutos rojos con el toque cítrico de limón, creando una explosión de sabores frutales. Complementado finalmente con Ginger Ale burbujeante y cold brew.",
      tags: [],
    },
    {
      name: "Americano Frío",
      price: 12,
      description: "El clásico americano en una versión refrescante con hielo.",
      tags: [],
    },
    {
      name: "Frappe Don Salazar",
      price: 17,
      description: "Un frappe, pero de especialidad.",
      tags: [],
    },
    {
      name: "Frappe de Oreo",
      price: 18,
      description: "Un frappe de Oreo, pero de especialidad.",
      tags: [],
    },
    {
      name: "Iced Latte",
      price: 16,
      description: "Shot de espresso con leche fresca y abundante hielo.",
      tags: [],
    },
    {
      name: "Iced Vainilla Latte",
      price: 16,
      description:
        "Shot de espresso con leche fresca, esencia de vainilla y abundante hielo.",
      tags: [],
    },
    {
      name: "Iced Pink Latte",
      price: 16,
      description:
        "Shot de espresso con leche fresca, fresas y abundante hielo.",
      tags: [],
    },
    {
      name: "Orange Coffee",
      price: 16,
      description:
        "Refrescante jugo de naranja natural con doble shot de cold brew.",
      tags: [],
    },
    {
      name: "Cold Brew",
      price: 17,
      description:
        "Café filtrado en frío durante 24 horas en la majestuosa torre Yamacold.",
      tags: ["Recomendación del barista", "Alto en cafeína"],
    },
  ],
  "bebidas-sin-cafe": [
    {
      name: "Chocolate Caliente",
      price: 14,
      description:
        "El tradicional chocolate caliente, elaborado con chocolate derretido y leche cremosa.",
      tags: [],
    },
    {
      name: "Té Artesanal de Frutos Rojos",
      price: 14,
      description:
        "Deliciosa infusión artesanal de fresa, arándanos y un toque final de menta.",
      tags: [],
    },
    {
      name: "Jugo de Naranja",
      price: 12,
      description: "El clásico jugo de naranja natural exprimido al momento.",
      tags: [],
    },
    {
      name: "Agua Evian con Gas",
      price: 13,
      description: "Agua de 330 ml de manantial con gas.",
      tags: [],
    },
    {
      name: "Agua Evian sin Gas",
      price: 13,
      description: "Agua de 500 ml de manantial sin gas.",
      tags: [],
    },
  ],
  cocteles: [
    {
      name: "La Chica del Bikini Azul",
      price: 28,
      description:
        "Refrescante y vibrante, a base de pisco, curacao azul, jugo de naranja, Ginger Ale, limón, jarabe de goma y un toque de cold brew.",
      tags: [],
    },
    {
      name: "La Incondicional",
      price: 28,
      description:
        "Mezcla de pisco, maracumango, limón y menta fresca, con un toque de Ginger Ale y la suavidad del cold brew.",
      tags: [],
    },
    {
      name: "Sex on the Farm",
      price: 28,
      description:
        "Combinación de pisco, jarabe de frutos rojos, fresa y cold brew, realzada con menta fresca y un toque chispeante de Ginger Ale.",
      tags: [],
    },
    {
      name: "Don Espresso Martini",
      price: 38,
      description:
        "Una elegante y cremosa mezcla de vodka, licor de café, jarabe de caramelo y el café de la casa.",
      tags: [],
    },
    {
      name: "Pisco Sour Tradicional",
      price: 28,
      description:
        "Pisco aromático, limón, jarabe de goma y clara de huevo, con un toque de angostura. ¡Un clásico irresistible!",
      tags: [],
    },
    {
      name: "Don Kofi Sour",
      price: 32,
      description:
        "El tradicional pisco sour al estilo Don Salazar: con licor de café, Amaretto y el café de la casa.",
      tags: [],
    },
  ],
  salados: [
    {
      name: "Empanada de Carne Prime",
      price: 12,
      description:
        "El clásico irresistible, relleno de abundante carne jugosa de res.",
      tags: [],
    },
    {
      name: "Croissant Mixto",
      price: 17,
      description:
        "Delicioso croissant de mantequilla relleno de generosas porciones de jamón de pierna y queso cajamarquino.",
      tags: [],
    },
    {
      name: "Empanada Napolitana",
      price: 12,
      description:
        "Explosión de sabor mediterráneo, con un relleno de tomate fresco, mozzarella derretida, jamón jugoso y albahaca aromática.",
      tags: [],
    },
    {
      name: "Empanada Bechamel",
      price: 12,
      description:
        "Rellena de jugoso pollo, champiñones frescos y una suave salsa bechamel.",
      tags: [],
    },
    {
      name: "Sándwich de Pollo",
      price: 15,
      description:
        "Deliciosa y tradicional pechuga de pollo desmenuzada, tierna y jugosa. Bañada en una exquisita mayonesa casera.",
      tags: [],
    },
    {
      name: "Sándwich Capresse",
      price: 19,
      description:
        "Crujiente pan campesino dorado con exquisita mantequilla cajamarquina, relleno de finas láminas de tomate jugoso, mozzarella cremosa, hojas de albahaca y bañado en aceite de oliva.",
      tags: [],
    },
    {
      name: "Sándwich Ahumado",
      price: 25,
      description:
        "Crujiente pan campesino dorado con exquisita mantequilla cajamarquina, relleno de una combinación deliciosa de tocino crujiente, láminas de lomo ahumado, mozzarella cremosa y bañado con la salsa especial de la casa.",
      tags: ["Recomendación del barista"],
    },
    {
      name: "Croissant de Pollo",
      price: 19,
      description:
        "Clásico croissant de mantequilla ligero y hojaldrado, relleno de pollo desmenuzado con mayonesa casera.",
      tags: [],
    },
  ],
  dulces: [
    {
      name: "Galleta de Chispas de Chocolate",
      price: 7,
      description:
        "Galleta grande, suave y esponjosa, rellena de abundantes chispas de chocolate. Con una textura crujiente y sabrosa.",
      tags: [],
    },
    {
      name: "Galletón de Nutella",
      price: 12,
      description:
        "Galleta grande, suave y esponjosa, rellena de abundante crema de Nutella. Con una textura ligeramente crujiente por fuera y cremosa por dentro.",
      tags: [],
    },
    {
      name: "Muffin Triple Chocolate",
      price: 12,
      description:
        "Esponjoso muffin hecho con cacao intenso, trozos de chocolate bitter y chispas de chocolate.",
      tags: [],
    },
    {
      name: "Muffin de Queso y Arándanos",
      price: 12,
      description:
        "Esponjoso muffin elaborado con queso crema y arándanos frescos que añaden un dulzor especial.",
      tags: [],
    },
    {
      name: "Brownie",
      price: 9,
      description:
        "Postre irresistible, con textura densa y suave. Elaborado con chocolate intenso, toque de vainilla y nueces, finalmente bañado en delicioso fudge de la casa.",
      tags: [],
    },
    {
      name: "Torta de Chocolate",
      price: 18,
      description:
        "Delicioso postre clásico con capas suaves y húmedas de bizcocho de chocolate. Bañado en abundante fudge de la casa.",
      tags: [],
    },
    {
      name: "Carrot Cake",
      price: 18,
      description:
        "Pastel húmedo y esponjoso, elaborado con zanahoria rallada, nueces, relleno y cubierto exquisito queso crema.",
      tags: [],
    },
    {
      name: "Cheesecake Maracumango",
      price: 18,
      description:
        "Postre exótico y cremoso, con una base de galleta crujiente, un relleno suave de queso francés y un topping tropical de maracuyá y mango.",
      tags: [],
    },
    {
      name: "Affogato",
      price: 18,
      description:
        "Bola de helado natural de vainilla Madagascar, cubierto de un shot de espresso, creando un contraste delicioso entre lo frío y lo caliente.",
      tags: [],
    },
    {
      name: "Queque Artesanal",
      price: 12,
      description: "El clásico de clásicos. Consultar sabores disponibles.",
      tags: [],
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
    price: 19,
  },
  {
    id: "el_balanceado",
    name: "El balanceado",
    description:
      "La taza perfecta para quienes buscan equilibrio. Combina la dulzura del chocolate con un toque frutal muy sutil, resultando en una bebida amable y fácil de tomar.",
    icon: "⚖️",
    img: "/experiences/balanceado.png",
    price: 17,
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
  },
  {
    id: "copa_hielo",
    name: "Copa con hielo",
    description:
      "Ideal para una bebida refrescante. El vidrio no retiene sabores y la forma abierta permite disfrutar del café frío de forma rápida y directa.",
    icon: "🧊",
  },
];
