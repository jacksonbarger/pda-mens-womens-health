import React, { useState } from 'react';
import { Breadcrumb } from '../components/shared/Breadcrumb';
import { ModeInstructionBanner } from '../components/shared/ModeInstructionBanner';
import type { Section, GameModeType } from '../types';

// Game components - import all existing game components
import { FlashcardsGame } from '../components/games/FlashcardsGame';
import { MatchingGame } from '../components/games/MatchingGame';
import { TimedQuizGame } from '../components/games/TimedQuizGame';
import { ClinicalCasesGame } from '../components/games/ClinicalCasesGame';
import { OrderingGame } from '../components/games/OrderingGame';

interface SectionDetailWithTabsProps {
  section: Section;
  onBackToConcepts: () => void;
  onBackToHome: () => void;
  onCompleteGame: (gameMode: GameModeType, correct: number, total: number) => void;
}

type TabType = 'overview' | GameModeType;

/**
 * Section detail page with tabs: Overview (default) + Game modes.
 *
 * Design: Tab navigation at top. Overview shows educational content first.
 * Games reuse existing components but are now accessed via tabs.
 */
export const SectionDetailWithTabs: React.FC<SectionDetailWithTabsProps> = ({
  section,
  onBackToConcepts,
  onBackToHome,
  onCompleteGame
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const breadcrumbItems = [
    { label: 'Home', onClick: onBackToHome },
    { label: 'Concepts', onClick: onBackToConcepts },
    { label: section.section }
  ];

  const availableGameModes = Object.keys(section.game_modes) as GameModeType[];

  // Helper to check if a game mode has content
  const gameModeHasContent = (mode: GameModeType): boolean => {
    const gameData = section.game_modes[mode];
    if (!gameData) return false;

    if ('cards' in gameData && gameData.cards) return gameData.cards.length > 0;
    if ('pairs' in gameData && gameData.pairs) return gameData.pairs.length > 0;
    if ('questions' in gameData && gameData.questions) return gameData.questions.length > 0;
    if ('cases' in gameData && gameData.cases) return gameData.cases.length > 0;
    if ('steps_correct_order' in gameData && gameData.steps_correct_order) return gameData.steps_correct_order.length > 0;
    return false;
  };

  // Handler to go back to overview tab (not back to Concepts page)
  const handleBackToOverview = () => {
    setActiveTab('overview');
  };

  // Game mode display info
  const gameModeInfo: Record<GameModeType, { icon: string; label: string }> = {
    flashcards: { icon: '📝', label: 'Flashcards' },
    matching: { icon: '🎁', label: 'Matching' },
    timed_quiz: { icon: '⏰', label: 'Timed Quiz' },
    clinical_cases: { icon: '🔬', label: 'Clinical Cases' },
    ordering: { icon: '🎀', label: 'Ordering' }
  };

  const renderTabContent = () => {
    // OVERVIEW TAB
    if (activeTab === 'overview') {
      return (
        <div className="max-w-4xl mx-auto">
          {/* Mode instruction banner */}
          <ModeInstructionBanner modeKey="conceptsOverview" />

          <div className="card-workshop p-8">
            {/* Summary */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-primary mb-3">Summary</h3>
              <p className="text-base text-secondary leading-relaxed">
                {section.overview.summary}
              </p>
            </div>

            {/* Objectives */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-primary mb-3">Learning Objectives</h3>
              <ul className="list-disc list-inside space-y-2">
                {section.overview.objectives.map((obj, idx) => (
                  <li key={idx} className="text-base text-secondary">{obj}</li>
                ))}
              </ul>
            </div>

            {/* Key Points */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-primary mb-3">Key Points</h3>
              <ul className="list-disc list-inside space-y-2">
                {section.overview.key_points.map((point, idx) => (
                  <li key={idx} className="text-base text-secondary">{point}</li>
                ))}
              </ul>
            </div>

            {/* Clinical Pearls */}
            {section.overview.high_yield_clinical_pearls && section.overview.high_yield_clinical_pearls.length > 0 && (
              <div className="bg-pda-gold-50 border-l-4 border-pda-gold-500 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                  <span aria-hidden="true">💡</span> High-Yield Clinical Pearls
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  {section.overview.high_yield_clinical_pearls.map((pearl, idx) => (
                    <li key={idx} className="text-base text-primary font-semibold">{pearl}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      );
    }

    // GAME MODE TABS - Render appropriate game component
    const gameData = section.game_modes[activeTab as GameModeType];

    if (!gameData) {
      return (
        <div className="text-center py-12">
          <p className="text-base text-secondary">Game mode not available</p>
        </div>
      );
    }

    switch (activeTab) {
      case 'flashcards':
        if (gameData.game_mode === 'flashcards') {
          return (
            <FlashcardsGame
              cards={gameData.cards}
              sectionName={section.section}
              onComplete={(correct, total) => onCompleteGame('flashcards', correct, total)}
              onExit={handleBackToOverview}
            />
          );
        }
        break;

      case 'matching':
        if (gameData.game_mode === 'matching') {
          return (
            <MatchingGame
              pairs={gameData.pairs}
              sectionName={section.section}
              onComplete={(correct, total) => onCompleteGame('matching', correct, total)}
              onExit={handleBackToOverview}
            />
          );
        }
        break;

      case 'timed_quiz':
        if (gameData.game_mode === 'timed_quiz') {
          return (
            <TimedQuizGame
              questions={gameData.questions}
              timeLimit={gameData.time_limit_seconds}
              sectionName={section.section}
              professorId={`section-${section.id || 'general'}`}
              onComplete={(correct, total) => onCompleteGame('timed_quiz', correct, total)}
              onExit={handleBackToOverview}
            />
          );
        }
        break;

      case 'clinical_cases':
        if (gameData.game_mode === 'clinical_cases') {
          return (
            <ClinicalCasesGame
              cases={gameData.cases}
              sectionName={section.section}
              onComplete={(correct, total) => onCompleteGame('clinical_cases', correct, total)}
              onExit={handleBackToOverview}
            />
          );
        }
        break;

      case 'ordering':
        if (gameData.game_mode === 'ordering') {
          return (
            <OrderingGame
              gameData={gameData}
              sectionName={section.section}
              onComplete={(correct, total) => onCompleteGame('ordering', correct, total)}
              onExit={handleBackToOverview}
            />
          );
        }
        break;
    }

    return null;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Only show breadcrumb on overview tab, not in games */}
      {activeTab === 'overview' && <Breadcrumb items={breadcrumbItems} />}

      {/* Section Title and Tabs */}
      {activeTab === 'overview' && (
        <div className="mb-8 mt-6">
          <h1 className="text-3xl font-bold text-primary text-center mb-6">
            {section.section}
          </h1>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all focus-workshop ${
                activeTab === 'overview'
                  ? 'bg-pda-forest-500 text-white shadow-md'
                  : 'bg-white text-pda-slate-700 border-2 border-pda-slate-300 hover:border-pda-gold-400'
              }`}
              aria-pressed={activeTab === 'overview'}
            >
              📖 Overview
            </button>

            {availableGameModes.map(mode => {
              const hasContent = gameModeHasContent(mode);
              return (
                <button
                  key={mode}
                  onClick={() => hasContent && setActiveTab(mode)}
                  disabled={!hasContent}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all focus-workshop ${
                    (activeTab as string) === mode
                      ? 'bg-pda-forest-500 text-white shadow-md'
                      : 'bg-white text-pda-slate-700 border-2 border-pda-slate-300 hover:border-pda-gold-400'
                  } ${!hasContent ? 'opacity-50 cursor-not-allowed' : ''}`}
                  aria-pressed={(activeTab as string) === mode}
                  aria-disabled={!hasContent}
                  title={!hasContent ? 'Coming soon' : undefined}
                >
                  {gameModeInfo[mode].icon} {gameModeInfo[mode].label}
                  {!hasContent && <span className="ml-1 text-xs">(Soon)</span>}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab Content */}
      <div className={activeTab !== 'overview' ? 'pt-0' : ''}>
        {renderTabContent()}
      </div>
    </div>
  );
};
