import React from 'react';

interface GiftCardProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  hover?: boolean;
  ariaLabel?: string;
  disabled?: boolean;
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
  disabled = false,
}) => {
  const isInteractive = onClick !== undefined && !disabled;
  const baseClass = isInteractive && hover ? 'card-workshop-interactive' : 'card-workshop';

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!disabled && onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      className={`${baseClass} p-6 ${isInteractive ? 'focus-workshop' : ''} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export const ElfPanel = GiftCard; // Alias for semantic variety
