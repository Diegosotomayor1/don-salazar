"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Sparkles,
  Users,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Workshop {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  icon: string;
  characteristics: string[];
  benefits: string[];
  idealFor: string;
  pricing: {
    single: number;
    double: number;
  };
  duration: string;
  type: string;
  whatsappLink: string;
}

interface WorkshopModalProps {
  isOpen: boolean;
  onClose: () => void;
  workshop: Workshop | null;
}

export default function WorkshopModal({
  isOpen,
  onClose,
  workshop,
}: WorkshopModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      setIsPlaying(true);
      setIsExpanded(false); // Reset to compact view when opening
    }
  }, [isOpen, workshop]);

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

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  if (!workshop) return null;

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

          {/* Modal Content - TikTok Style */}
          <motion.div
            className="relative w-full max-w-md h-[85vh] overflow-hidden shadow-2xl bg-black"
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
              muted={isMuted}
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

            {/* Content Overlay - Bottom - Scrollable */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/95 to-transparent max-h-[70%] overflow-y-auto">
              <div className="p-6">
                {/* Icon */}
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-4xl">{workshop.icon}</span>
                  </div>
                </div>

                {/* Workshop Name */}
                <h2 className="text-2xl font-bold text-white mb-2 text-center">
                  {workshop.name}
                </h2>

                {/* Subtitle */}
                <p className="text-accent text-sm italic mb-4 text-center">
                  {workshop.subtitle}
                </p>

                {/* Description */}
                <p className="text-white/90 text-sm leading-relaxed mb-4">
                  {workshop.description}
                </p>

                {/* Pricing */}
                <div className="bg-accent/10 rounded-lg p-4 mb-4 border border-accent/30">
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div>
                      <p className="text-white/70 text-xs mb-1">1 cupo</p>
                      <p className="text-white font-bold text-xl">
                        S/ {workshop.pricing.single}
                      </p>
                    </div>
                    <div>
                      <p className="text-white/70 text-xs mb-1">2 cupos</p>
                      <p className="text-white font-bold text-xl">
                        S/ {workshop.pricing.double}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-center gap-4 text-white/80 text-xs">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {workshop.duration}
                    </span>
                    <span>•</span>
                    <span>{workshop.type}</span>
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Characteristics */}
                      <div className="mb-4">
                        <h3 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-accent" />
                          Características
                        </h3>
                        <div className="space-y-1.5">
                          {workshop.characteristics.map((char, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-2 text-white/80 text-xs"
                            >
                              <CheckCircle2 className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                              <span>{char}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mb-4">
                        <h3 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                          Beneficios
                        </h3>
                        <div className="space-y-1.5">
                          {workshop.benefits.map((benefit, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-2 text-white/80 text-xs"
                            >
                              <CheckCircle2 className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Ideal For */}
                      <div className="mb-4">
                        <h3 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                          <Users className="w-4 h-4 text-accent" />
                          ¿Para quién es?
                        </h3>
                        <p className="text-white/80 text-xs leading-relaxed">
                          {workshop.idealFor}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Ver Más / Ver Menos Button */}
                {!isExpanded ? (
                  <motion.button
                    onClick={() => setIsExpanded(true)}
                    className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 transition-all duration-300 mb-3 border border-white/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Ver más información</span>
                    <motion.div
                      animate={{ y: [0, 3, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      ▼
                    </motion.div>
                  </motion.button>
                ) : (
                  <motion.button
                    onClick={() => setIsExpanded(false)}
                    className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 transition-all duration-300 mb-3 border border-white/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Ver menos</span>
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      ▲
                    </motion.div>
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
