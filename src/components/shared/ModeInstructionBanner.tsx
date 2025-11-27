import React from 'react';
import { modeInstructions, type ModeInstructionKey } from '../../config/modeInstructions';

interface ModeInstructionBannerProps {
  modeKey: ModeInstructionKey;
  className?: string;
}

/**
 * Mode Instruction Banner
 *
 * Displays study guidance for a specific mode (quiz, challenge, etc.).
 * Helps students use each mode effectively for exam preparation.
 */
export const ModeInstructionBanner: React.FC<ModeInstructionBannerProps> = ({
  modeKey,
  className = ''
}) => {
  const instruction = modeInstructions[modeKey];

  if (!instruction) {
    return null;
  }

  return (
    <div className={`mb-6 rounded-xl bg-emerald-50/80 p-5 text-sm text-emerald-900 shadow-sm border border-emerald-200 ${className}`}>
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0" aria-hidden="true">💡</span>
        <div className="flex-grow">
          <h2 className="mb-2 text-base font-semibold text-emerald-900">
            {instruction.title}
          </h2>
          <ul className="list-disc space-y-1.5 pl-5 text-emerald-800">
            {instruction.body.map((line, idx) => (
              <li key={idx} className="leading-relaxed">{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
