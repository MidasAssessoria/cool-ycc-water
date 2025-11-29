import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export const WaveDecoration = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none z-[5] -mb-1">
      <motion.svg
        className="w-[120%] -ml-[10%] h-16 sm:h-20 md:h-28 lg:h-32"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        animate={
          prefersReducedMotion
            ? {}
            : {
                x: ["0%", "-8%", "0%"],
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <path
          d="M0,40 C300,80 600,0 900,40 C1050,60 1200,40 1200,40 L1200,120 L0,120 Z"
          fill="url(#wave-gradient)"
          opacity="0.3"
        />
        <path
          d="M0,60 C300,20 600,100 900,60 C1050,40 1200,60 1200,60 L1200,120 L0,120 Z"
          fill="url(#wave-gradient)"
          opacity="0.2"
        />
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#7dd3fc" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
};
