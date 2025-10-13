"use client";

import BackgorundElementsDecoration from "@/components/BackgorundElementsDecoration";
import { coffeeCategories } from "@/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Coffee, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    router.push(`/categorias/${categoryId}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  return (
    <div
      className="min-h-screen h-full relative overflow-hidden"
      style={{ backgroundColor: "#ece6cc" }}
      ref={containerRef}
    >
      <BackgorundElementsDecoration />
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
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
                  <Sparkles className="w-6 h-6 text-black" />
                </motion.div>
              </div>
            </motion.div>

            <motion.h1
              className="text-2xl md:text-5xl font-bold mb-6 text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Don Salazar
              <p className="text-black text-lg font-medium">
                Speciality Coffee
              </p>
            </motion.h1>

            <motion.div
              className="flex items-center justify-center gap-2 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Coffee className="w-6 h-6 text-black" />
              <p className="text-black text-xl font-medium">
                Descubre nuestras categorías de café especializadas
              </p>
              <Coffee className="w-6 h-6 text-black" />
            </motion.div>

            <motion.div
              className="w-24 h-1 bg-black mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </motion.div>

          {/* Categories Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {coffeeCategories.map((category, index) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="group relative"
                onHoverStart={() => setHoveredCategory(category.id)}
                onHoverEnd={() => setHoveredCategory(null)}
                onClick={() => handleCategorySelect(category.id)}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative bg-transparent backdrop-blur-sm p-8 cursor-pointer overflow-hidden transition-all duration-300 border-2 border-black/70 hover:border-accent hover:shadow-2xl">
                  <div className="relative z-10">
                    {/* Icon Section */}
                    <motion.div
                      className="mb-6 flex justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-16 h-16 bg-accent/10 flex items-center justify-center border border-black/20">
                        <span className="text-3xl font-bold">
                          {category.icon}
                        </span>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <motion.h3
                      className="text-2xl font-bold mb-3 text-black text-center transition-colors duration-300"
                      layout
                    >
                      {category.name}
                    </motion.h3>

                    <motion.p
                      className="text-black/70 mb-6 text-center leading-relaxed text-sm"
                      layout
                    >
                      {category.description}
                    </motion.p>

                    {/* Characteristics Tags */}
                    <motion.div
                      className="flex-wrap gap-2 justify-center mb-4 flex"
                      layout
                    >
                      {category.characteristics.map(
                        (characteristic, charIndex) => (
                          <motion.span
                            key={charIndex}
                            className="px-3 py-1.5 border border-black/30 text-black text-xs font-medium hover:bg-accent/10 hover:border-accent transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.05 * charIndex }}
                          >
                            {characteristic}
                          </motion.span>
                        )
                      )}
                    </motion.div>

                    {/* Action Button */}
                    <motion.div
                      className="flex items-center justify-center gap-2 text-black font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 mt-4"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      <span className="text-sm">Ver productos</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
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
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-black shadow-sm hover:border-accent transition-all duration-300">
              <Coffee className="w-5 h-5 text-black" />
              <p className="text-black font-medium">
                Selecciona una categoría para explorar nuestros cafés
                especializados
              </p>
              <Coffee className="w-5 h-5 text-black" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
