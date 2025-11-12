"use client";

import BackgorundElementsDecoration from "@/components/BackgorundElementsDecoration";
import { coffeeCategories } from "@/constants";
import { useTranslations } from "@/hooks/useTranslations";
import { motion } from "framer-motion";
import { ArrowRight, Coffee, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function Categories() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { tCategory, tUI } = useTranslations();

  const handleCategorySelect = (categoryId: string) => {
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

  return (
    <div
      className="min-h-screen h-full relative overflow-hidden"
      style={{ backgroundColor: "#ece6cc" }}
      ref={containerRef}
    >
      <BackgorundElementsDecoration />
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-3 md:p-6 lg:p-8">
        <motion.div className="w-full max-w-6xl">
          {/* Header Section */}
          <motion.div
            className="text-center md:mb-16 mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="flex items-center justify-center gap-4 mb-4 md:mb-8"
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
                  src="/logo-don-salazar-black.png"
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

            <motion.div
              className="w-24 h-1 bg-black mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </motion.div>

          {/* Categories Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {coffeeCategories.map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="group relative"
                onClick={() => handleCategorySelect(category.id)}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative bg-transparent backdrop-blur-sm md:p-4 xl:p-8 p-2 cursor-pointer overflow-hidden transition-all duration-300 border-2 border-black/70 hover:border-accent hover:shadow-2xl h-full">
                  <div className="relative z-10 flex flex-col justify-center items-center gap-2 md:gap-4 xl:gap-6 h-full">
                    {/* Icon Section */}
                    <motion.div
                      className="flex justify-center "
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
                      className="text-lg md:text-xl xl:text-2xl font-bold text-black text-center transition-colors duration-300 leading-[1.25rem] md:leading-[1.5rem] xl:leading-[2rem]"
                      layout
                    >
                      {tCategory(category.nameKey)}
                    </motion.h3>
                    <motion.p
                      className="text-xs text-black text-center transition-colors duration-300"
                      layout
                    >
                      {tCategory(category.descriptionKey)}
                    </motion.p>

                    {/* Action Button */}
                    <motion.div
                      className="flex items-center justify-center text-black font-medium opacity-100 group-hover:opacity-100 transition-all duration-300"
                      initial={{ y: 10 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <span className="text-sm">
                        {tUI("navigation.view-products")}
                      </span>
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
                {tUI("navigation.select-category")}
              </p>
              <Coffee className="w-5 h-5 text-black" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
