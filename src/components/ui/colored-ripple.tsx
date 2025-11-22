import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface ColoredRippleProps {
  children: React.ReactNode;
  color: string;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

interface Ripple {
  x: number;
  y: number;
  id: number;
}

export const ColoredRipple: React.FC<ColoredRippleProps> = ({
  children,
  color,
  className,
  onClick,
  ariaLabel,
}) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const rippleIdRef = useRef(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple: Ripple = {
      x,
      y,
      id: rippleIdRef.current++,
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    onClick?.();
  };

  return (
    <button
      className={cn("relative overflow-hidden", className)}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full animate-ripple pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: "20px",
            height: "20px",
            transform: "translate(-50%, -50%)",
            backgroundColor: color,
            opacity: 0.4,
          }}
        />
      ))}
    </button>
  );
};
