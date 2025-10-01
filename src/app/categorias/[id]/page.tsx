"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Coffee, Star, Tag } from "lucide-react";
import { coffeeCategories, menuProducts } from "@/constants";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
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

const ProductItem = ({
  index,
  product,
}: {
  index: number;
  product: (typeof menuProducts)["cafes-de-siempre"][number];
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.play().catch(console.error);
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, [isPlaying]);

  return (
    <motion.div
      key={index}
      variants={itemVariants}
      className={cn("flex items-end relative h-96 cursor-pointer")}
      whileHover={{
        y: -5,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      onMouseEnter={() => setIsPlaying(true)}
      onMouseLeave={() => setIsPlaying(false)}
      onClick={() => setIsPlaying(!isPlaying)}
    >
      <video
        ref={videoRef}
        src="/cafe.mp4"
        muted
        loop
        playsInline
        preload="metadata"
        className="rounded-2xl h-full object-cover"
      />
      <div
        className={cn(
          "rounded-b-2xl absolute w-full h-fit left-0 right-0 p-6 cursor-pointer flex flex-col"
        )}
      >
        {/* Precio */}
        <div className="absolute bottom-5 right-4 bg-accent text-white px-3 py-1 rounded-full font-bold text-lg">
          S/ {product.price}
        </div>

        {/* Contenido */}
        <div className="flex-1 pr-16">
          <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-accent transition-colors duration-300">
            <span className="bg-white p-2 rounded-sm">{product.name}</span>
          </h3>

          {/* <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {product.description}
          </p> */}
        </div>

        {/* Tags */}
        {product.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {product.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="inline-flex items-center gap-1 px-2 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20"
              >
                {tag === "Recomendación del barista" && (
                  <Star className="w-3 h-3" />
                )}
                {tag === "Alto en cafeína" && <Coffee className="w-3 h-3" />}
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default function CategoryProducts() {
  const params = useParams();
  const router = useRouter();
  const categoryId = params.id as string;

  const category = coffeeCategories.find((c) => c.id === categoryId);
  const products = menuProducts[categoryId as keyof typeof menuProducts] || [];

  if (!category) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Categoría no encontrada
          </h1>
          <Button
            onClick={() => router.push("/categories")}
            className="bg-accent text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a categorías
          </Button>
        </div>
      </div>
    );
  }

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

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Elementos decorativos de fondo - Íconos de café flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 text-6xl text-accent/20"
          animate={{
            y: [-15, 15, -15],
            rotate: [-5, 5, -5],
            transition: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut" as const,
            },
          }}
        >
          ☕
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-5xl text-accent/15"
          animate={{
            y: [-12, 12, -12],
            rotate: [5, -5, 5],
            transition: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut" as const,
              delay: 2,
            },
          }}
        >
          🫘
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-1/4 text-4xl text-accent/25"
          animate={{
            y: [-10, 10, -10],
            rotate: [-3, 3, -3],
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut" as const,
              delay: 4,
            },
          }}
        >
          ☕
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-1/3 text-3xl text-accent/10"
          animate={{
            y: [-8, 8, -8],
            rotate: [3, -3, 3],
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut" as const,
              delay: 1,
            },
          }}
        >
          🫘
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-5 text-4xl text-accent/12"
          animate={{
            y: [-12, 12, -12],
            rotate: [-4, 4, -4],
            transition: {
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut" as const,
              delay: 3,
            },
          }}
        >
          ☕
        </motion.div>
        <motion.div
          className="absolute top-3/4 right-10 text-5xl text-accent/18"
          animate={{
            y: [-14, 14, -14],
            rotate: [6, -6, 6],
            transition: {
              duration: 7.5,
              repeat: Infinity,
              ease: "easeInOut" as const,
              delay: 5,
            },
          }}
        >
          🫘
        </motion.div>
      </div>

      <div className="relative z-10 min-h-screen p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
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
                  width={100}
                  height={100}
                  className="drop-shadow-lg"
                />
              </div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-3 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* <span className="text-4xl">{category.icon}</span> */}
              <h1 className="text-4xl md:text-5xl font-bold text-accent">
                {category.name}
              </h1>
            </motion.div>

            <motion.p
              className="text-gray-600 text-xl font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {category.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-2 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {category.characteristics.map((char, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20"
                >
                  {char}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Button
                onClick={() => router.push("/categories")}
                variant="outline"
                className="mb-8 border-accent/30 text-accent bg-white hover:bg-accent/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver a categorías
              </Button>
            </motion.div>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {products.map((product, index) => (
              <ProductItem key={index} index={index} product={product} />
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/5 rounded-full border border-accent/20 shadow-sm">
              <Coffee className="w-5 h-5 text-accent" />
              <p className="text-gray-700 font-medium">
                {products.length} productos disponibles en {category.name}
              </p>
              <Coffee className="w-5 h-5 text-accent" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
