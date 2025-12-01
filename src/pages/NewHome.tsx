import React from 'react';
import { WorkshopButton } from '../components/shared/WorkshopButton';
import { GiftCard } from '../components/shared/GiftCard';
import { AppIntro } from '../components/shared/AppIntro';
import { ProfessionalIcon } from '../components/shared/ProfessionalIcon';
import { useProgress } from '../context/ProgressContext';

interface NewHomeProps {
  onNavigateToConcepts: () => void;
  onNavigateToDrugs: () => void;
  onNavigateToChallenge: () => void;
  onNavigateToHighYield: () => void;
  onNavigateToExamPrep: () => void;
  onNavigateToQuickDrugDrill: () => void;
}

/**
 * Main landing page - Exam weapon edition
 *
 * Design: Guided, fast, exam-focused
 * - App intro explains how to use the app effectively
 * - Primary navigation: 3 big study paths
 * - Secondary shortcuts: high-yield quick access
 */
export const NewHome: React.FC<NewHomeProps> = ({
  onNavigateToConcepts,
  onNavigateToDrugs,
  onNavigateToChallenge,
  onNavigateToHighYield,
  onNavigateToExamPrep,
  onNavigateToQuickDrugDrill
}) => {
  const { getTotalCandyCanes, getElfRank } = useProgress();
  const totalCandyCanes = getTotalCandyCanes();

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Progress Summary Bar */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-6 bg-pda-parchment-50 px-8 py-4 rounded-lg border-2 border-pda-gold-300 shadow-sm">
          <div className="text-center">
            <div className="text-sm text-secondary font-semibold">Your Rank</div>
            <div className="text-lg font-bold text-pda-forest-600">{getElfRank()}</div>
          </div>
          <div className="h-8 w-px bg-pda-gold-300"></div>
          <div className="text-center">
            <div className="text-sm text-secondary font-semibold">Points Earned</div>
            <div className="text-lg font-bold text-pda-gold-600 flex items-center gap-1">
              {totalCandyCanes}
            </div>
          </div>
        </div>
      </div>

      {/* PROMINENT EXAM PREP BANNER */}
      <div className="mb-8">
        <button
          onClick={onNavigateToExamPrep}
          className="w-full bg-gradient-to-r from-pda-cranberry-600 to-pda-cranberry-700 hover:from-pda-cranberry-700 hover:to-pda-cranberry-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] p-6 border-2 border-pda-cranberry-800"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-5xl">📚</div>
              <div className="text-left">
                <div className="text-2xl font-bold mb-1">
                  PDA/Med Chem Exam Prep
                </div>
                <div className="text-pda-parchment-100 text-base">
                  Study by Professor: Burmeister • Breeze • Weldon • Virga
                </div>
              </div>
            </div>
            <div className="text-4xl animate-pulse">→</div>
          </div>
        </button>
      </div>

      {/* App Introduction - How to Use This App */}
      <AppIntro />

      {/* Divider */}
      <div className="my-12 border-t-2 border-pda-gold-200"></div>

      {/* PRIMARY NAVIGATION - Big Three */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-primary text-center mb-6">
          Choose Your Study Path
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Study Concepts */}
          <GiftCard
            onClick={onNavigateToConcepts}
            ariaLabel="Study Concepts - Learn pathophysiology and clinical presentations"
          >
            <div className="text-center flex flex-col h-full">
              <div className="mb-4 flex justify-center">
                <ProfessionalIcon type="concepts" size="xl" className="text-pda-forest-500" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Study Concepts
              </h3>
              <p className="text-base text-secondary mb-6 leading-relaxed flex-grow">
                Master disease mechanisms, clinical presentations, and pathophysiology.
              </p>
              <WorkshopButton onClick={onNavigateToConcepts} variant="primary" className="w-full mt-auto">
                Explore Concepts →
              </WorkshopButton>
            </div>
          </GiftCard>

          {/* Drugs Workshop */}
          <GiftCard
            onClick={onNavigateToDrugs}
            ariaLabel="Drugs Workshop - Learn pharmacology and therapeutics"
          >
            <div className="text-center flex flex-col h-full">
              <div className="mb-4 flex justify-center">
                <ProfessionalIcon type="drugs" size="xl" className="text-pda-winter-500" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Drugs Workshop
              </h3>
              <p className="text-base text-secondary mb-6 leading-relaxed flex-grow">
                Browse drugs by category. Focus on MOA, indications, and adverse effects.
              </p>
              <WorkshopButton onClick={onNavigateToDrugs} variant="secondary" className="w-full mt-auto">
                Browse Drugs →
              </WorkshopButton>
            </div>
          </GiftCard>

          {/* Exam Challenge */}
          <GiftCard
            onClick={onNavigateToChallenge}
            ariaLabel="Exam Challenge - Mixed questions from all topics"
          >
            <div className="text-center flex flex-col h-full">
              <div className="mb-4 flex justify-center">
                <ProfessionalIcon type="challenge" size="xl" className="text-pda-gold-500" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Exam Challenge
              </h3>
              <p className="text-base text-secondary mb-6 leading-relaxed flex-grow">
                Mixed questions across all topics. Your final exam preparation tool.
              </p>
              <WorkshopButton onClick={onNavigateToChallenge} variant="success" className="w-full mt-auto">
                Start Challenge →
              </WorkshopButton>
            </div>
          </GiftCard>
        </div>
      </div>

      {/* SECONDARY NAVIGATION - Quick Shortcuts */}
      <div className="mt-12">
        <h2 className="text-lg font-bold text-primary text-center mb-4">
          Quick Access
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Exam Prep Shortcut */}
          <button
            onClick={onNavigateToExamPrep}
            className="card-workshop p-4 hover:shadow-md transition-all text-left group bg-pda-cranberry-50 border-2 border-pda-cranberry-300"
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl flex-shrink-0">📚</div>
              <div>
                <h4 className="font-bold text-pda-cranberry-700 mb-1 group-hover:text-pda-cranberry-800 transition-colors">
                  Exam Prep by Professor
                </h4>
                <p className="text-sm text-secondary">
                  PDA/Med Chem organized by instructor
                </p>
              </div>
            </div>
          </button>

          {/* Continue Where You Left Off */}
          <button
            onClick={onNavigateToConcepts}
            className="card-workshop p-4 hover:shadow-md transition-all text-left group"
          >
            <div className="flex items-start gap-3">
              <ProfessionalIcon type="continue" size="md" className="text-pda-forest-500 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-primary mb-1 group-hover:text-pda-forest-600 transition-colors">
                  Continue Learning
                </h4>
                <p className="text-sm text-secondary">
                  Jump back to Study Concepts
                </p>
              </div>
            </div>
          </button>

          {/* High-Yield Sections */}
          <button
            onClick={onNavigateToHighYield}
            className="card-workshop p-4 hover:shadow-md transition-all text-left group"
          >
            <div className="flex items-start gap-3">
              <ProfessionalIcon type="highYield" size="md" className="text-pda-gold-500 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-primary mb-1 group-hover:text-pda-forest-600 transition-colors">
                  High-Yield Topics
                </h4>
                <p className="text-sm text-secondary">
                  Must-memorize content for exams
                </p>
              </div>
            </div>
          </button>

          {/* Quick Drug Drill */}
          <button
            onClick={onNavigateToQuickDrugDrill}
            className="card-workshop p-4 hover:shadow-md transition-all text-left group"
          >
            <div className="flex items-start gap-3">
              <ProfessionalIcon type="drugDrill" size="md" className="text-pda-winter-500 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-primary mb-1 group-hover:text-pda-forest-600 transition-colors">
                  Quick Drug Drill
                </h4>
                <p className="text-sm text-secondary">
                  10 random drug questions
                </p>
              </div>
            </div>
          </button>

          {/* Random Clinical Case */}
          <button
            onClick={onNavigateToConcepts}
            className="card-workshop p-4 hover:shadow-md transition-all text-left group"
          >
            <div className="flex items-start gap-3">
              <ProfessionalIcon type="clinicalCase" size="md" className="text-pda-cranberry-500 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-primary mb-1 group-hover:text-pda-forest-600 transition-colors">
                  Random Case
                </h4>
                <p className="text-sm text-secondary">
                  Practice with one clinical case
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
