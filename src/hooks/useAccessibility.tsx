import { useState, useEffect, useCallback } from 'react';

type TextSize = 'small' | 'normal' | 'large' | 'xlarge';

interface AccessibilitySettings {
  textSize: TextSize;
  highContrast: boolean;
}

const TEXT_SIZE_SCALES = {
  small: '100%',
  normal: '112%',
  large: '125%',
  xlarge: '150%',
};

export const useAccessibility = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    // Load from localStorage on init
    const stored = localStorage.getItem('accessibility-settings');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        return { textSize: 'small', highContrast: false };
      }
    }
    return { textSize: 'small', highContrast: false };
  });

  // Apply settings to document
  useEffect(() => {
    // Apply text size
    document.documentElement.style.fontSize = TEXT_SIZE_SCALES[settings.textSize];
    
    // Apply high contrast
    if (settings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    // Persist to localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const setTextSize = useCallback((size: TextSize) => {
    setSettings((prev) => ({ ...prev, textSize: size }));
  }, []);

  const toggleHighContrast = useCallback(() => {
    setSettings((prev) => ({ ...prev, highContrast: !prev.highContrast }));
  }, []);

  return {
    textSize: settings.textSize,
    highContrast: settings.highContrast,
    setTextSize,
    toggleHighContrast,
  };
};
