import React, { useState, useEffect } from 'react';
import type { TimedQuizQuestion } from '../../types';
import { WorkshopButton } from '../shared/WorkshopButton';
import { GiftCard } from '../shared/GiftCard';
import { ProgressBar } from '../shared/ProgressBar';
import { ModeInstructionBanner } from '../shared/ModeInstructionBanner';
import { recordQuizSession, getProfessorProgress, getRecentSessions } from '../../utils/progressTracking';

interface TimedQuizGameProps {
  questions: TimedQuizQuestion[];
  timeLimit: number;
  sectionName: string;
  professorId: string; // Add professorId for tracking
  onComplete: (correct: number, total: number) => void;
  onExit: () => void;
}

export const TimedQuizGame: React.FC<TimedQuizGameProps> = ({
  questions,
  timeLimit,
  sectionName,
  professorId,
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
  const [shuffledIndices, setShuffledIndices] = useState<number[]>(() =>
    questions.map((_, index) => index)
  );

  // Re-initialize shuffled indices if questions change
  useEffect(() => {
    setShuffledIndices(questions.map((_, index) => index));
  }, [questions]);

  const currentQuestion = shuffledIndices.length > 0 ? questions[shuffledIndices[currentIndex]] : null;

  // Format time as minutes:seconds
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

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

  // Loading state
  if (!currentQuestion) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="text-center py-12">
          <p className="text-base text-secondary">Loading quiz...</p>
        </div>
      </div>
    );
  }

  // Timer effect
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

  // Keyboard navigation effect
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Don't handle keys if quiz is complete
      if (isComplete) return;

      // Handle number keys (1-4) for selecting answers
      if (!isAnswered && ['1', '2', '3', '4'].includes(e.key)) {
        const optionIndex = parseInt(e.key) - 1;
        if (currentQuestion && optionIndex < currentQuestion.options.length) {
          handleAnswer(currentQuestion.options[optionIndex]);
        }
      }

      // Handle Enter key for next question (only after answering)
      if (isAnswered && e.key === 'Enter') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isAnswered, isComplete, currentQuestion]);

  const handleTimeUp = () => {
    if (!isAnswered) {
      setIsAnswered(true);
      setQuestionTimes(prev => [...prev, timeLimit]);
      // Removed automatic next - user controls with button/Enter key
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

    // Removed automatic next - user controls with button/Enter key
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setTimeLeft(timeLimit);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsComplete(true);

      // Record quiz session with all question IDs (convert to strings)
      const questionIds = shuffledIndices.map(idx => String(questions[idx].id));
      recordQuizSession(professorId, questionIds, correctCount, questions.length);

      onComplete(correctCount, questions.length);
    }
  };

  if (isComplete) {
    const percentage = Math.round((correctCount / questions.length) * 100);
    const avgTime = questionTimes.reduce((a, b) => a + b, 0) / questionTimes.length;
    const verdict =
      percentage >= 90 ? 'Nice! 🎅' : percentage >= 70 ? 'Good Job! ⭐' : 'Keep Studying! 🎄';

    // Get progress stats
    const progress = getProfessorProgress(professorId);
    const recentSessions = getRecentSessions(professorId, 5);
    const allTimeAccuracy = progress.quiz.totalQuestions > 0
      ? Math.round((progress.quiz.correctAnswers / progress.quiz.totalQuestions) * 100)
      : 0;

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

            {/* Session Score */}
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">This Session</h3>
              <div className="space-y-2">
                <div className="text-lg">
                  <span className="font-semibold">Score:</span> {correctCount} / {questions.length}
                </div>
                <div className="text-lg">
                  <span className="font-semibold">Percentage:</span> {percentage}%
                </div>
                <div className="text-lg">
                  <span className="font-semibold">Avg Time per Question:</span>{' '}
                  {formatTime(Math.round(avgTime))}
                </div>
                <div className="text-2xl font-bold text-pda-gold-600 mt-2">{verdict}</div>
              </div>
            </div>

            {/* All-Time Stats */}
            <div className="bg-green-50 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">All-Time Stats</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-600">Total Attempts</div>
                  <div className="text-2xl font-bold text-green-900">{progress.quiz.totalAttempts}</div>
                </div>
                <div>
                  <div className="text-gray-600">Overall Accuracy</div>
                  <div className="text-2xl font-bold text-green-900">{allTimeAccuracy}%</div>
                </div>
                <div>
                  <div className="text-gray-600">Questions Seen</div>
                  <div className="text-2xl font-bold text-green-900">{progress.quiz.questionsAttempted.length}</div>
                </div>
                <div>
                  <div className="text-gray-600">Total Correct</div>
                  <div className="text-2xl font-bold text-green-900">{progress.quiz.correctAnswers}</div>
                </div>
              </div>

              {/* Recent Sessions */}
              {recentSessions.length > 1 && (
                <div className="mt-4 border-t border-green-200 pt-3">
                  <div className="text-xs font-semibold text-green-800 mb-2">Recent Sessions</div>
                  <div className="space-y-1">
                    {recentSessions.slice(0, 3).map((session, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">
                          {new Date(session.date).toLocaleDateString()}
                        </span>
                        <span className="font-semibold text-green-900">
                          {session.correct}/{session.total} ({session.percentage}%)
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
              timeLeft <= 10 ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-gray-100'
            }`}
          >
            ⏰ {formatTime(timeLeft)}
          </div>
        </div>
        <ProgressBar
          current={currentIndex + 1}
          total={questions.length}
          label="Progress"
        />

        {/* Live Score Analytics */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 border border-blue-200">
            <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
              Answered
            </div>
            <div className="text-2xl font-bold text-blue-900">
              {currentIndex + (isAnswered ? 1 : 0)} / {questions.length}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3 border border-green-200">
            <div className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">
              Correct
            </div>
            <div className="text-2xl font-bold text-green-900">
              {correctCount}
              {currentIndex > 0 && (
                <span className="text-sm ml-1 text-green-600">
                  ({Math.round((correctCount / (currentIndex + (isAnswered ? 1 : 0))) * 100)}%)
                </span>
              )}
            </div>
          </div>

          <div className={`bg-gradient-to-br rounded-lg p-3 border ${
            currentIndex === 0 && !isAnswered
              ? 'from-gray-50 to-gray-100 border-gray-200'
              : correctCount / (currentIndex + (isAnswered ? 1 : 0)) >= 0.9
              ? 'from-emerald-50 to-emerald-100 border-emerald-200'
              : correctCount / (currentIndex + (isAnswered ? 1 : 0)) >= 0.7
              ? 'from-yellow-50 to-yellow-100 border-yellow-200'
              : 'from-red-50 to-red-100 border-red-200'
          }`}>
            <div className={`text-xs font-semibold uppercase tracking-wide mb-1 ${
              currentIndex === 0 && !isAnswered
                ? 'text-gray-600'
                : correctCount / (currentIndex + (isAnswered ? 1 : 0)) >= 0.9
                ? 'text-emerald-600'
                : correctCount / (currentIndex + (isAnswered ? 1 : 0)) >= 0.7
                ? 'text-yellow-600'
                : 'text-red-600'
            }`}>
              Accuracy
            </div>
            <div className={`text-2xl font-bold ${
              currentIndex === 0 && !isAnswered
                ? 'text-gray-900'
                : correctCount / (currentIndex + (isAnswered ? 1 : 0)) >= 0.9
                ? 'text-emerald-900'
                : correctCount / (currentIndex + (isAnswered ? 1 : 0)) >= 0.7
                ? 'text-yellow-900'
                : 'text-red-900'
            }`}>
              {currentIndex === 0 && !isAnswered ? '--' : `${Math.round((correctCount / (currentIndex + (isAnswered ? 1 : 0))) * 100)}%`}
              {currentIndex > 0 && (
                <span className="text-lg ml-1">
                  {correctCount / (currentIndex + (isAnswered ? 1 : 0)) >= 0.9
                    ? '🎅'
                    : correctCount / (currentIndex + (isAnswered ? 1 : 0)) >= 0.7
                    ? '⭐'
                    : '📚'}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <GiftCard hover={false} className="mb-6">
        <div>
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-gray-500 uppercase tracking-wide">
              Question {currentIndex + 1} of {questions.length}
            </div>
            {!isAnswered && (
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
                disabled={isAnswered}
                className={`w-full p-4 rounded-lg border-2 transition-all text-left ${getButtonStyle(
                  option
                )}`}
              >
                <span className="inline-flex items-center gap-2">
                  <span className="font-semibold">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {!isAnswered && (
                    <span className="text-xs bg-gray-200 px-1.5 py-0.5 rounded">
                      {index + 1}
                    </span>
                  )}
                </span>
                <span className="ml-2">{option}</span>
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

          {/* Next Question Button - shown after answering */}
          {isAnswered && (
            <div className="mt-6 flex justify-center">
              <WorkshopButton
                onClick={handleNext}
                variant="primary"
                className="text-lg px-8 py-3"
              >
                {currentIndex < questions.length - 1 ? 'Next Question →' : 'Finish Quiz'}
                <span className="ml-2 text-sm opacity-75">(or press Enter)</span>
              </WorkshopButton>
            </div>
          )}
        </div>
      </GiftCard>
    </div>
  );
};
