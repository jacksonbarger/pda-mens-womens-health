import React, { useState } from 'react';
import type { Flashcard } from '../../types';
import { WorkshopButton } from '../shared/WorkshopButton';
import { GiftCard } from '../shared/GiftCard';
import { ProgressBar } from '../shared/ProgressBar';

interface FlashcardsGameProps {
  cards: Flashcard[];
  sectionName: string;
  onComplete: (correct: number, total: number) => void;
  onExit: () => void;
}

export const FlashcardsGame: React.FC<FlashcardsGameProps> = ({
  cards,
  sectionName,
  onComplete,
  onExit,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knewCount, setKnewCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const currentCard = cards[currentIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleResponse = (knew: boolean) => {
    if (!isFlipped) {
      setIsFlipped(true);
      return;
    }

    if (knew) {
      setKnewCount(prev => prev + 1);
    } else {
      setReviewCount(prev => prev + 1);
    }

    if (currentIndex < cards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsFlipped(false);
    } else {
      setIsComplete(true);
      onComplete(knew ? knewCount + 1 : knewCount, cards.length);
    }
  };

  if (isComplete) {
    const percentage = Math.round((knewCount / cards.length) * 100);
    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <GiftCard hover={false}>
          <div className="text-center">
            <div className="text-6xl mb-4" aria-hidden="true">
              {percentage >= 90 ? '🎅' : percentage >= 70 ? '⭐' : percentage >= 50 ? '🎄' : '❄️'}
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Session Complete!
            </h2>
            <div className="space-y-3 mb-6">
              <div className="text-base text-secondary">
                <span className="font-semibold text-primary">I knew this:</span> {knewCount} ✅
              </div>
              <div className="text-base text-secondary">
                <span className="font-semibold text-primary">Need to review:</span> {reviewCount} ❌
              </div>
              <div className="text-lg font-bold text-pda-gold-600">
                {percentage}% Mastery
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <WorkshopButton onClick={onExit} variant="secondary">
                Back to Section
              </WorkshopButton>
              <WorkshopButton
                onClick={() => {
                  setCurrentIndex(0);
                  setIsFlipped(false);
                  setKnewCount(0);
                  setReviewCount(0);
                  setIsComplete(false);
                }}
                variant="primary"
              >
                Study Again
              </WorkshopButton>
            </div>
          </div>
        </GiftCard>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <WorkshopButton onClick={onExit} variant="secondary">
            ← Exit
          </WorkshopButton>
          <h2 className="text-lg font-bold text-primary">
            {sectionName} - Flashcards
          </h2>
          <div className="w-24" />
        </div>
        <ProgressBar
          current={currentIndex + 1}
          total={cards.length}
          label="Progress"
        />
      </div>

      <div className="mb-6">
        <div className="flex justify-center gap-8 text-base text-secondary">
          <div>
            <span className="font-semibold text-primary">Knew it:</span> {knewCount} ✅
          </div>
          <div>
            <span className="font-semibold text-primary">Review:</span> {reviewCount} ❌
          </div>
        </div>
      </div>

      <div className="perspective-1000 mb-8">
        <GiftCard
          hover={false}
          className="min-h-[300px] flex items-center justify-center cursor-pointer transition-transform duration-500"
          onClick={handleFlip}
          ariaLabel={isFlipped ? 'Click to flip back to question' : 'Click to flip to answer'}
        >
          <div className="text-center p-6">
            {!isFlipped ? (
              <div>
                <div className="text-sm text-secondary mb-4 uppercase tracking-wide">
                  Question
                </div>
                <p className="text-lg font-semibold text-primary">
                  {currentCard.question}
                </p>
                <div className="mt-6 text-base text-pda-gold-600">
                  Click to flip
                </div>
              </div>
            ) : (
              <div>
                <div className="text-sm text-secondary mb-4 uppercase tracking-wide">
                  Answer
                </div>
                <p className="text-base text-primary leading-relaxed">{currentCard.answer}</p>
              </div>
            )}
          </div>
        </GiftCard>
      </div>

      <div className="flex justify-center gap-4">
        <WorkshopButton
          onClick={() => handleResponse(false)}
          variant="danger"
          disabled={!isFlipped}
        >
          ❌ Need to Review
        </WorkshopButton>
        <WorkshopButton
          onClick={() => handleResponse(true)}
          variant="success"
          disabled={!isFlipped}
        >
          ✅ I Knew This!
        </WorkshopButton>
      </div>
    </div>
  );
};
