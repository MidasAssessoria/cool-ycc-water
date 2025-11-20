import { Shield, FileCheck, Headphones } from "lucide-react";
import { useRef } from "react";
import { useIsVisible } from "@/hooks/useIntersectionObserver";

interface TrustIndicator {
  icon: typeof Shield | typeof FileCheck | typeof Headphones;
  label: string;
  color: string;
}

const trustIndicators: TrustIndicator[] = [
  {
    icon: Shield,
    label: "Gestão Profissional",
    color: "bg-bungalow-primary",
  },
  {
    icon: FileCheck,
    label: "Contrato Seguro",
    color: "bg-bungalow-secondary",
  },
  {
    icon: Headphones,
    label: "Suporte 24/7",
    color: "bg-bungalow-coral",
  },
];

const TrustBadges = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref, { threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={`
        flex flex-wrap justify-center gap-4 md:gap-6
        transform transition-all duration-700
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >
      {trustIndicators.map((indicator, index) => {
        const Icon = indicator.icon;
        return (
          <div
            key={indicator.label}
            className="
              flex items-center gap-2 md:gap-3
              glass-card rounded-full px-4 md:px-6 py-2 md:py-3
              text-sm md:text-base text-foreground/80
              hover:shadow-lg hover:scale-105
              transition-all duration-300
              group
              cursor-default
            "
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div
              className={`
                ${indicator.color}
                p-1.5 md:p-2 rounded-full
                group-hover:scale-110 group-hover:rotate-12
                transition-all duration-300
              `}
            >
              <Icon className="w-3 h-3 md:w-4 md:h-4 text-white" />
            </div>
            <span className="font-medium">{indicator.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrustBadges;
