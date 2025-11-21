/**
 * Optimized Hero Background with WebP support
 * Uses CSS image-set() with proper fallback for browsers without support
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
      <source srcSet="/assets/hero-waterpark.webp" type="image/webp" />
      <img 
        src="/assets/hero-waterpark.jpg" 
        alt={ariaProps['aria-label'] || 'YCC Water Park'}
        className="w-full h-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
        role={role}
      />
    </picture>
  );
};
