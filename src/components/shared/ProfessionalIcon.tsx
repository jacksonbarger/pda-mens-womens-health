import React from 'react';

interface ProfessionalIconProps {
  type: 'concepts' | 'drugs' | 'challenge' | 'continue' | 'highYield' | 'drugDrill' | 'clinicalCase' | 'achievement';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

/**
 * Professional icon component using SVG graphics instead of emojis
 *
 * This component provides clean, professional iconography for the medical-academic theme.
 * Icons are simple, scalable SVGs with the PDA color palette.
 */
export const ProfessionalIcon: React.FC<ProfessionalIconProps> = ({
  type,
  size = 'md',
  className = ''
}) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const sizeClass = sizeMap[size];

  // SVG icons for each type
  const icons = {
    concepts: (
      <svg className={`${sizeClass} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
      </svg>
    ),
    drugs: (
      <svg className={`${sizeClass} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="4" width="8" height="16" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
        <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="8" r="1.5" fill="currentColor"/>
        <circle cx="12" cy="16" r="1.5" fill="currentColor"/>
      </svg>
    ),
    challenge: (
      <svg className={`${sizeClass} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
    continue: (
      <svg className={`${sizeClass} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
              stroke="currentColor" strokeWidth="2" fill="none"/>
        <line x1="8" y1="7" x2="16" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="8" y1="11" x2="16" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="8" y1="15" x2="13" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    highYield: (
      <svg className={`${sizeClass} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="12,2 15,10 24,10 17,15 20,24 12,18 4,24 7,15 0,10 9,10"
                 stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="3" fill="currentColor"/>
      </svg>
    ),
    drugDrill: (
      <svg className={`${sizeClass} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M12 6v6l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    clinicalCase: (
      <svg className={`${sizeClass} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
        <line x1="7" y1="8" x2="17" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="7" y1="12" x2="17" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="7" y1="16" x2="13" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    achievement: (
      <svg className={`${sizeClass} ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15l-3 6v-6H6l6-9 6 9h-3v6z"
              stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
  };

  return (
    <div className="inline-flex items-center justify-center" aria-hidden="true">
      {icons[type]}
    </div>
  );
};
