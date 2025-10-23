"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Coffee, ExternalLink, MessageCircle } from "lucide-react";
import { workshops } from "@/constants";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import BackgorundElementsDecoration from "@/components/BackgorundElementsDecoration";
import WorkshopModal from "@/components/WorkshopModal";

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

const WorkshopItem = ({
  index,
  workshop,
  onWorkshopClick,
}: {
  index: number;
  workshop: Workshop;
  onWorkshopClick: (workshop: Workshop) => void;
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

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(workshop.whatsappLink, "_blank");
  };

  return (
    <motion.div
      key={index}
      variants={itemVariants}
      className={cn("flex items-end relative h-96")}
      whileHover={{
        y: -5,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      onMouseEnter={() => setIsPlaying(true)}
      onMouseLeave={() => setIsPlaying(false)}
      onClick={() => onWorkshopClick(workshop)}
    >
      <video
        ref={videoRef}
        src="/cafe.mp4"
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full object-cover"
      />
      <div
        className={cn(
          "absolute w-full h-fit left-0 right-0 bottom-0 p-6 flex flex-col bg-gradient-to-t from-black/90 via-black/70 to-transparent"
        )}
      >
        {/* Precio Badge */}
        <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1.5 font-bold text-sm">
          S/ {workshop.pricing.single}
        </div>

        {/* Contenido */}
        <div className="flex-1 pr-16">
          <h3 className="text-xl font-bold text-white mb-2">{workshop.name}</h3>
          <p className="text-white/90 text-sm italic">{workshop.subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function TalleresCategory() {
  const router = useRouter();
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWorkshopClick = (workshop: Workshop) => {
    setSelectedWorkshop(workshop);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWorkshop(null);
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
              <h1 className="text-4xl md:text-5xl font-bold text-black">
                Barista por un día
              </h1>
            </motion.div>

            <motion.p
              className="text-black text-lg font-medium mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Explora nuestros talleres y descubre el arte del café
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-2 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <span className="px-4 py-2 border-2 border-black text-black text-sm font-medium hover:border-accent transition-colors duration-200">
                Educativo
              </span>
              <span className="px-4 py-2 border-2 border-black text-black text-sm font-medium hover:border-accent transition-colors duration-200">
                Práctico
              </span>
              <span className="px-4 py-2 border-2 border-black text-black text-sm font-medium hover:border-accent transition-colors duration-200">
                Experiencial
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Button
                onClick={() => router.push("/categorias")}
                variant="outline"
                className="mb-8 rounded-none border-2 border-black text-black bg-transparent hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4 " />
                Volver a categorías
              </Button>
            </motion.div>

            <motion.div
              className="text-center space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="max-w-2xl mx-auto">
                <motion.a
                  href="https://wa.me/51960350938"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-5 px-10 transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Inscríbete por WhatsApp</span>
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Workshops Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {workshops.map((workshop, index) => (
              <WorkshopItem
                key={index}
                index={index}
                workshop={workshop}
                onWorkshopClick={handleWorkshopClick}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Workshop Modal */}
      <WorkshopModal
        isOpen={isModalOpen}
        onClose={closeModal}
        workshop={selectedWorkshop}
      />
    </div>
  );
}
