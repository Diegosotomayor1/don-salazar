import {
  Category,
  CoffeeType,
  MenuProducts,
  SistemaRecomendacion,
} from "@/types";

export const coffeeCategories: Category[] = [
  {
    id: "cafes-de-siempre",
    nameKey: "cafes-de-siempre.name",
    descriptionKey: "cafes-de-siempre.description",
    icon: "☕",
    characteristicsKeys: ["classic", "traditional", "espresso"],
    qrId: "1",
  },
  {
    id: "bebidas-frias-cafe",
    nameKey: "bebidas-frias-cafe.name",
    descriptionKey: "bebidas-frias-cafe.description",
    icon: "🧊",
    characteristicsKeys: ["refreshing", "cold", "innovative"],
    qrId: "2",
  },
  {
    id: "bebidas-sin-cafe",
    nameKey: "bebidas-sin-cafe.name",
    descriptionKey: "bebidas-sin-cafe.description",
    icon: "🍵",
    characteristicsKeys: ["no-caffeine", "natural", "varied"],
    qrId: "3",
  },
  {
    id: "cocteles",
    nameKey: "cocteles.name",
    descriptionKey: "cocteles.description",
    icon: "🍸",
    characteristicsKeys: ["premium", "unique", "sophisticated"],
    qrId: "4",
  },
  {
    id: "salados",
    nameKey: "salados.name",
    descriptionKey: "salados.description",
    icon: "🥪",
    characteristicsKeys: ["fresh", "artisan", "delicious"],
    qrId: "5",
  },
  {
    id: "dulces",
    nameKey: "dulces.name",
    descriptionKey: "dulces.description",
    icon: "🍰",
    characteristicsKeys: ["sweet", "homemade", "irresistible"],
    qrId: "6",
  },
  {
    id: "piqueos",
    nameKey: "piqueos.name",
    descriptionKey: "piqueos.description",
    icon: "🥘",
    characteristicsKeys: ["sharing", "varied"],
    qrId: "7",
  },
  {
    id: "talleres",
    nameKey: "talleres.name",
    descriptionKey: "talleres.description",
    icon: "🎓",
    characteristicsKeys: ["educational", "practical", "experiential"],
    qrId: "8",
  },
];

// Productos por categoría
export const menuProducts: Record<string, MenuProducts[]> = {
  "cafes-de-siempre": [
    {
      id: "espresso",
      name: "Espresso",
      price: 8,
      description: "Un shot de sabor intenso y aroma envolvente. ",
      tags: ["Alto en cafeína"],
      video: "/carta/el calor del grano/espresso_comprimido.mp4",
      img: "/carta/el calor del grano/espresso simple.png",
    },
    {
      id: "espresso-doble",
      name: "Espresso Doble",
      price: 12,
      description: "Doble shot de sabor intenso y aroma envolvente. ",
      tags: ["Alto en cafeína"],
      video:
        "/carta/el calor del grano/Espresso_Doble_Nueva_Carta_comprimido.mp4",
      img: "/carta/el calor del grano/espresso doble.png",
    },
    {
      name: "Americano",
      price: 11,
      description: "Suave y deliciosa mezcla de espresso y agua caliente. ",
      tags: [],
      video: "/carta/el calor del grano/Americano_nueva_carta_comprimido.mp4",
      img: "/carta/el calor del grano/americano.png",
    },
    {
      name: "Macchiato",
      price: 11,
      description:
        'Macchiato o "Manchado" es un espresso intenso con un toque de espuma de leche. ',
      tags: [],
      video: "/carta/el calor del grano/macchiato_nueva_carta_comprimido.mp4",
      img: "/carta/el calor del grano/macchiato.png",
    },
    {
      name: "Cortado",
      price: 11,
      description: "Espresso intenso con un toque de leche liquida. ",
      tags: [],
      video: "/carta/el calor del grano/Cortado_nueva_carta_comprimido.mp4",
      img: "/carta/el calor del grano/cortado.png",
    },
    {
      name: "Cappuccino",
      price: 13,
      description:
        "Mezcla de espresso, leche vaporizada y una densa capa de espuma. ",
      tags: [],
      video: "/carta/el calor del grano/Cappuccino_nueva_carta_comprimido.mp4",
      img: "/carta/el calor del grano/capuccino.png",
    },
    {
      name: "Latte",
      price: 13,
      description: "Espresso suave con abundante leche vaporizada. ",
      tags: [],
      video: "/carta/el calor del grano/Latte_nueva_carta_comprimido.mp4",
      img: "/carta/el calor del grano/Latte.png",
    },
    {
      name: "Mocaccino",
      price: 15,
      description:
        "Combinación perfecta de espresso, leche vaporizada y chocolate. ",
      tags: [],
      video: "/carta/el calor del grano/mocaccino_comprimido.mp4",
      img: "/carta/el calor del grano/mocaccino.png",
    },
    {
      name: "Flat White",
      price: 14,
      description: "Espresso intenso y microespuma suave. ",
      tags: [],
      video: "/carta/el calor del grano/Flat_white_nueva_carta_comprimido.mp4",
      img: "/carta/el calor del grano/flat_white.png",
    },
    {
      name: "Stumpy",
      price: 14,
      description: "Espresso doble, leche vaporizada y microespuma suave. ",
      tags: [],
      video: "/carta/el calor del grano/Stumpy_Nueva_Carta_comprimido.mp4",
      img: "/carta/el calor del grano/stumpy.png",
    },
    {
      name: "White Cappuccino",
      price: 16,
      description:
        "Espresso intenso con leche vaporizada y sabor irresistible a vainilla. ",
      tags: [],
      video:
        "/carta/el calor del grano/White_Cappuccino_Nueva_Carta_comprimido.mp4",
      img: "/carta/el calor del grano/White Cappuccino.jpg",
    },
    {
      name: "Pink Cappuccino",
      description:
        "Espresso intenso con leche vaporizada y sabor exquisito a fresa. ",
      price: 16,
      tags: [],
      video:
        "/carta/el calor del grano/Pink_Cappuccino_nueva_carta_comprimido.mp4",
      img: "/carta/el calor del grano/pink cappuccino.png",
    },
    {
      name: "Green Cappuccino",
      description:
        "Espresso intenso con leche vaporizada con un toque de menta. ",
      price: 16,
      tags: [],
      video: "/carta/el calor del grano/Green_cappuccino_comprimido.mp4",
      img: "/carta/el calor del grano/green cappuccino.png",
    },
    {
      name: "Black Cappuccino ★",
      description:
        "Espresso intenso con leche vaporizada y con un toque caramel con carbón activado. ",
      price: 17,
      tags: [],
      video: "/carta/el calor del grano/Black_Cappuccino_comprimido.mp4",
      img: "/carta/el calor del grano/black_cappuccino.png",
    },
  ],
  "bebidas-frias-cafe": [
    {
      name: "Americano Frío",
      price: 12,
      description: "El clásico americano en una versión refrescante con hielo.",
      tags: [],
      video: "/carta/la frescura del grano/Americano_Frio_comprimido.mp4",
      img: "/carta/la frescura del grano/americano frio_1.png",
    },
    {
      name: "Orange Coffee",
      price: 16,
      description:
        "Refrescante jugo de naranja natural con doble shot de cold brew.",
      tags: [],
      video: "/carta/la frescura del grano/Orange_Coffee_comprimido.mp4",
      img: "/carta/la frescura del grano/orange coffee.png",
    },
    {
      name: "Iced Cappuccino",
      price: 17,
      description: "Shot de espresso con leche y abundante hielo.",
      tags: [],
      video: "/carta/la frescura del grano/Iced_Cappuccino_comprimido.mp4",
      img: "/carta/la frescura del grano/iced cappuccino.png",
    },
    {
      name: "Iced White Cappuccino",
      price: 18,
      description:
        "Shot de espresso con leche fresca, esencia de vainilla y abundante hielo.",
      tags: [],
      video:
        "/carta/la frescura del grano/Iced_White_Cappuccino_comprimido.mp4",
      img: "/carta/la frescura del grano/iced white cappuccino.png",
    },
    {
      name: "Iced Pink Cappuccino",
      price: 18,
      description:
        "Shot de espresso con leche fresca, sabor a fresa y abundante hielo.",
      tags: [],
      video: "/carta/la frescura del grano/Iced_Pink_Cappuccino_comprimido.mp4",
      img: "/carta/la frescura del grano/iced pink cappuccino.png",
    },
    {
      name: "Iced Green Cappuccino",
      price: 18,
      description:
        "Shot de espresso con leche fresca, con un toque de menta y abundante hielo.",
      tags: [],
      video:
        "/carta/la frescura del grano/Iced_Green_Cappuccino_comprimido.mp4",
      img: "/carta/la frescura del grano/iced green cappuccino.png",
    },
    {
      name: "Iced Black Cappuccino",
      price: 19,
      description:
        "Shot de espresso con leche fresca, con un toque caramel con carbón activado y abundante hielo.",
      tags: [],
      video:
        "/carta/la frescura del grano/Iced_Black_Cappuccino_comprimido.mp4",
      img: "/carta/la frescura del grano/iced black cappuccino.png",
    },
    {
      name: "Cold Brew",
      price: 17,
      description:
        "Café filtrado en frío durante 24 horas en la majestuosa torre Yamacold.",
      tags: ["Alto en cafeína"],
      video: "/carta/la frescura del grano/Cold_Brew_comprimido.mp4",
      img: "/carta/la frescura del grano/cold brew.png",
    },
    {
      name: "Frappe Don Salazar",
      price: 17,
      description: "Un frappe, pero de especialidad.",
      tags: [],
      video: "/carta/la frescura del grano/Frappe_Don_Salazar_comprimido.mp4",
      img: "/carta/la frescura del grano/frappe don salazar.png",
    },
    {
      name: "Frappe de Oreo",
      price: 18,
      description: "Un frappe de Oreo, pero de especialidad.",
      tags: [],
      video: "/carta/la frescura del grano/Frappe_de_Oreo_comprimido.mp4",
      img: "/carta/la frescura del grano/frappe de oreo.png",
    },
    {
      name: "Sparkling Coffee Clásico",
      price: 17,
      description:
        "Café con limón, jarabe de goma, Ginger Ale y un toque burbujeante de cold brew.",
      tags: [],
      video:
        "/carta/la frescura del grano/Sparkling_Coffee_Clasico_comprimido.mp4",
      img: "/carta/la frescura del grano/sparkling clásico.png",
    },
    {
      name: "Sparkling Coffee Maracumango",
      price: 19,
      description:
        "Mix de maracuyá, mango y limón, con Ginger Ale burbujeante y un toque de cold brew.",
      tags: [],
      video:
        "/carta/la frescura del grano/Sparkling_Maracumango_comprimido.mp4",
      img: "/carta/la frescura del grano/sparkling coffee maracumango.png",
    },
    {
      name: "Sparkling Dragon Coffee",
      price: 20,
      description:
        "Burbujeante mezcla de frutos rojos y limón, con Ginger Ale y un toque de cold brew.",
      tags: [],
      video:
        "/carta/la frescura del grano/Sparkling_Dragon_Coffee_comprimido.mp4",
      img: "/carta/la frescura del grano/sparkling dragon coffee .png",
    },
  ],
  "bebidas-sin-cafe": [
    {
      name: "Jugo de Naranja",
      price: 12,
      description: "El clásico jugo de naranja natural exprimido al momento.",
      tags: [],
      video: "/cafe.mp4",
      img: "/carta/mas alla del grano/jugo de naranja.png",
    },
    {
      name: "Chocolate Caliente",
      price: 14,
      description:
        "Caliente, elaborado con chocolate derretido y leche cremosa. ",
      tags: [],
      video: "/cafe.mp4",
      img: "/carta/mas alla del grano/chocolate caliente.png",
    },
    {
      name: "Orange Fizz",
      price: 15,
      description:
        "Bebida burbujeante de naranja con un toque cítrico y dulce.",
      tags: [],
      video: "/cafe.mp4",
      img: "/carta/mas alla del grano/orange fizz.png",
    },
    {
      name: "Tropical Fizz",
      price: 15,
      description: "Refresco con gas, mezcla de sabores tropicales frutales.",
      tags: [],
      video: "/cafe.mp4",
      img: "/carta/mas alla del grano/tropical fizz.png",
    },
    {
      name: "Alivio Don Salazar",
      price: 14,
      description: "Infusión natural con hierbas que ayudan a la digestión.",
      tags: [],
      video: "/cafe.mp4",
      img: "/carta/mas alla del grano/alivio don salazar.png",
    },
    {
      name: "Amor de Jamaica",
      price: 14,
      description:
        "Infusión caliente de flor de jamaica, con sabor refrescante y ligeramente ácido.",
      tags: [],
      video: "/cafe.mp4",
      img: "/carta/mas alla del grano/amor de jamaica.png",
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
      img: "/carta/mas alla del grano/evián con gas_1.png",
    },
    {
      name: "Agua Evian sin Gas",
      price: 13,
      description: "Agua de 500 ml de manantial sin gas.",
      tags: [],
      video: "/cafe.mp4",
      img: "/carta/mas alla del grano/agua evian sin gas_1.png",
    },
  ],
  piqueos: [
    {
      name: "Bowl Delicia del Sol",
      price: 32,
      description: "Bowl fresco con frutas, yogurt y granola artesanal.",
      tags: ["Selección de la Casa"],
      video: "/cafe.mp4",
      img: "/carta/seleccion de la casa/bowl doña.png",
    },
    {
      name: "Pizza del Don",
      price: 25,
      description:
        "Base de croissant hojaldrado con queso fundido, pollo, tomate, albahaca y salsa de yogurt para un toque cremoso y equilibrado.",
      tags: ["Selección de la Casa"],
      video: "/cafe.mp4",
      img: "/carta/seleccion de la casa/pizza del don.png",
    },
    {
      name: "5 Mini Churros con Queso y Jamón",
      price: 18,
      description: "",
      tags: ["Selección de la Casa"],
      video: "/cafe.mp4",
      img: "/carta/seleccion de la casa/5 mini churros.png",
    },
    {
      name: "Tabla de Quesos",
      price: 35,
      description:
        "Cubos de queso con hierbas, jamón pizzero, salame y frutos rojos en almibar.",
      tags: ["Selección de la Casa"],
      video: "/cafe.mp4",
      img: "/carta/seleccion de la casa/tabla de quesos.png",
    },
  ],
  salados: [
    {
      name: "Croissant de Pollo",
      price: 20,
      description:
        "Croissant de mantequilla y hojaldrado, relleno de pollo desmenuzado con mayonesa casera.",
      tags: [],
      video: "/carta/acompañamientos salazar/Croissant de pollo_comprimido.mp4",
      img: "/carta/acompañamientos salazar/croissant con pollo.png",
    },
    {
      name: "Croissant Mixto",
      price: 17,
      description:
        "Croissant de mantequilla relleno de jamón de pierna y queso cajamarquino.",
      tags: [],
      video: "/carta/acompañamientos salazar/croissant mixto_comprimido.mp4",
      img: "/carta/acompañamientos salazar/croissant mixto.png",
    },
    {
      name: "Empanada Cheese Burger",
      price: 14,
      description:
        "Empanada rellena de carne, queso y sabor estilo hamburguesa.",
      tags: [],
      video:
        "/carta/acompañamientos salazar/Empanada_chesse_burguer_comprimido.mp4",
      img: "/carta/acompañamientos salazar/empanada cheese burguer.png",
    },
    {
      name: "Empanada Bechamel",
      price: 12,
      description:
        "Rellena de jugoso pollo, champiñones frescos y una suave salsa bechamel.",
      tags: [],
      video: "/carta/acompañamientos salazar/Empanada de carne_comprimido.mp4",
      img: "/carta/acompañamientos salazar/empanada de pollo_2.png",
    },
    {
      name: "Empanada Napolitana",
      price: 12,
      description:
        "Relleno mediterráneo de tomate, mozzarella, jamón y albahaca.",
      tags: [],
      video:
        "/carta/acompañamientos salazar/empanada Napoletana_comprimido.mp4",
      img: "/carta/acompañamientos salazar/empanada napoletana_2.png",
    },
    {
      name: "Focaccia Ahumado",
      price: 25,
      description:
        "Pan focaccia con mantequilla cajamarquina, tocino, lomo ahumado, mozzarella y salsa especial.",
      tags: [],
      video: "/carta/acompañamientos salazar/focaccia ahumado_comprimido.mp4",
      img: "/carta/acompañamientos salazar/focaccia ahumado.png",
    },
    {
      name: "Focaccia Capresse",
      price: 19,
      description:
        "Pan focaccia con mantequilla cajamarquina, tomate, mozzarella, albahaca y aceite de oliva.",
      tags: [],
      video: "/carta/acompañamientos salazar/focaccia capresse_comprimido.mp4",
      img: "/carta/acompañamientos salazar/focaccia capresse.png",
    },
    {
      name: "Maison QhiChé",
      price: 25,
      description:
        "Tarta salada con base crujiente, rellena de vegetales y queso.",
      tags: [],
      video: "/carta/acompañamientos salazar/maison quiché_comprimido.mp4",
      img: "/carta/acompañamientos salazar/maison quiché_1.png",
    },
    {
      name: "Sandwich de Pollo",
      price: 15,
      description: "Pechuga de pollo desmenuzada con cremosa mayonesa casera.",
      tags: [],
      video: "/carta/acompañamientos salazar/Sanwich con pollo_comprimido.mp4",
      img: "/carta/acompañamientos salazar/sandwich con pollo.png",
    },
    {
      name: "Tostón con Palta y Pollo",
      price: 24,
      description:
        "Pan campesino con palta y mantequilla bañado en aceite de oliva.",
      tags: [],
      video:
        "/carta/acompañamientos salazar/toston pollo y palta_comprimido.mp4",
      img: "/carta/acompañamientos salazar/tostón con palta y pollo.png",
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
          "Chocolate con leche, nueces tostadas, caramelo, baja acidez, cuerpo cremoso",
        description_complete:
          "Un café de sabor reconfortante y familiar, con notas claras a chocolate con leche, nueces tostadas y un dulzor a caramelo. Es bajo en acidez y tiene un cuerpo cremoso.",
      },
      el_balanceado: {
        nombre: "El balanceado",
        descripcion:
          "Chocolate, dulzor equilibrado, toque frutal, taza amable, fácil de tomar",
        description_complete:
          "La taza perfecta para quienes buscan equilibrio. Combina la dulzura del chocolate con un toque frutal muy sutil, resultando en una bebida amable y fácil de tomar.",
      },
      el_tupi: {
        nombre: "El tupí",
        descripcion:
          "Frutos rojos, mandarina, cítricos brillantes, acidez viva, jugoso",
        description_complete:
          "Una experiencia vibrante y refrescante. Este café explota con sabores a frutos rojos y cítricos como la mandarina, con una acidez brillante que lo hace muy jugoso en boca.",
      },
    },
    metodos: {
      v60: {
        nombre: "V60",
        descripcion:
          "Filtrado limpio, delicado, ligero, acidez brillante, notas sutiles",
        description_complete:
          "Es un método de filtrado que produce una bebida increíblemente limpia, delicada y ligera, muy parecida a un té, donde podemos apreciar las notas más sutiles y la acidez de tu café.",
      },
      aeropress: {
        nombre: "Aeropress",
        descripcion:
          "Inmersión, presión, taza redonda, cuerpo sedoso, sin amargor",
        description_complete:
          "Este método combina inmersión y presión. Logra una taza redonda, sedosa y muy rica en sabor, pero sin amargura ni sedimentos, ideal si buscas más cuerpo.",
      },
      sifon_japones: {
        nombre: "Sifón Japonés",
        descripcion:
          "Vacío, presión de vapor, aromático, complejo, claridad excepcional",
        description_complete:
          "Más que un método, es un espectáculo. Usando vacío y presión de vapor, se crea la taza más aromática y compleja de todas, con una claridad excepcional. Es una experiencia única.",
      },
    },
    tazas: {
      taza_cerrada: {
        nombre: "Taza cerrada",
        descripcion:
          "Boca estrecha, aromas concentrados, experiencia aromática, mantiene calor",
        description_complete:
          "Su diseño con una boca más estrecha está pensado para capturar y concentrar todos los aromas. Es perfecta para una experiencia aromática completa y mantiene tu bebida caliente.",
      },
      copa_hielo: {
        nombre: "Copa con Hielo",
        descripcion:
          "Bebida refrescante, vidrio neutro, forma abierta, café frío",
        description_complete:
          "Ideal para una bebida refrescante. El vidrio no retiene sabores y la forma abierta permite disfrutar del café frío de forma rápida y directa.",
      },
      taza_abierta: {
        nombre: "Taza abierta",
        descripcion:
          "Boca ancha, enfriamiento rápido, uso casual, sin complicaciones",
        description_complete:
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
          texto: "Frutas y notas cítricas",
          recomienda: { tipo: "granos", clave: "el_tupi" },
        },
        {
          texto: "Chocolate, nueces y caramelo",
          recomienda: { tipo: "granos", clave: "el_obata" },
        },
        {
          texto: "Un poco de todo",
          recomienda: { tipo: "granos", clave: "el_balanceado" },
        },
      ],
    },
    {
      pregunta: "¿Cómo describirías la sensación que buscas en tu taza?",
      opciones: [
        {
          texto: "Ligera y delicada",
          recomienda: { tipo: "metodos", clave: "v60" },
        },
        {
          texto: "Con cuerpo y una textura sedosa",
          recomienda: { tipo: "metodos", clave: "aeropress" },
        },
        {
          texto: "Intensa y memorable",
          recomienda: { tipo: "metodos", clave: "sifon_japones" },
        },
      ],
    },
    {
      pregunta: "Finalmente, ¿cómo quieres disfrutar tu café en este momento?",
      opciones: [
        {
          texto: "Caliente y muy aromático",
          recomienda: { tipo: "tazas", clave: "taza_cerrada" },
        },
        {
          texto: "Refrescante y frío",
          recomienda: { tipo: "tazas", clave: "copa_hielo" },
        },
        {
          texto: "Caliente y práctico",
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
    id: "taza_cerrada",
    name: "Taza cerrada",
    description:
      "Su diseño con una boca más estrecha está pensado para capturar y concentrar todos los aromas. Es perfecta para una experiencia aromática completa y mantiene tu bebida caliente.",
    icon: "🫖",
    img: "/experiences/cerrado.png",
  },
  {
    id: "taza_abierta",
    name: "Taza abierta",
    description:
      "La taza clásica y cómoda. Su boca ancha permite que el café se enfríe un poco más rápido, ideal para beber de forma más casual y sin complicaciones.",
    icon: "☕",
    img: "/experiences/abierto.png",
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
    name: "Alalau",
    description:
      "Ideal para una bebida refrescante. El vidrio no retiene sabores y la forma abierta permite disfrutar del café frío de forma rápida y directa.",
    icon: "🧊",
    img: "/experiences/copa_con_hielo.png",
    extraCost: 4,
  },
];

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
