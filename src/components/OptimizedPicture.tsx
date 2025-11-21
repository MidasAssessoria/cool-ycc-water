/**
 * OptimizedPicture component with WebP support and fallback
 * Automatically serves WebP when supported, falls back to original format
 */

interface OptimizedPictureProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  width?: number;
  height?: number;
}

export const OptimizedPicture = ({
  src,
  alt,
  className,
  loading = 'lazy',
  sizes,
  width,
  height,
}: OptimizedPictureProps) => {
  // Generate WebP path by replacing extension
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  return (
    <picture>
      {/* WebP source for modern browsers */}
      <source 
        srcSet={webpSrc} 
        type="image/webp"
        sizes={sizes}
      />
      
      {/* Fallback to original format */}
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        decoding="async"
        sizes={sizes}
        width={width}
        height={height}
      />
    </picture>
  );
};
