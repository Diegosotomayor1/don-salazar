"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Coffee, Star, Tag } from "lucide-react";
import { coffeeCategories, menuProducts } from "@/constants";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import BackgorundElementsDecoration from "@/components/BackgorundElementsDecoration";
import ProductModal from "@/components/ProductModal";

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
  onProductClick,
}: {
  index: number;
  product: (typeof menuProducts)["cafes-de-siempre"][number];
  onProductClick: (product: (typeof menuProducts)["cafes-de-siempre"][number]) => void;
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
      onClick={() => onProductClick(product)}
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
          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
            <span className="bg-accent text-white p-2 rounded-sm">
              {product.name}
            </span>
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
                className="inline-flex items-center gap-1 px-2 py-1 bg-black/20 text-white text-xs rounded-full border border-black/30"
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
  const [selectedProduct, setSelectedProduct] = useState<(typeof menuProducts)["cafes-de-siempre"][number] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const category = coffeeCategories.find((c) => c.id === categoryId);
  const products = menuProducts[categoryId as keyof typeof menuProducts] || [];

  const handleProductClick = (product: (typeof menuProducts)["cafes-de-siempre"][number]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  if (!category) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#ece6cc" }}
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black mb-4">
            Categoría no encontrada
          </h1>
          <Button
            onClick={() => router.push("/categorias")}
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
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: "#ece6cc" }}
    >
      <BackgorundElementsDecoration />

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
              <h1 className="text-4xl md:text-5xl font-bold text-black">
                {category.name}
              </h1>
            </motion.div>

            <motion.p
              className="text-black text-xl font-medium mb-6"
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
                onClick={() => router.push("/categorias")}
                variant="outline"
                className="mb-8 border-accent/30 text-[#ece6cc] bg-accent hover:bg-accent/90 hover:text-white"
              >
                <ArrowLeft className="w-4 h-4 " />
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
              <ProductItem key={index} index={index} product={product} onProductClick={handleProductClick} />
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-black/20 rounded-full border border-black/30 shadow-sm hover:bg-black/30 hover:border-accent/30 transition-all duration-300">
              <Coffee className="w-5 h-5 text-accent" />
              <p className="text-black font-medium">
                {products.length} productos disponibles en {category.name}
              </p>
              <Coffee className="w-5 h-5 text-accent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </div>
  );
}
