# Santa's Workshop UI/UX Refactor - Implementation Plan

## ✅ COMPLETED

### 1. Type Definitions (`src/types/index.ts`)
- ✅ Added `SectionOverview` type with summary, objectives, key points, and clinical pearls
- ✅ Updated `Section` type to include `id`, `category`, and `overview`
- ✅ Added `Drug`, `DrugCategory`, and `DrugsModule` types
- ✅ Updated `NavigationState` to support new screens: concepts, section, drugs, drugCategory, drugDetail
- ✅ Added `currentTab` state for section detail tabs

### 2. Data Files Created

**`src/data/drugsData.ts`** ✅
- Complete drugs module with 4 categories:
  1. PCOS Treatments (COCs, Metformin, Spironolactone, Clomiphene)
  2. Endometriosis & Dysmenorrhea Management (NSAIDs, COCs, Leuprolide)
  3. Contraceptives (COCs, POPs, LNG-IUD, Copper IUD, Emergency contraception)
  4. Menopause & Hormone Therapy (Estrogen/Progestin HT, Raloxifene)
- Each drug includes: mechanism, indications, contraindications, adverse effects, monitoring, pregnancy/breastfeeding notes, and high-yield facts

**`src/data/sectionOverviews.ts`** ✅
- Overview data for 5 sections (BBD, Galactorrhea, Mastitis, Dysmenorrhea, Amenorrhea)
- Includes category mapping (Breast & Lactation, Menstrual & Uterine Disorders)
- Helper function `getCategories()` to extract unique categories

### 3. Existing Files Enhanced
- All shared components already refactored with semantic tokens and accessibility improvements from previous session
- Components ready to be integrated into new navigation structure

---

## 🚧 REMAINING IMPLEMENTATION

### Phase 1: Complete Section Overviews Data
**File: `src/data/sectionOverviews.ts`**

Add overview data for remaining sections:
- Dysfunctional Uterine Bleeding (DUB)
- Premenstrual Syndrome (PMS)
- Polycystic Ovary Syndrome (PCOS)
- Endometriosis
- Female Infertility
- Pregnancy Physiology & Complications
- Postpartum Physiology & Complications
- Menopause
- Contraception
- Drug Distribution in Pregnancy
- Integrated Reproductive Overview

**Pattern to follow:**
```typescript
"Section Name": {
  id: "section_id",
  category: "Category Name",
  overview: {
    summary: "...",
    objectives: ["...", "..."],
    key_points: ["...", "..."],
    high_yield_clinical_pearls: ["...", "..."]
  }
}
```

### Phase 2: Create Enhanced StudyData Helper
**File: `src/data/studyDataEnhanced.ts`**

```typescript
import { studyData as originalStudyData } from './studyData';
import { sectionOverviewsMap } from './sectionOverviews';
import type { StudyData, Section } from '../types';

/**
 * Merges existing game_modes data with new overview/category data
 */
export const studyData: StudyData = {
  sections: originalStudyData.sections.map((section): Section => {
    const enhancementData = sectionOverviewsMap[section.section];

    if (!enhancementData) {
      console.warn(`No overview data found for section: ${section.section}`);
      // Provide default data
      return {
        id: section.section.toLowerCase().replace(/\s+/g, '_'),
        section: section.section,
        category: "Uncategorized",
        overview: {
          summary: "Overview coming soon.",
          objectives: [],
          key_points: [],
        },
        game_modes: section.game_modes
      };
    }

    return {
      ...enhancementData,
      section: section.section,
      game_modes: section.game_modes
    };
  })
};

/**
 * Get sections grouped by category
 */
export const getSectionsByCategory = (): Record<string, Section[]> => {
  const grouped: Record<string, Section[]> = {};

  studyData.sections.forEach(section => {
    if (!grouped[section.category]) {
      grouped[section.category] = [];
    }
    grouped[section.category].push(section);
  });

  return grouped;
};
```

### Phase 3: Create New Page Components

#### **`src/pages/NewHome.tsx`** - Main landing page
```typescript
import React from 'react';
import { WorkshopButton } from '../components/shared/WorkshopButton';
import { GiftCard } from '../components/shared/GiftCard';

interface NewHomeProps {
  onNavigateToConcepts: () => void;
  onNavigateToDrugs: () => void;
  onNavigateToChallenge: () => void;
}

export const NewHome: React.FC<NewHomeProps> = ({
  onNavigateToConcepts,
  onNavigateToDrugs,
  onNavigateToChallenge
}) => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">
          🎄 Welcome to Santa's PDA Workshop! 🎄
        </h1>
        <p className="text-base text-secondary max-w-2xl mx-auto">
          Choose your study path to master reproductive pharmacology
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Study Concepts */}
        <GiftCard
          onClick={onNavigateToConcepts}
          ariaLabel="Study Concepts - Learn core pathophysiology and clinical presentations"
        >
          <div className="text-center">
            <div className="text-6xl mb-4" aria-hidden="true">🎓</div>
            <h2 className="text-lg font-bold text-primary mb-3">
              Study Concepts
            </h2>
            <p className="text-base text-secondary">
              Master pathophysiology, clinical presentations, and key mechanisms
            </p>
          </div>
        </GiftCard>

        {/* Drugs Workshop */}
        <GiftCard
          onClick={onNavigateToDrugs}
          ariaLabel="Drugs Workshop - Learn pharmacology and therapeutics"
        >
          <div className="text-center">
            <div className="text-6xl mb-4" aria-hidden="true">💊</div>
            <h2 className="text-lg font-bold text-primary mb-3">
              Drugs Workshop
            </h2>
            <p className="text-base text-secondary">
              Learn mechanisms, indications, contraindications, and high-yield drug facts
            </p>
          </div>
        </GiftCard>

        {/* Elf Exam Challenge */}
        <GiftCard
          onClick={onNavigateToChallenge}
          ariaLabel="Elf Exam Challenge - Mixed questions from all topics"
        >
          <div className="text-center">
            <div className="text-6xl mb-4" aria-hidden="true">🎮</div>
            <h2 className="text-lg font-bold text-primary mb-3">
              Elf Exam Challenge
            </h2>
            <p className="text-base text-secondary">
              Test yourself with mixed questions from all topics
            </p>
          </div>
        </GiftCard>
      </div>
    </div>
  );
};
```

#### **`src/pages/Concepts.tsx`** - Categorized section list
```typescript
import React from 'react';
import { Breadcrumb } from '../components/shared/Breadcrumb';
import { GiftCard } from '../components/shared/GiftCard';
import { getSectionsByCategory } from '../data/studyDataEnhanced';
import type { Section } from '../types';

interface ConceptsProps {
  onSelectSection: (section: Section) => void;
  onBack: () => void;
}

export const Concepts: React.FC<ConceptsProps> = ({ onSelectSection, onBack }) => {
  const sectionsByCategory = getSectionsByCategory();
  const categories = Object.keys(sectionsByCategory);

  const breadcrumbItems = [
    { label: 'Home', onClick: onBack },
    { label: 'Concepts' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="text-center mb-12 mt-6">
        <h1 className="text-3xl font-bold text-primary mb-4">
          Study Concepts
        </h1>
        <p className="text-base text-secondary max-w-2xl mx-auto">
          Choose a topic area to review pathophysiology, clinical presentations, and practice with games
        </p>
      </div>

      {categories.map(category => (
        <div key={category} className="mb-12">
          <h2 className="text-xl font-bold text-primary mb-6 border-b-2 border-workshop-gold-300 pb-2">
            {category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectionsByCategory[category].map(section => (
              <GiftCard
                key={section.id}
                onClick={() => onSelectSection(section)}
                ariaLabel={`${section.section} - ${section.overview.summary.substring(0, 100)}...`}
              >
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {section.section}
                  </h3>
                  <p className="text-base text-secondary line-clamp-3">
                    {section.overview.summary}
                  </p>
                </div>
              </GiftCard>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
```

#### **`src/pages/SectionDetailWithTabs.tsx`** - Section detail with Overview + Game tabs
```typescript
import React, { useState } from 'react';
import { Breadcrumb } from '../components/shared/Breadcrumb';
import { WorkshopButton } from '../components/shared/WorkshopButton';
import type { Section, GameModeType } from '../types';

// Game components
import { FlashcardsGame } from '../components/games/FlashcardsGame';
import { MatchingGame } from '../components/games/MatchingGame';
// ... import other game components

interface SectionDetailWithTabsProps {
  section: Section;
  onBack: () => void;
  onCompleteGame: (gameMode: GameModeType, correct: number, total: number) => void;
}

type TabType = 'overview' | GameModeType;

export const SectionDetailWithTabs: React.FC<SectionDetailWithTabsProps> = ({
  section,
  onBack,
  onCompleteGame
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const breadcrumbItems = [
    { label: 'Home', onClick: onBack }, // Adjust to go to actual home
    { label: 'Concepts', onClick: onBack },
    { label: section.section }
  ];

  const availableGameModes = Object.keys(section.game_modes) as GameModeType[];

  const renderTabContent = () => {
    if (activeTab === 'overview') {
      return (
        <div className="max-w-4xl mx-auto">
          <div className="card-workshop p-8">
            {/* Summary */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-primary mb-3">Summary</h3>
              <p className="text-base text-secondary leading-relaxed">
                {section.overview.summary}
              </p>
            </div>

            {/* Objectives */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-primary mb-3">Learning Objectives</h3>
              <ul className="list-disc list-inside space-y-2">
                {section.overview.objectives.map((obj, idx) => (
                  <li key={idx} className="text-base text-secondary">{obj}</li>
                ))}
              </ul>
            </div>

            {/* Key Points */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-primary mb-3">Key Points</h3>
              <ul className="list-disc list-inside space-y-2">
                {section.overview.key_points.map((point, idx) => (
                  <li key={idx} className="text-base text-secondary">{point}</li>
                ))}
              </ul>
            </div>

            {/* Clinical Pearls */}
            {section.overview.high_yield_clinical_pearls && (
              <div className="bg-workshop-gold-50 border-l-4 border-workshop-gold-500 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                  <span>💡</span> High-Yield Clinical Pearls
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  {section.overview.high_yield_clinical_pearls.map((pearl, idx) => (
                    <li key={idx} className="text-base text-primary font-semibold">{pearl}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      );
    }

    // Render game mode (reuse existing game components)
    const gameData = section.game_modes[activeTab as GameModeType];

    switch (activeTab) {
      case 'flashcards':
        if (gameData && gameData.game_mode === 'flashcards') {
          return (
            <FlashcardsGame
              cards={gameData.cards}
              sectionName={section.section}
              onComplete={(correct, total) => onCompleteGame('flashcards', correct, total)}
              onExit={onBack}
            />
          );
        }
        break;
      // ... handle other game modes similarly
    }

    return null;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mb-8 mt-6">
        <h1 className="text-3xl font-bold text-primary text-center mb-6">
          {section.section}
        </h1>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'overview'
                ? 'bg-workshop-red-600 text-white shadow-md'
                : 'bg-white text-secondary border-2 border-gray-300 hover:border-workshop-gold-400'
            }`}
          >
            📖 Overview
          </button>

          {availableGameModes.map(mode => (
            <button
              key={mode}
              onClick={() => setActiveTab(mode)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === mode
                  ? 'bg-workshop-red-600 text-white shadow-md'
                  : 'bg-white text-secondary border-2 border-gray-300 hover:border-workshop-gold-400'
              }`}
            >
              {mode === 'flashcards' && '📝'}
              {mode === 'matching' && '🎁'}
              {mode === 'timed_quiz' && '⏰'}
              {mode === 'clinical_cases' && '🔬'}
              {mode === 'ordering' && '🎀'}
              {' '}
              {mode.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};
```

### Phase 4: Create Drugs Workshop Components

Create three components:
1. **`src/pages/DrugsWorkshop.tsx`** - Drug category list
2. **`src/components/drugs/DrugCategoryView.tsx`** - Drug list for a category
3. **`src/components/drugs/DrugDetail.tsx`** - Individual drug detail view

### Phase 5: Update App.tsx Routing

Update `App.tsx` to:
- Use `NewHome` instead of old `Home`
- Add state for current screen, section, drug category, drug, tab
- Wire up navigation functions
- Route to appropriate component based on current screen

---

## 📋 QUICK START GUIDE

1. **Complete section overviews** in `src/data/sectionOverviews.ts`
2. **Create `studyDataEnhanced.ts`** following the pattern above
3. **Create page components** (NewHome, Concepts, SectionDetailWithTabs, DrugsWorkshop)
4. **Update App.tsx** to use new navigation structure
5. **Test navigation flow** and ensure all game modes still work

---

## 🎨 UI/UX PRINCIPLES TO MAINTAIN

- **Clarity over flair**: Keep decorations subtle, text readable
- **Calm navigation**: No overwhelming lists, clear breadcrumbs
- **Default to learning**: Overview tab is default, not games
- **Semantic tokens**: Use `text-primary`, `text-secondary`, `card-workshop` classes
- **Accessibility**: Focus states, ARIA labels, keyboard navigation

---

## 📝 NOTES

- All existing game components work as-is, just need to be wired into new tabs
- Progress tracking context should continue to work without changes
- The new structure separates concerns: concepts vs drugs vs mixed challenge
- User can expand drugs module with drug-specific games later
