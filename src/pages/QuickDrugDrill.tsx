import React, { useState, useEffect } from 'react';
import { professors } from '../data/professors/professorData';
import type { QuizQuestion } from '../data/professors/professorTypes';
import { GiftCard } from '../components/shared/GiftCard';
import { WorkshopButton } from '../components/shared/WorkshopButton';
import { Breadcrumb } from '../components/shared/Breadcrumb';
import { ProgressBar } from '../components/shared/ProgressBar';

interface QuickDrugDrillProps {
  onBack: () => void;
  onBackToHome: () => void;
}

export const QuickDrugDrill: React.FC<QuickDrugDrillProps> = ({ onBack, onBackToHome }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Collect and shuffle 10 random questions on mount
  useEffect(() => {
    const allQuestions: QuizQuestion[] = [];

    // Collect all quiz questions from all professors
    professors.forEach(prof => {
      allQuestions.push(...prof.quiz);
    });

    // Shuffle and select 10
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    setQuestions(shuffled.slice(0, 10));
  }, []);

  const currentQuestion = questions[currentIndex];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isComplete || !currentQuestion) return;

      // 1-4 keys to select answers
      if (['1', '2', '3', '4'].includes(e.key) && !showExplanation) {
        const index = parseInt(e.key) - 1;
        if (index < currentQuestion.options.length) {
          handleAnswer(currentQuestion.options[index]);
        }
      }

      // Enter key to move to next question
      if (e.key === 'Enter' && showExplanation) {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isComplete, currentQuestion, showExplanation]);

  const handleAnswer = (answer: string) => {
    if (showExplanation) return;

    setSelectedAnswer(answer);
    setShowExplanation(true);

    if (answer === currentQuestion.correct_answer) {
      setCorrectCount(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setIsComplete(true);
    }
  };

  const handleRestart = () => {
    // Reshuffle questions
    const allQuestions: QuizQuestion[] = [];
    professors.forEach(prof => {
      allQuestions.push(...prof.quiz);
    });
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    setQuestions(shuffled.slice(0, 10));

    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setCorrectCount(0);
    setIsComplete(false);
  };

  // Loading state
  if (questions.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="text-center py-12">
          <p className="text-base text-secondary">Loading questions...</p>
        </div>
      </div>
    );
  }

  // Completion screen
  if (isComplete) {
    const percentage = Math.round((correctCount / questions.length) * 100);
    const verdict =
      percentage >= 90 ? 'Excellent! 🎅' : percentage >= 70 ? 'Good Job! ⭐' : 'Keep Studying! 🎄';

    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Breadcrumb
          items={[
            { label: 'Home', onClick: onBackToHome },
            { label: 'Quick Drug Drill' }
          ]}
        />

        <div className="mt-6">
          <GiftCard hover={false}>
            <div className="text-center">
              <div className="text-6xl mb-4">
                {percentage >= 90 ? '🎅' : percentage >= 70 ? '⭐' : '❄️'}
              </div>
              <h2 className="text-3xl font-bold text-pda-cranberry-600 mb-4">
                Drill Complete!
              </h2>
              <div className="space-y-4 mb-6">
                <div className="text-lg">
                  <span className="font-semibold">Score:</span> {correctCount} / {questions.length}
                </div>
                <div className="text-lg">
                  <span className="font-semibold">Percentage:</span> {percentage}%
                </div>
                <div className="text-2xl font-bold text-pda-gold-600">{verdict}</div>
              </div>
              <div className="flex justify-center space-x-4">
                <WorkshopButton onClick={onBack} variant="secondary">
                  Back to Home
                </WorkshopButton>
                <WorkshopButton onClick={handleRestart} variant="primary">
                  Try Again
                </WorkshopButton>
              </div>
            </div>
          </GiftCard>
        </div>
      </div>
    );
  }

  const getButtonStyle = (option: string) => {
    if (!showExplanation) {
      return 'bg-white border-gray-300 hover:border-pda-gold-400 hover:shadow-md';
    }

    if (option === currentQuestion.correct_answer) {
      return 'bg-green-100 border-green-500';
    }

    if (option === selectedAnswer && option !== currentQuestion.correct_answer) {
      return 'bg-red-100 border-red-500 animate-shake';
    }

    return 'bg-gray-100 border-gray-300';
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Breadcrumb
        items={[
          { label: 'Home', onClick: onBackToHome },
          { label: 'Quick Drug Drill' }
        ]}
      />

      <div className="mt-6">
        <div className="flex justify-between items-center mb-4">
          <WorkshopButton onClick={onBack} variant="secondary">
            ← Exit
          </WorkshopButton>
          <h2 className="text-2xl font-bold text-pda-cranberry-600">
            💊 Quick Drug Drill
          </h2>
          <div className="text-lg font-semibold text-gray-700">
            {currentIndex + 1} / {questions.length}
          </div>
        </div>

        <ProgressBar
          current={currentIndex + 1}
          total={questions.length}
          label="Progress"
        />
      </div>

      <GiftCard hover={false} className="mt-6">
        <div>
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-gray-500 uppercase tracking-wide">
              Question {currentIndex + 1} of {questions.length}
            </div>
            {!showExplanation && (
              <div className="text-xs text-gray-400 italic">
                Tip: Press 1-4 to select answers
              </div>
            )}
          </div>
          <p className="text-xl font-semibold text-gray-800 mb-6">
            {currentQuestion.question}
          </p>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={showExplanation}
                className={`w-full p-4 rounded-lg border-2 transition-all text-left ${getButtonStyle(
                  option
                )}`}
              >
                <span className="inline-flex items-center gap-2">
                  <span className="font-semibold">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {!showExplanation && (
                    <span className="text-xs bg-gray-200 px-1.5 py-0.5 rounded">
                      {index + 1}
                    </span>
                  )}
                </span>
                <span className="ml-2">{option}</span>
                {showExplanation && option === currentQuestion.correct_answer && (
                  <span className="ml-2">✅</span>
                )}
                {showExplanation &&
                  option === selectedAnswer &&
                  option !== currentQuestion.correct_answer && (
                    <span className="ml-2">❌</span>
                  )}
              </button>
            ))}
          </div>

          {/* Explanation - shown after answering */}
          {showExplanation && currentQuestion.explanation && (
            <div className={`mt-6 p-4 rounded-lg border-l-4 ${
              selectedAnswer === currentQuestion.correct_answer
                ? 'bg-green-50 border-green-500'
                : 'bg-blue-50 border-blue-500'
            }`}>
              <div className="flex items-start gap-2">
                <div className="text-lg mt-0.5">💡</div>
                <div>
                  <div className="font-semibold text-gray-800 mb-1">Explanation:</div>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {currentQuestion.explanation}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Next Question Button - shown after answering */}
          {showExplanation && (
            <div className="mt-6 flex justify-center">
              <WorkshopButton
                onClick={handleNext}
                variant="primary"
                className="text-lg px-8 py-3"
              >
                {currentIndex < questions.length - 1 ? 'Next Question →' : 'Finish Drill'}
                <span className="ml-2 text-sm opacity-75">(or press Enter)</span>
              </WorkshopButton>
            </div>
          )}
        </div>
      </GiftCard>
    </div>
  );
};
