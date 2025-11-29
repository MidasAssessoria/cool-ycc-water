import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export const AnimatedSwimmerIcon = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-sky-200 to-sky-400 shadow-lg ring-4 ring-sky-100"
      animate={
        prefersReducedMotion
          ? {}
          : {
              y: [0, -10, 0],
            }
      }
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <span className="text-6xl" role="img" aria-label="Nadador">
        🏊‍♂️
      </span>
    </motion.div>
  );
};
