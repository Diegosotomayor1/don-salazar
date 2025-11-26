"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X } from "lucide-react";
import { useSede } from "@/hooks/useSede";
import { SEDES } from "@/types";

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const allLocations = [
  { name: "San Miguel", value: SEDES.SAN_MIGUEL },
  { name: "Miraflores", value: SEDES.MIRAFLORES },
  { name: "San Isidro", value: SEDES.SAN_ISIDRO },
  { name: "Higuereta", value: SEDES.HIGUERETA },
  { name: "Jockey Plaza", value: SEDES.JOCKEY_PLAZA },
  { name: "Salaverry", value: SEDES.SALAVERRY },
  { name: "Punta Mar", value: SEDES.PUNTA_MAR },
  { name: "Universidad del Pacífico", value: SEDES.UNIVERSIDAD_DEL_PACIFICO },
  { name: "Fontana", value: SEDES.FONTANA },
];

export default function LocationModal({ isOpen, onClose }: LocationModalProps) {
  const { sede, changeSede } = useSede();

  const handleLocationSelect = (selectedSede: SEDES) => {
    changeSede(selectedSede);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-2xl max-h-[80dvh] overflow-y-auto bg-black/90 border-2 border-accent shadow-2xl backdrop-blur-md"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-black/90 border-b border-accent p-6 z-10 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold text-white">
                    ¿En qué local estás?
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Locations List */}
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {allLocations.map((location) => (
                  <button
                    key={location.value}
                    onClick={() => handleLocationSelect(location.value)}
                    className={`p-4 border-2 rounded-none transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                      sede === location.value
                        ? "border-accent bg-accent/20 text-white"
                        : "border-accent/30 bg-black/50 text-white hover:border-accent hover:bg-accent/10"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 flex-shrink-0 text-accent" />
                      <span className="font-medium">{location.name}</span>
                    </div>
                    {sede === location.value && (
                      <div className="mt-2 text-sm text-accent font-semibold">
                        Selección actual
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Info Section */}
              <div className="bg-accent/10 border border-accent/30 rounded-none p-4 mt-6">
                <h4 className="font-semibold text-white mb-2">
                  Información importante
                </h4>
                <p className="text-sm text-white/80">
                  <strong className="text-accent">
                    Locales Premium y Premium Fontana:
                  </strong>{" "}
                  Disponibles solo café Obatá.
                  <br />
                  <strong className="text-accent">Locales Luxury:</strong> 3
                  tipos de café disponibles.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
