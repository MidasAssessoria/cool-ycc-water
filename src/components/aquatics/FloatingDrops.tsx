import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const drops = [
  { left: "15%", delay: 0, duration: 5 },
  { left: "45%", delay: 1.5, duration: 5.5 },
  { left: "75%", delay: 0.8, duration: 6 },
];

export const FloatingDrops = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {drops.map((drop, index) => (
        <motion.div
          key={index}
          className="absolute top-0"
          style={{ left: drop.left }}
          initial={prefersReducedMotion ? { opacity: 0.2 } : { y: "-10%", opacity: 0 }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.2 }
              : {
                  y: ["-10%", "110%"],
                  opacity: [0, 0.4, 0.4, 0],
                  scale: [0.6, 0.8, 0.8, 0.6],
                }
          }
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg
            className="w-4 h-5 sm:w-5 sm:h-7 md:w-6 md:h-8"
            viewBox="0 0 24 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0C12 0 0 12 0 20C0 26.6274 5.37258 32 12 32C18.6274 32 24 26.6274 24 20C24 12 12 0 12 0Z"
              fill="url(#drop-gradient)"
            />
            <defs>
              <linearGradient id="drop-gradient" x1="12" y1="0" x2="12" y2="32">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}
    </div>
  );
};
