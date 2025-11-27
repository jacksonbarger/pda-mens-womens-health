import React from 'react';

interface WorkshopButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'danger';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

/**
 * Workshop-themed button component
 *
 * Improvements:
 * - Clear focus states for keyboard navigation
 * - Loading state support
 * - Proper disabled styles
 * - Accessible aria-labels
 * - Larger touch targets (min 44x44px)
 */
export const WorkshopButton: React.FC<WorkshopButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  loading = false,
  className = '',
  type = 'button',
  ariaLabel,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 rounded-lg font-semibold text-base ' +
    'transition-all duration-200 ' +
    'focus:outline-none focus:ring-2 focus:ring-offset-2 ' +
    'disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none ' +
    'active:scale-95';

  const variantClasses = {
    primary:
      'bg-pda-forest-500 hover:bg-pda-forest-600 text-white shadow-md hover:shadow-lg ' +
      'focus:ring-pda-forest-400',
    secondary:
      'bg-pda-winter-500 hover:bg-pda-winter-600 text-white shadow-md hover:shadow-lg ' +
      'focus:ring-pda-winter-400',
    tertiary:
      'bg-white hover:bg-gray-50 text-pda-slate-800 border-2 border-pda-slate-300 hover:border-pda-slate-400 ' +
      'focus:ring-pda-gold-500',
    success:
      'bg-pda-gold-500 hover:bg-pda-gold-600 text-pda-slate-900 shadow-md hover:shadow-lg ' +
      'focus:ring-pda-gold-400 font-bold',
    danger:
      'bg-pda-cranberry-500 hover:bg-pda-cranberry-600 text-white shadow-md hover:shadow-lg ' +
      'focus:ring-pda-cranberry-400',
  };

  const hoverClasses = disabled || loading ? '' : 'hover:scale-[1.02]';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      aria-busy={loading}
      className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}
    >
      {loading && (
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
};
