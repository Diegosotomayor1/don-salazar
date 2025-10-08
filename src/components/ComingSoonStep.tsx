import { motion } from "framer-motion";
import { ArrowLeft, Coffee, Sparkles, User, Zap } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function ComingSoonStep({ goBack }: { goBack: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
    >
      <Card className="luxury-card">
        <CardHeader className="text-center space-y-3">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent/30 flex items-center justify-center backdrop-blur-sm">
              <Coffee className="w-10 h-10 text-accent" />
            </div>
          </motion.div>

          <CardTitle className="text-3xl font-bold text-accent">
            Próximamente
          </CardTitle>
          <CardDescription className="text-base">
            Una experiencia única está en camino
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-5">
          {/* Descripción principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-accent/5 to-transparent border border-accent/20 rounded-xl p-5"
          >
            <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
              <User className="w-5 h-5 text-accent" />
              Experiencia de Barista Personal
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Estamos preparando una experiencia única donde podrás ser tu
              propio barista. Aprenderás técnicas profesionales, controlarás
              cada detalle de la preparación y crearás tu café perfecto con
              nuestras herramientas de alta gama.
            </p>
          </motion.div>

          {/* Características en grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
          >
            <div className="flex items-start gap-3 p-4 rounded-lg bg-accent/5 border border-accent/10 hover:border-accent/20 transition-colors">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  Guía Paso a Paso
                </h4>
                <p className="text-xs text-muted-foreground">
                  Instrucciones interactivas para cada método
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-accent/5 border border-accent/10 hover:border-accent/20 transition-colors">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Coffee className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  Equipamiento Premium
                </h4>
                <p className="text-xs text-muted-foreground">
                  Herramientas profesionales de barista
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-accent/5 border border-accent/10 hover:border-accent/20 transition-colors">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  Personalización Total
                </h4>
                <p className="text-xs text-muted-foreground">
                  Controla temperatura, tiempo y técnica
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-accent/5 border border-accent/10 hover:border-accent/20 transition-colors">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  Experiencia Educativa
                </h4>
                <p className="text-xs text-muted-foreground">
                  Aprende los secretos del café especial
                </p>
              </div>
            </div>
          </motion.div>

          {/* Botón de volver */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              onClick={goBack}
              variant="ghost"
              className="w-full mt-2 text-muted-foreground hover:text-foreground hover:bg-primary/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
