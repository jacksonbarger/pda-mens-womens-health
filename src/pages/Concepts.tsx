import React from 'react';
import { Breadcrumb } from '../components/shared/Breadcrumb';
import { GiftCard } from '../components/shared/GiftCard';
import { ProfessionalIcon } from '../components/shared/ProfessionalIcon';
import { getSectionsByCategory, getCategories } from '../data/studyDataEnhanced';
import type { Section } from '../types';
import { useProgress } from '../context/ProgressContext';

interface ConceptsProps {
  onSelectSection: (section: Section) => void;
  onBack: () => void;
}

/**
 * Concepts page - Browse study sections organized by category.
 *
 * Design: Clear categories with descriptive section cards. Overview summaries
 * visible at a glance. Progress indicators show completion status.
 */
export const Concepts: React.FC<ConceptsProps> = ({ onSelectSection, onBack }) => {
  const sectionsByCategory = getSectionsByCategory();
  const categories = getCategories();
  const { getCandyCanes } = useProgress();

  const breadcrumbItems = [
    { label: 'Home', onClick: onBack },
    { label: 'Concepts' }
  ];

  // Helper to get total points for a section across all game modes
  const getSectionPoints = (section: Section): { earned: number; total: number } => {
    const gameModes = Object.keys(section.game_modes);
    let earned = 0;
    gameModes.forEach(mode => {
      earned += getCandyCanes(section.section, mode);
    });
    return {
      earned,
      total: gameModes.length * 3 // 3 points per mode
    };
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="text-center mb-12 mt-6">
        <h1 className="text-3xl font-bold text-primary mb-4">
          Study Concepts
        </h1>
        <p className="text-base text-secondary max-w-2xl mx-auto">
          Choose a topic area to review pathophysiology, clinical presentations, and practice with interactive games
        </p>
      </div>

      {/* Categorized Sections */}
      {categories.map(category => (
        <div key={category} className="mb-12">
          <h2 className="text-xl font-bold text-primary mb-6 pb-2 border-b-2 border-pda-gold-300 flex items-center gap-2">
            {category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectionsByCategory[category].map(section => {
              const { earned, total } = getSectionPoints(section);
              const percentage = total > 0 ? Math.round((earned / total) * 100) : 0;

              return (
                <GiftCard
                  key={section.id}
                  onClick={() => onSelectSection(section)}
                  ariaLabel={`${section.section} - ${section.overview.summary.substring(0, 100)}... - ${percentage}% complete`}
                >
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {section.section}
                    </h3>
                    <p className="text-base text-secondary mb-4 line-clamp-3">
                      {section.overview.summary}
                    </p>

                    {/* Progress Indicator */}
                    <div className="mb-3">
                      <div className="flex justify-between text-sm text-secondary mb-1">
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
                        />
                      </div>
                    </div>

                    {/* Points Earned */}
                    <div className="flex items-center justify-between text-base">
                      <span className="text-secondary">Points:</span>
                      <span className="font-bold text-pda-forest-600">
                        {earned} / {total}
                      </span>
                    </div>
                  </div>
                </GiftCard>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
