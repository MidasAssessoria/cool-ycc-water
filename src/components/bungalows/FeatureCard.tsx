import { useRef, ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { useIsVisible } from "@/hooks/useIntersectionObserver";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  features: string[];
  colorClass: string;
  bgClass: string;
  delay?: number;
}

const FeatureCard = ({
  icon: Icon,
  title,
  features,
  colorClass,
  bgClass,
  delay = 0,
}: FeatureCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref, { threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`
        glass-card-strong rounded-2xl p-6 
        shadow-xl hover:shadow-2xl 
        transition-all duration-500 
        hover:-translate-y-2 hover:scale-[1.03] 
        group relative overflow-hidden
        transform
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Animated background gradient */}
      <div
        className={`
          absolute inset-0 
          ${bgClass} 
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-500
        `}
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-4">
        {/* Icon Container with Animation */}
        <div
          className={`
            p-4 ${colorClass} rounded-2xl 
            group-hover:scale-110 
            group-hover:rotate-3 
            transition-all duration-300 
            shadow-lg
            group-hover:shadow-xl
          `}
        >
          <Icon className="w-8 h-8 text-white drop-shadow-lg" aria-hidden="true" />
        </div>

        {/* Content */}
        <div>
          <h3 className="text-xl font-bold text-bungalow-charcoal mb-3 drop-shadow-sm">
            {title}
          </h3>
          <ul className="text-sm text-foreground/80 space-y-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="transform transition-all duration-300 hover:translate-x-1"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Corner Accent */}
      <div
        className="
          absolute -top-2 -right-2 
          w-20 h-20 
          bg-gradient-to-br from-white/20 to-transparent 
          rounded-full 
          blur-2xl 
          group-hover:scale-150 
          transition-transform duration-500
        "
      />
    </div>
  );
};

export default FeatureCard;
