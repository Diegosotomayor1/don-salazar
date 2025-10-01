import React from "react";
import { motion } from "framer-motion";

export default function BackgorundElementsDecoration() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-20 left-10 text-6xl text-black/15"
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
        className="absolute top-40 right-20 text-5xl text-black/10"
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
        className="absolute bottom-32 left-1/4 text-4xl text-black/20"
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
        className="absolute bottom-20 right-1/3 text-3xl text-black/8"
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
        className="absolute top-1/2 left-5 text-4xl text-black/12"
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
        className="absolute top-3/4 right-10 text-5xl text-black/15"
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
  );
}
