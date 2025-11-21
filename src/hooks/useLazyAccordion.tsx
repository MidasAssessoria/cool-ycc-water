import { useState, useEffect, useRef } from 'react';

/**
 * Hook for lazy rendering of accordion items
 * Only renders items that are visible or have been interacted with
 */
export const useLazyAccordion = (totalItems: number, initialRenderCount: number = 5) => {
  const [renderedCount, setRenderedCount] = useState(initialRenderCount);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (renderedCount >= totalItems) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && renderedCount < totalItems) {
            // Render 3 more items when user scrolls near the bottom
            setRenderedCount((prev) => Math.min(prev + 3, totalItems));
          }
        });
      },
      { rootMargin: '200px' }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, [renderedCount, totalItems]);
  
  return { renderedCount, containerRef };
};
