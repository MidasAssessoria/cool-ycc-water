import { Link } from "react-router-dom";

export const AquaticsBreadcrumb = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-4">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
        <Link 
          to="/" 
          className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors duration-200 hover:underline underline-offset-4"
        >
          <span className="text-base">🏠</span>
          <span className="font-medium">Inicio</span>
        </Link>
        
        <span className="text-muted-foreground">›</span>
        
        <Link 
          to="/atracciones" 
          className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors duration-200 hover:underline underline-offset-4"
        >
          <span className="text-base">🎢</span>
          <span className="font-medium">Atracciones</span>
        </Link>
        
        <span className="text-muted-foreground">›</span>
        
        <div className="flex items-center gap-1.5 text-foreground">
          <span className="text-base">🌊</span>
          <span className="font-semibold">Atracciones Acuáticas</span>
        </div>
      </nav>
    </div>
  );
};
