import React, { useState, useEffect } from 'react';
import { professors } from '../data/professors/professorData';
import type { QuizQuestion } from '../data/professors/professorTypes';
import { GiftCard } from '../components/shared/GiftCard';
import { WorkshopButton } from '../components/shared/WorkshopButton';
import { Breadcrumb } from '../components/shared/Breadcrumb';

interface FinalExamChallengeProps {
  onBack: () => void;
  onBackToHome: () => void;
}

type ExamPart = 'intro' | 'part1' | 'part2' | 'results';

interface QuestionWithMetadata extends QuizQuestion {
  professorName: string;
  category: 'pathophysiology' | 'medchem';
}

export const FinalExamChallenge: React.FC<FinalExamChallengeProps> = ({ onBack, onBackToHome }) => {
  const [examPart, setExamPart] = useState<ExamPart>('intro');
  const [part1Questions, setPart1Questions] = useState<QuestionWithMetadata[]>([]);
  const [part2Questions, setPart2Questions] = useState<QuestionWithMetadata[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showExplanation, setShowExplanation] = useState(false);

  // Shuffle and select random questions
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Initialize exam questions
  useEffect(() => {
    const pathophysQuestions: QuestionWithMetadata[] = [];
    const medchemQuestions: QuestionWithMetadata[] = [];

    professors.forEach(prof => {
      const category = prof.specialty?.toLowerCase().includes('medicinal chemistry') ||
                      prof.specialty?.toLowerCase().includes('med chem')
        ? 'medchem'
        : 'pathophysiology';

      prof.quiz.forEach(q => {
        const questionWithMeta: QuestionWithMetadata = {
          ...q,
          professorName: prof.name,
          category
        };

        if (category === 'pathophysiology') {
          pathophysQuestions.push(questionWithMeta);
        } else {
          medchemQuestions.push(questionWithMeta);
        }
      });
    });

    // Randomly select 25 from each category
    const selectedPart1 = shuffleArray(pathophysQuestions).slice(0, 25);
    const selectedPart2 = shuffleArray(medchemQuestions).slice(0, 25);

    setPart1Questions(selectedPart1);
    setPart2Questions(selectedPart2);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Only handle keys if we're in a question screen (not intro or results)
      if (examPart !== 'part1' && examPart !== 'part2') return;
      if (!currentQuestion) return;

      // 1-4 keys to select answers
      if (['1', '2', '3', '4'].includes(e.key) && !showExplanation) {
        const index = parseInt(e.key) - 1;
        if (index < currentQuestion.options.length) {
          handleAnswerSelect(currentQuestion.options[index]);
        }
      }

      // Enter key to move to next question
      if (e.key === 'Enter' && showExplanation) {
        handleNextQuestion();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [examPart, currentQuestion, showExplanation, currentQuestionIndex]);

  const currentQuestions = examPart === 'part1' ? part1Questions : part2Questions;
  const currentQuestion = currentQuestions[currentQuestionIndex];
  const totalQuestions = currentQuestions.length;

  const handleStartPart1 = () => {
    setExamPart('part1');
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowExplanation(false);
  };

  const handleStartPart2 = () => {
    setExamPart('part2');
    setCurrentQuestionIndex(0);
    setShowExplanation(false);
  };

  const handleAnswerSelect = (answer: string) => {
    const questionKey = `${examPart}-${currentQuestionIndex}`;
    setSelectedAnswers(prev => ({ ...prev, [questionKey]: answer }));
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowExplanation(false);
    } else {
      // Move to next part or results
      if (examPart === 'part1') {
        handleStartPart2();
      } else {
        calculateResults();
      }
    }
  };

  const calculateResults = () => {
    let part1Correct = 0;
    let part2Correct = 0;

    part1Questions.forEach((q, idx) => {
      const questionKey = `part1-${idx}`;
      if (selectedAnswers[questionKey] === q.correct_answer) {
        part1Correct++;
      }
    });

    part2Questions.forEach((q, idx) => {
      const questionKey = `part2-${idx}`;
      if (selectedAnswers[questionKey] === q.correct_answer) {
        part2Correct++;
      }
    });

    setExamPart('results');
  };

  const handleRetake = () => {
    // Re-randomize questions
    const pathophysQuestions: QuestionWithMetadata[] = [];
    const medchemQuestions: QuestionWithMetadata[] = [];

    professors.forEach(prof => {
      const category = prof.specialty?.toLowerCase().includes('medicinal chemistry') ||
                      prof.specialty?.toLowerCase().includes('med chem')
        ? 'medchem'
        : 'pathophysiology';

      prof.quiz.forEach(q => {
        const questionWithMeta: QuestionWithMetadata = {
          ...q,
          professorName: prof.name,
          category
        };

        if (category === 'pathophysiology') {
          pathophysQuestions.push(questionWithMeta);
        } else {
          medchemQuestions.push(questionWithMeta);
        }
      });
    });

    const selectedPart1 = shuffleArray(pathophysQuestions).slice(0, 25);
    const selectedPart2 = shuffleArray(medchemQuestions).slice(0, 25);

    setPart1Questions(selectedPart1);
    setPart2Questions(selectedPart2);
    setExamPart('intro');
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowExplanation(false);
  };

  // Intro screen
  if (examPart === 'intro') {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumb
          items={[
            { label: 'Home', onClick: onBackToHome },
            { label: 'Exam Prep', onClick: onBack },
            { label: 'Final Exam Challenge' }
          ]}
        />

        <GiftCard hover={false}>
          <div className="text-center space-y-6">
            <div className="text-6xl mb-4">🎓</div>
            <h1 className="text-3xl font-bold text-pda-cranberry-600">
              Final Exam Challenge
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Test your knowledge with a comprehensive 50-question exam covering all professors' content.
              Questions are randomized each time, so you can retake it for practice!
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-pda-winter-50 border-2 border-pda-winter-300 rounded-lg p-6">
                <div className="text-4xl mb-3">🔬</div>
                <h3 className="font-bold text-xl text-pda-winter-700 mb-2">Part 1: Pathophysiology</h3>
                <p className="text-gray-700 text-sm mb-3">
                  25 randomized questions from Professors Burmeister & Breeze covering female/male reproductive health and urinary tract pathophysiology
                </p>
                <div className="bg-white rounded p-3 text-sm text-gray-600">
                  <div className="font-semibold mb-1">Topics Include:</div>
                  <ul className="text-xs space-y-1">
                    <li>• Reproductive system disorders</li>
                    <li>• Sexual health conditions</li>
                    <li>• Urinary tract pathology</li>
                    <li>• Clinical presentations</li>
                  </ul>
                </div>
              </div>

              <div className="bg-pda-gold-50 border-2 border-pda-gold-300 rounded-lg p-6">
                <div className="text-4xl mb-3">⚗️</div>
                <h3 className="font-bold text-xl text-pda-gold-700 mb-2">Part 2: Med Chem & Pharmacology</h3>
                <p className="text-gray-700 text-sm mb-3">
                  25 randomized questions from Professors Weldon & Virga covering drug structures, SAR, mechanisms, and pharmacology
                </p>
                <div className="bg-white rounded p-3 text-sm text-gray-600">
                  <div className="font-semibold mb-1">Topics Include:</div>
                  <ul className="text-xs space-y-1">
                    <li>• Drug chemical structures</li>
                    <li>• Structure-activity relationships</li>
                    <li>• Mechanisms of action</li>
                    <li>• Metabolism and prodrugs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-pda-cranberry-50 border-2 border-pda-cranberry-300 rounded-lg p-4 mt-6">
              <p className="text-sm text-gray-700">
                <strong>⏱️ Format:</strong> Untimed exam • Review answers as you go • See explanations immediately
              </p>
            </div>

            <WorkshopButton onClick={handleStartPart1} variant="primary" className="mt-6 text-lg px-8 py-4">
              Begin Part 1: Pathophysiology →
            </WorkshopButton>
          </div>
        </GiftCard>
      </div>
    );
  }

  // Results screen
  if (examPart === 'results') {
    const part1Correct = part1Questions.filter((q, idx) =>
      selectedAnswers[`part1-${idx}`] === q.correct_answer
    ).length;
    const part2Correct = part2Questions.filter((q, idx) =>
      selectedAnswers[`part2-${idx}`] === q.correct_answer
    ).length;
    const totalCorrect = part1Correct + part2Correct;
    const totalQuestions = 50;
    const percentage = Math.round((totalCorrect / totalQuestions) * 100);

    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumb
          items={[
            { label: 'Home', onClick: onBackToHome },
            { label: 'Exam Prep', onClick: onBack },
            { label: 'Final Exam Results' }
          ]}
        />

        <GiftCard hover={false}>
          <div className="text-center space-y-6">
            <div className="text-6xl mb-4">
              {percentage >= 90 ? '🏆' : percentage >= 80 ? '🎉' : percentage >= 70 ? '👍' : '📚'}
            </div>
            <h1 className="text-3xl font-bold text-pda-cranberry-600">
              Final Exam Complete!
            </h1>

            <div className="bg-gradient-to-r from-pda-gold-50 to-pda-cranberry-50 border-2 border-pda-gold-400 rounded-lg p-8">
              <div className="text-5xl font-bold text-pda-cranberry-600 mb-2">
                {percentage}%
              </div>
              <div className="text-xl text-gray-700">
                {totalCorrect} / {totalQuestions} questions correct
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pda-winter-50 border-2 border-pda-winter-300 rounded-lg p-6">
                <h3 className="font-bold text-lg text-pda-winter-700 mb-2">Part 1: Pathophysiology</h3>
                <div className="text-3xl font-bold text-pda-winter-600">{part1Correct} / 25</div>
                <div className="text-sm text-gray-600 mt-1">{Math.round((part1Correct / 25) * 100)}%</div>
              </div>

              <div className="bg-pda-gold-50 border-2 border-pda-gold-300 rounded-lg p-6">
                <h3 className="font-bold text-lg text-pda-gold-700 mb-2">Part 2: Med Chem</h3>
                <div className="text-3xl font-bold text-pda-gold-600">{part2Correct} / 25</div>
                <div className="text-sm text-gray-600 mt-1">{Math.round((part2Correct / 25) * 100)}%</div>
              </div>
            </div>

            <div className="bg-pda-parchment-50 border border-pda-gold-200 rounded-lg p-4 text-left">
              <h3 className="font-bold text-gray-800 mb-2">💡 Study Recommendations:</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                {percentage < 70 && (
                  <li>• Review high-yield concepts for each professor</li>
                )}
                {part1Correct < 18 && (
                  <li>• Focus on pathophysiology topics from Burmeister & Breeze</li>
                )}
                {part2Correct < 18 && (
                  <li>• Review medicinal chemistry from Weldon & Virga</li>
                )}
                <li>• Retake this exam - questions randomize each time!</li>
                <li>• Use flashcards to reinforce weaker topics</li>
              </ul>
            </div>

            <div className="flex gap-4 justify-center mt-6">
              <WorkshopButton onClick={handleRetake} variant="primary">
                🔄 Retake with New Questions
              </WorkshopButton>
              <WorkshopButton onClick={onBack} variant="secondary">
                ← Back to Exam Prep
              </WorkshopButton>
            </div>
          </div>
        </GiftCard>
      </div>
    );
  }

  // Question screen (Part 1 or Part 2)
  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  const questionKey = `${examPart}-${currentQuestionIndex}`;
  const selectedAnswer = selectedAnswers[questionKey];
  const isCorrect = selectedAnswer === currentQuestion.correct_answer;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Breadcrumb
        items={[
          { label: 'Home', onClick: onBackToHome },
          { label: 'Exam Prep', onClick: onBack },
          { label: examPart === 'part1' ? 'Part 1: Pathophysiology' : 'Part 2: Med Chem' }
        ]}
      />

      {/* Progress Header */}
      <div className="mb-6 bg-pda-parchment-50 border-2 border-pda-gold-300 rounded-lg p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="font-bold text-gray-800">
            {examPart === 'part1' ? '🔬 Part 1: Pathophysiology' : '⚗️ Part 2: Med Chem'}
          </div>
          <div className="text-sm text-gray-600">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-pda-gold-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
        <div className="text-xs text-gray-500 mt-1">
          From Professor {currentQuestion.professorName}
        </div>
      </div>

      {/* Question */}
      <GiftCard hover={false}>
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800 leading-relaxed">
            {currentQuestion.question}
          </h2>

          {/* Options */}
          <div className="space-y-3 mt-6">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedAnswer === option;
              const isCorrectOption = option === currentQuestion.correct_answer;

              let bgColor = 'bg-white hover:bg-gray-50';
              let borderColor = 'border-gray-300';
              let textColor = 'text-gray-800';

              if (showExplanation) {
                if (isCorrectOption) {
                  bgColor = 'bg-green-50';
                  borderColor = 'border-green-500';
                  textColor = 'text-green-800';
                } else if (isSelected && !isCorrect) {
                  bgColor = 'bg-red-50';
                  borderColor = 'border-red-500';
                  textColor = 'text-red-800';
                }
              } else if (isSelected) {
                bgColor = 'bg-pda-gold-50';
                borderColor = 'border-pda-gold-400';
              }

              return (
                <button
                  key={idx}
                  onClick={() => !showExplanation && handleAnswerSelect(option)}
                  disabled={showExplanation}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${bgColor} ${borderColor} ${textColor} ${
                    !showExplanation ? 'cursor-pointer' : 'cursor-default'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="font-bold">{String.fromCharCode(65 + idx)}.</div>
                    <div className="flex-1">{option}</div>
                    {showExplanation && isCorrectOption && (
                      <span className="text-green-600 font-bold">✓</span>
                    )}
                    {showExplanation && isSelected && !isCorrect && (
                      <span className="text-red-600 font-bold">✗</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className={`mt-6 p-4 rounded-lg border-2 ${
              isCorrect
                ? 'bg-green-50 border-green-500'
                : 'bg-red-50 border-red-500'
            }`}>
              <div className="font-bold text-gray-800 mb-2">
                {isCorrect ? '✅ Correct!' : '❌ Incorrect'}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {currentQuestion.explanation}
              </p>
              {currentQuestion.slideReference && (
                <div className="text-xs text-gray-500 mt-2 italic">
                  Reference: {currentQuestion.slideReference}
                </div>
              )}
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-6 pt-4 border-t">
            <div className="text-sm text-gray-600">
              {showExplanation ? (
                <span>Review the explanation, then continue</span>
              ) : (
                <span>Select your answer</span>
              )}
            </div>
            {showExplanation && (
              <WorkshopButton onClick={handleNextQuestion} variant="primary">
                {currentQuestionIndex < totalQuestions - 1
                  ? 'Next Question →'
                  : examPart === 'part1'
                    ? 'Start Part 2 →'
                    : 'View Results →'
                }
              </WorkshopButton>
            )}
          </div>
        </div>
      </GiftCard>
    </div>
  );
};
