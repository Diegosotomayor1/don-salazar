import {
  Category,
  CoffeeType,
  MenuProducts,
  SEDES,
  SistemaRecomendacion,
  TYPE_CARD,
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
      nameEn: "Espresso",
      price: 8,
      description: "Un shot de sabor intenso y aroma envolvente. ",
      descriptionEn: "A shot of intense flavor and enveloping aroma.",
      tags: ["Alto en cafeína"],
      video: "/carta/el calor del grano/espresso_comprimido.mp4",
      img: "/carta/el calor del grano/espresso simple.png",
    },
    {
      id: "espresso-doble",
      name: "Espresso Doble",
      nameEn: "Double Espresso",
      price: 11,
      description: "Doble shot de sabor intenso y aroma envolvente. ",
      descriptionEn: "Double shot of intense flavor and enveloping aroma.",
      tags: ["Alto en cafeína"],
      video:
        "/carta/el calor del grano/Espresso_Doble_Nueva_Carta_comprimido.mp4",
      img: "/carta/el calor del grano/espresso doble.png",
    },
    {
      name: "Americano",
      nameEn: "American",
      price: 11,
      description: "Suave y deliciosa mezcla de espresso y agua caliente. ",
      descriptionEn: "Smooth and delicious blend of espresso and hot water.",
      tags: [],
      video: "/carta/el calor del grano/Americano_nueva_carta_comprimido.mp4",
      img: "/carta/el calor del grano/americano.png",
    },
    {
      name: "Macchiato",
      nameEn: "Macchiato",
      price: 11,
      description:
        'Macchiato o "Manchado" es un espresso intenso con un toque de espuma de leche. ',
      descriptionEn:
        'Macchiato or "Stained" is an intense espresso with a touch of milk foam.',
      tags: [],
      video: "/carta/el calor del grano/macchiato_nueva_carta_comprimido.mp4",
      img: "/carta/el calor del grano/macchiato.png",
    },
    {
      name: "Cortado",
      nameEn: "Cut Coffee",
      price: 11,
      description: "Espresso intenso con un toque de leche liquida. ",
      descriptionEn: "Intense espresso with a touch of liquid milk.",
      tags: [],
      video: "/carta/el calor del grano/Cortado_nueva_carta_comprimido.mp4",
      img: "/carta/el calor del grano/cortado.png",
    },
    {
      name: "Cappuccino",
      nameEn: "Cappuccino",
      price: 13,
      description:
        "Mezcla de espresso, leche vaporizada y una densa capa de espuma. ",
      descriptionEn:
        "Blend of espresso, steamed milk and a dense layer of foam.",
      tags: [],
      video: "/carta/el calor del grano/Cappuccino_nueva_carta_comprimido.mp4",
      img: "/carta/el calor del grano/capuccino.png",
    },
    {
      name: "Latte",
      nameEn: "Latte",
      price: 13,
      description: "Espresso suave con abundante leche vaporizada. ",
      descriptionEn: "Smooth espresso with abundant steamed milk.",
      tags: [],
      video: "/carta/el calor del grano/Latte_nueva_carta_comprimido.mp4",
      img: "/carta/el calor del grano/Latte.png",
    },
    {
      name: "Mocaccino",
      nameEn: "Mocaccino",
      price: 15,
      description:
        "Combinación perfecta de espresso, leche vaporizada y chocolate. ",
      descriptionEn:
        "Perfect combination of espresso, steamed milk and chocolate.",
      tags: [],
      video: "/carta/el calor del grano/mocaccino_comprimido.mp4",
      img: "/carta/el calor del grano/mocaccino.png",
      bestSelling: true,
    },
    {
      name: "Flat White",
      nameEn: "Flat White",
      price: 14,
      description: "Espresso intenso y microespuma suave. ",
      descriptionEn: "Intense espresso and smooth microfoam.",
      tags: [],
      video: "/carta/el calor del grano/Flat_white_nueva_carta_comprimido.mp4",
      img: "/carta/el calor del grano/flat_white.png",
    },
    {
      name: "Stumpy",
      nameEn: "Stumpy",
      price: 14,
      description: "Espresso doble, leche vaporizada y microespuma suave. ",
      descriptionEn: "Double espresso, steamed milk and smooth microfoam.",
      tags: [],
      video: "/carta/el calor del grano/Stumpy_Nueva_Carta_comprimido.mp4",
      img: "/carta/el calor del grano/stumpy.png",
      bestSelling: true,
    },
    {
      name: "White Cappuccino",
      nameEn: "White Cappuccino",
      price: 16,
      description:
        "Espresso intenso con leche vaporizada y sabor irresistible a vainilla. ",
      descriptionEn:
        "Intense espresso with steamed milk and irresistible vanilla flavor.",
      tags: [],
      video:
        "/carta/el calor del grano/White_Cappuccino_Nueva_Carta_comprimido.mp4",
      img: "/carta/el calor del grano/White Cappuccino.jpg",
    },
    {
      name: "Pink Cappuccino",
      nameEn: "Pink Cappuccino",
      description:
        "Espresso intenso con leche vaporizada y sabor exquisito a fresa. ",
      descriptionEn:
        "Intense espresso with steamed milk and exquisite strawberry flavor.",
      price: 16,
      tags: [],
      video: "/carta/el calor del grano/pink cappuccino_comprimido.webm",
      img: "/carta/el calor del grano/pink cappuccino.png",
    },
    {
      name: "Green Cappuccino",
      nameEn: "Green Cappuccino",
      description:
        "Espresso intenso con leche vaporizada con un toque de menta. ",
      descriptionEn: "Intense espresso with steamed milk with a touch of mint.",
      price: 16,
      tags: [],
      video: "/carta/el calor del grano/Green_cappuccino_comprimido.mp4",
      img: "/carta/el calor del grano/green cappuccino.png",
    },
    {
      name: "Black Cappuccino",
      nameEn: "Black Cappuccino",
      description:
        "Espresso intenso con leche vaporizada y con un toque caramel con carbón activado. ",
      descriptionEn:
        "Intense espresso with steamed milk and a touch of caramel with activated charcoal.",
      price: 18,
      tags: [],
      video: "/carta/el calor del grano/black cappuccino_comprimido.webm",
      img: "/carta/el calor del grano/black_cappuccino.png",
      bestSelling: true,
    },
  ],
  "bebidas-frias-cafe": [
    {
      name: "Americano Frío",
      nameEn: "Iced Americano",
      price: 12,
      description: "El clásico americano en una versión refrescante con hielo.",
      descriptionEn: "The classic americano in a refreshing iced version.",
      tags: [],
      video: "/carta/la frescura del grano/Americano_frio_comprimido.mp4",
      img: "/carta/la frescura del grano/americano frio_1.png",
    },
    {
      name: "Orange Coffee",
      nameEn: "Orange Coffee",
      price: 16,
      description:
        "Refrescante jugo de naranja natural con doble shot de cold brew.",
      descriptionEn:
        "Refreshing natural orange juice with double shot of cold brew.",
      tags: [],
      video: "/carta/la frescura del grano/Orange_Coffee_comprimido.mp4",
      img: "/carta/la frescura del grano/orange coffee.png",
    },
    {
      name: "Iced Cappuccino",
      nameEn: "Iced Cappuccino",
      price: 17,
      description: "Shot de espresso con leche y abundante hielo.",
      descriptionEn: "Espresso shot with milk and plenty of ice.",
      tags: [],
      video: "/carta/la frescura del grano/Iced_Cappuccino_comprimido.mp4",
      img: "/carta/la frescura del grano/iced cappuccino.png",
    },
    {
      name: "Iced White Cappuccino",
      nameEn: "Iced White Cappuccino",
      price: 18,
      description:
        "Shot de espresso con leche fresca, esencia de vainilla y abundante hielo.",
      descriptionEn:
        "Espresso shot with fresh milk, vanilla essence and plenty of ice.",
      tags: [],
      video:
        "/carta/la frescura del grano/Iced_White_Cappuccino_comprimido.mp4",
      img: "/carta/la frescura del grano/iced white cappuccino.png",
    },
    {
      name: "Iced Pink Cappuccino",
      nameEn: "Iced Pink Cappuccino",
      price: 18,
      description:
        "Shot de espresso con leche fresca, sabor a fresa y abundante hielo.",
      descriptionEn:
        "Espresso shot with fresh milk, strawberry flavor and plenty of ice.",
      tags: [],
      video: "/carta/la frescura del grano/iced pink latte_comprimido.webm",
      img: "/carta/la frescura del grano/iced pink cappuccino.png",
    },
    {
      name: "Iced Green Cappuccino",
      nameEn: "Iced Green Cappuccino",
      price: 18,
      description:
        "Shot de espresso con leche fresca, con un toque de menta y abundante hielo.",
      descriptionEn:
        "Espresso shot with fresh milk, with a touch of mint and plenty of ice.",
      tags: [],
      video:
        "/carta/la frescura del grano/Iced_Green_Cappuccino_comprimido.mp4",
      img: "/carta/la frescura del grano/iced green cappuccino.png",
    },
    {
      name: "Iced Black Cappuccino",
      nameEn: "Iced Black Cappuccino",
      price: 20,
      description:
        "Shot de espresso con leche fresca, con un toque caramel con carbón activado y abundante hielo.",
      descriptionEn:
        "Espresso shot with fresh milk, with a touch of caramel with activated charcoal and plenty of ice.",
      tags: [],
      video:
        "/carta/la frescura del grano/Iced_Black_Cappuccino_comprimido.mp4",
      img: "/carta/la frescura del grano/iced black cappuccino.png",
      bestSelling: true,
    },
    {
      name: "Cold Brew",
      nameEn: "Cold Brew",
      price: 17,
      description:
        "Café filtrado en frío durante 24 horas en la majestuosa torre Yamacold.",
      descriptionEn:
        "Cold brewed coffee for 24 hours in the majestic Yamacold tower.",
      tags: ["Alto en cafeína"],
      video: "/carta/la frescura del grano/Cold_Brew_comprimido.mp4",
      img: "/carta/la frescura del grano/cold brew.png",
    },
    {
      name: "Frappe Don Salazar",
      nameEn: "Don Salazar Frappé",
      price: 17,
      description: "Un frappe, pero de especialidad.",
      descriptionEn: "A frappé, but specialty grade.",
      tags: [],
      video: "/carta/la frescura del grano/Frappe_Don_Salazar_comprimido.mp4",
      img: "/carta/la frescura del grano/frappe don salazar.png",
      bestSelling: true,
    },
    {
      name: "Frappe de Oreo",
      nameEn: "Oreo Frappé",
      price: 18,
      description: "Un frappe de Oreo, pero de especialidad.",
      descriptionEn: "An Oreo frappé, but specialty grade.",
      tags: [],
      video: "/carta/la frescura del grano/Frappe_de_Oreo_comprimido.mp4",
      img: "/carta/la frescura del grano/frappe de oreo.png",
    },
    {
      name: "Sparkling Coffee Clásico",
      nameEn: "Classic Sparkling Coffee",
      price: 17,
      description:
        "Café con limón, jarabe de goma, Ginger Ale y un toque burbujeante de cold brew.",
      descriptionEn:
        "Coffee with lemon, gelatin, Ginger Ale and a bubbly touch of cold brew.",
      tags: [],
      video:
        "/carta/la frescura del grano/Sparkling_Coffee_Clasico_comprimido.mp4",
      img: "/carta/la frescura del grano/sparkling clásico.png",
    },
    {
      name: "Sparkling Coffee Maracumango",
      nameEn: "Sparkling Coffee Maracumango",
      price: 19,
      description:
        "Mix de maracuyá, mango y limón, con Ginger Ale burbujeante y un toque de cold brew.",
      descriptionEn:
        "Mix of passion fruit, mango and lemon, with bubbly Ginger Ale and a touch of cold brew.",
      tags: [],
      video:
        "/carta/la frescura del grano/Sparkling_Maracumango_comprimido.mp4",
      img: "/carta/la frescura del grano/sparkling coffee maracumango.png",
      bestSelling: true,
    },
    {
      name: "Sparkling Dragon Coffee",
      nameEn: "Sparkling Dragon Coffee",
      price: 20,
      description:
        "Burbujeante mezcla de frutos rojos y limón, con Ginger Ale y un toque de cold brew.",
      descriptionEn:
        "Bubbly mix of red fruits and lemon, with Ginger Ale and a touch of cold brew.",
      tags: [],
      video:
        "/carta/la frescura del grano/Sparkling_Dragon_Coffee_comprimido.mp4",
      img: "/carta/la frescura del grano/sparkling dragon coffee .png",
    },
  ],
  "bebidas-sin-cafe": [
    {
      name: "Jugo de Naranja",
      nameEn: "Orange Juice",
      price: 12,
      description: "Recién exprimido, natural y refrescante.",
      descriptionEn: "Freshly squeezed, natural and refreshing.",
      tags: [],
      video: "/carta/mas alla del grano/JUGO DE NARANJA_comprimido.mp4",
      img: "/carta/mas alla del grano/jugo de naranja.png",
    },
    {
      name: "Agua Evian con Gas",
      nameEn: "Evian Sparkling Water",
      price: 13,
      description: "Agua de 330 ml de manantial con gas.",
      descriptionEn: "330 ml sparkling spring water.",
      tags: [],
      video: "/carta/mas alla del grano/Agua Evian con gas_comprimido.mp4",
      img: "/carta/mas alla del grano/evián con gas_1.png",
    },
    {
      name: "Agua Evian sin Gas",
      nameEn: "Evian Still Water",
      price: 13,
      description: "Agua de 500 ml de manantial sin gas.",
      descriptionEn: "500 ml still spring water.",
      tags: [],
      video: "/carta/mas alla del grano/agua evián sin gas_comprimido.mp4",
      img: "/carta/mas alla del grano/agua evian sin gas_1.png",
    },
    {
      name: "Alivio Don Salazar",
      nameEn: "Don Salazar Relief",
      price: 12,
      description: "Infusión natural con hierbas que ayudan a la digestión.",
      descriptionEn: "Natural infusion with herbs that aid digestion.",
      tags: [],
      video: "/carta/mas alla del grano/Alivio Don Salazar_comprimido.mp4",
      img: "/carta/mas alla del grano/alivio don salazar.png",
    },
    {
      name: "Amor de Jamaica",
      nameEn: "Love of Jamaica",
      price: 12,
      description:
        "Infusión caliente de flor de jamaica, con sabor refrescante y ligeramente ácido.",
      descriptionEn:
        "Hot infusion of hibiscus flower, with refreshing and slightly acidic flavor.",
      tags: [],
      video: "/carta/mas alla del grano/Te de jamaica_comprimido.mp4",
      img: "/carta/mas alla del grano/amor de jamaica.png",
    },
    {
      name: "Chocolate Caliente",
      nameEn: "Hot Chocolate",
      price: 15,
      description:
        "Caliente, elaborado con chocolate derretido y leche cremosa.",
      descriptionEn: "Hot, made with melted chocolate and creamy milk.",
      tags: [],
      video: "/carta/mas alla del grano/Chocolate Caliente_comprimido.mp4",
      img: "/carta/mas alla del grano/chocolate caliente.png",
      bestSelling: true,
    },
    {
      name: "Orange Fizz",
      nameEn: "Orange Fizz",
      price: 15,
      description:
        "Bebida burbujeante de naranja con un toque cítrico y dulce.",
      descriptionEn: "Bubbly orange drink with a citrusy and sweet touch.",
      tags: [],
      video: "/carta/mas alla del grano/Orange fizz_comprimido.mp4",
      img: "/carta/mas alla del grano/orange fizz.png",
    },
    {
      name: "Tropical Fizz",
      nameEn: "Tropical Fizz",
      price: 15,
      description: "Refresco con gas, mezcla de sabores tropicales frutales.",
      descriptionEn: "Sparkling drink, mix of tropical fruit flavors.",
      tags: [],
      video: "/carta/mas alla del grano/Tropical FIZZ_comprimido.mp4",
      img: "/carta/mas alla del grano/tropical fizz.png",
    },
    {
      name: "Cerveza Sol de la finca",
      nameEn: "Sol de la finca Beer",
      price: 25,
      description:
        "Cerveza artesanal de la casa elaborada con nuestro café de especialidad, sabor único, equilibrado y refrescante.",
      descriptionEn:
        "House craft beer made with our specialty coffee, unique, balanced and refreshing flavor.",
      tags: [],
      video: "/carta/mas alla del grano/cerveza negra.webm",
      img: "/carta/mas alla del grano/cerveza negra.png",
      bestSelling: true,
    },
  ],
  salados: [
    {
      name: "Croissant de Pollo",
      nameEn: "Chicken Croissant",
      price: 20,
      description:
        "Croissant de mantequilla y hojaldrado, relleno de pollo desmenuzado con mayonesa casera.",
      descriptionEn:
        "Buttery and flaky croissant filled with shredded chicken and homemade mayonnaise.",
      tags: [],
      video: "/carta/acompañamientos salazar/Croissant de pollo_comprimido.mp4",
      img: "/carta/acompañamientos salazar/croissant con pollo.png",
    },
    {
      name: "Croissant Mixto",
      nameEn: "Mixed Croissant",
      price: 17,
      description:
        "Croissant de mantequilla relleno de jamón de pierna y queso cajamarquino.",
      descriptionEn:
        "Butter croissant filled with leg ham and Cajamarca cheese.",
      tags: [],
      video: "/carta/acompañamientos salazar/croissant mixto_comprimido.mp4",
      img: "/carta/acompañamientos salazar/croissant mixto.png",
    },
    {
      name: "Empanada Cheese Burger",
      nameEn: "Cheese Burger Empanada",
      price: 14,
      description:
        "Empanada rellena de carne, queso y sabor estilo hamburguesa.",
      descriptionEn:
        "Empanada filled with meat, cheese and hamburger-style flavor.",
      tags: [],
      video:
        "/carta/acompañamientos salazar/Empanada_chesse_burguer_comprimido.mp4",
      img: "/carta/acompañamientos salazar/empanada cheese burguer.png",
    },
    {
      name: "Empanada Bechamel",
      nameEn: "Bechamel Empanada",
      price: 12,
      description:
        "Rellena de jugoso pollo, champiñones frescos y una suave salsa bechamel.",
      descriptionEn:
        "Filled with juicy chicken, fresh mushrooms and a smooth bechamel sauce.",
      tags: [],
      video: "/carta/acompañamientos salazar/empanada bechamel_comprimido.webm",
      img: "/carta/acompañamientos salazar/empanada bechamel.png",
    },
    {
      name: "Empanada de carne prime",
      nameEn: "Beef Empanada",
      price: 12,
      description: "El clásico irresistible rellena de carne jugosa de res.",
      descriptionEn: "The classic irresistible filled with juicy beef.",
      tags: [],
      video: "/carta/acompañamientos salazar/Empanada de carne_comprimido.mp4",
      img: "/carta/acompañamientos salazar/empanada de pollo_2.png",
    },
    {
      name: "Empanada Napolitana",
      nameEn: "Neapolitan Empanada",
      price: 12,
      description:
        "Relleno mediterráneo de tomate, mozzarella, jamón y albahaca.",
      descriptionEn:
        "Mediterranean filling of tomato, mozzarella, ham and basil.",
      tags: [],
      video:
        "/carta/acompañamientos salazar/Empanada Napoletana_comprimido.mp4",
      img: "/carta/acompañamientos salazar/empanada napoletana_2.png",
    },
    {
      name: "Focaccia Ahumado",
      nameEn: "Smoked Focaccia",
      price: 30,
      description:
        "Pan focaccia con mantequilla cajamarquina, tocino, lomo ahumado, mozzarella y salsa especial.",
      descriptionEn:
        "Focaccia bread with Cajamarca butter, bacon, smoked loin, mozzarella and special sauce.",
      tags: [],
      video: "/carta/acompañamientos salazar/focaccia ahumado_comprimido.mp4",
      img: "/carta/acompañamientos salazar/focaccia ahumado.png",
      bestSelling: true,
    },
    {
      name: "Focaccia Capresse",
      nameEn: "Capresse Focaccia",
      price: 24,
      description:
        "Pan focaccia con mantequilla cajamarquina, tomate, mozzarella, albahaca y aceite de oliva.",
      descriptionEn:
        "Focaccia bread with Cajamarca butter, tomato, mozzarella, basil and olive oil.",
      tags: [],
      video: "/carta/acompañamientos salazar/focaccia capresse_comprimido.mp4",
      img: "/carta/acompañamientos salazar/focaccia capresse.png",
      bestSelling: true,
    },
    {
      name: "Maison QhiChé",
      nameEn: "Maison QhiChé",
      price: 28,
      description:
        "Tarta salada con base crujiente, rellena de vegetales y queso.",
      descriptionEn:
        "Savory tart with crispy base, filled with vegetables and cheese.",
      tags: [],
      video: "/carta/acompañamientos salazar/maison quiché_comprimido.mp4",
      img: "/carta/acompañamientos salazar/maison quiché_1.png",
    },
    {
      name: "Sandwich de Pollo",
      nameEn: "Chicken Sandwich",
      price: 15,
      description: "Pechuga de pollo desmenuzada con cremosa mayonesa casera.",
      descriptionEn: "Shredded chicken breast with creamy homemade mayonnaise.",
      tags: [],
      video: "/carta/acompañamientos salazar/Sanwich con pollo_comprimido.mp4",
      img: "/carta/acompañamientos salazar/sandwich con pollo.png",
      bestSelling: true,
    },
    {
      name: "Tostón con Palta y Pollo",
      nameEn: "Toasted Bread with Avocado and Chicken",
      price: 24,
      description:
        "Pan campesino con palta y mantequilla bañado en aceite de oliva.",
      descriptionEn:
        "Country bread with avocado and butter drizzled with olive oil.",
      tags: [],
      video:
        "/carta/acompañamientos salazar/toston pollo y palta_comprimido.mp4",
      img: "/carta/acompañamientos salazar/tostón con palta y pollo.png",
      bestSelling: true,
    },
  ],
  piqueos: [
    {
      name: "Bowl Delicia del Sol",
      nameEn: "Sun Delight Bowl",
      price: 32,
      description: "Bowl fresco con frutas, yogurt y granola artesanal.",
      descriptionEn: "Fresh bowl with fruits, yogurt and artisanal granola.",
      tags: ["Selección de la Casa"],
      video: "/carta/seleccion de la casa/bowl doña_comprimido.mp4",
      img: "/carta/seleccion de la casa/bowl doña.png",
    },
    {
      name: "Pizza del Don",
      nameEn: "Don's Pizza",
      price: 28,
      description:
        "Base de croissant hojaldrado con queso fundido, pollo, tomate, albahaca y salsa de yogurt para un toque cremoso y equilibrado.",
      descriptionEn:
        "Flaky croissant base with melted cheese, chicken, tomato, basil and yogurt sauce for a creamy and balanced touch.",
      tags: ["Selección de la Casa"],
      video: "/carta/seleccion de la casa/Pizza del don_comprimido.mp4",
      img: "/carta/seleccion de la casa/pizza del don.png",
      bestSelling: true,
    },
    {
      name: "5 Mini Churros con Queso y Jamón",
      nameEn: "5 Mini Churros with Cheese and Ham",
      price: 18,
      description: "Mini churros served with cheese and ham.",
      descriptionEn: "Mini churros served with cheese and ham.",
      tags: ["Selección de la Casa"],
      video: "/carta/seleccion de la casa/5 mini churros_comprimido.mp4",
      img: "/carta/seleccion de la casa/5 mini churros.png",
    },
    {
      name: "Tabla de Quesos",
      nameEn: "Cheese Board",
      price: 35,
      description:
        "Cubos de queso con hierbas, jamón pizzero, salame y frutos rojos en almibar.",
      descriptionEn:
        "Herb cheese cubes, pizza ham, salami and candied red fruits.",
      tags: ["Selección de la Casa"],
      video: "/carta/seleccion de la casa/tabla de quesos_comprimido.mp4",
      img: "/carta/seleccion de la casa/tabla de quesos.png",
      bestSelling: true,
    },
  ],
  dulces: [
    {
      name: "Galletas Chocochip",
      nameEn: "Chocolate Chip Cookies",
      price: 7,
      description:
        "Galleta grande y suave con abundantes chispas de chocolate.",
      descriptionEn: "Large and soft cookie with abundant chocolate chips.",
      tags: [],
      video: "/carta/manjares salazar/galleta chocochip_comprimido.webm",
      img: "/carta/manjares salazar/galletón chocohips_1.png",
    },
    {
      name: "Brownie",
      nameEn: "Brownie",
      price: 9,
      description: "Delicioso chocolate intenso con abundantes nueces.",
      descriptionEn: "Delicious intense chocolate with abundant nuts.",
      tags: [],
      video: "/carta/manjares salazar/Brownie_comprimido.mp4",
      img: "/carta/manjares salazar/brownie_1.png",
    },
    {
      name: "Queque Artesanal",
      nameEn: "Artisanal Cake",
      price: 12,
      description: "Queque artesanal de vainilla o zanahoria.",
      descriptionEn: "Artisanal vanilla or carrot cake.",
      tags: [],
      video: "/carta/manjares salazar/queque de maracuya_comprimido.mp4",
      img: "/carta/manjares salazar/queque de maracuyá_1.png",
    },
    {
      name: "Muffin Triple Chocolate",
      nameEn: "Triple Chocolate Muffin",
      price: 12,
      description:
        "Muffin esponjoso de cacao intenso con chispas de chocolate.",
      descriptionEn: "Fluffy muffin with intense cocoa and chocolate chips.",
      tags: [],
      video: "/carta/manjares salazar/Muffin de chocolate_comprimido.mp4",
      img: "/carta/manjares salazar/muffin1.jpg",
    },
    {
      name: "Muffin de Queso y Arándanos",
      nameEn: "Cheese and Blueberry Muffin",
      price: 12,
      description: "Muffin esponjoso de queso crema con arándanos frescos.",
      descriptionEn: "Fluffy muffin with cream cheese and fresh blueberries.",
      tags: [],
      video: "/carta/manjares salazar/Muffins queso y arándanos_comprimido.mp4",
      img: "/carta/manjares salazar/muffin2.jpg",
    },
    {
      name: "Galletón de Nutella",
      nameEn: "Nutella Cookie",
      price: 12,
      description:
        "Galleta de textura suave y relleno cremoso de crema Nutella.",
      descriptionEn: "Soft texture cookie with creamy Nutella filling.",
      tags: [],
      video: "/carta/manjares salazar/galleta de nutella_comprimido.mp4",
      img: "/carta/manjares salazar/galletón de nutella_1.png",
    },
    {
      name: "Crumble Cookie Pistacho",
      nameEn: "Pistachio Crumble Cookie",
      price: 12,
      description:
        "Galleta de textura suave con trozos de pistacho y relleno de chocolate blanco.",
      descriptionEn:
        "Soft texture cookie with pistachio pieces and white chocolate filling.",
      tags: [],
      video: "/carta/manjares salazar/crumble de pistacho_comprimido.mp4",
      img: "/carta/manjares salazar/crumble cookie pistacho.png",
    },
    {
      name: "Torta de Chocolate",
      nameEn: "Chocolate Cake",
      price: 18,
      description: "Chocolate intenso.",
      descriptionEn: "Intense chocolate.",
      tags: [],
      video: "/carta/manjares salazar/torta de chocolate_comprimido.mp4",
      img: "/carta/manjares salazar/torta_chocolate_2.png",
      bestSelling: true,
    },
    {
      name: "Affogato Don Salazar",
      nameEn: "Affogato Don Salazar",
      price: 18,
      description: "Helado de vainilla sobre un espresso Don Salazar.",
      descriptionEn: "Vanilla ice cream over a Don Salazar espresso.",
      tags: [],
      video: "/carta/manjares salazar/Affogato_comprimido.mp4",
      img: "/carta/manjares salazar/affogato.png",
      bestSelling: true,
    },
    {
      name: "Cheesecake Maracumango",
      nameEn: "Maracumango Cheesecake",
      price: 18,
      description:
        "Cheesecake cremoso con cobertura de maracuyá y mango fresco.",
      descriptionEn:
        "Creamy cheesecake with passion fruit and fresh mango topping.",
      tags: [],
      video:
        "/carta/manjares salazar/cheescake de maracumango(1)_comprimido.mp4",
      img: "/carta/manjares salazar/cheescake de maracumango_1.png",
    },
    {
      name: "Cheesecake Frutos Rojos",
      nameEn: "Red Fruits Cheesecake",
      price: 18,
      description: "Cheesecake cremoso con salsa de frutos rojos.",
      descriptionEn: "Creamy cheesecake with red fruits sauce.",
      tags: [],
      video: "/carta/manjares salazar/cheescake frutos rojos(1)_comprimido.mp4",
      img: "/carta/manjares salazar/cheescake de frutos rojos.png",
    },
    {
      name: "Carrot Cake",
      nameEn: "Carrot Cake",
      price: 19,
      description: "Bizcocho de zanahoria con frosting de queso crema.",
      descriptionEn: "Carrot cake with cream cheese frosting.",
      tags: [],
      video: "/carta/manjares salazar/carrot cake_comprimido.mp4",
      img: "/carta/manjares salazar/carrot cake1.png",
      bestSelling: true,
    },
    {
      name: "Waffles de la Finca",
      nameEn: "Waffles of the Farm",
      price: 24,
      description:
        "Waffles con arándanos frescos, crema batida y miel de maple.",
      descriptionEn:
        "Waffles with fresh blueberries, whipped cream and maple syrup.",
      tags: [],
      video: "/carta/manjares salazar/WAFLES_comprimido.mp4",
      img: "/carta/manjares salazar/wafles de la finca.png",
    },
  ],
  cocteles: [
    {
      name: "La Chica del Bikini Azul",
      nameEn: "The Blue Bikini Girl",
      price: 28,
      description:
        "La que no podrás olvidar. Burbujeante bebida con pisco, curacao azul, naranja y cold drip.	",
      descriptionEn:
        "The one you won't forget. fizzy drink with pisco, blue curacao, orange and cold drip.",
      tags: [],
      video:
        "/carta/cocteles con historia/La chica del bikini azul_comprimido.webm",
      img: "/carta/cocteles con historia/la chica del bikini azul.png",
    },
    {
      name: "Pisco Sour",
      nameEn: "Pisco Sour",
      price: 28,
      description: "El clásico de clásicos.",
      descriptionEn: "The classic of classics.",
      tags: [],
      video: "/carta/cocteles con historia/Pisco sour_comprimido.webm",
      img: "/carta/cocteles con historia/pisco_sour.jpg",
    },
    {
      name: "DON KOFI SOUR",
      nameEn: "DON KOFI SOUR",
      price: 32,
      description: "El tradicional pisco sour al estilo Don Salazar.",
      descriptionEn: "The traditional pisco sour in the style of Don Salazar.",
      tags: [],
      video: "/carta/cocteles con historia/DON KOFFI SOUR_comprimido.webm",
      img: "/carta/cocteles con historia/don kofi sour.png",
      bestSelling: true,
    },
    {
      name: "Sex on the farm",
      nameEn: "Sex on the farm",
      price: 28,
      description:
        "No es en la playa, es en la finca. Burbujeante bebida con pisco, frutos rojos y cold drip.	",
      descriptionEn:
        "Not on the beach, it's on the farm. fizzy drink with pisco, red fruits and cold drip.",
      tags: [],
      video: "/carta/cocteles con historia/sex on the farm_comprimido.webm",
      img: "/carta/cocteles con historia/sex on the farm.png",
    },
    {
      name: "La incondicional",
      nameEn: "The incondicional",
      price: 28,
      description:
        "La que no supe amar. Burbujeante bebida con pisco, maracumango y cold drip.",
      descriptionEn:
        "The one I couldn't love. fizzy drink with pisco, passion fruit and cold drip.",
      tags: [],
      video: "/carta/cocteles con historia/La incondicional_comprimido.webm",
      img: "/carta/cocteles con historia/la incondicinal.png",
    },
    {
      name: "Don Espresso Martini",
      nameEn: "Don Espresso Martini",
      price: 38,
      description:
        "Nuestra versión premium del clásico con doble espresso y granos de café gourmet.",
      descriptionEn:
        "Our premium version of the classic with double espresso and gourmet coffee beans.",
      tags: [],
      video:
        "/carta/cocteles con historia/Don espresso martiniii_comprimido.webm",
      img: "/carta/cocteles con historia/espresso martini.png",
      bestSelling: true,
    },
  ],
};

export const productsOrCategoryExcluded: Record<
  Partial<TYPE_CARD>,
  {
    category: string[];
    products: Array<{
      category: string;
      excluded: string[];
    }>;
  }
> = {
  PREMIUM: {
    category: ["piqueos"],
    products: [
      {
        category: "salados",
        excluded: [
          "Tostón con Palta y Pollo",
          "Maison QhiChé",
          "Focaccia Capresse",
        ],
      },
      {
        category: "dulces",
        excluded: [
          "Cheesecake Maracumango",
          "Cheesecake Frutos Rojos",
          "Waffles de la Finca",
        ],
      },
    ],
  },
  LUXURY: {
    category: [],
    products: [],
  },
  PREMIUM_FONTANA: {
    category: ["piqueos", "cocteles"],
    products: [
      {
        category: "salados",
        excluded: [
          "Tostón con Palta y Pollo",
          "Maison QhiChé",
          "Focaccia Capresse",
        ],
      },
      {
        category: "dulces",
        excluded: [
          "Cheesecake Maracumango",
          "Cheesecake Frutos Rojos",
          "Waffles de la Finca",
        ],
      },
    ],
  },
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
    shortDescription:
      "Café con notas a vainilla, proveniente de la parcela Portón de Finca Don Salazar",
    description:
      "Viajamos a las tierras de Brasil para introducir el Obatá hace más de doce años. Hoy florece en nuestras tierras de Villa Rica, ofreciendo una taza dulce, sedosa y elegante, con sutiles notas a vainilla.",
    icon: "☕",
    img: "/experiences/obata.png",
    price: 20,
  },
  {
    id: "el_balanceado",
    name: "El favorito de Noel",
    shortDescription:
      "Combina la dulzura del chocolate con un toque frutal muy sutil.",
    description:
      "La taza perfecta para quienes buscan equilibrio. Combina la dulzura del chocolate con un toque frutal muy sutil, resultando en una bebida amable y fácil de tomar.",
    icon: "⚖️",
    img: "/experiences/favorito_de_noel.png",
    price: 20,
  },
  {
    id: "el_tupi",
    name: "El tupí",
    shortDescription:
      "Café con notas a cacao y vino, proveniente de la parcela Artian de Finca Don Salazar",
    description:
      "Hace más de doce años viajamos a Brasil para traer el Tupí, que hoy florece en nuestra parcela Artian. Lo plantamos como un homenaje al primer proyecto de Don Salazar junto a un amigo y socio, y ahora nos regala una taza intensa y aterciopelada, con notas a cacao y vino que reflejan su carácter y historia",
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
    description: "Consigue una taza limpia y suave, sin amargor.",
    type: "filtrado",
    icon: "⚪",
    img: "/experiences/v60.png",
    extraCost: 0,
  },
  {
    id: "chemex",
    name: "Chemex",
    description: "Consigue una taza suave y elegante, con notas delicadas.",
    type: "filtrado",
    icon: "🧪",
    img: "/experiences/chemex.png",
    extraCost: 0,
  },
  {
    id: "origami",
    name: "Origami",
    description: "Consigue una taza dulce y equilibrada, con cuerpo medio.",
    type: "filtrado",
    icon: "📐",
    img: "/experiences/origami.png",
    extraCost: 0,
  },
  {
    id: "sifon_japones",
    name: "Sifón Japonés",
    description:
      "Una fusión entre ciencia y arte. Consigue un café equilibrado, limpio y aromático.",
    type: "inmersion",
    icon: "🔬",
    img: "/experiences/sifon_japones.png",
    extraCost: 10,
  },
  // Métodos de Inmersión
  {
    id: "aeropress",
    name: "Aeropress",
    description: "Consigue un café intenso y limpio, con cuerpo firme.",
    type: "inmersion",
    icon: "🔄",
    img: "/experiences/aeropress.png",
    extraCost: 0,
  },
  {
    id: "press2go",
    name: "Press2go",
    description:
      "Consigue un café intenso y de gran cuerpo, con final envolvente.",
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
    img: "/talleres/coffe-for-dummies.png",
    video: "/talleres/coffee _for_dumies_carta_comprimido.webm",
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
    img: "/talleres/taller-de-arte-latte.png",
    video: "/talleres/arte_latte_carta_comprimido.webm",
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
    img: "/talleres/taller-de-metodos.png",
    video: "/talleres/métodos_carta_comprimido.webm",
    whatsappLink: "https://wa.link/3rh5dv",
  },
];

// Frases pícaras para cada combinación de café
export const piquantPhrases = {
  el_obata: {
    v60: {
      taza_cerrada:
        "Caricia cremosa que te besa dulcemente, provocando antojo de placeres prohibidos.",
      taza_abierta:
        "Beso juguetón que invita a más encuentros cremosos y placenteros.",
      copa: "Misterio cremoso que revela secretos dulces en una danza tentadora.",
      copa_hielo:
        "Beso helado cremoso que provoca travesuras frescas y adictivas.",
    },
    chemex: {
      taza_cerrada:
        "Perfume cremoso inolvidable que seduce como un amante apasionado.",
      taza_abierta:
        "Amor cremoso que vuelve por más, irresistible y delicioso.",
      copa: "Pureza cremosa que revela cada secreto en tentación cristalina.",
      copa_hielo: "Brisa erótica cremosa que deja recuerdos dulces y efímeros.",
    },
    origami: {
      taza_cerrada:
        "Juego cremoso de seducción que invita a explorar cada rincón dulce.",
      taza_abierta:
        "Aventura improvisada cremosa que termina en éxtasis placentero.",
      copa: "Obra maestra visual cremosa que seduce con travesura elegante.",
      copa_hielo:
        "Invención cremosa que juega con expectativas frescas y adictivas.",
    },
    sifon_japones: {
      taza_cerrada:
        "Show cremoso privado que deja sin aliento con aromas seductores.",
      taza_abierta:
        "Estrella cremosa cercana que comparte brillos dulces y memorables.",
      copa: "Truco mágico cremoso que revela placeres ocultos e irresistibles.",
      copa_hielo:
        "Escena apasionada cremosa que acelera el corazón con frescura.",
    },
    aeropress: {
      taza_cerrada:
        "Pasión contenida cremosa que explota en placeres ricos y adictivos.",
      taza_abierta:
        "Encuentro espontáneo cremoso perfecto que colma gratificaciones.",
      copa: "Secreto compartido cremoso en intimidad suave y honesta.",
      copa_hielo:
        "Caricia helada cremosa que despierta sentidos contrastantes.",
    },
    press2go: {
      taza_cerrada:
        "Amor portátil cremoso que acompaña con intensidades sorprendentes.",
      taza_abierta: "Encuentro casual cremoso que se vuelve hábito placentero.",
      copa: "Aventura elegante cremosa que viaja con misterios itinerantes.",
      copa_hielo: "Escapada espontánea cremosa llena de placeres frescos.",
    },
  },
  el_balanceado: {
    v60: {
      taza_cerrada:
        "Flirteo sutil equilibrado que seduce lentamente con armonía perfecta.",
      taza_abierta:
        "Conversación natural equilibrada que fluye en satisfacciones cómodas.",
      copa: "Claridad cristalina equilibrada que revela almas cautivadoras.",
      copa_hielo: "Brisa juguetona equilibrada que provoca cosquillas frescas.",
    },
    chemex: {
      taza_cerrada:
        "Perfume grabado equilibrado que perdura en memorias aromáticas.",
      taza_abierta: "Compañero confiable equilibrado siempre reconfortante.",
      copa: "Verdad hermosa equilibrada en presentación sofisticada y seductora.",
      copa_hielo:
        "Satisfacción pura equilibrada que deja nostalgias placenteras.",
    },
    origami: {
      taza_cerrada:
        "Rompecabezas emocional equilibrado que invita a exploraciones intrigantes.",
      taza_abierta:
        "Aventura cotidiana equilibrada llena de sorpresas innovadoras.",
      copa: "Sinfonía visual equilibrada que seduce con hipnosis elegante.",
      copa_hielo:
        "Invención inteligente equilibrada que juega con arte fresco.",
    },
    sifon_japones: {
      taza_cerrada:
        "Abrazo apasionado equilibrado que acelera pulsos cautivadores.",
      taza_abierta:
        "Estrella compartida equilibrada que brilla en hábitos memorables.",
      copa: "Truco revelado equilibrado que maravilla sentidos irresistibles.",
      copa_hielo: "Escena cardíaca equilibrada que deja huellas emocionantes.",
    },
    aeropress: {
      taza_cerrada:
        "Pasión medida equilibrada que satisface riquezas esenciales.",
      taza_abierta:
        "Encuentro perfecto equilibrado que colma expectativas gratificantes.",
      copa: "Promesa cumplida equilibrada en claridad visual seductora.",
      copa_hielo:
        "Caricia equilibrada fresca que despierta deseos contrastantes.",
    },
    press2go: {
      taza_cerrada:
        "Amor aventurero equilibrado que acompaña con intensidades placenteras.",
      taza_abierta:
        "Compañero ideal equilibrado confiable en cualquier momento.",
      copa: "Aventura equilibrada elegante que viaja con misterios nómadas.",
      copa_hielo: "Escapada perfecta equilibrada llena de armonías deliciosas.",
    },
  },
  el_tupi: {
    v60: {
      taza_cerrada:
        "Beso cítrico vibrante que despierta sentidos apasionados y jugosos.",
      taza_abierta:
        "Aventura emocionante cítrica que fluye en revitalizaciones cómodas.",
      copa: "Tentación visual cítrica que revela frutos rojos seductores.",
      copa_hielo:
        "Brisa cítrica ligera que provoca cosquillas efímeras y vibrantes.",
    },
    chemex: {
      taza_cerrada:
        "Perfume cítrico inolvidable que brilla en recuerdos aromáticos.",
      taza_abierta:
        "Amor energético cítrico que despierta vitalidades confiables.",
      copa: "Fruta prohibida cítrica en sofisticación cautivadora y clara.",
      copa_hielo:
        "Energía pura cítrica que deja euforias placenteras y frescas.",
    },
    origami: {
      taza_cerrada:
        "Mapa emocional cítrico que invita a exploraciones sensoriales intrigantes.",
      taza_abierta:
        "Vitalidad creativa cítrica llena de innovaciones revitalizantes.",
      copa: "Sinfonía frutal cítrica que hipnotiza con bellezas elegantes.",
      copa_hielo:
        "Invención vital cítrica que juega con arte fresco y delicioso.",
    },
    sifon_japones: {
      taza_cerrada:
        "Pasión cítrica espectacular que acelera cautivadores energizantes.",
      taza_abierta:
        "Estrella vibrante cercana que comparte intensidades adictivas.",
      copa: "Truco frutal maravilloso que seduce con acidez irresistible.",
      copa_hielo:
        "Escena apasionada cítrica que deja vibrando de energías frescas.",
    },
    aeropress: {
      taza_cerrada:
        "Pasión contenida cítrica jugosa esencial para despertar sentidos.",
      taza_abierta: "Encuentro perfecto cítrico concentrado y revitalizante.",
      copa: "Promesa jugosa clara que seduce con frutos rojos profundos.",
      copa_hielo:
        "Caricia helada cítrica contrastante que provoca deseos placenteros.",
    },
    press2go: {
      taza_cerrada: "Amor cítrico portátil que energiza aventuras intensas.",
      taza_abierta:
        "Compañero emocionante práctico en revitalizaciones cítricas.",
      copa: "Aventura frutal elegante que viaja con misterios itinerantes.",
      copa_hielo:
        "Escapada apasionada cítrica fresca esencial para viajes deliciosos.",
    },
  },
};
