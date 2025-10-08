"use client";

import BackgorundElementsDecoration from "@/components/BackgorundElementsDecoration";
import { workshops } from "@/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { Coffee, ExternalLink, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Talleres() {
  const [hoveredWorkshop, setHoveredWorkshop] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const handleWorkshopClick = (whatsappLink: string) => {
    window.open(whatsappLink, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  return (
    <div
      className="min-h-screen h-full relative overflow-hidden"
      style={{ backgroundColor: "#ece6cc" }}
      ref={containerRef}
    >
      <BackgorundElementsDecoration />
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6 py-20">
        <motion.div style={{ y, opacity }} className="w-full max-w-6xl">
          {/* Header Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="flex items-center justify-center gap-4 mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2,
              }}
            >
              <div className="relative">
                <Image
                  src="/logo-don-salazar-variant.png"
                  alt="Don Salazar Logo"
                  width={140}
                  height={140}
                  className="drop-shadow-lg"
                />
                <motion.div
                  className="absolute -top-2 -right-2"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Sparkles className="w-6 h-6 text-accent" />
                </motion.div>
              </div>
            </motion.div>

            <motion.h1
              className="text-2xl md:text-5xl font-bold mb-6 text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Talleres Don Salazar
            </motion.h1>

            <motion.div
              className="max-w-3xl mx-auto mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-black text-lg leading-relaxed mb-2">
                💡 <strong>Tu próximo talento oculto:</strong> preparar el mejor
                café de tu vida.
              </p>
              <p className="text-black text-lg leading-relaxed">
                ☕ Y sí, lo descubrimos en nuestros talleres. 😉🔥
              </p>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-2 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Coffee className="w-6 h-6 text-accent" />
              <p className="text-black text-xl font-medium">
                Conócelos aquí 👇
              </p>
              <Coffee className="w-6 h-6 text-accent" />
            </motion.div>

            <motion.div
              className="w-24 h-1 bg-accent mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </motion.div>

          {/* Workshops Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {workshops.map((workshop) => (
              <motion.div
                key={workshop.id}
                variants={itemVariants}
                className="group relative"
                onHoverStart={() => setHoveredWorkshop(workshop.id)}
                onHoverEnd={() => setHoveredWorkshop(null)}
                onClick={() => handleWorkshopClick(workshop.whatsappLink)}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative bg-accent rounded-3xl p-8 shadow-lg border border-accent/30 cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-accent hover:bg-accent/90 h-full flex flex-col">
                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border-2 border-transparent"
                    animate={{
                      borderColor:
                        hoveredWorkshop === workshop.id
                          ? [
                              "hsl(var(--accent))",
                              "hsl(var(--accent) / 0.7)",
                              "hsl(var(--accent) / 0.5)",
                              "hsl(var(--accent))",
                            ]
                          : "transparent",
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon Section */}
                    <motion.div
                      className="mb-6 flex justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="relative">
                        <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center shadow-lg border border-accent/20">
                          <span className="text-4xl font-bold text-accent">
                            {workshop.icon}
                          </span>
                        </div>
                        <motion.div
                          className="absolute -inset-2 rounded-2xl bg-accent opacity-0 group-hover:opacity-20 blur-lg"
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <motion.h3
                      className="text-2xl font-bold mb-3 text-white text-center transition-colors duration-300"
                      layout
                    >
                      {workshop.name}
                    </motion.h3>

                    <motion.p
                      className="text-white/90 mb-4 text-center text-sm font-medium italic"
                      layout
                    >
                      {workshop.subtitle}
                    </motion.p>

                    <motion.p
                      className="text-white/80 mb-6 text-center leading-relaxed text-sm flex-grow"
                      layout
                    >
                      {workshop.description}
                    </motion.p>

                    {/* Pricing */}
                    <div className="bg-white/10 rounded-xl p-4 mb-4 border border-white/20">
                      <div className="grid grid-cols-2 gap-3 text-center">
                        <div>
                          <p className="text-white/70 text-xs mb-1">1 cupo</p>
                          <p className="text-white font-bold text-lg">
                            S/ {workshop.pricing.single}
                          </p>
                        </div>
                        <div>
                          <p className="text-white/70 text-xs mb-1">2 cupos</p>
                          <p className="text-white font-bold text-lg">
                            S/ {workshop.pricing.double}
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-white/20">
                        <p className="text-white/80 text-xs text-center">
                          ⏱️ {workshop.duration} • {workshop.type}
                        </p>
                      </div>
                    </div>

                    {/* Action Button */}
                    <motion.div
                      className="flex items-center justify-center gap-2 text-white font-semibold bg-white/10 hover:bg-white/20 rounded-xl py-3 px-4 transition-all duration-300 border border-white/20"
                      whileHover={{ scale: 1.02 }}
                    >
                      <span>Inscríbete aquí</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-black/20 rounded-full border border-black/30 shadow-sm hover:bg-black/30 hover:border-accent/30 transition-all duration-300">
              <Coffee className="w-5 h-5 text-accent" />
              <p className="text-black font-medium">
                Haz clic en un taller para inscribirte por WhatsApp
              </p>
              <Coffee className="w-5 h-5 text-accent" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
