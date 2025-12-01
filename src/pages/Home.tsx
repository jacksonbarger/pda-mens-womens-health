import React from 'react';
import type { Section } from '../types';
import { GiftCard } from '../components/shared/GiftCard';
import { useProgress } from '../context/ProgressContext';

interface HomeProps {
  sections: Section[];
  onSelectSection: (section: Section) => void;
}

export const Home: React.FC<HomeProps> = ({ sections, onSelectSection }) => {
  const { getCandyCanes } = useProgress();

  const getSectionProgress = (section: Section): { total: number; earned: number } => {
    const gameModes = Object.keys(section.game_modes);
    let totalCandyCanes = 0;

    gameModes.forEach(mode => {
      totalCandyCanes += getCandyCanes(section.section, mode);
    });

    return {
      total: gameModes.length * 3, // 3 candy canes max per mode
      earned: totalCandyCanes,
    };
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary mb-4">
          🎄 Welcome to Santa's Workshop! 🎄
        </h2>
        <p className="text-base text-secondary max-w-2xl mx-auto">
          Choose a section to begin your study session. Complete game modes to earn candy canes and climb the Elf ranks!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => {
          const { total, earned } = getSectionProgress(section);
          const percentage = total > 0 ? Math.round((earned / total) * 100) : 0;

          return (
            <GiftCard
              key={index}
              onClick={() => onSelectSection(section)}
            >
              <div className="text-center">
                <div className="text-5xl mb-4" aria-hidden="true">
                  🎁
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">
                  {section.section}
                </h3>

                {/* Progress indicator */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-secondary mb-2">
                    <span>Progress</span>
                    <span className="font-semibold">{percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-full bg-gradient-to-r from-pda-forest-500 to-pda-gold-500 rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                      role="progressbar"
                      aria-valuenow={percentage}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label="Section completion progress"
                    />
                  </div>
                </div>

                {/* Candy canes earned */}
                <div className="flex items-center justify-center gap-2 text-base">
                  <span className="text-secondary">Candy Canes:</span>
                  <div className="flex items-center gap-1">
                    {[...Array(3)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-xl ${
                          i < Math.floor(earned / Object.keys(section.game_modes).length)
                            ? 'opacity-100'
                            : 'opacity-20'
                        }`}
                        aria-hidden="true"
                      >
                        🍭
                      </span>
                    ))}
                  </div>
                  <span className="font-bold text-pda-cranberry-600">
                    {earned} / {total}
                  </span>
                </div>
              </div>
            </GiftCard>
          );
        })}
      </div>
    </div>
  );
};
