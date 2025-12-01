/**
 * SANTA'S PDA WORKSHOP - MAIN APP COMPONENT
 *
 * Welcome to the main application file! 🎅
 *
 * HOW TO USE THIS APP:
 * -------------------
 * This app is built to be easily customizable. Here's how to make changes:
 *
 * 1. REPLACE THE DATA:
 *    - Open src/data/studyData.ts
 *    - Replace the exported studyData object with your own JSON
 *    - Make sure it matches the StudyData type structure
 *    - The app will automatically pick up all changes
 *
 * 2. ADD NEW SECTIONS:
 *    - Add a new object to the sections array in studyData.ts
 *    - Each section needs a "section" name and "game_modes" object
 *    - Include any combination of the 5 game modes (all optional)
 *
 * 3. ADD NEW GAME MODES:
 *    - Define the new game mode type in src/types/index.ts
 *    - Create a new game component in src/components/games/
 *    - Add the mode to the GameModes type
 *    - Update the switch statement in the renderGameMode function below
 *    - Add mode info to gameModeInfo in SectionDetail.tsx
 *
 * 4. CUSTOMIZE THEMING:
 *    - Colors: Edit tailwind.config.js (workshop color palette)
 *    - Styles: Edit src/index.css for global styles
 *    - Icons: Update emoji icons in component files
 *
 * 5. DEPLOYMENT (Vercel):
 *    - Push code to GitHub
 *    - Connect repository to Vercel
 *    - Vercel auto-detects Vite and configures build
 *    - Build command: npm run build
 *    - Output directory: dist
 *
 * ARCHITECTURE:
 * ------------
 * - React with TypeScript for type safety
 * - Tailwind CSS for styling (Christmas theme)
 * - Context API for progress tracking (stored in localStorage)
 * - Simple state-based navigation (no router library needed)
 * - All data driven from studyData.ts
 */

import { useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import { Header } from './components/shared/Header';
import { NewHome } from './pages/NewHome';
import { Concepts } from './pages/Concepts';
import { SectionDetailWithTabs } from './pages/SectionDetailWithTabs';
import { DrugsWorkshop } from './pages/DrugsWorkshop';
import { ExamChallenge } from './pages/ExamChallenge';
import { HighYieldTopics } from './pages/HighYieldTopics';
import { ExamPrepByProfessor } from './pages/ExamPrepByProfessor';
import { ProfessorDetail } from './pages/ProfessorDetail';
import { AllDrugCards } from './pages/AllDrugCards';
import { FinalExamChallenge } from './pages/FinalExamChallenge';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ProgressProvider, useProgress } from './context/ProgressContext';
import { AuthForm } from './components/auth/AuthForm';
import { EmailVerificationBanner } from './components/auth/EmailVerificationBanner';
import type { Section, GameModeType } from './types';

// Navigation screen types
type Screen = 'home' | 'concepts' | 'section' | 'drugs' | 'challenge' | 'highYield' | 'examPrep' | 'professorDetail' | 'allDrugCards' | 'finalExam';

function AppContent() {
  const { currentUser } = useAuth();
  const { updateProgress } = useProgress();

  // ALL hooks must be declared before any conditional returns
  const [isGuestMode, setIsGuestMode] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [currentSection, setCurrentSection] = useState<Section | null>(null);
  const [currentProfessorId, setCurrentProfessorId] = useState<string | null>(null);

  // Show authentication form if user is not logged in and not in guest mode
  if (!currentUser && !isGuestMode) {
    return <AuthForm onGuestMode={() => setIsGuestMode(true)} />;
  }

  // Navigation handlers
  const handleNavigateToHome = () => {
    setCurrentScreen('home');
    setCurrentSection(null);
  };

  const handleNavigateToConcepts = () => {
    setCurrentScreen('concepts');
  };

  const handleNavigateToDrugs = () => {
    setCurrentScreen('drugs');
  };

  const handleNavigateToChallenge = () => {
    setCurrentScreen('challenge');
  };

  const handleNavigateToHighYield = () => {
    setCurrentScreen('highYield');
  };

  const handleNavigateToExamPrep = () => {
    setCurrentScreen('examPrep');
  };

  const handleSelectProfessor = (professorId: string) => {
    setCurrentProfessorId(professorId);
    setCurrentScreen('professorDetail');
  };

  const handleNavigateToAllDrugCards = () => {
    setCurrentScreen('allDrugCards');
  };

  const handleNavigateToFinalExam = () => {
    setCurrentScreen('finalExam');
  };

  const handleSelectSection = (section: Section) => {
    setCurrentSection(section);
    setCurrentScreen('section');
  };

  const handleCompleteGame = (gameMode: GameModeType, correct: number, total: number) => {
    if (!currentSection) return;

    // Update progress in ProgressContext (syncs to Firestore automatically)
    updateProgress(currentSection.section, gameMode, {
      questionsAttempted: total,
      questionsCorrect: correct,
      lastScore: Math.round((correct / total) * 100),
    });
  };

  // Render appropriate screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <NewHome
            onNavigateToConcepts={handleNavigateToConcepts}
            onNavigateToDrugs={handleNavigateToDrugs}
            onNavigateToChallenge={handleNavigateToChallenge}
            onNavigateToHighYield={handleNavigateToHighYield}
            onNavigateToExamPrep={handleNavigateToExamPrep}
          />
        );

      case 'concepts':
        return (
          <Concepts
            onSelectSection={handleSelectSection}
            onBack={handleNavigateToHome}
          />
        );

      case 'section':
        if (!currentSection) {
          setCurrentScreen('home');
          return null;
        }
        return (
          <SectionDetailWithTabs
            section={currentSection}
            onBackToConcepts={handleNavigateToConcepts}
            onBackToHome={handleNavigateToHome}
            onCompleteGame={handleCompleteGame}
          />
        );

      case 'drugs':
        return (
          <DrugsWorkshop
            onBack={handleNavigateToHome}
          />
        );

      case 'challenge':
        return (
          <ExamChallenge
            onBack={handleNavigateToHome}
          />
        );

      case 'highYield':
        return (
          <HighYieldTopics
            onBack={handleNavigateToHome}
          />
        );

      case 'examPrep':
        return (
          <ExamPrepByProfessor
            onSelectProfessor={handleSelectProfessor}
            onViewAllDrugCards={handleNavigateToAllDrugCards}
            onViewFinalExam={handleNavigateToFinalExam}
            onBack={handleNavigateToHome}
          />
        );

      case 'professorDetail':
        if (!currentProfessorId) {
          setCurrentScreen('examPrep');
          return null;
        }
        return (
          <ProfessorDetail
            professorId={currentProfessorId}
            onBackToExamPrep={handleNavigateToExamPrep}
            onBackToHome={handleNavigateToHome}
          />
        );

      case 'allDrugCards':
        return (
          <AllDrugCards
            onBack={handleNavigateToExamPrep}
            onBackToHome={handleNavigateToHome}
          />
        );

      case 'finalExam':
        return (
          <FinalExamChallenge
            onBack={handleNavigateToExamPrep}
            onBackToHome={handleNavigateToHome}
          />
        );

      default:
        return (
          <NewHome
            onNavigateToConcepts={handleNavigateToConcepts}
            onNavigateToDrugs={handleNavigateToDrugs}
            onNavigateToChallenge={handleNavigateToChallenge}
            onNavigateToHighYield={handleNavigateToHighYield}
            onNavigateToExamPrep={handleNavigateToExamPrep}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header isGuestMode={isGuestMode} />
      <EmailVerificationBanner />
      <main className="flex-grow pb-16">
        {renderScreen()}
      </main>

      {/* Footer - No longer fixed, flows naturally at bottom */}
      <footer className="bg-pda-forest-600 text-white py-3 text-center text-base shadow-md mt-auto">
        <div className="flex items-center justify-center gap-2">
          <span>Made for Pharmacy Students | PDA Winter Study Workshop</span>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <ProgressProvider>
        <AppContent />
        <SpeedInsights />
        <Analytics />
      </ProgressProvider>
    </AuthProvider>
  );
}

export default App;
