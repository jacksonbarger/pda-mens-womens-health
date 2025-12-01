// Preparedness Card Component
// Displays user's preparedness ranking and progress breakdown

import React from 'react';
import type { PreparednessScore } from '../utils/progressTracking';

interface PreparednessCardProps {
  preparedness: PreparednessScore;
  professorName: string;
}

export const PreparednessCard: React.FC<PreparednessCardProps> = ({
  preparedness,
  professorName
}) => {
  const { overall, coverage, performance, rank, rankColor, rankEmoji, breakdown } = preparedness;

  // Get progress bar color based on score
  const getProgressColor = (score: number): string => {
    if (score >= 90) return 'bg-blue-500';
    if (score >= 75) return 'bg-green-500';
    if (score >= 50) return 'bg-yellow-500';
    if (score >= 25) return 'bg-orange-500';
    return 'bg-red-500';
  };

  // Progress bar component
  const ProgressBar: React.FC<{ label: string; value: number; color?: string }> = ({
    label,
    value,
    color
  }) => (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-gray-700">{label}</span>
        <span className="text-sm font-semibold text-gray-900">{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`${color || getProgressColor(value)} h-2 rounded-full transition-all duration-300`}
          style={{ width: `${Math.min(value, 100)}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-md border-2 border-gray-200 p-6 mb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-800">
          {professorName} Preparedness
        </h3>
        <div className={`text-right ${rankColor}`}>
          <div className="text-3xl mb-1">{rankEmoji}</div>
          <div className="text-xl font-bold">{rank}</div>
        </div>
      </div>

      {/* Overall Score */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-semibold text-gray-800">Overall Preparedness</span>
          <span className="text-2xl font-bold text-gray-900">{overall}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className={`${getProgressColor(overall)} h-4 rounded-full transition-all duration-300`}
            style={{ width: `${Math.min(overall, 100)}%` }}
          />
        </div>
      </div>

      {/* Coverage and Performance */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="text-sm text-blue-600 font-medium mb-1">Content Coverage</div>
          <div className="text-3xl font-bold text-blue-900">{coverage}%</div>
          <div className="text-xs text-blue-600 mt-1">Material explored</div>
        </div>
        <div className="bg-green-50 rounded-lg p-4">
          <div className="text-sm text-green-600 font-medium mb-1">Quiz Performance</div>
          <div className="text-3xl font-bold text-green-900">{performance}%</div>
          <div className="text-xs text-green-600 mt-1">Accuracy rate</div>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <div className="border-t border-gray-200 pt-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Detailed Breakdown</h4>

        <ProgressBar
          label="Quiz Coverage"
          value={breakdown.quizCoverage}
        />

        <ProgressBar
          label="Quiz Accuracy"
          value={breakdown.quizPerformance}
        />

        <ProgressBar
          label="Flashcards Studied"
          value={breakdown.flashcardCoverage}
        />

        <ProgressBar
          label="Drug Cards Reviewed"
          value={breakdown.drugCardCoverage}
        />
      </div>

      {/* Rank Explanation */}
      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <p className="text-xs text-gray-600">
          {rank === 'Expert' && (
            <>
              <span className="font-semibold">Expert Level:</span> You've mastered this content!
              Excellent coverage and high performance across all materials.
            </>
          )}
          {rank === 'Proficient' && (
            <>
              <span className="font-semibold">Proficient Level:</span> Strong understanding!
              You've covered most content with good accuracy. Keep practicing to reach expert level.
            </>
          )}
          {rank === 'Competent' && (
            <>
              <span className="font-semibold">Competent Level:</span> Solid foundation established.
              Continue studying to improve coverage and accuracy.
            </>
          )}
          {rank === 'Learning' && (
            <>
              <span className="font-semibold">Learning Level:</span> Good start!
              Keep exploring more content and practicing quizzes to build your knowledge.
            </>
          )}
          {rank === 'Novice' && (
            <>
              <span className="font-semibold">Novice Level:</span> Just beginning your journey.
              Start by reviewing flashcards and taking practice quizzes to build familiarity.
            </>
          )}
        </p>
      </div>
    </div>
  );
};
