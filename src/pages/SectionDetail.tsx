import React from 'react';
import type { Section, GameModeType } from '../types';
import { GiftCard } from '../components/shared/GiftCard';
import { WorkshopButton } from '../components/shared/WorkshopButton';
import { Breadcrumb } from '../components/shared/Breadcrumb';
import { useProgress } from '../context/ProgressContext';

interface SectionDetailProps {
  section: Section;
  onSelectGameMode: (gameMode: GameModeType) => void;
  onBack: () => void;
}

/**
 * Game mode metadata with clear medical terminology
 * Shows medical name first, fun theme name in parentheses
 */
const gameModeInfo: Record<
  GameModeType,
  { icon: string; medicalName: string; themeName: string; description: string }
> = {
  flashcards: {
    icon: '📝',
    medicalName: 'Flashcards',
    themeName: 'Toy Design Notes',
    description: 'Study flashcards one at a time. Mark what you know!',
  },
  matching: {
    icon: '🎁',
    medicalName: 'Matching',
    themeName: 'Label the Gifts',
    description: 'Match terms with their definitions.',
  },
  timed_quiz: {
    icon: '⏰',
    medicalName: 'Timed Quiz',
    themeName: 'Elf Speed Test',
    description: 'Answer questions before time runs out!',
  },
  clinical_cases: {
    icon: '🔬',
    medicalName: 'Clinical Cases',
    themeName: "Santa's Diagnosis Desk",
    description: 'Solve clinical scenarios step by step.',
  },
  ordering: {
    icon: '🎀',
    medicalName: 'Ordering',
    themeName: 'Assembly Line Sequence',
    description: 'Put the steps in the correct order.',
  },
};

/**
 * SectionDetail page - Select a game mode for the chosen section
 *
 * Improvements:
 * - Breadcrumb navigation (Home → Section)
 * - Clear game mode labels: "Medical Name (Theme Name)"
 * - Semantic color tokens
 * - Consistent spacing
 * - Accessible card interactions
 */
export const SectionDetail: React.FC<SectionDetailProps> = ({
  section,
  onSelectGameMode,
  onBack,
}) => {
  const { getCandyCanes } = useProgress();
  const availableGameModes = Object.keys(section.game_modes) as GameModeType[];

  const breadcrumbItems = [
    { label: 'Home', onClick: onBack },
    { label: section.section },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="text-center mb-8 mt-6">
        <h2 className="text-3xl font-bold text-primary mb-2">
          {section.section}
        </h2>
        <p className="text-base text-secondary">Choose a game mode to study</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {availableGameModes.map(mode => {
          const info = gameModeInfo[mode];
          const candyCanes = getCandyCanes(section.section, mode);

          return (
            <GiftCard
              key={mode}
              onClick={() => onSelectGameMode(mode)}
              ariaLabel={`${info.medicalName} game mode - ${candyCanes} out of 3 candy canes earned`}
            >
              <div className="text-center">
                <div className="text-5xl mb-4">{info.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-1">
                  {info.medicalName}
                </h3>
                <p className="text-sm text-secondary mb-3">({info.themeName})</p>
                <p className="text-base text-secondary mb-4">{info.description}</p>

                {/* Candy canes earned */}
                <div className="flex items-center justify-center space-x-1 mb-3">
                  {[...Array(3)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-2xl ${
                        i < candyCanes ? 'opacity-100' : 'opacity-20'
                      }`}
                      aria-hidden="true"
                    >
                      🍭
                    </span>
                  ))}
                </div>

                <div className="text-base font-semibold text-pda-gold-600">
                  {candyCanes === 0 && 'Not started'}
                  {candyCanes === 1 && 'Keep practicing!'}
                  {candyCanes === 2 && 'Great job!'}
                  {candyCanes === 3 && 'Perfect! ⭐'}
                </div>
              </div>
            </GiftCard>
          );
        })}
      </div>
    </div>
  );
};
