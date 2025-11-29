import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const stats = [
  { icon: "🎢", text: "12 Atracciones" },
  { icon: "👨‍👩‍👧‍👦", text: "Para toda la familia" },
  { icon: "⏱️", text: "Diversión ilimitada" },
];

export const StatsBadges = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-sky-200 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
        >
          <span className="text-lg" role="img" aria-hidden="true">
            {stat.icon}
          </span>
          <span className="text-sm font-medium text-foreground whitespace-nowrap">
            {stat.text}
          </span>
        </motion.div>
      ))}
    </div>
  );
};
