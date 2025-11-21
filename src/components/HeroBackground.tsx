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
    <div 
      className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat ${className || ''}`}
      style={{
        backgroundImage: `image-set(
          url('/assets/hero-waterpark.webp') type('image/webp'),
          url('/assets/hero-waterpark.jpg') type('image/jpeg')
        )`,
        // @ts-ignore - WebkitBackgroundImage for Safari compatibility
        WebkitBackgroundImage: `image-set(
          url('/assets/hero-waterpark.webp') type('image/webp'),
          url('/assets/hero-waterpark.jpg') type('image/jpeg')
        )`,
      }}
      role={role}
      {...ariaProps}
    />
  );
};
