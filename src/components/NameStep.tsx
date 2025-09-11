import { motion } from "framer-motion";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { ArrowRight } from "lucide-react";
import { UserData } from "@/types";
import { Dispatch, SetStateAction } from "react";

// Step Components
export function NameStep({
  userData,
  setUserData,
  nextStep,
}: {
  userData: UserData;
  setUserData: Dispatch<SetStateAction<UserData>>;
  nextStep: () => void;
}) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userData.name.trim()) {
      nextStep();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
    >
      <Card className="luxury-card">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-foreground">
            ¿Cuál es tu nombre?
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Comencemos tu experiencia personalizada
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="text"
              placeholder="Escribe tu nombre aquí..."
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              className="text-lg p-4 rounded-2xl gold-border bg-input text-foreground placeholder:text-muted-foreground"
              autoFocus
            />
            <Button
              type="submit"
              className="luxury-button w-full py-4 text-lg cursor-pointer"
              disabled={!userData.name.trim()}
            >
              Continuar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
