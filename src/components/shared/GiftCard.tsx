import React from 'react';

interface GiftCardProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  hover?: boolean;
  ariaLabel?: string;
}

/**
 * GiftCard - Interactive card component for sections and game modes
 *
 * Improvements:
 * - Uses card-workshop utility classes for consistency
 * - Proper keyboard navigation support (Enter/Space)
 * - Focus states for accessibility
 * - Reduced hover scale (1.02 instead of 1.05)
 * - Role="button" for non-interactive cards with onClick
 */
export const GiftCard: React.FC<GiftCardProps> = ({
  children,
  onClick,
  className = '',
  hover = true,
  ariaLabel,
}) => {
  const isInteractive = onClick !== undefined;
  const baseClass = isInteractive && hover ? 'card-workshop-interactive' : 'card-workshop';

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      aria-label={ariaLabel}
      className={`${baseClass} p-6 ${isInteractive ? 'focus-workshop' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export const ElfPanel = GiftCard; // Alias for semantic variety
