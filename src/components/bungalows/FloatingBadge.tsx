import { Sparkles } from "lucide-react";

const FloatingBadge = () => {
  return (
    <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20 animate-fade-in">
      <div
        className="
          relative
          glass-card-strong
          border border-bungalow-coral/30
          text-bungalow-coral
          px-4 md:px-6 py-2 md:py-3
          rounded-full
          text-xs md:text-sm font-bold
          shadow-lg hover:shadow-xl
          transition-all duration-300
          hover:scale-105
          cursor-default
          group
        "
      >
        {/* Pulse Animation Ring */}
        <div className="absolute inset-0 rounded-full bg-bungalow-coral/20 animate-ping" />

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-bungalow-coral/20 to-orange-500/20 blur-md group-hover:blur-lg transition-all" />

        {/* Content */}
        <span className="relative flex items-center gap-2">
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span className="hidden sm:inline">64 unidades disponíveis</span>
          <span className="sm:hidden">64 disponíveis</span>
        </span>

        {/* Corner Shine */}
        <div
          className="
            absolute -top-1 -right-1
            w-3 h-3
            bg-gradient-to-br from-white to-transparent
            rounded-full
            opacity-75
            group-hover:opacity-100
            transition-opacity
          "
        />
      </div>
    </div>
  );
};

export default FloatingBadge;
