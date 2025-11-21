/**
 * Optimized Hero Background with WebP support
 * Fase 7.1: ✅ Já otimizado com WebP e fallback
 * Uses picture element with proper source types for better browser compatibility
 */

interface HeroBackgroundProps {
  className?: string;
  role?: string;
  'aria-label'?: string;
}

export const HeroBackground = ({ 
  className, 
  role = "img",
  ...ariaProps 
}: HeroBackgroundProps) => {
  return (
    <picture className={`absolute inset-0 w-full h-full ${className || ''}`}>
      {/* Fase 7.1: WebP format para navegadores modernos (melhor compressão) */}
      <source srcSet="/assets/hero-waterpark-new.webp" type="image/webp" />
      
      {/* Fase 7.1: Fallback JPG para navegadores sem suporte a WebP */}
      <source srcSet="/assets/hero-waterpark.jpg" type="image/jpeg" />
      
      {/* Imagem principal com prioridade alta (hero image) */}
      <img 
        src="/assets/hero-waterpark.jpg" 
        alt={ariaProps['aria-label'] || 'YCC Water Park - Parque acuático premium'}
        className="w-full h-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        role={role}
        width="1920"
        height="1080"
      />
    </picture>
  );
};
