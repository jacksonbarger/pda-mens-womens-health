// Progress Tracking System
// Tracks user progress across all professors: quizzes, flashcards, drug cards

export interface QuizProgress {
  totalAttempts: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  questionsAttempted: string[]; // question IDs
  sessionScores: SessionScore[];
  lastAttempt?: string; // ISO date string
}

export interface SessionScore {
  date: string; // ISO date string
  correct: number;
  total: number;
  percentage: number;
}

export interface FlashcardProgress {
  totalViewed: number;
  uniqueCardsViewed: string[]; // card IDs
  lastStudied?: string; // ISO date string
}

export interface DrugCardProgress {
  totalViewed: number;
  uniqueCardsViewed: string[]; // drug names
  lastStudied?: string; // ISO date string
}

export interface OverviewProgress {
  viewed: boolean;
  lastViewed?: string; // ISO date string
}

export interface ProfessorProgress {
  professorId: string;
  quiz: QuizProgress;
  flashcards: FlashcardProgress;
  drugCards: DrugCardProgress;
  overview: OverviewProgress;
}

export interface PreparednessScore {
  overall: number; // 0-100
  coverage: number; // 0-100 - how much content covered
  performance: number; // 0-100 - how well performing
  rank: 'Novice' | 'Learning' | 'Competent' | 'Proficient' | 'Expert';
  rankColor: string;
  rankEmoji: string;
  breakdown: {
    quizCoverage: number;
    quizPerformance: number;
    flashcardCoverage: number;
    drugCardCoverage: number;
  };
}

// Storage key
const STORAGE_KEY = 'pharmstudy_progress';

// Get all progress data
export function getAllProgress(): Record<string, ProfessorProgress> {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return {};
  try {
    return JSON.parse(stored);
  } catch (e) {
    console.error('Error parsing progress data:', e);
    return {};
  }
}

// Get progress for specific professor
export function getProfessorProgress(professorId: string): ProfessorProgress {
  const allProgress = getAllProgress();
  return allProgress[professorId] || createEmptyProgress(professorId);
}

// Create empty progress object
function createEmptyProgress(professorId: string): ProfessorProgress {
  return {
    professorId,
    quiz: {
      totalAttempts: 0,
      totalQuestions: 0,
      correctAnswers: 0,
      incorrectAnswers: 0,
      questionsAttempted: [],
      sessionScores: []
    },
    flashcards: {
      totalViewed: 0,
      uniqueCardsViewed: []
    },
    drugCards: {
      totalViewed: 0,
      uniqueCardsViewed: []
    },
    overview: {
      viewed: false
    }
  };
}

// Save progress for a professor
export function saveProfessorProgress(progress: ProfessorProgress): void {
  const allProgress = getAllProgress();
  allProgress[progress.professorId] = progress;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allProgress));
}

// Record quiz session
export function recordQuizSession(
  professorId: string,
  questionIds: string[],
  correctCount: number,
  totalCount: number
): void {
  const progress = getProfessorProgress(professorId);

  // Update quiz stats
  progress.quiz.totalAttempts += 1;
  progress.quiz.totalQuestions += totalCount;
  progress.quiz.correctAnswers += correctCount;
  progress.quiz.incorrectAnswers += (totalCount - correctCount);
  progress.quiz.lastAttempt = new Date().toISOString();

  // Add session score
  progress.quiz.sessionScores.push({
    date: new Date().toISOString(),
    correct: correctCount,
    total: totalCount,
    percentage: Math.round((correctCount / totalCount) * 100)
  });

  // Track unique questions attempted
  const uniqueQuestions = new Set([...progress.quiz.questionsAttempted, ...questionIds]);
  progress.quiz.questionsAttempted = Array.from(uniqueQuestions);

  saveProfessorProgress(progress);
}

// Record flashcard study
export function recordFlashcardStudy(professorId: string, cardId: string): void {
  const progress = getProfessorProgress(professorId);

  progress.flashcards.totalViewed += 1;
  progress.flashcards.lastStudied = new Date().toISOString();

  if (!progress.flashcards.uniqueCardsViewed.includes(cardId)) {
    progress.flashcards.uniqueCardsViewed.push(cardId);
  }

  saveProfessorProgress(progress);
}

// Record drug card view
export function recordDrugCardView(professorId: string, drugName: string): void {
  const progress = getProfessorProgress(professorId);

  progress.drugCards.totalViewed += 1;
  progress.drugCards.lastStudied = new Date().toISOString();

  if (!progress.drugCards.uniqueCardsViewed.includes(drugName)) {
    progress.drugCards.uniqueCardsViewed.push(drugName);
  }

  saveProfessorProgress(progress);
}

// Record overview view
export function recordOverviewView(professorId: string): void {
  const progress = getProfessorProgress(professorId);

  progress.overview.viewed = true;
  progress.overview.lastViewed = new Date().toISOString();

  saveProfessorProgress(progress);
}

// Calculate preparedness score
export function calculatePreparedness(
  professorId: string,
  totalQuizQuestions: number,
  totalFlashcards: number,
  totalDrugCards: number
): PreparednessScore {
  const progress = getProfessorProgress(professorId);

  // Calculate quiz coverage (% of unique questions attempted)
  const quizCoverage = totalQuizQuestions > 0
    ? (progress.quiz.questionsAttempted.length / totalQuizQuestions) * 100
    : 0;

  // Calculate quiz performance (% correct of all attempts)
  const quizPerformance = progress.quiz.totalQuestions > 0
    ? (progress.quiz.correctAnswers / progress.quiz.totalQuestions) * 100
    : 0;

  // Calculate flashcard coverage (% of unique cards viewed)
  const flashcardCoverage = totalFlashcards > 0
    ? (progress.flashcards.uniqueCardsViewed.length / totalFlashcards) * 100
    : 0;

  // Calculate drug card coverage (% of unique cards viewed)
  const drugCardCoverage = totalDrugCards > 0
    ? (progress.drugCards.uniqueCardsViewed.length / totalDrugCards) * 100
    : 0;

  // Overall coverage: weighted average
  // Quiz 40%, Flashcards 30%, Drug Cards 20%, Overview 10%
  const overviewScore = progress.overview.viewed ? 100 : 0;
  const coverage = (
    quizCoverage * 0.4 +
    flashcardCoverage * 0.3 +
    drugCardCoverage * 0.2 +
    overviewScore * 0.1
  );

  // Performance: based on quiz accuracy
  const performance = quizPerformance;

  // Overall: 60% coverage + 40% performance
  const overall = coverage * 0.6 + performance * 0.4;

  // Determine rank
  let rank: PreparednessScore['rank'];
  let rankColor: string;
  let rankEmoji: string;

  if (overall >= 91) {
    rank = 'Expert';
    rankColor = 'text-blue-600';
    rankEmoji = '🔵';
  } else if (overall >= 76) {
    rank = 'Proficient';
    rankColor = 'text-green-600';
    rankEmoji = '🟢';
  } else if (overall >= 51) {
    rank = 'Competent';
    rankColor = 'text-yellow-600';
    rankEmoji = '🟡';
  } else if (overall >= 26) {
    rank = 'Learning';
    rankColor = 'text-orange-600';
    rankEmoji = '🟠';
  } else {
    rank = 'Novice';
    rankColor = 'text-red-600';
    rankEmoji = '🔴';
  }

  return {
    overall: Math.round(overall),
    coverage: Math.round(coverage),
    performance: Math.round(performance),
    rank,
    rankColor,
    rankEmoji,
    breakdown: {
      quizCoverage: Math.round(quizCoverage),
      quizPerformance: Math.round(quizPerformance),
      flashcardCoverage: Math.round(flashcardCoverage),
      drugCardCoverage: Math.round(drugCardCoverage)
    }
  };
}

// Get recent session scores (last 10)
export function getRecentSessions(professorId: string, limit: number = 10): SessionScore[] {
  const progress = getProfessorProgress(professorId);
  return progress.quiz.sessionScores.slice(-limit).reverse();
}

// Reset progress for a professor
export function resetProfessorProgress(professorId: string): void {
  const progress = createEmptyProgress(professorId);
  saveProfessorProgress(progress);
}

// Reset all progress
export function resetAllProgress(): void {
  localStorage.removeItem(STORAGE_KEY);
}
