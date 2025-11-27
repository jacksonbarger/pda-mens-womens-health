import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  label?: string;
}

/**
 * ProgressBar component showing completion progress
 *
 * Improvements:
 * - Uses semantic text tokens (text-primary)
 * - Consistent text sizing (text-base)
 * - Maintains festive gradient for visual appeal
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, label }) => {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between text-base text-primary mb-2">
          <span>{label}</span>
          <span className="font-semibold">
            {current} / {total}
          </span>
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
        <div
          className="h-full bg-gradient-to-r from-pda-forest-500 to-pda-gold-500 rounded-full transition-all duration-500 ease-out flex items-center justify-end px-2"
          style={{ width: `${percentage}%` }}
        >
          {percentage > 20 && (
            <span className="text-sm font-bold text-white">{percentage}%</span>
          )}
        </div>
      </div>
    </div>
  );
};
