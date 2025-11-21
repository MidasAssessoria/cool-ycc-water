import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Smooth scroll to element by ID with offset compensation for fixed header
 * @param elementId - The ID of the element to scroll to (without #)
 * @param offset - Offset in pixels to compensate for fixed header (default: 80)
 */
export function smoothScrollToElement(elementId: string, offset: number = 80) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });

  // Focus first input after scroll for accessibility
  setTimeout(() => {
    const firstInput = element.querySelector('input, textarea, button');
    if (firstInput instanceof HTMLElement) {
      firstInput.focus();
    }
  }, 500);
}

/**
 * Navigate to section with intelligent routing
 * - If on /membresias page, redirect to /#section
 * - Otherwise, smooth scroll to section
 */
export function navigateToSection(sectionId: string, offset: number = 80) {
  const currentPath = window.location.pathname;
  
  // If on /membresias page, redirect to main page with hash
  if (currentPath === '/membresias') {
    window.location.href = `/#${sectionId}`;
    return;
  }
  
  // Otherwise, smooth scroll
  smoothScrollToElement(sectionId, offset);
}
