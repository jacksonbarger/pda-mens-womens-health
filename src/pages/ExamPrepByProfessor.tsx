import React from 'react';
import { professors } from '../data/professors/professorData';
import { GiftCard } from '../components/shared/GiftCard';
import { WorkshopButton } from '../components/shared/WorkshopButton';
import { Breadcrumb } from '../components/shared/Breadcrumb';
import type { ProfessorContent } from '../data/professors/professorTypes';

interface ExamPrepByProfessorProps {
  onSelectProfessor: (professorId: string) => void;
  onViewAllDrugCards: () => void;
  onViewFinalExam: () => void;
  onBack: () => void;
}

/**
 * Professor selection page for exam prep
 * Shows all 4 professors with their specialty and topics
 */
export const ExamPrepByProfessor: React.FC<ExamPrepByProfessorProps> = ({
  onSelectProfessor,
  onViewAllDrugCards,
  onViewFinalExam,
  onBack
}) => {
  // Calculate total drug cards across all professors
  const totalDrugCards = professors.reduce((total, prof) => total + (prof.drugCards?.length || 0), 0);

  // Calculate total quiz questions across all professors
  const totalQuizQuestions = professors.reduce((total, prof) => total + (prof.quiz?.length || 0), 0);
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: 'Home', onClick: onBack },
          { label: 'PDA/Med Chem Exam Prep' }
        ]}
      />

      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary mb-3">
          PDA/Med Chem Exam Prep
        </h1>
        <p className="text-lg text-secondary max-w-3xl mx-auto">
          Study organized by professor. Each section includes learning objectives,
          high-yield concepts, flashcards, and in-depth quizzes focused on tomorrow's exam.
        </p>
      </div>

      {/* Professor Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {professors.map((professor: ProfessorContent) => (
          <GiftCard
            key={professor.id}
            onClick={() => onSelectProfessor(professor.id)}
            ariaLabel={`Study ${professor.fullName}'s content`}
          >
            <div className="text-center flex flex-col h-full">
              {/* Professor Icon and Name */}
              <div className="mb-4">
                <div className="text-5xl mb-3">{professor.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-1">
                  {professor.fullName}
                </h3>
                <p className="text-sm font-semibold text-pda-gold-600">
                  {professor.specialty}
                </p>
              </div>

              {/* Topics Covered */}
              <div className="mb-6 flex-grow">
                <div className="text-left bg-pda-parchment-50 rounded-lg p-4 border border-pda-gold-200">
                  <h4 className="font-bold text-primary text-sm mb-2">Topics Covered:</h4>
                  <ul className="text-sm text-secondary space-y-1">
                    {professor.overview.topics.slice(0, 4).map((topic: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-pda-gold-500 mt-0.5">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                    {professor.overview.topics.length > 4 && (
                      <li className="text-pda-gold-600 font-semibold">
                        + {professor.overview.topics.length - 4} more topics
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Content Stats */}
              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="bg-pda-parchment-50 rounded-lg p-3 border border-pda-gold-200">
                  <div className="font-bold text-pda-forest-600">
                    {professor.flashcards.length || 'TBD'}
                  </div>
                  <div className="text-secondary text-xs">Flashcards</div>
                </div>
                <div className="bg-pda-parchment-50 rounded-lg p-3 border border-pda-gold-200">
                  <div className="font-bold text-pda-winter-600">
                    {professor.quiz.length || 'TBD'}
                  </div>
                  <div className="text-secondary text-xs">Quiz Questions</div>
                </div>
              </div>

              {/* Action Button */}
              <WorkshopButton
                onClick={() => onSelectProfessor(professor.id)}
                variant="primary"
                className="w-full"
              >
                Start Studying →
              </WorkshopButton>
            </div>
          </GiftCard>
        ))}

        {/* Drug Cards Card */}
        <GiftCard
          onClick={onViewAllDrugCards}
          ariaLabel="View all drug cards database"
        >
          <div className="text-center flex flex-col h-full">
            {/* Icon and Title */}
            <div className="mb-4">
              <div className="text-5xl mb-3">💊</div>
              <h3 className="text-2xl font-bold text-primary mb-1">
                All Drug Cards
              </h3>
              <p className="text-sm font-semibold text-pda-gold-600">
                Complete Drug Database
              </p>
            </div>

            {/* Description */}
            <div className="mb-6 flex-grow">
              <div className="text-left bg-pda-parchment-50 rounded-lg p-4 border border-pda-gold-200">
                <h4 className="font-bold text-primary text-sm mb-2">What's Included:</h4>
                <ul className="text-sm text-secondary space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-pda-gold-500 mt-0.5">•</span>
                    <span>All {totalDrugCards} drugs from all 4 professors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pda-gold-500 mt-0.5">•</span>
                    <span>Searchable by drug name, brand, or class</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pda-gold-500 mt-0.5">•</span>
                    <span>Medicinal chemistry & pharmacology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pda-gold-500 mt-0.5">•</span>
                    <span>Filter by professor or drug class</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
              <div className="bg-pda-parchment-50 rounded-lg p-3 border border-pda-gold-200">
                <div className="font-bold text-pda-cranberry-600">
                  {totalDrugCards}
                </div>
                <div className="text-secondary text-xs">Total Drugs</div>
              </div>
              <div className="bg-pda-parchment-50 rounded-lg p-3 border border-pda-gold-200">
                <div className="font-bold text-pda-gold-600">
                  4
                </div>
                <div className="text-secondary text-xs">Professors</div>
              </div>
            </div>

            {/* Action Button */}
            <WorkshopButton
              onClick={onViewAllDrugCards}
              variant="primary"
              className="w-full"
            >
              Browse All Drugs →
            </WorkshopButton>
          </div>
        </GiftCard>

        {/* Final Exam Card */}
        <GiftCard
          onClick={onViewFinalExam}
          ariaLabel="Take the final exam challenge"
        >
          <div className="text-center flex flex-col h-full">
            {/* Icon and Title */}
            <div className="mb-4">
              <div className="text-5xl mb-3">🎓</div>
              <h3 className="text-2xl font-bold text-primary mb-1">
                Final Exam Challenge
              </h3>
              <p className="text-sm font-semibold text-pda-gold-600">
                Comprehensive 50-Question Test
              </p>
            </div>

            {/* Description */}
            <div className="mb-6 flex-grow">
              <div className="text-left bg-pda-parchment-50 rounded-lg p-4 border border-pda-gold-200">
                <h4 className="font-bold text-primary text-sm mb-2">2-Part Randomized Exam:</h4>
                <ul className="text-sm text-secondary space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-pda-gold-500 mt-0.5">•</span>
                    <span><strong>Part 1:</strong> 25 pathophysiology questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pda-gold-500 mt-0.5">•</span>
                    <span><strong>Part 2:</strong> 25 med chem/pharmacology questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pda-gold-500 mt-0.5">•</span>
                    <span>Questions randomize each attempt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pda-gold-500 mt-0.5">•</span>
                    <span>Instant feedback with explanations</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
              <div className="bg-pda-parchment-50 rounded-lg p-3 border border-pda-gold-200">
                <div className="font-bold text-pda-cranberry-600">
                  50
                </div>
                <div className="text-secondary text-xs">Total Questions</div>
              </div>
              <div className="bg-pda-parchment-50 rounded-lg p-3 border border-pda-gold-200">
                <div className="font-bold text-pda-gold-600">
                  {totalQuizQuestions}
                </div>
                <div className="text-secondary text-xs">Question Pool</div>
              </div>
            </div>

            {/* Action Button */}
            <WorkshopButton
              onClick={onViewFinalExam}
              variant="primary"
              className="w-full"
            >
              Take Final Exam →
            </WorkshopButton>
          </div>
        </GiftCard>
      </div>

      {/* Info Box */}
      <div className="bg-pda-cranberry-50 border-2 border-pda-cranberry-300 rounded-lg p-6 text-center">
        <h3 className="font-bold text-pda-cranberry-700 mb-2">
          📋 Exam-Focused Content
        </h3>
        <p className="text-secondary text-sm">
          All content is extracted from lecture slides with emphasis on highlighted concepts,
          learning objectives, drug names (generic/brand), mechanisms, and pathophysiology.
          Perfect for tomorrow's PDA/Med Chem exam!
        </p>
      </div>
    </div>
  );
};
