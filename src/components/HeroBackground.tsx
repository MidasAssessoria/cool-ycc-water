/**
 * Optimized Hero Background with WebP support
 * Uses CSS background-image with WebP fallback via modernizr-style feature detection
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
        backgroundImage: `
          image-set(
            url('/assets/hero-waterpark.webp') type('image/webp'),
            url('/assets/hero-waterpark.jpg') type('image/jpeg')
          )
        `,
        // Fallback for browsers that don't support image-set
        ...(typeof window !== 'undefined' && !(CSS.supports && CSS.supports('background-image', 'image-set(url("test.webp") type("image/webp"))'))
          ? { backgroundImage: `url('/assets/hero-waterpark.jpg')` }
          : {}
        )
      }}
      role={role}
      {...ariaProps}
    />
  );
};
