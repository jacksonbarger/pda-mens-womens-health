import React, { useState, useEffect } from 'react';
import { Breadcrumb } from '../components/shared/Breadcrumb';
import { WorkshopButton } from '../components/shared/WorkshopButton';
import { studyData } from '../data/studyDataEnhanced';
import { useProgress } from '../context/ProgressContext';
import type { TimedQuizQuestion, ClinicalCase } from '../types';

interface ExamChallengeProps {
  onBack: () => void;
}

type ExamQuestion = {
  id: string;
  question: string;
  options: string[];
  correct_answer: string;
  section: string;
  type: 'quiz' | 'clinical';
};

/**
 * Exam Challenge - 50-question comprehensive exam across all topics
 *
 * Features:
 * - Randomly selects 50 questions from all sections
 * - Includes both timed quiz and clinical case questions
 * - Shows progress and allows review
 * - Provides detailed results with performance breakdown
 */
export const ExamChallenge: React.FC<ExamChallengeProps> = ({ onBack }) => {
  const { addExamResult, getExamHistory } = useProgress();
  const [examQuestions, setExamQuestions] = useState<ExamQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [examStarted, setExamStarted] = useState(false);

  const breadcrumbItems = [
    { label: 'Home', onClick: onBack },
    { label: 'Exam Challenge' }
  ];

  // Generate exam questions on component mount
  useEffect(() => {
    const allQuestions: ExamQuestion[] = [];

    // Collect all questions from all sections
    studyData.sections.forEach(section => {
      // Add timed quiz questions
      if (section.game_modes.timed_quiz) {
        section.game_modes.timed_quiz.questions.forEach((q: TimedQuizQuestion) => {
          allQuestions.push({
            id: `${section.id}-quiz-${q.id}`,
            question: q.question,
            options: q.options,
            correct_answer: q.correct_answer,
            section: section.section,
            type: 'quiz'
          });
        });
      }

      // Add clinical case questions
      if (section.game_modes.clinical_cases) {
        section.game_modes.clinical_cases.cases.forEach((c: ClinicalCase) => {
          allQuestions.push({
            id: `${section.id}-case-${c.id}`,
            question: c.scenario,
            options: c.options,
            correct_answer: c.correct_answer,
            section: section.section,
            type: 'clinical'
          });
        });
      }
    });

    // Shuffle and select 50 questions (or fewer if not enough available)
    const shuffled = allQuestions.sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(50, allQuestions.length));

    setExamQuestions(selected);
  }, []);

  const handleStartExam = () => {
    setExamStarted(true);
  };

  const handleAnswerSelect = (answer: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < examQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const calculateResults = () => {
    let correct = 0;
    examQuestions.forEach((q, index) => {
      if (userAnswers[index] === q.correct_answer) {
        correct++;
      }
    });
    const answeredCount = Object.keys(userAnswers).length;
    return {
      correct,
      total: examQuestions.length,
      percentage: Math.round((correct / examQuestions.length) * 100),
      questionsAnswered: answeredCount
    };
  };

  const handleSubmitExam = () => {
    const results = calculateResults();

    // Save to exam history
    addExamResult({
      score: results.percentage,
      correct: results.correct,
      total: results.total,
      questionsAnswered: results.questionsAnswered
    });

    setIsComplete(true);
  };

  // Loading state
  if (examQuestions.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />
        <div className="text-center mt-12">
          <p className="text-lg text-secondary">Loading exam questions...</p>
        </div>
      </div>
    );
  }

  // Pre-exam intro screen
  if (!examStarted) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Breadcrumb items={breadcrumbItems} />

        <div className="mt-8 card-pda p-8">
          <h1 className="text-3xl font-bold text-primary mb-6 text-center">
            Comprehensive Exam Challenge
          </h1>

          <div className="space-y-6 mb-8">
            <div className="bg-pda-parchment-50 p-6 rounded-lg border border-pda-gold-300">
              <h2 className="text-xl font-bold text-primary mb-4">Exam Details</h2>
              <ul className="space-y-3 text-base text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-pda-forest-500 font-bold">•</span>
                  <span><strong>{examQuestions.length} questions</strong> randomly selected from all topics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pda-forest-500 font-bold">•</span>
                  <span>Mix of multiple choice and clinical case questions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pda-forest-500 font-bold">•</span>
                  <span>You can navigate between questions and change answers before submitting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pda-forest-500 font-bold">•</span>
                  <span>Detailed results will be shown after submission</span>
                </li>
              </ul>
            </div>

            <div className="bg-pda-winter-50 p-6 rounded-lg border border-pda-winter-300">
              <h2 className="text-xl font-bold text-primary mb-3">Topics Covered</h2>
              <p className="text-base text-secondary">
                This exam includes questions from all sections: Breast & Lactation, Menstrual & Uterine Disorders,
                PCOS & Endometriosis, Pregnancy & Postpartum, and Lifecycle & Fertility Control.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <WorkshopButton onClick={handleStartExam} variant="primary" className="px-12 py-4 text-lg">
              Start Exam
            </WorkshopButton>
          </div>
        </div>
      </div>
    );
  }

  // Results screen
  if (isComplete) {
    const results = calculateResults();
    const answeredCount = Object.keys(userAnswers).length;

    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumb items={breadcrumbItems} />

        <div className="mt-8 card-pda p-8">
          <h1 className="text-3xl font-bold text-primary mb-6 text-center">
            Exam Results
          </h1>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-pda-parchment-50 p-6 rounded-lg border-2 border-pda-gold-300 text-center">
              <div className="text-4xl font-bold text-pda-forest-600 mb-2">{results.percentage}%</div>
              <div className="text-sm text-secondary font-semibold">Overall Score</div>
            </div>
            <div className="bg-pda-winter-50 p-6 rounded-lg border-2 border-pda-winter-300 text-center">
              <div className="text-4xl font-bold text-pda-winter-600 mb-2">{results.correct}/{results.total}</div>
              <div className="text-sm text-secondary font-semibold">Correct Answers</div>
            </div>
            <div className="bg-pda-forest-50 p-6 rounded-lg border-2 border-pda-forest-300 text-center">
              <div className="text-4xl font-bold text-pda-forest-600 mb-2">{answeredCount}/{results.total}</div>
              <div className="text-sm text-secondary font-semibold">Questions Answered</div>
            </div>
          </div>

          {/* Performance Message */}
          <div className="mb-8 p-6 rounded-lg bg-gradient-to-r from-pda-forest-50 to-pda-winter-50 border border-pda-gold-300">
            <h2 className="text-xl font-bold text-primary mb-2">
              {results.percentage >= 85 ? 'Excellent Work!' :
               results.percentage >= 70 ? 'Good Job!' :
               results.percentage >= 60 ? 'Keep Practicing!' :
               'Review and Try Again'}
            </h2>
            <p className="text-base text-secondary">
              {results.percentage >= 85 ? 'You have a strong understanding of the material. Great job!' :
               results.percentage >= 70 ? 'You\'re doing well. Review the questions you missed to improve further.' :
               results.percentage >= 60 ? 'You\'re making progress. Focus on your weak areas and try again.' :
               'Take time to review the material and practice with individual sections before retaking the exam.'}
            </p>
          </div>

          {/* Exam History */}
          {getExamHistory().length > 1 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold text-primary mb-4">Your Progress Over Time</h2>
              <div className="bg-pda-parchment-50 p-6 rounded-lg border border-pda-gold-300">
                <div className="space-y-3">
                  {getExamHistory().slice(0, 5).map((attempt, index) => (
                    <div
                      key={attempt.id}
                      className="flex items-center justify-between p-3 bg-white rounded-lg border border-pda-slate-200"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`text-2xl font-bold ${
                          index === 0 ? 'text-pda-gold-600' : 'text-pda-slate-600'
                        }`}>
                          {index === 0 ? '★' : `#${index + 1}`}
                        </div>
                        <div>
                          <div className="text-sm text-secondary">
                            {new Date(attempt.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </div>
                          <div className="text-xs text-secondary">
                            {attempt.questionsAnswered} / {attempt.total} answered
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary">{attempt.score}%</div>
                          <div className="text-xs text-secondary">{attempt.correct}/{attempt.total} correct</div>
                        </div>
                        <div className={`w-16 h-2 rounded-full ${
                          attempt.score >= 85 ? 'bg-green-500' :
                          attempt.score >= 70 ? 'bg-blue-500' :
                          attempt.score >= 60 ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`} />
                      </div>
                    </div>
                  ))}
                </div>
                {getExamHistory().length > 5 && (
                  <div className="mt-3 text-sm text-secondary text-center">
                    Showing 5 most recent attempts out of {getExamHistory().length} total
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Detailed Review */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">Question Review</h2>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {examQuestions.map((q, index) => {
                const userAnswer = userAnswers[index];
                const isCorrect = userAnswer === q.correct_answer;
                const wasAnswered = userAnswer !== undefined;

                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-lg border-2 ${
                      !wasAnswered ? 'bg-gray-50 border-gray-300' :
                      isCorrect ? 'bg-green-50 border-green-300' :
                      'bg-red-50 border-red-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-bold text-primary">Q{index + 1}.</span>
                      <div className="flex-grow">
                        <p className="text-base text-primary mb-2">{q.question.substring(0, 100)}...</p>
                        <div className="text-sm text-secondary">
                          <span className="font-semibold">Section:</span> {q.section}
                        </div>
                        {wasAnswered && (
                          <div className="mt-2 text-sm">
                            <span className={`font-semibold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                              {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                            </span>
                            {!isCorrect && (
                              <span className="ml-2 text-secondary">
                                (Correct: {q.correct_answer})
                              </span>
                            )}
                          </div>
                        )}
                        {!wasAnswered && (
                          <div className="mt-2 text-sm text-gray-600">
                            Not answered
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <WorkshopButton onClick={() => window.location.reload()} variant="primary">
              Take New Exam
            </WorkshopButton>
            <WorkshopButton onClick={onBack} variant="secondary">
              Return Home
            </WorkshopButton>
          </div>
        </div>
      </div>
    );
  }

  // Exam in progress
  const currentQuestion = examQuestions[currentQuestionIndex];
  const userAnswer = userAnswers[currentQuestionIndex];
  const answeredCount = Object.keys(userAnswers).length;
  const progress = ((currentQuestionIndex + 1) / examQuestions.length) * 100;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Breadcrumb items={breadcrumbItems} />

      {/* Progress Bar */}
      <div className="mt-6 mb-8">
        <div className="flex justify-between text-sm text-secondary mb-2">
          <span>Question {currentQuestionIndex + 1} of {examQuestions.length}</span>
          <span>{answeredCount} answered</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="h-full bg-gradient-to-r from-pda-forest-500 to-pda-gold-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="card-pda p-8 mb-6">
        {/* Question Type Badge */}
        <div className="flex items-center justify-between mb-6">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
            currentQuestion.type === 'clinical'
              ? 'bg-pda-cranberry-100 text-pda-cranberry-700'
              : 'bg-pda-winter-100 text-pda-winter-700'
          }`}>
            {currentQuestion.type === 'clinical' ? 'Clinical Case' : 'Multiple Choice'}
          </span>
          <span className="text-sm text-secondary font-semibold">{currentQuestion.section}</span>
        </div>

        {/* Question Text */}
        <h2 className="text-xl font-bold text-primary mb-6 leading-relaxed">
          {currentQuestion.question}
        </h2>

        {/* Answer Options */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(option)}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                userAnswer === option
                  ? 'border-pda-forest-500 bg-pda-forest-50 font-semibold'
                  : 'border-gray-300 bg-white hover:border-pda-gold-400 hover:bg-pda-gold-50'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="font-bold text-primary">{String.fromCharCode(65 + index)}.</span>
                <span className="text-base">{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <WorkshopButton
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          variant="secondary"
        >
          ← Previous
        </WorkshopButton>

        <div className="flex gap-3">
          {currentQuestionIndex === examQuestions.length - 1 ? (
            <WorkshopButton
              onClick={handleSubmitExam}
              variant="success"
              disabled={answeredCount === 0}
            >
              Submit Exam
            </WorkshopButton>
          ) : (
            <WorkshopButton
              onClick={handleNext}
              variant="primary"
            >
              Next →
            </WorkshopButton>
          )}
        </div>
      </div>

      {/* Question Navigator */}
      <div className="mt-8 card-pda p-6">
        <h3 className="text-sm font-bold text-secondary mb-3">Question Navigator</h3>
        <div className="grid grid-cols-10 gap-2">
          {examQuestions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuestionIndex(index)}
              className={`aspect-square rounded-lg text-sm font-semibold transition-all ${
                index === currentQuestionIndex
                  ? 'bg-pda-forest-500 text-white'
                  : userAnswers[index]
                    ? 'bg-pda-gold-200 text-pda-gold-800 hover:bg-pda-gold-300'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
