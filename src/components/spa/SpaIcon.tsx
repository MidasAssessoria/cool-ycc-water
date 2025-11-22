interface SpaIconProps {
  className?: string;
  variant: 'meditation' | 'massage' | 'wellness' | 'lotus' | 'water' | 'aromatherapy';
}

export const SpaIcon = ({ className = "", variant }: SpaIconProps) => {
  const baseClasses = "w-12 h-12";
  
  const icons = {
    meditation: (
      <svg className={`${baseClasses} ${className}`} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 8C28 8 25 11 25 15C25 19 28 22 32 22C36 22 39 19 39 15C39 11 36 8 32 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 24C32 24 24 26 24 34V44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 24C32 24 40 26 40 34V44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 34L16 38L12 42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M40 34L48 38L52 42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 44C24 48 24 52 28 54C30 55 32 56 32 56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M40 44C40 48 40 52 36 54C34 55 32 56 32 56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    massage: (
      <svg className={`${baseClasses} ${className}`} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="20" r="6" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M32 26V40M32 40L24 48M32 40L40 48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 32C18 32 22 28 26 28M46 32C46 32 42 28 38 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 48L22 54M48 48L42 54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 3" opacity="0.3"/>
      </svg>
    ),
    wellness: (
      <svg className={`${baseClasses} ${className}`} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 12V52M12 32H52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="32" cy="32" r="16" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M32 16L36 20L32 24L28 20L32 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 48L36 44L32 40L28 44L32 48Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 32L20 28L24 32L20 36L16 32Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M48 32L44 28L40 32L44 36L48 32Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    lotus: (
      <svg className={`${baseClasses} ${className}`} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 48C32 48 20 44 20 32C20 28 22 24 24 22C26 20 28 18 32 18C36 18 38 20 40 22C42 24 44 28 44 32C44 44 32 48 32 48Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 18C32 18 28 12 28 8C28 8 32 10 32 10C32 10 36 8 36 8C36 12 32 18 32 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 22C24 22 16 18 12 16C12 16 14 20 16 22C16 22 14 26 14 28C14 28 20 26 24 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M40 22C40 22 48 18 52 16C52 16 50 20 48 22C48 22 50 26 50 28C50 28 44 26 40 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <ellipse cx="32" cy="52" rx="16" ry="4" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    water: (
      <svg className={`${baseClasses} ${className}`} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 12C32 12 20 24 20 36C20 42 25.4 48 32 48C38.6 48 44 42 44 36C44 24 32 12 32 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 36C28 36 28 32 32 32C36 32 36 36 36 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="28" cy="28" r="1.5" fill="currentColor"/>
        <circle cx="36" cy="30" r="1.5" fill="currentColor"/>
      </svg>
    ),
    aromatherapy: (
      <svg className={`${baseClasses} ${className}`} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="26" y="36" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M26 36V32C26 28 28 24 32 24C36 24 38 28 38 32V36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="32" cy="20" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M32 18C32 18 28 14 26 12M32 18C32 18 36 14 38 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M32 22C32 22 28 26 26 28M32 22C32 22 36 26 38 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M24 20C24 20 20 18 18 16M40 20C40 20 44 18 46 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  };

  return icons[variant];
};
