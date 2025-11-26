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
  const { tUI, getWorkshopTranslations, getCategoryTranslations } =
    useTranslations();

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

            {/* WhatsApp Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-6"
            >
              <div className="">
                <h3 className="text-lg font-bold text-black text-center mb-2">
                  {tUI("modal.workshops-title")}
                </h3>
                <a
                  href="https://wa.me/51960350938?text=Hola! Estoy interesado en los cursos de cafetería de Don Salazar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  {tUI("modal.workshops-whatsapp")}
                </a>
              </div>
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
