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
      price: 12,
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
      video:
        "/carta/el calor del grano/Pink_Cappuccino_nueva_carta_comprimido.mp4",
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
      name: "Black Cappuccino ★",
      nameEn: "Black Cappuccino ★",
      description:
        "Espresso intenso con leche vaporizada y con un toque caramel con carbón activado. ",
      descriptionEn:
        "Intense espresso with steamed milk and a touch of caramel with activated charcoal.",
      price: 17,
      tags: [],
      video: "/carta/el calor del grano/Black cappuccino_comprimido.mp4",
      img: "/carta/el calor del grano/black_cappuccino.png",
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
      video: "/carta/la frescura del grano/Americano_Frio_comprimido.mp4",
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
      video: "/carta/la frescura del grano/Iced_Pink_Cappuccino_comprimido.mp4",
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
      name: "Iced Black Cappuccino ★",
      nameEn: "Iced Black Cappuccino ★",
      price: 19,
      description:
        "Shot de espresso con leche fresca, con un toque caramel con carbón activado y abundante hielo.",
      descriptionEn:
        "Espresso shot with fresh milk, with a touch of caramel with activated charcoal and plenty of ice.",
      tags: [],
      video:
        "/carta/la frescura del grano/Iced_Black_Cappuccino_comprimido.mp4",
      img: "/carta/la frescura del grano/iced black cappuccino.png",
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
        "/carta/la frescura del grano/Sparkling_Coffee_Clásico_comprimido.mp4",
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
      price: 14,
      description: "Infusión natural con hierbas que ayudan a la digestión.",
      descriptionEn: "Natural infusion with herbs that aid digestion.",
      tags: [],
      video: "/carta/mas alla del grano/Alivio Don Salazar_comprimido.mp4",
      img: "/carta/mas alla del grano/alivio don salazar.png",
    },
    {
      name: "Amor de Jamaica",
      nameEn: "Love of Jamaica",
      price: 14,
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
      price: 14,
      description:
        "Caliente, elaborado con chocolate derretido y leche cremosa.",
      descriptionEn: "Hot, made with melted chocolate and creamy milk.",
      tags: [],
      video: "/carta/mas alla del grano/Chocolate Caliente_comprimido.mp4",
      img: "/carta/mas alla del grano/chocolate caliente.png",
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
      name: "Cerveza Don Salazar",
      nameEn: "Don Salazar Beer",
      price: 25,
      description:
        "Cerveza artesanal de la casa elaborada con nuestro café de especialidad, sabor único, equilibrado y refrescante.",
      descriptionEn:
        "House craft beer made with our specialty coffee, unique, balanced and refreshing flavor.",
      tags: [],
      video: "/cafe.mp4",
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
      price: 25,
      description:
        "Pan focaccia con mantequilla cajamarquina, tocino, lomo ahumado, mozzarella y salsa especial.",
      descriptionEn:
        "Focaccia bread with Cajamarca butter, bacon, smoked loin, mozzarella and special sauce.",
      tags: [],
      video: "/carta/acompañamientos salazar/focaccia ahumado_comprimido.mp4",
      img: "/carta/acompañamientos salazar/focaccia ahumado.png",
    },
    {
      name: "Focaccia Capresse",
      nameEn: "Capresse Focaccia",
      price: 19,
      description:
        "Pan focaccia con mantequilla cajamarquina, tomate, mozzarella, albahaca y aceite de oliva.",
      descriptionEn:
        "Focaccia bread with Cajamarca butter, tomato, mozzarella, basil and olive oil.",
      tags: [],
      video: "/carta/acompañamientos salazar/focaccia capresse_comprimido.mp4",
      img: "/carta/acompañamientos salazar/focaccia capresse.png",
    },
    {
      name: "Maison QhiChé",
      nameEn: "Maison QhiChé",
      price: 25,
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
      price: 25,
      description:
        "Base de croissant hojaldrado con queso fundido, pollo, tomate, albahaca y salsa de yogurt para un toque cremoso y equilibrado.",
      descriptionEn:
        "Flaky croissant base with melted cheese, chicken, tomato, basil and yogurt sauce for a creamy and balanced touch.",
      tags: ["Selección de la Casa"],
      video: "/carta/seleccion de la casa/Pizza del don_comprimido.mp4",
      img: "/carta/seleccion de la casa/pizza del don.png",
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
      video: "/carta/seleccion de la casa/tabla de queso_comprimido.mp4",
      img: "/carta/seleccion de la casa/tabla de queso.png",
    },
    {
      name: "Tabla de Jamones",
      nameEn: "Cured Meat Board",
      price: 38,
      description:
        "Selección de jamones curados artesanales con acompañamientos.",
      descriptionEn: "Selection of artisanal cured meats with accompaniments.",
      tags: ["Selección de la Casa"],
      video: "/carta/seleccion de la casa/tabla de jamones_comprimido.mp4",
      img: "/carta/seleccion de la casa/tabla de jamones.png",
    },
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
        "/carta/acompañamientos salazar/Empanada napolitana_comprimido.mp4",
      img: "/carta/acompañamientos salazar/empanada napolitana.png",
    },
    {
      name: "Focaccia Ahumado",
      nameEn: "Smoked Focaccia",
      price: 25,
      description:
        "Pan focaccia con mantequilla cajamarquina, tocino, lomo ahumado, mozzarella y salsa especial.",
      descriptionEn:
        "Focaccia bread with Cajamarca butter, bacon, smoked loin, mozzarella and special sauce.",
      tags: [],
      video: "/carta/acompañamientos salazar/focaccia ahumado_comprimido.mp4",
      img: "/carta/acompañamientos salazar/focaccia ahumado.png",
    },
    {
      name: "Focaccia Capresse",
      nameEn: "Capresse Focaccia",
      price: 19,
      description:
        "Pan focaccia con mantequilla cajamarquina, tomate, mozzarella, albahaca y aceite de oliva.",
      descriptionEn:
        "Focaccia bread with Cajamarca butter, tomato, mozzarella, basil and olive oil.",
      tags: [],
      video: "/carta/acompañamientos salazar/focaccia capresse_comprimido.mp4",
      img: "/carta/acompañamientos salazar/focaccia capresse.png",
    },
    {
      name: "Maison QhiChé",
      nameEn: "Maison QhiChé",
      price: 25,
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
      video: "/cafe.mp4",
      img: "/carta/manjares salazar/galletón chocohips_1.png",
    },
    {
      name: "Brownie",
      nameEn: "Brownie",
      price: 9,
      description:
        "Brownie de chocolate intenso con vainilla, nueces y fudge casero.",
      descriptionEn:
        "Intense chocolate brownie with vanilla, nuts and homemade fudge.",
      tags: [],
      video: "/carta/manjares salazar/Brownie_comprimido.mp4",
      img: "/carta/manjares salazar/brownie_1.png",
    },
    {
      name: "Muffin Triple Chocolate",
      nameEn: "Triple Chocolate Muffin",
      price: 12,
      description:
        "Muffin esponjoso de cacao intenso con trozos y chispas de chocolate.",
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
      description: "Galleta grande y suave, rellena de cremosa Nutella.",
      descriptionEn: "Large and soft cookie filled with creamy Nutella.",
      tags: [],
      video: "/carta/manjares salazar/galleta de nutella_comprimido.mp4",
      img: "/carta/manjares salazar/galletón de nutella_1.png",
    },
    {
      name: "Crumble Cookie Pistacho",
      nameEn: "Pistachio Crumble Cookie",
      price: 12,
      description: "Galleta suave con crumble crocante y trozos de pistacho.",
      descriptionEn: "Soft cookie with crunchy crumble and pistachio pieces.",
      tags: [],
      video: "/carta/manjares salazar/crumble de pistacho_comprimido.mp4",
      img: "/carta/manjares salazar/crumble cookie pistacho.png",
    },
    {
      name: "Torta de Chocolate",
      nameEn: "Chocolate Cake",
      price: 18,
      description: "Bizcocho de chocolate húmedo con abundante fudge casero.",
      descriptionEn: "Moist chocolate cake with abundant homemade fudge.",
      tags: [],
      video: "/carta/manjares salazar/torta de chocolate_comprimido.mp4",
      img: "/carta/manjares salazar/torta_chocolate_2.png",
    },
    {
      name: "Queque Artesanal",
      nameEn: "Artisanal Cake",
      price: 12,
      description: "El clásico de clásicos. Consultar sabores disponibles.",
      descriptionEn: "The classic of classics. Check available flavors.",
      tags: [],
      video: "/carta/manjares salazar/queque de maracuya_comprimido.mp4",
      img: "/carta/manjares salazar/queque de maracuyá_1.png",
    },
    {
      name: "Affogato",
      nameEn: "Affogato",
      price: 18,
      description: "Helado de vainilla Madagascar con un shot de espresso.",
      descriptionEn: "Madagascar vanilla ice cream with a shot of espresso.",
      tags: [],
      video: "/carta/manjares salazar/Affogato_comprimido.mp4",
      img: "/carta/manjares salazar/affogato.png",
    },
    {
      name: "Carrot Cake",
      nameEn: "Carrot Cake",
      price: 18,
      description: "Pastel de zanahoria con nueces y cremoso queso crema.",
      descriptionEn: "Carrot cake with nuts and creamy cream cheese.",
      tags: [],
      video: "/carta/manjares salazar/carrot cake_comprimido.mp4",
      img: "/carta/manjares salazar/carrot cake1.png",
    },
    {
      name: "Cheesecake Maracumango",
      nameEn: "Maracumango Cheesecake",
      price: 18,
      description:
        "Cheesecake cremoso con base crujiente y topping de maracuyá y mango.",
      descriptionEn:
        "Creamy cheesecake with crunchy base and topping of passion fruit and mango.",
      tags: [],
      video:
        "/carta/manjares salazar/cheescake de maracumango(1)_comprimido.mp4",
      img: "/carta/manjares salazar/cheescake de maracumango_1.png",
    },
    {
      name: "Cheesecake Frutos Rojos",
      nameEn: "Red Fruits Cheesecake",
      price: 18,
      description: "Cheesecake cremoso con cobertura de frutos rojos frescos.",
      descriptionEn: "Creamy cheesecake with fresh red fruits topping.",
      tags: [],
      video: "/carta/manjares salazar/cheescake frutos rojos(1)_comprimido.mp4",
      img: "/carta/manjares salazar/cheescake de frutos rojos.png",
    },
    {
      name: "Waffle",
      nameEn: "Waffles",
      price: 25,
      description: "Waffles con arándanos y fresa bañados en miel.",
      descriptionEn:
        "Waffles with blueberries and strawberries drizzled with honey.",
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
        "Cóctel refrescante de pisco, curacao azul, naranja, limón, Ginger Ale y cold brew.",
      descriptionEn:
        "Refreshing cocktail with pisco, blue curacao, orange, lemon, Ginger Ale and cold brew.",
      tags: [],
      video: "/cafe.mp4",
      img: "/carta/cocteles con historia/la chica del bikini azul.png",
    },
    {
      name: "Pisco Sour de Café",
      nameEn: "Coffee Pisco Sour",
      price: 30,
      description:
        "Clásico pisco sour peruano con un toque de nuestro café de especialidad.",
      descriptionEn:
        "Classic Peruvian pisco sour with a touch of our specialty coffee.",
      tags: [],
      video: "/cafe.mp4",
      img: "/carta/cocteles con historia/Pisco sour.jpg",
    },
    {
      name: "Espresso Martini",
      nameEn: "Espresso Martini",
      price: 32,
      description:
        "Vodka, licor de café, espresso fresco y un toque de sirope. Elegante y energizante.",
      descriptionEn:
        "Vodka, coffee liqueur, fresh espresso and a touch of syrup. Elegant and energizing.",
      tags: [],
      video: "/cafe.mp4",
      img: "/carta/cocteles con historia/espresso martini.png",
    },
    {
      name: "White Russian",
      nameEn: "White Russian",
      price: 28,
      description:
        "Vodka, licor de café y crema. Clásico, cremoso y delicioso.",
      descriptionEn:
        "Vodka, coffee liqueur and cream. Classic, creamy and delicious.",
      tags: [],
      video: "/cafe.mp4",
      img: "/carta/cocteles con historia/sex on the farm.png",
    },
    {
      name: "Irish Coffee",
      nameEn: "Irish Coffee",
      price: 26,
      description:
        "Whiskey irlandés, café caliente, azúcar y crema batida. La tradición irlandesa.",
      descriptionEn:
        "Irish whiskey, hot coffee, sugar and whipped cream. The Irish tradition.",
      tags: [],
      video: "/cafe.mp4",
      img: "/carta/cocteles con historia/la incondicinal.png",
    },
    {
      name: "Don Espresso Martini ★",
      nameEn: "Don Espresso Martini ★",
      price: 38,
      description:
        "Nuestra versión premium del clásico con doble espresso y granos de café gourmet.",
      descriptionEn:
        "Our premium version of the classic with double espresso and gourmet coffee beans.",
      tags: [],
      video: "/cafe.mp4",
      img: "/carta/cocteles con historia/don kofi sour.png",
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
    name: "El balanceado",
    shortDescription:
      "Combina la dulzura del chocolate con un toque frutal muy sutil.",
    description:
      "La taza perfecta para quienes buscan equilibrio. Combina la dulzura del chocolate con un toque frutal muy sutil, resultando en una bebida amable y fácil de tomar.",
    icon: "⚖️",
    img: "/experiences/balanceado.png",
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

// Frases pícaras para cada combinación de café
export const piquantPhrases = {
  el_obata: {
    v60: {
      taza_cerrada:
        "Suave como una caricia prohibida... Este café cremoso te seduce lentamente, dejando un dulzor que provoca adicción y te hace cerrar los ojos de placer.",
      taza_abierta:
        "Tierno pero juguetón... Como un beso robado que te deja con ganas de más. Su dulzor cremoso invita a encuentros repetidos y placenteros.",
      copa: "Misterioso y tentador... Como una mirada que promete secretos deliciosos. Sus notas tostadas se revelan en una danza visual que te hipnotiza.",
      copa_hielo:
        "Refrescante travieso... Un beso helado que te provoca con dulzor. Fresco, cremoso y tan adictivo que querrás repetirlo una y otra vez.",
    },
    chemex: {
      taza_cerrada:
        "Persistente como un perfume inolvidable... Se queda en tu paladar como un amante apasionado. Concentrado, aromático y completamente seductor.",
      taza_abierta:
        "Clásico con chispa... Como un amor que siempre vuelve por más. Equilibrado, confiable y tan delicioso que se vuelve irresistible.",
      copa: "Transparente y honesto... Revela cada secreto en su pureza cristalina. Limpio, elegante y con un toque de misterio que te cautiva.",
      copa_hielo:
        "Ligero como una brisa erótica... Se desvanece dejando solo el recuerdo de su dulzor efímero. Refrescante y tan sutil que provoca antojo.",
    },
    origami: {
      taza_cerrada:
        "Intrincado y fascinante... Como un juego de seducción complejo. Versátil, creativo y tan delicioso que te hace querer explorar cada rincón.",
      taza_abierta:
        "Práctico pero apasionado... Como una aventura improvisada que termina en éxtasis. Balanceado, cómodo y completamente satisfactorio.",
      copa: "Artístico y sofisticado... Una obra maestra visual que seduce los sentidos. Complejo, elegante y con un toque de travesura visual.",
      copa_hielo:
        "Ingenioso y provocador... Una invención que juega con tus expectativas. Fresco, creativo y tan adictivo que se vuelve imprescindible.",
    },
    sifon_japones: {
      taza_cerrada:
        "Espectacular y envolvente... Como un show privado que te deja sin aliento. Aromático, dramático y completamente cautivador.",
      taza_abierta:
        "Impresionante pero accesible... Como una estrella que baja a tu nivel. Complejo, cómodo y tan memorable que querrás repetirlo.",
      copa: "Visualmente seductor... Un truco de magia que revela placeres ocultos. Espectacular, fascinante y con un toque teatral irresistible.",
      copa_hielo:
        "Dramático y refrescante... Una escena apasionada que acelera el corazón. Fresco, intenso y tan emocionante que te deja temblando.",
    },
    aeropress: {
      taza_cerrada:
        "Intenso y suave... Como una pasión contenida que explota de placer. Sedoso, cremoso y tan rico que se vuelve adictivo.",
      taza_abierta:
        "Directo y satisfactorio... Como un encuentro espontáneo perfecto. Concentrado, placentero y completamente gratificante.",
      copa: "Pura y elegante... Como un secreto compartido en intimidad. Clara, suave y con una honestidad que seduce profundamente.",
      copa_hielo:
        "Suave y provocadora... Una caricia helada que despierta sentidos. Contrastante, fresca y tan placentera que provoca repetición.",
    },
    press2go: {
      taza_cerrada:
        "Portátil y apasionado... Como un amor que te acompaña everywhere. Concentrado, intenso y siempre listo para sorprender.",
      taza_abierta:
        "Conveniente y delicioso... Como un encuentro casual que se vuelve habitual. Práctico, placentero y completamente adictivo.",
      copa: "Viajero y sofisticado... Una aventura elegante que viaja contigo. Complejo, nómada y con un toque de misterio itinerante.",
      copa_hielo:
        "Nómada y refrescante... Una escapada espontánea llena de placer. Fresco, práctico y tan delicioso que se vuelve esencial.",
    },
  },
  el_balanceado: {
    v60: {
      taza_cerrada:
        "Delicado y equilibrado... Como un flirteo sutil que seduce lentamente. Armonioso, amable y tan perfecto que te hace cerrar los ojos.",
      taza_abierta:
        "Equilibrado y accesible... Como una conversación que fluye naturalmente. Sutil, cómodo y completamente satisfactorio.",
      copa: "Transparente y honesto... Revela su alma en claridad cristalina. Elegante, sincero y con una belleza que cautiva la vista.",
      copa_hielo:
        "Ligero y juguetón... Una brisa que provoca cosquillas placenteras. Fresco, armonioso y tan delicado que se vuelve imprescindible.",
    },
    chemex: {
      taza_cerrada:
        "Limpio y persistente... Como un perfume que se queda grabado. Brillante, aromático y tan memorable que perdura en la memoria.",
      taza_abierta:
        "Clásico y confiable... Como un compañero que siempre está ahí. Equilibrado, consistente y completamente reconfortante.",
      copa: "Puro y elegante... Una verdad hermosa en presentación sofisticada. Clara, sofisticada y con una honestidad que seduce.",
      copa_hielo:
        "Efímero y delicioso... Se desvanece dejando solo satisfacción pura. Fresco, ligero y tan placentero que provoca nostalgia.",
    },
    origami: {
      taza_cerrada:
        "Intrincado y fascinante... Como un rompecabezas emocional complejo. Versátil, creativo y tan intrigante que invita a la exploración.",
      taza_abierta:
        "Creativo y práctico... Una aventura cotidiana llena de sorpresas. Balanceado, cómodo y completamente innovador.",
      copa: "Artístico y sofisticado... Una sinfonía visual que seduce los ojos. Complejo, elegante y con una belleza que hipnotiza.",
      copa_hielo:
        "Ingenioso y refrescante... Una invención que juega inteligentemente. Fresco, creativo y tan delicioso que se vuelve arte.",
    },
    sifon_japones: {
      taza_cerrada:
        "Espectacular y envolvente... Como un abrazo apasionado que acelera el pulso. Aromático, dramático y completamente cautivador.",
      taza_abierta:
        "Impresionante pero accesible... Como una estrella que comparte su brillo. Intenso, cómodo y tan memorable que se vuelve habitual.",
      copa: "Visual y seductor... Un truco revelado que maravilla los sentidos. Espectacular, fascinante y con un toque irresistible.",
      copa_hielo:
        "Dramático y refrescante... Una escena que acelera el corazón. Fresco, intenso y tan emocionante que deja huella.",
    },
    aeropress: {
      taza_cerrada:
        "Intenso pero equilibrado... Como una pasión medida que satisface completamente. Sedoso, armonioso y tan rico que se vuelve esencial.",
      taza_abierta:
        "Directo y satisfactorio... Como un encuentro perfecto que colma expectativas. Concentrado, placentero y completamente gratificante.",
      copa: "Pura y elegante... Una promesa cumplida en claridad visual. Clara, suave y con una honestidad que seduce profundamente.",
      copa_hielo:
        "Suave y refrescante... Una caricia equilibrada que despierta. Contrastante, fresca y tan placentera que provoca deseo.",
    },
    press2go: {
      taza_cerrada:
        "Portátil y apasionado... Como un amor que te acompaña en aventuras. Equilibrado, intenso y siempre listo para complacer.",
      taza_abierta:
        "Conveniente y delicioso... Como un compañero ideal en cualquier momento. Práctico, placentero y completamente confiable.",
      copa: "Viajero y sofisticado... Una aventura equilibrada que viaja contigo. Complejo, elegante y con un toque de misterio nómada.",
      copa_hielo:
        "Nómada y refrescante... Una escapada perfecta llena de armonía. Fresco, práctico y tan delicioso que se vuelve imprescindible.",
    },
  },
  el_tupi: {
    v60: {
      taza_cerrada:
        "Vibrante y apasionado... Como un beso cítrico que despierta los sentidos. Jugoso, brillante y tan energético que acelera el pulso.",
      taza_abierta:
        "Refrescante y accesible... Como una aventura emocionante que fluye. Cítrico, cómodo y completamente revitalizante.",
      copa: "Transparente y provocador... Revela frutos rojos en tentación visual. Elegante, jugoso y con una acidez que seduce irresistiblemente.",
      copa_hielo:
        "Ligero y efímero... Una brisa cítrica que provoca cosquillas. Fresco, vibrante y tan delicioso que deja antojo permanente.",
    },
    chemex: {
      taza_cerrada:
        "Limpio y persistente... Como un perfume cítrico inolvidable. Brillante, aromático y tan vibrante que perdura en el recuerdo.",
      taza_abierta:
        "Clásico y refrescante... Como un amor que despierta energías. Cítrico, confiable y completamente revitalizante cada mañana.",
      copa: "Puro y elegante... Una fruta prohibida en sofisticación. Clara, vibrante y con una belleza cítrica que cautiva completamente.",
      copa_hielo:
        "Efímero y delicioso... Se desvanece dejando energía pura. Fresco, ligero y tan placentero que provoca euforia.",
    },
    origami: {
      taza_cerrada:
        "Intrincado y fascinante... Como un mapa de emociones cítricas. Versátil, creativo y tan intrigante que invita a la exploración sensorial.",
      taza_abierta:
        "Creativo y práctico... Una aventura cítrica llena de vitalidad. Vibrante, cómodo y completamente innovador y revitalizante.",
      copa: "Artístico y sofisticado... Una sinfonía de colores frutales. Complejo, elegante y con una belleza cítrica que hipnotiza los sentidos.",
      copa_hielo:
        "Ingenioso y refrescante... Una invención que juega con vitalidad. Fresco, creativo y tan delicioso que se vuelve obra de arte cítrica.",
    },
    sifon_japones: {
      taza_cerrada:
        "Espectacular y envolvente... Como una pasión cítrica que acelera todo. Aromático, dramático y completamente energizante y cautivador.",
      taza_abierta:
        "Impresionante pero accesible... Como una estrella vibrante cercana. Intenso, cómodo y tan memorable que se vuelve adictivo.",
      copa: "Visual y seductor... Un truco frutal que maravilla los sentidos. Espectacular, fascinante y con una acidez irresistible.",
      copa_hielo:
        "Dramático y refrescante... Una escena apasionada cítrica. Fresco, intenso y tan emocionante que deja vibrando de energía.",
    },
    aeropress: {
      taza_cerrada:
        "Intenso y jugoso... Como una pasión cítrica contenida. Sedoso, vibrante y tan rico que se vuelve esencial para despertar.",
      taza_abierta:
        "Directo y satisfactorio... Como un encuentro cítrico perfecto. Concentrado, placentero y completamente revitalizante.",
      copa: "Pura y elegante... Una promesa jugosa en claridad. Clara, suave y con frutos rojos que seducen profundamente.",
      copa_hielo:
        "Suave y provocadora... Una caricia cítrica helada. Contrastante, fresca y tan placentera que provoca deseo de más.",
    },
    press2go: {
      taza_cerrada:
        "Portátil y apasionado... Como un amor cítrico que viaja. Vibrante, intenso y siempre listo para energizar donde sea.",
      taza_abierta:
        "Conveniente y delicioso... Como un compañero emocionante. Práctico, cítrico y completamente revitalizante en cualquier momento.",
      copa: "Viajero y sofisticado... Una aventura frutal elegante. Complejo, nómada y con un toque de misterio cítrico itinerante.",
      copa_hielo:
        "Nómada y refrescante... Una escapada apasionada cítrica. Fresco, práctico y tan delicioso que se vuelve esencial para viajar.",
    },
  },
};
