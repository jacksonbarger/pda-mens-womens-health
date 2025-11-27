import React, { useState, useEffect } from 'react';
import type { OrderingGame as OrderingGameType } from '../../types';
import { WorkshopButton } from '../shared/WorkshopButton';
import { GiftCard } from '../shared/GiftCard';

interface OrderingGameProps {
  gameData: OrderingGameType;
  sectionName: string;
  onComplete: (correct: number, total: number) => void;
  onExit: () => void;
}

export const OrderingGame: React.FC<OrderingGameProps> = ({
  gameData,
  sectionName,
  onComplete,
  onExit,
}) => {
  const [currentOrder, setCurrentOrder] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  useEffect(() => {
    // Shuffle steps on mount
    const shuffled = [...gameData.steps_correct_order].sort(() => Math.random() - 0.5);
    setCurrentOrder(shuffled);
  }, [gameData]);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (dropIndex: number) => {
    if (draggedIndex === null) return;

    const newOrder = [...currentOrder];
    const [draggedItem] = newOrder.splice(draggedIndex, 1);
    newOrder.splice(dropIndex, 0, draggedItem);

    setCurrentOrder(newOrder);
    setDraggedIndex(null);
    setIsChecked(false);
  };

  const handleCheck = () => {
    const correct = currentOrder.every(
      (step, index) => step === gameData.steps_correct_order[index]
    );
    setIsChecked(true);
    setIsCorrect(correct);

    if (correct) {
      onComplete(1, 1);
    }
  };

  const handleReset = () => {
    const shuffled = [...gameData.steps_correct_order].sort(() => Math.random() - 0.5);
    setCurrentOrder(shuffled);
    setIsChecked(false);
    setIsCorrect(false);
  };

  const getStepStatus = (index: number) => {
    if (!isChecked) return 'default';
    return currentOrder[index] === gameData.steps_correct_order[index]
      ? 'correct'
      : 'incorrect';
  };

  const getStepStyle = (status: string) => {
    switch (status) {
      case 'correct':
        return 'bg-green-100 border-green-500';
      case 'incorrect':
        return 'bg-red-100 border-red-500';
      default:
        return 'bg-white border-gray-300 hover:border-pda-gold-400';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <WorkshopButton onClick={onExit} variant="secondary">
            ← Exit
          </WorkshopButton>
          <h2 className="text-2xl font-bold text-pda-cranberry-600">
            🎀 {sectionName} - Ordering
          </h2>
          <div className="w-24" />
        </div>
      </div>

      <GiftCard hover={false} className="mb-6">
        <div className="text-center mb-6">
          <div className="text-5xl mb-4">🎁</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Assembly Line</h3>
          <p className="text-gray-600">{gameData.prompt}</p>
        </div>

        {isChecked && isCorrect && (
          <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg text-center animate-sparkle">
            <div className="text-4xl mb-2">🎅</div>
            <div className="text-xl font-bold">Perfect Order!</div>
            <p>You've mastered this sequence!</p>
          </div>
        )}

        {isChecked && !isCorrect && (
          <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg text-center">
            <div className="text-4xl mb-2">🎄</div>
            <div className="text-xl font-bold">Not quite right</div>
            <p>Take a look at the steps marked incorrect and try again!</p>
          </div>
        )}

        <div className="space-y-3 mb-6">
          {currentOrder.map((step, index) => {
            const status = getStepStatus(index);
            return (
              <div
                key={index}
                draggable={!isChecked}
                onDragStart={() => handleDragStart(index)}
                onDragOver={handleDragOver}
                onDrop={() => handleDrop(index)}
                className={`p-4 rounded-lg border-2 transition-all cursor-move ${getStepStyle(
                  status
                )} ${draggedIndex === index ? 'opacity-50' : ''}`}
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pda-cranberry-100 flex items-center justify-center mr-4 font-bold text-pda-cranberry-600">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-800">{step}</p>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {status === 'correct' && <span className="text-2xl">✅</span>}
                    {status === 'incorrect' && <span className="text-2xl">❌</span>}
                    {status === 'default' && <span className="text-gray-400">⋮⋮</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center text-sm text-gray-500 mb-4">
          💡 Drag and drop the cards to arrange them in the correct order
        </div>

        <div className="flex justify-center space-x-4">
          {!isChecked ? (
            <>
              <WorkshopButton onClick={handleReset} variant="secondary">
                🔄 Reset
              </WorkshopButton>
              <WorkshopButton onClick={handleCheck} variant="primary">
                Check Order
              </WorkshopButton>
            </>
          ) : isCorrect ? (
            <>
              <WorkshopButton onClick={onExit} variant="secondary">
                Back to Section
              </WorkshopButton>
              <WorkshopButton onClick={handleReset} variant="primary">
                Try Again
              </WorkshopButton>
            </>
          ) : (
            <>
              <WorkshopButton onClick={handleReset} variant="danger">
                🔄 Reset & Try Again
              </WorkshopButton>
              <WorkshopButton
                onClick={() => {
                  setCurrentOrder([...gameData.steps_correct_order]);
                  setIsChecked(true);
                  setIsCorrect(true);
                }}
                variant="secondary"
              >
                Show Correct Order
              </WorkshopButton>
            </>
          )}
        </div>
      </GiftCard>
    </div>
  );
};
