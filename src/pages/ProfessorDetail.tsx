import React, { useState } from 'react';
import { getProfessorById } from '../data/professors/professorData';
import { Breadcrumb } from '../components/shared/Breadcrumb';
import { FlashcardsGame } from '../components/games/FlashcardsGame';
import { TimedQuizGame } from '../components/games/TimedQuizGame';
import { FlowchartViewer } from '../components/professor/FlowchartViewer';

interface ProfessorDetailProps {
  professorId: string;
  onBackToExamPrep: () => void;
  onBackToHome: () => void;
}

type TabType = 'overview' | 'flashcards' | 'quiz' | 'flowchart';

/**
 * Professor detail page with tabs for Overview, Flashcards, and Quiz
 */
export const ProfessorDetail: React.FC<ProfessorDetailProps> = ({
  professorId,
  onBackToExamPrep,
  onBackToHome
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const professor = getProfessorById(professorId);

  if (!professor) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-red-600">Professor not found</p>
        <button onClick={onBackToExamPrep} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Back to Exam Prep
        </button>
      </div>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Summary */}
            <div className="card-workshop p-6">
              <h3 className="text-xl font-bold text-primary mb-3">Summary</h3>
              <p className="text-secondary leading-relaxed">{professor.overview.summary}</p>
            </div>

            {/* Learning Objectives */}
            {professor.overview.learningObjectives.length > 0 && (
              <div className="card-workshop p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Learning Objectives</h3>
                <ul className="space-y-2">
                  {professor.overview.learningObjectives.map((objective: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-pda-gold-500 font-bold mt-0.5">✓</span>
                      <span className="text-secondary">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* High-Yield Concepts */}
            {professor.overview.highYieldConcepts.length > 0 && (
              <div className="card-workshop p-6 bg-pda-gold-50 border-2 border-pda-gold-300">
                <h3 className="text-xl font-bold text-pda-gold-700 mb-4 flex items-center gap-2">
                  <span>⭐</span>
                  High-Yield Concepts
                </h3>
                <ul className="space-y-2">
                  {professor.overview.highYieldConcepts.map((concept: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-pda-gold-600 font-bold mt-0.5">•</span>
                      <span className="text-secondary font-medium">{concept}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Clinical Pearls */}
            {professor.overview.clinicalPearls && professor.overview.clinicalPearls.length > 0 && (
              <div className="card-workshop p-6 bg-pda-winter-50 border-2 border-pda-winter-300">
                <h3 className="text-xl font-bold text-pda-winter-700 mb-4">Clinical Pearls</h3>
                <ul className="space-y-2">
                  {professor.overview.clinicalPearls.map((pearl: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-pda-winter-600 font-bold mt-0.5">💎</span>
                      <span className="text-secondary">{pearl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Slide References */}
            <div className="card-workshop p-6 bg-pda-parchment-50">
              <h3 className="text-xl font-bold text-primary mb-3">Slide Decks Covered</h3>
              <ul className="space-y-2">
                {professor.slideFiles.map((file: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-pda-cranberry-500 mt-0.5">📄</span>
                    <span className="text-secondary text-sm">{file}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'flashcards':
        if (professor.flashcards.length === 0) {
          return (
            <div className="card-workshop p-8 text-center">
              <p className="text-secondary text-lg mb-4">
                Flashcards are being generated from {professor.fullName}'s slides...
              </p>
              <p className="text-sm text-secondary">
                Check back soon!
              </p>
            </div>
          );
        }
        return (
          <FlashcardsGame
            cards={professor.flashcards.map((card: any, index: number) => ({
              id: index,
              question: card.question,
              answer: card.answer
            }))}
            sectionName={professor.fullName}
            onComplete={(correct: number, total: number) => {
              // Track progress if needed
              console.log(`Flashcards completed: ${correct}/${total}`);
            }}
            onExit={() => setActiveTab('overview')}
          />
        );

      case 'quiz':
        if (professor.quiz.length === 0) {
          return (
            <div className="card-workshop p-8 text-center">
              <p className="text-secondary text-lg mb-4">
                Quiz questions are being generated from {professor.fullName}'s slides...
              </p>
              <p className="text-sm text-secondary">
                Check back soon!
              </p>
            </div>
          );
        }
        return (
          <TimedQuizGame
            questions={professor.quiz.map((q: any, index: number) => ({
              id: index,
              question: q.question,
              options: q.options,
              correct_answer: q.correct_answer,
              explanation: q.explanation
            }))}
            timeLimit={professor.quiz.length * 90} // 90 seconds per question
            sectionName={professor.fullName}
            onComplete={(correct: number, total: number) => {
              // Track progress if needed
              console.log(`Quiz completed: ${correct}/${total}`);
            }}
            onExit={() => setActiveTab('overview')}
          />
        );

      case 'flowchart':
        if (!professor.flowchartFile) {
          return (
            <div className="card-workshop p-8 text-center">
              <p className="text-secondary text-lg mb-4">
                Interactive flowchart coming soon for {professor.fullName}...
              </p>
              <p className="text-sm text-secondary">
                Check back soon!
              </p>
            </div>
          );
        }
        return (
          <FlowchartViewer
            flowchartFile={professor.flowchartFile}
            professorName={professor.fullName}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: 'Home', onClick: onBackToHome },
          { label: 'Exam Prep', onClick: onBackToExamPrep },
          { label: professor.fullName }
        ]}
      />

      {/* Professor Header */}
      <div className="card-workshop p-6 mb-6 bg-gradient-to-r from-pda-cranberry-600 to-pda-cranberry-700 text-white">
        <div className="flex items-center gap-4">
          <div className="text-6xl">{professor.icon}</div>
          <div>
            <h1 className="text-3xl font-bold mb-1">{professor.fullName}</h1>
            <p className="text-pda-parchment-100 text-lg">{professor.specialty}</p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 mb-6 bg-pda-parchment-50 p-2 rounded-lg">
        <button
          onClick={() => setActiveTab('overview')}
          className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all ${
            activeTab === 'overview'
              ? 'bg-white text-pda-forest-600 shadow-md'
              : 'text-secondary hover:bg-white/50'
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('flashcards')}
          className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all ${
            activeTab === 'flashcards'
              ? 'bg-white text-pda-forest-600 shadow-md'
              : 'text-secondary hover:bg-white/50'
          }`}
        >
          Flashcards ({professor.flashcards.length})
        </button>
        <button
          onClick={() => setActiveTab('quiz')}
          className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all ${
            activeTab === 'quiz'
              ? 'bg-white text-pda-forest-600 shadow-md'
              : 'text-secondary hover:bg-white/50'
          }`}
        >
          Quiz ({professor.quiz.length})
        </button>
        {professor.flowchartFile && (
          <button
            onClick={() => setActiveTab('flowchart')}
            className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all ${
              activeTab === 'flowchart'
                ? 'bg-white text-pda-forest-600 shadow-md'
                : 'text-secondary hover:bg-white/50'
            }`}
          >
            📊 Flowchart
          </button>
        )}
      </div>

      {/* Tab Content */}
      <div className="mb-8">
        {renderTabContent()}
      </div>
    </div>
  );
};
