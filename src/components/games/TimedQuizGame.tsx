import React, { useState, useEffect } from 'react';
import type { TimedQuizQuestion } from '../../types';
import { WorkshopButton } from '../shared/WorkshopButton';
import { GiftCard } from '../shared/GiftCard';
import { ProgressBar } from '../shared/ProgressBar';
import { ModeInstructionBanner } from '../shared/ModeInstructionBanner';

interface TimedQuizGameProps {
  questions: TimedQuizQuestion[];
  timeLimit: number;
  sectionName: string;
  onComplete: (correct: number, total: number) => void;
  onExit: () => void;
}

export const TimedQuizGame: React.FC<TimedQuizGameProps> = ({
  questions,
  timeLimit,
  sectionName,
  onComplete,
  onExit,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [questionTimes, setQuestionTimes] = useState<number[]>([]);
  const [shuffledIndices, setShuffledIndices] = useState<number[]>([]);

  // Initialize shuffled indices on mount
  useEffect(() => {
    setShuffledIndices(questions.map((_, index) => index));
  }, [questions]);

  const currentQuestion = questions[shuffledIndices[currentIndex]];

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array: number[]): number[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Shuffle only remaining questions
  const handleShuffle = () => {
    if (currentIndex >= questions.length - 1) return; // No questions left to shuffle

    const completed = shuffledIndices.slice(0, currentIndex);
    const remaining = shuffledIndices.slice(currentIndex);
    const shuffledRemaining = shuffleArray(remaining);

    setShuffledIndices([...completed, ...shuffledRemaining]);
  };

  useEffect(() => {
    if (isAnswered || timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isAnswered]);

  const handleTimeUp = () => {
    if (!isAnswered) {
      setIsAnswered(true);
      setQuestionTimes(prev => [...prev, timeLimit]);
      setTimeout(handleNext, 2000);
    }
  };

  const handleAnswer = (answer: string) => {
    if (isAnswered) return;

    setSelectedAnswer(answer);
    setIsAnswered(true);
    setQuestionTimes(prev => [...prev, timeLimit - timeLeft]);

    if (answer === currentQuestion.correct_answer) {
      setCorrectCount(prev => prev + 1);
    }

    setTimeout(handleNext, 2000);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setTimeLeft(timeLimit);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsComplete(true);
      onComplete(correctCount, questions.length);
    }
  };

  if (isComplete) {
    const percentage = Math.round((correctCount / questions.length) * 100);
    const avgTime = questionTimes.reduce((a, b) => a + b, 0) / questionTimes.length;
    const verdict =
      percentage >= 90 ? 'Nice! 🎅' : percentage >= 70 ? 'Good Job! ⭐' : 'Keep Studying! 🎄';

    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <GiftCard hover={false}>
          <div className="text-center">
            <div className="text-6xl mb-4">
              {percentage >= 90 ? '🎅' : percentage >= 70 ? '⭐' : '❄️'}
            </div>
            <h2 className="text-3xl font-bold text-pda-cranberry-600 mb-4">
              Quiz Complete!
            </h2>
            <div className="space-y-4 mb-6">
              <div className="text-lg">
                <span className="font-semibold">Score:</span> {correctCount} / {questions.length}
              </div>
              <div className="text-lg">
                <span className="font-semibold">Percentage:</span> {percentage}%
              </div>
              <div className="text-lg">
                <span className="font-semibold">Avg Time per Question:</span>{' '}
                {avgTime.toFixed(1)}s
              </div>
              <div className="text-2xl font-bold text-pda-gold-600">{verdict}</div>
            </div>
            <div className="flex justify-center space-x-4">
              <WorkshopButton onClick={onExit} variant="secondary">
                Back to Section
              </WorkshopButton>
              <WorkshopButton
                onClick={() => {
                  setCurrentIndex(0);
                  setTimeLeft(timeLimit);
                  setSelectedAnswer(null);
                  setIsAnswered(false);
                  setCorrectCount(0);
                  setIsComplete(false);
                  setQuestionTimes([]);
                  setShuffledIndices(questions.map((_, index) => index));
                }}
                variant="primary"
              >
                Try Again
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
      {/* Mode instruction banner */}
      <ModeInstructionBanner modeKey="conceptsQuiz" />

      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <WorkshopButton onClick={onExit} variant="secondary">
              ← Exit
            </WorkshopButton>
            <WorkshopButton
              onClick={handleShuffle}
              variant="secondary"
              disabled={currentIndex >= questions.length - 1}
            >
              🔀 Shuffle
            </WorkshopButton>
          </div>
          <h2 className="text-2xl font-bold text-pda-cranberry-600">
            ⏰ {sectionName} - Timed Quiz
          </h2>
          <div
            className={`text-2xl font-bold px-4 py-2 rounded-lg ${
              timeLeft <= 3 ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-gray-100'
            }`}
          >
            ⏰ {timeLeft}s
          </div>
        </div>
        <ProgressBar
          current={currentIndex + 1}
          total={questions.length}
          label="Progress"
        />
      </div>

      <GiftCard hover={false} className="mb-6">
        <div>
          <div className="text-sm text-gray-500 mb-4 uppercase tracking-wide">
            Question {currentIndex + 1} of {questions.length}
          </div>
          <p className="text-xl font-semibold text-gray-800 mb-6">
            {currentQuestion.question}
          </p>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
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
                {isAnswered && option === currentQuestion.correct_answer && (
                  <span className="ml-2">✅</span>
                )}
                {isAnswered &&
                  option === selectedAnswer &&
                  option !== currentQuestion.correct_answer && (
                    <span className="ml-2">❌</span>
                  )}
              </button>
            ))}
          </div>

          {/* Explanation - shown after answering */}
          {isAnswered && currentQuestion.explanation && (
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

          {isAnswered && timeLeft === 0 && !selectedAnswer && (
            <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-lg text-center">
              ⏰ Time's up! The correct answer was: {currentQuestion.correct_answer}
            </div>
          )}
        </div>
      </GiftCard>
    </div>
  );
};
