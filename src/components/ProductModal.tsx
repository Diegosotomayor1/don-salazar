"use client";

import { useTranslations } from "@/hooks/useTranslations";
import { motion, AnimatePresence } from "framer-motion";
import { X, ThumbsUp, Volume2, VolumeX } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// Add global styles for video slider
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
    .slider-thumb::-webkit-slider-thumb {
      appearance: none;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background: linear-gradient(135deg, #f59e0b, #d97706);
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
      border: 2px solid rgba(255, 255, 255, 0.9);
      transition: all 0.2s ease;
    }
    .slider-thumb::-webkit-slider-thumb:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 16px rgba(245, 158, 11, 0.6);
    }
    .slider-thumb::-moz-range-thumb {
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background: linear-gradient(135deg, #f59e0b, #d97706);
      cursor: pointer;
      border: 2px solid rgba(255, 255, 255, 0.9);
      box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
      transition: all 0.2s ease;
    }
    .slider-thumb::-moz-range-thumb:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 16px rgba(245, 158, 11, 0.6);
    }
  `;
  document.head.appendChild(style);
}

interface Product {
  name: string;
  price: number;
  description: string;
  tags: string[];
  video?: string;
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
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { tUI } = useTranslations();

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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (!isDragging) {
        const newTime = video.currentTime;
        setCurrentTime(newTime);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleLoadedData = () => {
      if (video.duration && video.duration > 0) {
        setDuration(video.duration);
      }
    };

    const handleCanPlay = () => {
      if (video.duration && video.duration > 0) {
        setDuration(video.duration);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("canplay", handleCanPlay);

    // Force load if not loaded
    if (video.readyState === 0) {
      video.load();
    }

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, [isDragging, product]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  const handleSliderMouseDown = () => {
    setIsDragging(true);
  };

  const handleSliderMouseUp = () => {
    setIsDragging(false);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
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
          <div className="flex items-center gap-2 absolute bottom-2 right-2 z-20 p-2 bg-white/95 border-2 border-black text-black text-xs px-4 font-medium">
            <ThumbsUp className="w-4 h-4" /> {tUI("modal-description")}
          </div>

          {/* Modal Content - TikTok Style */}
          <motion.div
            className="relative w-full max-w-md h-[85dvh] overflow-hidden shadow-2xl bg-black"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Full Screen Video */}
            <video
              ref={videoRef}
              src={product.video || "/cafe.mp4"}
              muted={isMuted}
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover cursor-pointer object-center"
              onClick={togglePlay}
            />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-colors duration-200"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Mute/Unmute Button */}
            <button
              onClick={toggleMute}
              className="absolute top-4 left-4 z-20 p-2 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-colors duration-200"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-white" />
              ) : (
                <Volume2 className="w-5 h-5 text-white" />
              )}
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

            {/* Video Progress Slider */}
            {product.video && (
              <div className="absolute bottom-0 left-0 right-0 z-50">
                {/* Elegant Progress Container */}
                <div className="bg-black/90 backdrop-blur-md shadow-2xl">
                  {/* Progress Bar */}
                  <div className="relative">
                    {/* Background Track */}
                    <div className="w-full h-3 bg-white/30 overflow-hidden">
                      {/* Progress Fill */}
                      <motion.div
                        className="h-full bg-gradient-to-r from-accent via-accent/80 to-accent/60 shadow-lg"
                        style={{
                          width: duration
                            ? `${(currentTime / duration) * 100}%`
                            : "0%",
                        }}
                        transition={{ duration: 0.1, ease: "linear" }}
                      />
                    </div>

                    {/* Slider Input */}
                    <input
                      type="range"
                      min="0"
                      max={duration || 100}
                      step="0.1"
                      value={currentTime}
                      onChange={handleSliderChange}
                      onMouseDown={handleSliderMouseDown}
                      onMouseUp={handleSliderMouseUp}
                      onTouchStart={handleSliderMouseDown}
                      onTouchEnd={handleSliderMouseUp}
                      className="absolute inset-0 w-full h-3 opacity-0 cursor-pointer slider-thumb"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Content Overlay - Bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
              {/* Price Badge - Top Right */}
              <div className="absolute -top-16 right-4 bg-black text-white px-3 py-1.5 font-bold text-2xl shadow-lg">
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
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
