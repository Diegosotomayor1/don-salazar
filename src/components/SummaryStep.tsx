import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { UserData } from "@/types";

export function SummaryStep({
  userData,
  goBack,
}: {
  userData: UserData;
  goBack: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
    >
      <Card className="luxury-card">
        <CardHeader className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <div className="p-4 rounded-full gold-border bg-primary/10 w-fit mx-auto mb-4">
              <CheckCircle className="h-16 w-16 text-primary" />
            </div>
          </motion.div>
          <CardTitle className="text-2xl text-foreground">
            ¡Pedido Confirmado!
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Resumen de tu selección
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="gold-border bg-card/30 p-6 rounded-2xl">
            <h3 className="font-semibold text-foreground mb-4">
              Detalles del pedido para {userData.name}:
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tipo de café:</span>
                <span className="font-medium text-foreground capitalize">
                  {userData.coffeeType?.replace("-", " ")}
                </span>
              </div>
              {userData.milkType && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tipo de leche:</span>
                  <span className="font-medium text-foreground capitalize">
                    {userData.milkType}
                  </span>
                </div>
              )}
              {userData.filterType && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Método de filtrado:
                  </span>
                  <span className="font-medium text-foreground capitalize">
                    {userData.filterType.replace("-", " ")}
                  </span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tamaño:</span>
                <span className="font-medium text-foreground capitalize">
                  {userData.coffeeSize}
                </span>
              </div>
            </div>
          </div>

          <Button
            onClick={goBack}
            variant="outline"
            className="w-full rounded-2xl gold-border bg-transparent text-foreground hover:bg-primary/10 hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Modificar pedido
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
