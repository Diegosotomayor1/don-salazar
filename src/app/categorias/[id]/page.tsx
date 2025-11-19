"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Coffee, Play } from "lucide-react";
import { coffeeCategories, menuProducts } from "@/constants";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import BackgorundElementsDecoration from "@/components/BackgorundElementsDecoration";
import ProductModal from "@/components/ProductModal";
import { useTranslations } from "@/hooks/useTranslations";
import { Dictionary } from "@/types/dictionary";

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
  language,
}: {
  index: number;
  product: (typeof menuProducts)["cafes-de-siempre"][number];
  onProductClick: (
    product: (typeof menuProducts)["cafes-de-siempre"][number]
  ) => void;
  language: "es" | "en";
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
      className={cn(
        "flex items-end relative md:h-96 h-64 cursor-pointer",
        product.name.includes("★") && "shadow-2xl"
      )}
      style={
        product.name.includes("★")
          ? {
              boxShadow:
                "0 0 30px rgba(176, 156, 96, 0.6), 0 0 60px rgba(176, 156, 96, 0.3)",
            }
          : undefined
      }
      whileHover={{
        y: -5,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      onMouseEnter={() => setIsPlaying(true)}
      onMouseLeave={() => setIsPlaying(false)}
      onClick={() => onProductClick(product)}
    >
      {product.img ? (
        <Image
          src={product.img}
          alt={
            language === "en" && product.nameEn ? product.nameEn : product.name
          }
          fill
          className="object-cover"
        />
      ) : (
        <video
          ref={videoRef}
          src={product.video || "/cafe.mp4"}
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full object-cover w-full object-center"
        />
      )}
      <div
        className={cn(
          "absolute w-full h-full left-0 right-0 cursor-pointer flex flex-col"
        )}
      >
        {/* Precio */}
        <div
          className={cn(
            "absolute top-0 right-0 border px-3 py-1 font-bold text-lg",
            product.name.includes("★")
              ? "bg-gradient-to-r from-[#efb810] via-[#f9db5c] to-[#ffff94] text-black"
              : "bg-black text-white"
          )}
        >
          S/ {product.price}
        </div>

        {/* Botón de Reproducción */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-full p-2">
          <Play className="stroke-0 fill-white w-4 h-4" />
        </div>

        {/* Contenido */}
        <div className="flex flex-col gap-2 absolute bottom-0">
          <h3
            className={cn(
              "text-xl font-bold group-hover:text-accent transition-colors duration-300 py-1 px-2 border text-white",
              product.name.includes("★")
                ? "bg-gradient-to-r from-[#efb810] via-[#f9db5c] to-[#ffff94] text-black"
                : "bg-black"
            )}
          >
            <span className="">
              {language === "en" && product.nameEn
                ? product.nameEn
                : product.name}
            </span>
          </h3>

          {/* <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {product.description}
          </p> */}
        </div>
      </div>
    </motion.div>
  );
};

export default function CategoryProducts() {
  const params = useParams();
  const router = useRouter();
  const categoryId = params.id as string;
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof menuProducts)["cafes-de-siempre"][number] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { tCategory, tUI, language } = useTranslations();

  const category = coffeeCategories.find((c) => c.id === categoryId);
  const products = menuProducts[categoryId as keyof typeof menuProducts] || [];

  const handleProductClick = (
    product: (typeof menuProducts)["cafes-de-siempre"][number]
  ) => {
    const translatedProduct = {
      ...product,
      name: language === "en" && product.nameEn ? product.nameEn : product.name,
      description:
        language === "en" && product.descriptionEn
          ? product.descriptionEn
          : product.description,
    };
    setSelectedProduct(translatedProduct);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  if (!category) {
    return (
      <div
        className="min-h-[100dvh] flex items-center justify-center"
        style={{ backgroundColor: "#ece6cc" }}
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black mb-4">
            {tUI("states.category-not-found")}
          </h1>
          <Button
            onClick={() => router.push("/categorias")}
            className="bg-accent text-white rounded-none"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {tUI("navigation.back-to-categories")}
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
      className="min-h-[100dvh] relative overflow-hidden"
      style={{ backgroundColor: "#ece6cc" }}
    >
      <BackgorundElementsDecoration />

      <div className="relative z-10 min-h-[100dvh] p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-10"
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
                  src="/logo-don-salazar-black.png"
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
                {tCategory(category.nameKey)}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Button
                onClick={() => router.push("/categorias")}
                variant="outline"
                className="rounded-none border-2 border-black text-black bg-transparent hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4 " />
                {tUI("navigation.back-to-categories")}
              </Button>
            </motion.div>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {products.map((product, index) => (
              <ProductItem
                key={index}
                index={index}
                product={product}
                onProductClick={handleProductClick}
                language={language as "es" | "en"}
              />
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3  border-2 border-black shadow-sm hover:border-accent transition-all duration-300">
              <Coffee className="w-5 h-5 text-accent" />
              <p className="text-black font-medium">
                {products.length} productos disponibles en{" "}
                {tCategory(category.nameKey)}
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
