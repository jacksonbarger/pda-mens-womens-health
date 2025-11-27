import React, { useState } from 'react';
import { Breadcrumb } from '../components/shared/Breadcrumb';
import { GiftCard } from '../components/shared/GiftCard';
import { WorkshopButton } from '../components/shared/WorkshopButton';
import { ModeInstructionBanner } from '../components/shared/ModeInstructionBanner';
import { drugsModule } from '../data/drugsData';
import type { Drug, DrugCategory } from '../types';

interface DrugsWorkshopProps {
  onBack: () => void;
}

/**
 * Drugs Workshop - Browse drugs by category.
 *
 * Simple 2-level navigation: Categories → Individual drugs
 * Focus on browsable drug reference, not games (for now).
 */
export const DrugsWorkshop: React.FC<DrugsWorkshopProps> = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState<DrugCategory | null>(null);
  const [selectedDrug, setSelectedDrug] = useState<Drug | null>(null);

  const breadcrumbItems = selectedDrug
    ? [
        { label: 'Home', onClick: () => { setSelectedDrug(null); setSelectedCategory(null); onBack(); } },
        { label: 'Drugs', onClick: () => { setSelectedDrug(null); setSelectedCategory(null); } },
        { label: selectedCategory?.name || '', onClick: () => setSelectedDrug(null) },
        { label: selectedDrug.generic_name }
      ]
    : selectedCategory
    ? [
        { label: 'Home', onClick: () => { setSelectedCategory(null); onBack(); } },
        { label: 'Drugs', onClick: () => setSelectedCategory(null) },
        { label: selectedCategory.name }
      ]
    : [
        { label: 'Home', onClick: onBack },
        { label: 'Drugs Workshop' }
      ];

  // DRUG DETAIL VIEW
  if (selectedDrug) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumb items={breadcrumbItems} />

        <div className="mt-6">
          <WorkshopButton onClick={() => setSelectedDrug(null)} variant="secondary" className="mb-6">
            ← Back to {selectedCategory?.name}
          </WorkshopButton>

          <div className="card-workshop p-8">
            {/* Drug Name */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-primary mb-2">{selectedDrug.generic_name}</h1>
              {selectedDrug.brand_names && selectedDrug.brand_names.length > 0 && (
                <p className="text-base text-secondary">
                  <strong>Brand names:</strong> {selectedDrug.brand_names.join(', ')}
                </p>
              )}
              <p className="text-base text-pda-gold-600 font-semibold mt-1">{selectedDrug.class}</p>
            </div>

            {/* Mechanism */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-primary mb-2">Mechanism of Action</h3>
              <p className="text-base text-secondary">{selectedDrug.mechanism}</p>
            </div>

            {/* Indications */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-primary mb-2">Key Indications</h3>
              <ul className="list-disc list-inside space-y-1">
                {selectedDrug.key_indications.map((ind, idx) => (
                  <li key={idx} className="text-base text-secondary">{ind}</li>
                ))}
              </ul>
            </div>

            {/* Contraindications */}
            {selectedDrug.contraindications && selectedDrug.contraindications.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-bold text-primary mb-2">Contraindications</h3>
                <ul className="list-disc list-inside space-y-1">
                  {selectedDrug.contraindications.map((con, idx) => (
                    <li key={idx} className="text-base text-secondary">{con}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Adverse Effects */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-primary mb-2">Adverse Effects</h3>
              <ul className="list-disc list-inside space-y-1">
                {selectedDrug.adverse_effects.map((ae, idx) => (
                  <li key={idx} className="text-base text-secondary">{ae}</li>
                ))}
              </ul>
            </div>

            {/* Monitoring */}
            {selectedDrug.monitoring && selectedDrug.monitoring.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-bold text-primary mb-2">Monitoring Parameters</h3>
                <ul className="list-disc list-inside space-y-1">
                  {selectedDrug.monitoring.map((mon, idx) => (
                    <li key={idx} className="text-base text-secondary">{mon}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Pregnancy/Breastfeeding */}
            {selectedDrug.pregnancy_breastfeeding && (
              <div className="mb-6">
                <h3 className="text-lg font-bold text-primary mb-2">Pregnancy & Breastfeeding</h3>
                <p className="text-base text-secondary">{selectedDrug.pregnancy_breastfeeding}</p>
              </div>
            )}

            {/* High-Yield Facts */}
            {selectedDrug.high_yield_facts && selectedDrug.high_yield_facts.length > 0 && (
              <div className="bg-pda-gold-50 border-l-4 border-pda-gold-500 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                  <span aria-hidden="true">💡</span> High-Yield Facts
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  {selectedDrug.high_yield_facts.map((fact, idx) => (
                    <li key={idx} className="text-base text-primary font-semibold">{fact}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // CATEGORY DRUG LIST VIEW
  if (selectedCategory) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="mt-6">
          <WorkshopButton onClick={() => setSelectedCategory(null)} variant="secondary" className="mb-6">
            ← Back to All Categories
          </WorkshopButton>

          <h1 className="text-3xl font-bold text-primary mb-2 text-center">{selectedCategory.name}</h1>
          {selectedCategory.description && (
            <p className="text-base text-secondary text-center mb-8 max-w-2xl mx-auto">
              {selectedCategory.description}
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedCategory.drugs.map(drug => (
              <GiftCard
                key={drug.id}
                onClick={() => setSelectedDrug(drug)}
                ariaLabel={`${drug.generic_name} - ${drug.class}`}
              >
                <div>
                  <h3 className="text-lg font-bold text-primary mb-1">{drug.generic_name}</h3>
                  <p className="text-sm text-pda-gold-600 font-semibold mb-3">{drug.class}</p>
                  <p className="text-base text-secondary line-clamp-3">{drug.mechanism}</p>
                </div>
              </GiftCard>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // CATEGORY LIST VIEW (default)
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      {/* Mode instruction banner */}
      <div className="mt-6 max-w-4xl mx-auto">
        <ModeInstructionBanner modeKey="drugsOverview" />
      </div>

      <div className="text-center mb-12 mt-6">
        <h1 className="text-3xl font-bold text-primary mb-4">
          💊 Drugs Workshop
        </h1>
        <p className="text-base text-secondary max-w-2xl mx-auto">
          Browse high-yield reproductive pharmacology organized by therapeutic category. Click a category to explore individual drugs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {drugsModule.categories.map(category => (
          <GiftCard
            key={category.id}
            onClick={() => setSelectedCategory(category)}
            ariaLabel={`${category.name} - ${category.drugs.length} drugs`}
          >
            <div>
              <h2 className="text-lg font-bold text-primary mb-2">{category.name}</h2>
              {category.description && (
                <p className="text-base text-secondary mb-3 line-clamp-2">{category.description}</p>
              )}
              <div className="flex items-center justify-between">
                <span className="text-base text-pda-gold-600 font-semibold">
                  {category.drugs.length} {category.drugs.length === 1 ? 'Drug' : 'Drugs'}
                </span>
                <span className="text-pda-cranberry-600 font-bold" aria-hidden="true">→</span>
              </div>
            </div>
          </GiftCard>
        ))}
      </div>
    </div>
  );
};
