import { motion } from "framer-motion";
import { ArrowLeft, Coffee, Award, Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { UserData } from "@/types";

export function FinalRecommendationStep({
  userData,
  goBack,
}: {
  userData: UserData;
  goBack: () => void;
}) {
  const { finalRecommendation } = userData;

  if (!finalRecommendation) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <p className="text-muted-foreground">
          No se pudo generar una recomendación. Por favor, intenta de nuevo.
        </p>
      </motion.div>
    );
  }

  const { grano, metodo, taza } = finalRecommendation;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    >
      <div className="space-y-6">
        {/* Header con celebración */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="luxury-card text-center">
            <CardHeader>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring", damping: 15 }}
                className="flex justify-center mb-4"
              >
                <div className="relative">
                  <Award className="h-16 w-16 text-primary" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -top-2 -right-2"
                  >
                    <Sparkles className="h-6 w-6 text-yellow-500" />
                  </motion.div>
                </div>
              </motion.div>
              <CardTitle className="text-3xl text-foreground mb-2">
                ¡Tu Recomendación Perfecta!
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Hola {userData.name}, basándose en tus respuestas, esta es tu
                combinación ideal
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Recomendaciones */}
        <div className="grid gap-6">
          {/* Grano de Café */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="luxury-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center border border-amber-500/30">
                    <Coffee className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">
                      Tu Grano de Café
                    </CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {grano.nombre}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {grano.descripcion}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Método de Preparación */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card className="luxury-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-blue-500/30">
                    <Coffee className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">
                      Método de Preparación
                    </CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {metodo.nombre}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {metodo.descripcion}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tipo de Taza */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
          >
            <Card className="luxury-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center border border-green-500/30">
                    <Coffee className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">
                      Tu Taza Ideal
                    </CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {taza.nombre}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {taza.descripcion}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Mensaje final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <Card className="luxury-card bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                ¡Disfruta tu experiencia perfecta!
              </h3>
              <p className="text-muted-foreground">
                Esta combinación ha sido cuidadosamente seleccionada para ti.
                Esperamos que disfrutes cada sorbo de tu café ideal.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Botones de acción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex gap-4"
        >
          <Button
            onClick={goBack}
            variant="outline"
            className="flex-1 rounded-2xl gold-border bg-transparent text-foreground hover:bg-primary/10 hover:text-foreground cursor-pointer"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver y elegir
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
