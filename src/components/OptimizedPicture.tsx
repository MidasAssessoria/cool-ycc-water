import { useState } from 'react';

/**
 * OptimizedPicture component with WebP support, lazy loading, and progressive loading
 * Features:
 * - Automatically serves WebP when supported with fallback
 * - Native lazy loading for better performance
 * - Progressive loading with blur placeholder effect
 * - Smooth fade-in transition when loaded
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
  className = '',
  loading = 'lazy',
  sizes,
  width,
  height,
}: OptimizedPictureProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Generate WebP path by replacing extension
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  return (
    <picture className="relative block">
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
        className={`${className} transition-all duration-500 ${
          isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
        }`}
        loading={loading}
        decoding="async"
        sizes={sizes}
        width={width}
        height={height}
        onLoad={() => setIsLoaded(true)}
      />
      
      {/* Blur placeholder while loading */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-muted/20 animate-pulse rounded-lg"
          aria-hidden="true"
        />
      )}
    </picture>
  );
};
