import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAccessibility } from "@/hooks/useAccessibility";
import { cn } from "@/lib/utils";
import React from "react";

export const AccessibilityControls = React.memo(() => {
  const { textSize, highContrast, setTextSize, toggleHighContrast } = useAccessibility();

  const textSizes = [
    { value: 'small' as const, label: 'A-' },
    { value: 'normal' as const, label: 'A' },
    { value: 'large' as const, label: 'A+' },
    { value: 'xlarge' as const, label: 'A++' },
  ];

  return (
    <div className="flex flex-col gap-4 p-4 border-t bg-muted/30">
      <div className="text-sm font-semibold text-foreground">Acessibilidade</div>
      
      {/* Text Size Controls */}
      <div className="flex flex-col gap-2">
        <label className="text-xs text-muted-foreground">Tamanho do texto</label>
        <div className="flex gap-2">
          {textSizes.map((size) => (
            <Button
              key={size.value}
              variant={textSize === size.value ? "default" : "outline"}
              size="sm"
              onClick={() => setTextSize(size.value)}
              className={cn(
                "flex-1 min-h-[44px] touch-manipulation font-bold transition-all",
                textSize === size.value && "bg-primary text-primary-foreground"
              )}
              aria-label={`Definir tamanho de texto ${size.label}`}
              aria-pressed={textSize === size.value}
            >
              {size.label}
            </Button>
          ))}
        </div>
      </div>

      {/* High Contrast Toggle */}
      <div className="flex items-center justify-between gap-3">
        <label className="text-xs text-muted-foreground">Alto contraste</label>
        <Button
          variant={highContrast ? "default" : "outline"}
          size="sm"
          onClick={toggleHighContrast}
          className="min-h-[44px] min-w-[44px] touch-manipulation transition-all"
          aria-label={highContrast ? "Desativar alto contraste" : "Ativar alto contraste"}
          aria-pressed={highContrast}
        >
          {highContrast ? (
            <Sun className="w-4 h-4" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </Button>
      </div>
    </div>
  );
});

AccessibilityControls.displayName = "AccessibilityControls";
