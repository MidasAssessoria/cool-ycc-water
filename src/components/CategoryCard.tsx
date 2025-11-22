import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";

interface CategoryCardProps {
  name: string;
  description: string;
  heroImage: string;
  icon: string;
  color: string;
  totalAttractions: number;
  onClick: () => void;
}

export const CategoryCard = ({
  name,
  description,
  heroImage,
  icon,
  color,
  totalAttractions,
  onClick
}: CategoryCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Get the icon component dynamically
  const IconComponent = (LucideIcons as any)[icon] || LucideIcons.Circle;

  return (
    <Card
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden cursor-pointer",
        "transition-all duration-300 hover:shadow-2xl hover:-translate-y-2",
        "border-2 hover:border-primary/50"
      )}
    >
      {/* Background Image with Overlay */}
      <div className="relative h-64 overflow-hidden bg-muted">
        {/* Skeleton Loader */}
        {!imageLoaded && (
          <div className="absolute inset-0 z-10">
            <Skeleton className="w-full h-full" />
          </div>
        )}
        
        <img
          src={heroImage}
          alt={name}
          onLoad={() => setImageLoaded(true)}
          className={cn(
            "w-full h-full object-cover transition-all duration-500",
            imageLoaded ? "opacity-100 scale-100 group-hover:scale-110" : "opacity-0 scale-95"
          )}
        />
        
        {/* Gradient Overlay */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t",
          color,
          "opacity-30 group-hover:opacity-40 transition-opacity",
          !imageLoaded && "opacity-0"
        )} />
        
        {/* Icon Badge */}
        <div className={cn(
          "absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-full p-3 shadow-xl transition-opacity duration-300",
          !imageLoaded && "opacity-0"
        )}>
          <IconComponent className="w-6 h-6 text-primary" />
        </div>

        {/* Attraction Count Badge */}
        <Badge className={cn(
          "absolute top-4 left-4 bg-white/95 backdrop-blur-md text-foreground border-0 shadow-lg font-semibold transition-opacity duration-300",
          !imageLoaded && "opacity-0"
        )}>
          {totalAttractions} {totalAttractions === 1 ? 'atracción' : 'atracciones'}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-6 bg-card">
        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
          {name}
        </h3>
        <p className="text-muted-foreground text-base mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* CTA */}
        <div className="flex items-center justify-between">
          <span className="text-primary font-bold group-hover:underline text-sm tracking-wide uppercase">
            Ver detalles
          </span>
          <ArrowRight className="w-5 h-5 text-primary transition-transform group-hover:translate-x-2" />
        </div>
      </div>
    </Card>
  );
};
