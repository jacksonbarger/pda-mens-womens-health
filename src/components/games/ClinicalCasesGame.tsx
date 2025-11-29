import React, { useState, useEffect } from 'react';
import type { ClinicalCase } from '../../types';
import { WorkshopButton } from '../shared/WorkshopButton';
import { GiftCard } from '../shared/GiftCard';
import { ProgressBar } from '../shared/ProgressBar';
import { ModeInstructionBanner } from '../shared/ModeInstructionBanner';

interface ClinicalCasesGameProps {
  cases: ClinicalCase[];
  sectionName: string;
  onComplete: (correct: number, total: number) => void;
  onExit: () => void;
}

export const ClinicalCasesGame: React.FC<ClinicalCasesGameProps> = ({
  cases,
  sectionName,
  onComplete,
  onExit,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [shuffledIndices, setShuffledIndices] = useState<number[]>(() =>
    cases.map((_, index) => index)
  );

  // Re-initialize shuffled indices if cases change
  useEffect(() => {
    setShuffledIndices(cases.map((_, index) => index));
  }, [cases]);

  const currentCase = shuffledIndices.length > 0 ? cases[shuffledIndices[currentIndex]] : null;

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array: number[]): number[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Shuffle only remaining cases
  const handleShuffle = () => {
    if (currentIndex >= cases.length - 1) return; // No cases left to shuffle

    const completed = shuffledIndices.slice(0, currentIndex);
    const remaining = shuffledIndices.slice(currentIndex);
    const shuffledRemaining = shuffleArray(remaining);

    setShuffledIndices([...completed, ...shuffledRemaining]);
  };

  // Loading state
  if (!currentCase) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="text-center py-12">
          <p className="text-base text-secondary">Loading clinical cases...</p>
        </div>
      </div>
    );
  }

  const handleAnswer = (answer: string) => {
    if (isAnswered) return;

    setSelectedAnswer(answer);
    setIsAnswered(true);

    if (answer === currentCase.correct_answer) {
      setCorrectCount(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < cases.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsComplete(true);
      onComplete(correctCount, cases.length);
    }
  };

  if (isComplete) {
    const percentage = Math.round((correctCount / cases.length) * 100);
    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <GiftCard hover={false}>
          <div className="text-center">
            <div className="text-6xl mb-4">
              {percentage >= 90 ? '🎅' : percentage >= 70 ? '⭐' : '🎄'}
            </div>
            <h2 className="text-3xl font-bold text-pda-cranberry-600 mb-4">
              Cases Complete!
            </h2>
            <div className="space-y-4 mb-6">
              <div className="text-lg">
                <span className="font-semibold">Correct Diagnoses:</span> {correctCount} /{' '}
                {cases.length}
              </div>
              <div className="text-2xl font-bold text-pda-gold-600">
                {percentage}% Accuracy
              </div>
              <div className="text-lg">
                {percentage >= 90
                  ? "🎅 You're a master diagnostician!"
                  : percentage >= 70
                  ? '⭐ Great clinical reasoning!'
                  : '🎄 Keep practicing your skills!'}
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <WorkshopButton onClick={onExit} variant="secondary">
                Back to Section
              </WorkshopButton>
              <WorkshopButton
                onClick={() => {
                  setCurrentIndex(0);
                  setSelectedAnswer(null);
                  setIsAnswered(false);
                  setCorrectCount(0);
                  setIsComplete(false);
                  setShuffledIndices(cases.map((_, index) => index));
                }}
                variant="primary"
              >
                Review Cases
              </WorkshopButton>
            </div>
          </div>
        </GiftCard>
      </div>
    );
  }

  const getButtonStyle = (option: string) => {
    if (!isAnswered) {
      return 'bg-white border-gray-300 hover:border-pda-gold-400 hover:shadow-md';
    }

    if (option === currentCase.correct_answer) {
      return 'bg-green-100 border-green-500';
    }

    if (option === selectedAnswer && option !== currentCase.correct_answer) {
      return 'bg-red-100 border-red-500 animate-shake';
    }

    return 'bg-gray-100 border-gray-300';
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Mode instruction banner */}
      <ModeInstructionBanner modeKey="conceptsChallenge" />

      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <WorkshopButton onClick={onExit} variant="secondary">
              ← Exit
            </WorkshopButton>
            <WorkshopButton
              onClick={handleShuffle}
              variant="secondary"
              disabled={currentIndex >= cases.length - 1}
            >
              🔀 Shuffle
            </WorkshopButton>
          </div>
          <h2 className="text-2xl font-bold text-pda-cranberry-600">
            🔬 {sectionName} - Clinical Cases
          </h2>
          <div className="text-sm">
            <span className="font-semibold">Score:</span> {correctCount} / {currentIndex + (isAnswered ? 1 : 0)}
          </div>
        </div>
        <ProgressBar
          current={currentIndex + 1}
          total={cases.length}
          label="Progress"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Scenario */}
        <div className="lg:col-span-2">
          <GiftCard hover={false}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-500 uppercase tracking-wide">
                  Clinical Scenario
                </div>
                <div className="text-lg">📋</div>
              </div>
              <div className="bg-pda-parchment-50 p-4 rounded-lg mb-6 border-l-4 border-pda-gold-500">
                <p className="text-lg leading-relaxed">{currentCase.scenario}</p>
              </div>

              <div className="text-sm text-gray-500 uppercase tracking-wide mb-3">
                What is your diagnosis?
              </div>
              <div className="space-y-3">
                {currentCase.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    disabled={isAnswered}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-left ${getButtonStyle(
                      option
                    )}`}
                  >
                    <span className="font-semibold mr-2">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    {option}
                    {isAnswered && option === currentCase.correct_answer && (
                      <span className="ml-2">✅</span>
                    )}
                    {isAnswered &&
                      option === selectedAnswer &&
                      option !== currentCase.correct_answer && (
                        <span className="ml-2">❌</span>
                      )}
                  </button>
                ))}
              </div>
            </div>
          </GiftCard>
        </div>

        {/* Feedback Panel */}
        <div className="lg:col-span-1">
          <GiftCard hover={false}>
            <div>
              <div className="text-sm text-gray-500 uppercase tracking-wide mb-4">
                Feedback
              </div>
              {!isAnswered ? (
                <div className="text-center text-gray-400 py-8">
                  <div className="text-4xl mb-2">🤔</div>
                  <p>Select your diagnosis to see feedback</p>
                </div>
              ) : selectedAnswer === currentCase.correct_answer ? (
                <div className="text-center">
                  <div className="text-6xl mb-4 animate-sparkle">✨</div>
                  <div className="text-green-600 font-bold text-lg mb-2">
                    Correct!
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Excellent clinical reasoning!
                  </p>
                  {currentCase.explanation && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4 text-left">
                      <div className="flex items-start gap-2">
                        <div className="text-lg mt-0.5">💡</div>
                        <div>
                          <div className="font-semibold text-gray-800 text-sm mb-1">Why this is correct:</div>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {currentCase.explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  <WorkshopButton onClick={handleNext} variant="success" className="w-full">
                    Next Case →
                  </WorkshopButton>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-6xl mb-4">💡</div>
                  <div className="text-red-600 font-bold text-lg mb-2">
                    Not quite
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    The correct answer is:
                  </p>
                  <p className="font-semibold text-green-600 mb-4">
                    {currentCase.correct_answer}
                  </p>
                  {currentCase.explanation && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4 text-left">
                      <div className="flex items-start gap-2">
                        <div className="text-lg mt-0.5">💡</div>
                        <div>
                          <div className="font-semibold text-gray-800 text-sm mb-1">Explanation:</div>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {currentCase.explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  <WorkshopButton onClick={handleNext} variant="primary" className="w-full">
                    Next Case →
                  </WorkshopButton>
                </div>
              )}
            </div>
          </GiftCard>
        </div>
      </div>
    </div>
  );
};
