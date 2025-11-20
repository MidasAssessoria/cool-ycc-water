import { useRef } from "react";
import { TrendingUp } from "lucide-react";
import { useIsVisible } from "@/hooks/useIntersectionObserver";

interface ROICardProps {
  occupancy: string;
  percentage: string;
  subtitle: string;
  annualReturn: string;
  payback: string;
  variant: "green" | "blue";
}

const ROICard = ({
  occupancy,
  percentage,
  subtitle,
  annualReturn,
  payback,
  variant,
}: ROICardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref, { threshold: 0.2 });

  const colors = {
    green: {
      gradient: "from-green-50 to-emerald-50",
      border: "border-green-200",
      text: "text-green-700",
      textDark: "text-green-600",
      bg: "bg-white/80",
      badge: "bg-green-100 text-green-700",
      hover: "from-green-500/10 to-emerald-500/10",
      glow: "group-hover:shadow-green-500/20",
    },
    blue: {
      gradient: "from-blue-50 to-sky-50",
      border: "border-blue-200",
      text: "text-blue-700",
      textDark: "text-blue-600",
      bg: "bg-white/80",
      badge: "bg-blue-100 text-blue-700",
      hover: "from-blue-500/10 to-sky-500/10",
      glow: "group-hover:shadow-blue-500/20",
    },
  };

  const color = colors[variant];

  return (
    <div
      ref={ref}
      className={`
        bg-gradient-to-br ${color.gradient} 
        border-2 ${color.border} 
        rounded-3xl p-8 
        shadow-xl hover:shadow-2xl 
        ${color.glow}
        transition-all duration-500 
        hover:-translate-y-2 
        relative overflow-hidden group
        transform
        ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}
      `}
      style={{ transitionDelay: variant === "blue" ? "150ms" : "0ms" }}
    >
      {/* Animated Background Gradient */}
      <div
        className={`
          absolute inset-0 
          bg-gradient-to-br ${color.hover} 
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-500
        `}
      />

      {/* Decorative Icon */}
      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <TrendingUp className="w-24 h-24" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Occupancy Badge */}
        <div className={`text-sm font-semibold ${color.text} mb-3 inline-block`}>
          {occupancy}
        </div>

        {/* Large Percentage */}
        <div
          className={`
            text-6xl md:text-7xl lg:text-8xl 
            font-bold ${color.textDark} 
            mb-3 
            transform group-hover:scale-105 
            transition-transform duration-300
          `}
        >
          {percentage}
        </div>

        {/* Subtitle */}
        <div className={`text-lg md:text-xl ${color.text} mb-4 font-semibold`}>
          {subtitle}
        </div>

        {/* Annual Return */}
        <div
          className={`
            text-sm md:text-base 
            ${color.textDark} 
            ${color.bg} 
            backdrop-blur-sm
            rounded-full px-4 py-2 
            inline-block
            shadow-md
            group-hover:shadow-lg
            transition-shadow duration-300
          `}
        >
          {annualReturn}
        </div>

        {/* Payback Information */}
        <div className={`mt-6 pt-4 border-t ${color.border}`}>
          <div
            className={`
              text-xs md:text-sm 
              ${color.badge} 
              rounded-full px-4 py-2 
              inline-flex items-center gap-2
              font-medium
              shadow-sm
            `}
          >
            <TrendingUp className="w-4 h-4" />
            {payback}
          </div>
        </div>

        {/* Pulse Animation Indicator */}
        <div
          className={`
            absolute -top-1 -right-1 
            w-4 h-4 
            bg-gradient-to-br ${color.hover}
            rounded-full 
            animate-ping 
            opacity-75
          `}
        />
      </div>
    </div>
  );
};

export default ROICard;
