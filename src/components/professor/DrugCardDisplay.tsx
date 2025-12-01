import React, { useState } from 'react';
import type { DrugCard } from '../../data/professors/professorTypes';
import { GiftCard } from '../shared/GiftCard';
import { WorkshopButton } from '../shared/WorkshopButton';

interface DrugCardDisplayProps {
  drugCards: DrugCard[];
  professorSpecialty?: string;
}

export const DrugCardDisplay: React.FC<DrugCardDisplayProps> = ({ drugCards, professorSpecialty }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCard, setSelectedCard] = useState<DrugCard | null>(null);

  // Filter drug cards based on search
  const filteredCards = drugCards.filter(card =>
    card.drugName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.drugClass.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.brandNames?.some(brand => brand.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Group cards by drug class
  const groupedCards = filteredCards.reduce((acc, card) => {
    const drugClass = card.drugClass;
    if (!acc[drugClass]) {
      acc[drugClass] = [];
    }
    acc[drugClass].push(card);
    return acc;
  }, {} as Record<string, DrugCard[]>);

  if (selectedCard) {
    // Detail view for selected drug
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <WorkshopButton onClick={() => setSelectedCard(null)} variant="secondary" className="mb-4">
          ← Back to All Drugs
        </WorkshopButton>

        <GiftCard hover={false}>
          <div className="space-y-6">
            {/* Header */}
            <div className="border-b border-gray-200 pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-pda-cranberry-600">{selectedCard.drugName}</h1>
                  {selectedCard.brandNames && selectedCard.brandNames.length > 0 && (
                    <p className="text-gray-600 mt-1">
                      <span className="font-semibold">Brand Names:</span> {selectedCard.brandNames.join(', ')}
                    </p>
                  )}
                </div>
                <div className="bg-pda-gold-100 px-3 py-1 rounded-lg">
                  <p className="text-sm font-semibold text-pda-gold-700">{selectedCard.drugClass}</p>
                </div>
              </div>
            </div>

            {/* Medicinal Chemistry Section (Weldon/Virga) */}
            {(selectedCard.chemicalClass || selectedCard.chemicalStructure || selectedCard.sar || selectedCard.metabolism || selectedCard.prodrug) && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-pda-green-600">⚗️ Medicinal Chemistry</h2>

                {selectedCard.chemicalClass && (
                  <div>
                    <h3 className="font-semibold text-gray-800">Chemical Class</h3>
                    <p className="text-gray-700 bg-blue-50 p-3 rounded">{selectedCard.chemicalClass}</p>
                  </div>
                )}

                {selectedCard.chemicalStructure && (
                  <div>
                    <h3 className="font-semibold text-gray-800">Chemical Structure</h3>
                    <p className="text-gray-700 bg-blue-50 p-3 rounded">{selectedCard.chemicalStructure}</p>
                  </div>
                )}

                {selectedCard.prodrug && (
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
                    <h3 className="font-semibold text-gray-800">⚠️ Prodrug</h3>
                    <p className="text-gray-700">{selectedCard.prodrug}</p>
                  </div>
                )}

                {selectedCard.sar && selectedCard.sar.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-800">Structure-Activity Relationships (SAR)</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 bg-blue-50 p-3 rounded">
                      {selectedCard.sar.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedCard.metabolism && (
                  <div>
                    <h3 className="font-semibold text-gray-800">Metabolism</h3>
                    <p className="text-gray-700 bg-blue-50 p-3 rounded">{selectedCard.metabolism}</p>
                  </div>
                )}

                {selectedCard.medChemFocus && selectedCard.medChemFocus.length > 0 && (
                  <div className="bg-green-50 border-l-4 border-green-500 p-3">
                    <h3 className="font-semibold text-gray-800">🎯 Med Chem Focus for Exam</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                      {selectedCard.medChemFocus.map((point, idx) => (
                        <li key={idx} className="font-medium">{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Pharmacology Section (Breeze) */}
            {(selectedCard.moa || selectedCard.indications || selectedCard.sideEffects || selectedCard.contraindications || selectedCard.drugInteractions || selectedCard.clinicalConsiderations) && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-pda-cranberry-600">💊 Pharmacology</h2>

                {selectedCard.moa && (
                  <div>
                    <h3 className="font-semibold text-gray-800">Mechanism of Action</h3>
                    <p className="text-gray-700 bg-purple-50 p-3 rounded">{selectedCard.moa}</p>
                  </div>
                )}

                {selectedCard.indications && selectedCard.indications.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-800">Indications</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 bg-purple-50 p-3 rounded">
                      {selectedCard.indications.map((indication, idx) => (
                        <li key={idx}>{indication}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedCard.sideEffects && selectedCard.sideEffects.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-800">Side Effects</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 bg-orange-50 p-3 rounded">
                      {selectedCard.sideEffects.map((effect, idx) => (
                        <li key={idx}>{effect}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedCard.contraindications && selectedCard.contraindications.length > 0 && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-3">
                    <h3 className="font-semibold text-gray-800">🚫 Contraindications</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                      {selectedCard.contraindications.map((ci, idx) => (
                        <li key={idx} className="font-medium">{ci}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedCard.drugInteractions && selectedCard.drugInteractions.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-800">Drug Interactions</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 bg-yellow-50 p-3 rounded">
                      {selectedCard.drugInteractions.map((interaction, idx) => (
                        <li key={idx}>{interaction}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedCard.clinicalConsiderations && selectedCard.clinicalConsiderations.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-800">Clinical Considerations</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 bg-purple-50 p-3 rounded">
                      {selectedCard.clinicalConsiderations.map((consideration, idx) => (
                        <li key={idx}>{consideration}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Pathophysiology Context (Burmeister) */}
            {selectedCard.pathophysiologyContext && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-pda-green-600">🔬 Pathophysiology Context</h2>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">{selectedCard.pathophysiologyContext}</p>
                </div>
              </div>
            )}

            {/* High Yield Points */}
            {selectedCard.highYield && selectedCard.highYield.length > 0 && (
              <div className="bg-gradient-to-r from-pda-gold-50 to-pda-cranberry-50 border-2 border-pda-gold-400 p-4 rounded-lg">
                <h3 className="font-bold text-xl text-pda-cranberry-600 mb-3">⭐ High Yield for Exam</h3>
                <ul className="space-y-2">
                  {selectedCard.highYield.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-pda-gold-600 mr-2 font-bold">•</span>
                      <span className="text-gray-800 font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selectedCard.slideReference && (
              <div className="text-sm text-gray-500 italic border-t pt-3">
                Reference: {selectedCard.slideReference}
              </div>
            )}
          </div>
        </GiftCard>
      </div>
    );
  }

  // List view of all drugs
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search drugs by name, brand, or class..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pda-gold-400 text-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          {filteredCards.length} drug{filteredCards.length !== 1 ? 's' : ''} found
        </p>
      </div>

      {/* Drug Cards by Class */}
      <div className="space-y-6">
        {Object.entries(groupedCards).map(([drugClass, cards]) => (
          <div key={drugClass}>
            <h2 className="text-2xl font-bold text-pda-cranberry-600 mb-4">{drugClass}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cards.map((card) => (
                <GiftCard key={card.id} onClick={() => setSelectedCard(card)} hover={true}>
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-gray-800">{card.drugName}</h3>
                      {professorSpecialty === 'Medicinal Chemistry' && card.chemicalClass && (
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                          {card.chemicalClass}
                        </span>
                      )}
                    </div>

                    {card.brandNames && card.brandNames.length > 0 && (
                      <p className="text-sm text-gray-600">
                        {card.brandNames.slice(0, 2).join(', ')}
                        {card.brandNames.length > 2 && '...'}
                      </p>
                    )}

                    {card.moa && (
                      <p className="text-sm text-gray-700 line-clamp-2">{card.moa}</p>
                    )}

                    {card.highYield && card.highYield.length > 0 && (
                      <div className="flex items-center gap-1 text-xs text-pda-gold-600 font-semibold">
                        <span>⭐</span>
                        <span>{card.highYield.length} high-yield points</span>
                      </div>
                    )}

                    <div className="pt-2 text-sm text-pda-cranberry-600 font-semibold">
                      Click to view full details →
                    </div>
                  </div>
                </GiftCard>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredCards.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No drugs found matching "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};
