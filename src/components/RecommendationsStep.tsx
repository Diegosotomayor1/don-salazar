import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Coffee } from "lucide-react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

export function RecommendationsStep({ goBack }: { goBack: () => void }) {
  const [activeTab, setActiveTab] = useState<"methods" | "types" | "sizes">(
    "methods"
  );

  const recommendations = [
    {
      title: "Prensa Francesa",
      description:
        "Perfecta para un sabor intenso y robusto. Tiempo de extracción: 4 minutos.",
      features: ["Sabor completo", "Fácil de usar", "Ideal para principiantes"],
    },
    {
      title: "V60",
      description:
        "Para los amantes del café limpio y brillante. Requiere técnica pero vale la pena.",
      features: ["Sabor limpio", "Control total", "Para expertos"],
    },
    {
      title: "Espresso",
      description:
        "La base de muchas bebidas. Concentrado, cremoso y lleno de sabor.",
      features: ["Muy concentrado", "Base para lattes", "Rápido de preparar"],
    },
  ];

  const coffeeTypes = [
    {
      title: "Arábica",
      description: "Sabor suave y aromático, con notas dulces y frutales.",
      origin: "Origen: Etiopía",
    },
    {
      title: "Robusta",
      description: "Más fuerte y amargo, con mayor contenido de cafeína.",
      origin: "Origen: África Central",
    },
    {
      title: "Blends Especiales",
      description:
        "Mezclas cuidadosamente seleccionadas para equilibrio perfecto.",
      origin: "Creación: Don Salazar",
    },
  ];

  const sizes = [
    {
      size: "Pequeño",
      oz: "8 oz",
      ml: "240 ml",
      description: "Perfecto para una dosis rápida de energía",
    },
    {
      size: "Mediano",
      oz: "12 oz",
      ml: "360 ml",
      description: "El tamaño más popular, ideal para cualquier momento",
    },
    {
      size: "Grande",
      oz: "16 oz",
      ml: "480 ml",
      description: "Para los verdaderos amantes del café",
    },
  ];

  const tabs = [
    { id: "methods", label: "Métodos de Filtrado", icon: Coffee },
    { id: "types", label: "Tipos de Café", icon: Coffee },
    { id: "sizes", label: "Tamaños Disponibles", icon: Coffee },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
    >
      <Button
        onClick={goBack}
        variant="outline"
        className="w-full rounded-2xl gold-border bg-transparent text-foreground hover:bg-primary/10 hover:text-foreground cursor-pointer"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Volver al inicio
      </Button>

      <div className="space-y-6">
        <Card className="luxury-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-foreground">
              Recomendaciones de Don Salazar
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Aprende sobre nuestros métodos y tipos de café
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="luxury-card">
          <CardContent className="p-6">
            <div className="flex space-x-1 rounded-2xl gold-border bg-card/20 p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() =>
                    setActiveTab(tab.id as "methods" | "types" | "sizes")
                  }
                  className={`flex-1 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "luxury-button text-background"
                      : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
                  }`}
                >
                  <tab.icon className="h-4 w-4 mx-auto mb-1" />
                  <div className="text-xs">{tab.label}</div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        <AnimatePresence mode="wait">
          {activeTab === "methods" && (
            <motion.div
              key="methods"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    Métodos de Filtrado
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recommendations.map((method, index) => (
                    <motion.div
                      key={method.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="gold-border bg-card/30">
                        <CardContent className="p-4">
                          <h3 className="font-semibold text-foreground mb-2">
                            {method.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            {method.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {method.features.map((feature) => (
                              <span
                                key={feature}
                                className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeTab === "types" && (
            <motion.div
              key="types"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    Tipos de Café
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {coffeeTypes.map((coffee, index) => (
                    <motion.div
                      key={coffee.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="gold-border bg-card/30">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-foreground">
                              {coffee.title}
                            </h3>
                            <span className="text-xs text-primary bg-primary/20 px-2 py-1 rounded-full border border-primary/30">
                              {coffee.origin}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {coffee.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeTab === "sizes" && (
            <motion.div
              key="sizes"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    Tamaños Disponibles
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {sizes.map((item, index) => (
                    <motion.div
                      key={item.size}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="gold-border bg-card/30">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-foreground">
                              {item.size}
                            </h3>
                            <div className="text-right">
                              <p className="text-sm text-primary font-medium">
                                {item.oz}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {item.ml}
                              </p>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
