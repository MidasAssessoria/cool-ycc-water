import { useState, useEffect } from 'react';

/**
 * Breakpoints for responsive table behavior
 */
export const RESPONSIVE_TABLE_BREAKPOINTS = {
  mobile: 768,    // < 768px = mobile (cards view)
  tablet: 1024,   // 768-1023px = tablet (compact table)
  desktop: 1024,  // >= 1024px = desktop (full table)
} as const;

export type ViewMode = 'mobile' | 'tablet' | 'desktop';

/**
 * Hook to detect current view mode based on screen size
 * Returns 'mobile', 'tablet', or 'desktop'
 * 
 * Mobile: < 768px - Shows card layout
 * Tablet: 768-1023px - Shows compact table
 * Desktop: >= 1024px - Shows full table
 */
export const useResponsiveTable = (): ViewMode => {
  const [viewMode, setViewMode] = useState<ViewMode>(() => {
    // Initialize with correct value on mount
    if (typeof window === 'undefined') return 'desktop';
    
    const width = window.innerWidth;
    if (width < RESPONSIVE_TABLE_BREAKPOINTS.mobile) return 'mobile';
    if (width < RESPONSIVE_TABLE_BREAKPOINTS.tablet) return 'tablet';
    return 'desktop';
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      let newMode: ViewMode;
      if (width < RESPONSIVE_TABLE_BREAKPOINTS.mobile) {
        newMode = 'mobile';
      } else if (width < RESPONSIVE_TABLE_BREAKPOINTS.tablet) {
        newMode = 'tablet';
      } else {
        newMode = 'desktop';
      }
      
      // Only update if mode actually changed to avoid unnecessary re-renders
      setViewMode(prev => prev !== newMode ? newMode : prev);
    };

    // Use matchMedia for more efficient listening
    const mobileQuery = window.matchMedia(`(max-width: ${RESPONSIVE_TABLE_BREAKPOINTS.mobile - 1}px)`);
    const tabletQuery = window.matchMedia(
      `(min-width: ${RESPONSIVE_TABLE_BREAKPOINTS.mobile}px) and (max-width: ${RESPONSIVE_TABLE_BREAKPOINTS.tablet - 1}px)`
    );

    // Modern browsers support addEventListener on MediaQueryList
    const handleMobileChange = () => handleResize();
    const handleTabletChange = () => handleResize();

    mobileQuery.addEventListener('change', handleMobileChange);
    tabletQuery.addEventListener('change', handleTabletChange);

    // Initial check
    handleResize();

    return () => {
      mobileQuery.removeEventListener('change', handleMobileChange);
      tabletQuery.removeEventListener('change', handleTabletChange);
    };
  }, []);

  return viewMode;
};

/**
 * Helper hook to check if current view is mobile
 */
export const useIsMobileTable = (): boolean => {
  const viewMode = useResponsiveTable();
  return viewMode === 'mobile';
};

/**
 * Helper hook to check if current view is tablet or smaller
 */
export const useIsTabletOrSmaller = (): boolean => {
  const viewMode = useResponsiveTable();
  return viewMode === 'mobile' || viewMode === 'tablet';
};
