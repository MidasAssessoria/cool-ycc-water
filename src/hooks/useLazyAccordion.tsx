import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Hook for lazy rendering of accordion items
 * Only renders items that are visible or have been interacted with
 * Now with responsive rootMargin for better mobile performance
 */
export const useLazyAccordion = (totalItems: number, initialRenderCount: number = 5) => {
  const [renderedCount, setRenderedCount] = useState(initialRenderCount);
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  // Memoize the callback to prevent recreation
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setRenderedCount((prev) => {
          if (prev >= totalItems) return prev;
          // Render 3 more items when user scrolls near the bottom
          return Math.min(prev + 3, totalItems);
        });
      }
    });
  }, [totalItems]);
  
  useEffect(() => {
    if (renderedCount >= totalItems) return;
    
    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    // Detect mobile vs desktop for responsive rootMargin
    const isMobile = window.innerWidth < 768;
    const rootMargin = isMobile ? '100px' : '200px';
    
    // Create new observer with memoized callback and responsive rootMargin
    observerRef.current = new IntersectionObserver(handleIntersection, {
      rootMargin,
      threshold: 0.1
    });
    
    if (containerRef.current) {
      observerRef.current.observe(containerRef.current);
    }
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [renderedCount, totalItems, handleIntersection]);
  
  return { renderedCount, containerRef };
};
