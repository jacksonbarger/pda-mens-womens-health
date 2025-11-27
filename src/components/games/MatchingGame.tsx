import React, { useState, useEffect } from 'react';
import type { MatchingPair } from '../../types';
import { WorkshopButton } from '../shared/WorkshopButton';
import { GiftCard } from '../shared/GiftCard';

interface MatchingGameProps {
  pairs: MatchingPair[];
  sectionName: string;
  onComplete: (correct: number, total: number) => void;
  onExit: () => void;
}

export const MatchingGame: React.FC<MatchingGameProps> = ({
  pairs,
  sectionName,
  onComplete,
  onExit,
}) => {
  const [leftItems] = useState(pairs.map(p => p.left));
  const [rightItems, setRightItems] = useState<string[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [attempts, setAttempts] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  useEffect(() => {
    // Shuffle right items
    const shuffled = [...pairs.map(p => p.right)].sort(() => Math.random() - 0.5);
    setRightItems(shuffled);
  }, [pairs]);

  const handleLeftClick = (index: number) => {
    if (matched.has(index)) return;
    setSelectedLeft(index);
    setFeedback(null);
  };

  const handleRightClick = (index: number) => {
    if (selectedLeft === null) return;

    const rightIndex = rightItems.findIndex((_, i) => i === index);
    const leftValue = leftItems[selectedLeft];
    const rightValue = rightItems[rightIndex];

    // Find if this is a correct match
    const isCorrect = pairs.some(
      pair => pair.left === leftValue && pair.right === rightValue
    );

    setAttempts(prev => prev + 1);

    if (isCorrect) {
      setFeedback('correct');
      setCorrectCount(prev => prev + 1);
      setMatched(prev => new Set([...prev, selectedLeft]));

      // Remove the matched right item
      setTimeout(() => {
        setRightItems(prev => prev.filter((_, i) => i !== rightIndex));
        setSelectedLeft(null);
        setFeedback(null);

        // Check if all matched
        if (matched.size + 1 === pairs.length) {
          setIsComplete(true);
          onComplete(correctCount + 1, attempts + 1);
        }
      }, 1000);
    } else {
      setFeedback('incorrect');
      setTimeout(() => {
        setSelectedLeft(null);
        setFeedback(null);
      }, 1000);
    }
  };

  if (isComplete) {
    const accuracy = Math.round((correctCount / attempts) * 100);
    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <GiftCard hover={false}>
          <div className="text-center">
            <div className="text-6xl mb-4" aria-hidden="true">
              {accuracy >= 90 ? '🎅' : accuracy >= 70 ? '⭐' : '🎄'}
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              All Matched!
            </h2>
            <div className="space-y-3 mb-6">
              <div className="text-base text-secondary">
                <span className="font-semibold text-primary">Attempts:</span> {attempts}
              </div>
              <div className="text-base text-secondary">
                <span className="font-semibold text-primary">Accuracy:</span> {accuracy}%
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <WorkshopButton onClick={onExit} variant="secondary">
                Back to Section
              </WorkshopButton>
              <WorkshopButton
                onClick={() => {
                  setRightItems([...pairs.map(p => p.right)].sort(() => Math.random() - 0.5));
                  setSelectedLeft(null);
                  setMatched(new Set());
                  setAttempts(0);
                  setCorrectCount(0);
                  setIsComplete(false);
                  setFeedback(null);
                }}
                variant="primary"
              >
                Play Again
              </WorkshopButton>
            </div>
          </div>
        </GiftCard>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <WorkshopButton onClick={onExit} variant="secondary">
            ← Exit
          </WorkshopButton>
          <h2 className="text-lg font-bold text-primary">
            {sectionName} - Matching
          </h2>
          <div className="text-base text-secondary">
            <span className="font-semibold">Attempts:</span> {attempts}
          </div>
        </div>
      </div>

      {feedback && (
        <div
          className={`text-center mb-4 p-4 rounded-lg ${
            feedback === 'correct'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
          role="alert"
        >
          {feedback === 'correct' ? '✨ Perfect match! ✨' : '❌ Try again!'}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <h3 className="text-lg font-semibold text-center mb-4 text-primary">
            🎀 Terms
          </h3>
          <div className="space-y-3">
            {leftItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleLeftClick(index)}
                disabled={matched.has(index)}
                className={`w-full p-4 rounded-lg border-2 transition-all text-left focus-workshop ${
                  matched.has(index)
                    ? 'bg-green-100 border-green-400 opacity-50'
                    : selectedLeft === index
                    ? 'bg-pda-gold-100 border-pda-gold-500 shadow-lg scale-[1.02]'
                    : 'bg-white border-gray-300 hover:border-pda-gold-400 hover:shadow-md'
                }`}
              >
                {matched.has(index) && <span className="mr-2" aria-label="Matched">✅</span>}
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="text-lg font-semibold text-center mb-4 text-primary">
            🎁 Definitions
          </h3>
          <div className="space-y-3">
            {rightItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleRightClick(index)}
                disabled={selectedLeft === null}
                className={`w-full p-4 rounded-lg border-2 transition-all text-left focus-workshop ${
                  selectedLeft === null
                    ? 'bg-gray-100 border-gray-300 cursor-not-allowed opacity-60'
                    : 'bg-white border-gray-300 hover:border-pda-cranberry-400 hover:shadow-md'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-base text-secondary">
        💡 Select a term on the left, then select its matching definition on the right
      </div>
    </div>
  );
};
