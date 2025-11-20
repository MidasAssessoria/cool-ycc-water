import { useEffect, useRef, useState } from "react";
import { useIsVisible } from "@/hooks/useIntersectionObserver";

interface StatsCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  label: string;
  color?: string;
}

const StatsCounter = ({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  className = "",
  label,
  color = "text-bungalow-primary",
}: StatsCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref, { threshold: 0.3 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;

    hasAnimated.current = true;
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <div
      ref={ref}
      className={`text-center transform transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
    >
      <div className={`text-3xl md:text-4xl lg:text-5xl font-bold ${color} mb-2`}>
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm md:text-base text-muted-foreground font-medium">
        {label}
      </div>
    </div>
  );
};

export default StatsCounter;
