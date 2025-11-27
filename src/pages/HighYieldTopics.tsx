import React, { useState } from 'react';
import { Breadcrumb } from '../components/shared/Breadcrumb';
import { studyData } from '../data/studyDataEnhanced';
import { getCategories } from '../data/studyDataEnhanced';

interface HighYieldTopicsProps {
  onBack: () => void;
}

/**
 * High-Yield Topics - Must-memorize content in digestible format
 *
 * Features:
 * - Organized by category for easy navigation
 * - Key points and clinical pearls from each section
 * - Clean, scannable format for quick review
 * - Perfect for last-minute exam prep
 */
export const HighYieldTopics: React.FC<HighYieldTopicsProps> = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = getCategories();

  const breadcrumbItems = [
    { label: 'Home', onClick: onBack },
    { label: 'High-Yield Topics' }
  ];

  // Get all sections for selected category or all if none selected
  const getSectionsToDisplay = () => {
    if (!selectedCategory) {
      return studyData.sections;
    }
    return studyData.sections.filter(s => s.category === selectedCategory);
  };

  const sectionsToDisplay = getSectionsToDisplay();

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Breadcrumb items={breadcrumbItems} />

      {/* Header */}
      <div className="text-center mb-8 mt-6">
        <h1 className="text-3xl font-bold text-primary mb-4">
          High-Yield Topics
        </h1>
        <p className="text-base text-secondary max-w-2xl mx-auto">
          Must-memorize content organized for quick review. Focus on key points and clinical pearls that are most likely to appear on exams.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              !selectedCategory
                ? 'bg-pda-forest-500 text-white'
                : 'bg-pda-slate-100 text-pda-slate-700 hover:bg-pda-slate-200'
            }`}
          >
            All Topics
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-pda-forest-500 text-white'
                  : 'bg-pda-slate-100 text-pda-slate-700 hover:bg-pda-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* High-Yield Content Grid */}
      <div className="space-y-6">
        {sectionsToDisplay.map(section => (
          <div key={section.id} className="card-pda p-6">
            {/* Section Header */}
            <div className="mb-4 pb-4 border-b-2 border-pda-gold-200">
              <h2 className="text-2xl font-bold text-primary mb-2">
                {section.section}
              </h2>
              <p className="text-sm text-secondary italic">
                {section.category}
              </p>
            </div>

            {/* Quick Summary */}
            <div className="mb-6 p-4 bg-pda-parchment-50 rounded-lg border-l-4 border-pda-gold-500">
              <p className="text-base text-primary leading-relaxed">
                {section.overview.summary}
              </p>
            </div>

            {/* Two Column Layout for Key Points and Clinical Pearls */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Key Points */}
              <div>
                <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-pda-forest-500"></span>
                  Must-Know Points
                </h3>
                <ul className="space-y-2">
                  {section.overview.key_points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-pda-forest-500 font-bold mt-1 flex-shrink-0">•</span>
                      <span className="text-base text-primary">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clinical Pearls */}
              {section.overview.high_yield_clinical_pearls && section.overview.high_yield_clinical_pearls.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pda-cranberry-500"></span>
                    Clinical Pearls
                  </h3>
                  <div className="space-y-3">
                    {section.overview.high_yield_clinical_pearls.map((pearl, index) => (
                      <div
                        key={index}
                        className="p-3 bg-pda-cranberry-50 rounded-lg border-l-4 border-pda-cranberry-500"
                      >
                        <p className="text-sm text-primary leading-relaxed font-semibold">
                          💡 {pearl}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Learning Objectives (Collapsible) */}
            {section.overview.objectives && section.overview.objectives.length > 0 && (
              <details className="mt-6 group">
                <summary className="cursor-pointer text-base font-semibold text-pda-winter-600 hover:text-pda-winter-700 flex items-center gap-2">
                  <span className="transform group-open:rotate-90 transition-transform">▶</span>
                  Learning Objectives
                </summary>
                <ul className="mt-3 ml-6 space-y-2">
                  {section.overview.objectives.map((obj, index) => (
                    <li key={index} className="text-sm text-secondary">
                      {index + 1}. {obj}
                    </li>
                  ))}
                </ul>
              </details>
            )}
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="mt-8 p-6 bg-gradient-to-r from-pda-forest-50 to-pda-winter-50 rounded-lg border border-pda-gold-300">
        <div className="text-center">
          <p className="text-lg font-bold text-primary mb-2">
            📚 Total High-Yield Topics: {sectionsToDisplay.length}
          </p>
          <p className="text-sm text-secondary">
            {sectionsToDisplay.reduce((sum, s) => sum + s.overview.key_points.length, 0)} key points • {' '}
            {sectionsToDisplay.reduce((sum, s) => sum + (s.overview.high_yield_clinical_pearls?.length || 0), 0)} clinical pearls
          </p>
        </div>
      </div>

      {/* Study Tips */}
      <div className="mt-6 p-6 card-pda bg-pda-parchment-50">
        <h3 className="text-lg font-bold text-primary mb-3">Study Tips for High-Yield Content</h3>
        <ul className="space-y-2 text-sm text-secondary">
          <li className="flex items-start gap-2">
            <span className="text-pda-gold-500">★</span>
            <span>Read through all key points first for a broad overview</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-pda-gold-500">★</span>
            <span>Focus on clinical pearls - these are testable patterns and red flags</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-pda-gold-500">★</span>
            <span>Use the category filter to focus on one area at a time</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-pda-gold-500">★</span>
            <span>Review this page the night before your exam for final reinforcement</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
