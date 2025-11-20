"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { workshops } from "@/constants";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import BackgorundElementsDecoration from "@/components/BackgorundElementsDecoration";
import WorkshopModal from "@/components/WorkshopModal";
import { useTranslations } from "@/hooks/useTranslations";

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

interface WorkshopTranslation {
  name: Record<string, string>;
  subtitle: Record<string, string>;
  description: Record<string, string>;
  characteristics: Record<string, Record<string, string>>;
  benefits: Record<string, Record<string, string>>;
  idealFor: Record<string, string>;
  duration: Record<string, string>;
  type: Record<string, string>;
}

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
  img?: string;
  video?: string;
}

const WorkshopItem = ({
  index,
  workshop,
  onWorkshopClick,
  getWorkshopTranslations,
}: {
  index: number;
  workshop: Workshop;
  onWorkshopClick: (workshop: Workshop) => void;
  getWorkshopTranslations: (
    workshopId: string
  ) => Record<string, unknown> | undefined;
}) => {
  return (
    <motion.div
      key={index}
      variants={itemVariants}
      className={cn("flex items-end relative md:h-96 h-64 cursor-pointer")}
      whileHover={{
        y: -5,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      onClick={() => onWorkshopClick(workshop)}
    >
      <Image
        src={workshop.img || "/logo-don-salazar-black.png"}
        alt={workshop.name}
        width={400}
        height={400}
        className="h-full w-full object-cover object-center"
      />
      <div
        className={cn(
          "absolute w-full h-full left-0 right-0 cursor-pointer flex flex-col"
        )}
      >
        {/* Precio Badge */}
        <div className="absolute top-0 right-0 bg-black border text-white px-3 py-1 font-bold text-sm md:text-lg">
          S/ {workshop.pricing.single}
        </div>

        {/* Contenido */}
        <div className="flex flex-col gap-2 absolute bottom-0">
          <h3 className="text-lg md:text-xl font-bold group-hover:text-accent transition-colors duration-300 py-1 px-2 bg-black border text-white ">
            <span className="">
              {(
                getWorkshopTranslations(
                  workshop.id
                ) as unknown as WorkshopTranslation
              )?.name.es || workshop.name}
            </span>
          </h3>
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
  const { tUI, getWorkshopTranslations } = useTranslations();

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
              <h1 className="text-4xl md:text-5xl font-bold text-black">
                {tUI("workshops.barista-for-day")}
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

          {/* Workshops Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
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
                getWorkshopTranslations={getWorkshopTranslations}
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
