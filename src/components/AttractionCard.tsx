import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { OptimizedPicture } from "@/components/OptimizedPicture";
import { Clock, Users } from "lucide-react";

interface AttractionCardProps {
  name: string;
  description: string;
  image: string;
  icon: string;
  duration?: string;
  capacity?: string;
  badge?: string;
}

export const AttractionCard = ({
  name,
  description,
  image,
  icon,
  duration,
  capacity,
  badge,
}: AttractionCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 h-full">
      <div className="relative overflow-hidden aspect-[4/3]">
        <OptimizedPicture
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {badge && (
          <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
            {badge}
          </Badge>
        )}
        
        <div className="absolute top-4 left-4 text-4xl">{icon}</div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        {(duration || capacity) && (
          <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border/50">
            {duration && (
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{duration}</span>
              </div>
            )}
            {capacity && (
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                <span>{capacity}</span>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
