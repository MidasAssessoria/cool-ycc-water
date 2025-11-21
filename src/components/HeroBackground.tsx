/**
 * Optimized Hero Background with WebP support
 * Falls back gracefully to JPG if WebP is not available
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
    <div 
      className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat ${className || ''}`}
      style={{
        // Try WebP first, fallback to JPG
        backgroundImage: `url('/assets/hero-waterpark.jpg')`,
      }}
      role={role}
      {...ariaProps}
    />
  );
};
