"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Coffee, Tag } from "lucide-react";
import { useRef, useState, useEffect } from "react";

interface Product {
  name: string;
  price: number;
  description: string;
  tags: string[];
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export default function ProductModal({
  isOpen,
  onClose,
  product,
}: ProductModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      setIsPlaying(true);
    }
  }, [isOpen, product]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.play().catch(console.error);
    } else {
      video.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  if (!product) return null;

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
          <div className="absolute bottom-2 right-2 z-20 p-2 rounded-full bg-white text-black text-xs px-4">
            Te gustó el producto? Pídelo con nuestro barista
          </div>

          {/* Modal Content - TikTok Style */}
          <motion.div
            className="relative w-full max-w-md h-[85vh] rounded-2xl overflow-hidden shadow-2xl bg-black"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Full Screen Video */}
            <video
              ref={videoRef}
              src="/cafe.mp4"
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover cursor-pointer"
              onClick={togglePlay}
            />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-colors duration-200"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Play/Pause Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <motion.button
                onClick={togglePlay}
                className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isPlaying ? (
                  <div className="w-4 h-4 flex gap-1">
                    <div className="w-1.5 h-4 bg-white rounded"></div>
                    <div className="w-1.5 h-4 bg-white rounded"></div>
                  </div>
                ) : (
                  <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-0.5"></div>
                )}
              </motion.button>
            </div>

            {/* Content Overlay - Bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
              {/* Price Badge - Top Right */}
              <div className="absolute -top-16 right-4 bg-accent text-white px-3 py-1.5 rounded-full font-bold text-lg shadow-lg">
                S/ {product.price}
              </div>

              {/* Product Info */}
              <div className="text-white">
                {/* Product Name */}
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>

                {/* Description */}
                <p className="text-white/90 text-sm leading-relaxed mb-3 line-clamp-3">
                  {product.description}
                </p>

                {/* Tags */}
                {product.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {product.tags.slice(0, 3).map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-accent/90 text-white text-xs font-medium rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * tagIndex }}
                      >
                        {tag === "Recomendación del barista" && (
                          <Star className="w-3 h-3" />
                        )}
                        {tag === "Alto en cafeína" && (
                          <Coffee className="w-3 h-3" />
                        )}
                        <Tag className="w-3 h-3" />
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
