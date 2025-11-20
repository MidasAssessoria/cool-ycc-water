import { Video, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import { useIsVisible } from "@/hooks/useIntersectionObserver";

const CTAButtons = () => {
  const [primaryLoading, setPrimaryLoading] = useState(false);
  const [secondaryLoading, setSecondaryLoading] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref, { threshold: 0.3 });

  const handlePrimaryClick = () => {
    setPrimaryLoading(true);
    // Simulate loading - replace with actual action
    setTimeout(() => setPrimaryLoading(false), 2000);
  };

  const handleSecondaryClick = () => {
    setSecondaryLoading(true);
    // Simulate loading - replace with actual action
    setTimeout(() => setSecondaryLoading(false), 2000);
  };

  return (
    <div
      ref={ref}
      className={`
        flex flex-col sm:flex-row gap-4 justify-center items-center mb-8
        transform transition-all duration-700
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
      `}
    >
      {/* Primary CTA Button */}
      <button
        onClick={handlePrimaryClick}
        disabled={primaryLoading}
        className="
          relative
          bg-bungalow-coral hover:bg-bungalow-coral/90
          text-white font-bold
          px-8 py-4 rounded-full
          shadow-lg hover:shadow-2xl
          transition-all duration-300
          hover:scale-105 active:scale-95
          disabled:opacity-70 disabled:cursor-not-allowed
          w-full sm:w-auto
          group
          overflow-hidden
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bungalow-coral focus-visible:ring-offset-2
        "
      >
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-0 group-hover:opacity-75" />

        <span className="relative flex items-center justify-center gap-2">
          {primaryLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Carregando...</span>
            </>
          ) : (
            <>
              <Video className="w-5 h-5" />
              <span>Agendar Visita Virtual</span>
            </>
          )}
        </span>
      </button>

      {/* Secondary CTA Button */}
      <button
        onClick={handleSecondaryClick}
        disabled={secondaryLoading}
        className="
          relative
          border-2 border-bungalow-primary
          text-bungalow-primary
          hover:bg-bungalow-primary hover:text-white
          font-bold px-8 py-4 rounded-full
          transition-all duration-300
          hover:scale-105 active:scale-95
          disabled:opacity-70 disabled:cursor-not-allowed
          w-full sm:w-auto
          group
          overflow-hidden
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bungalow-primary focus-visible:ring-offset-2
        "
      >
        {/* Fill Effect */}
        <div className="absolute inset-0 bg-bungalow-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

        <span className="relative flex items-center justify-center gap-2">
          {secondaryLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-bungalow-primary/30 border-t-bungalow-primary rounded-full animate-spin" />
              <span>Carregando...</span>
            </>
          ) : (
            <>
              <span>Ver Detalhes Completos</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </span>
      </button>
    </div>
  );
};

export default CTAButtons;
