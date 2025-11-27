// Type definitions for Santa's PDA Workshop

export type Flashcard = {
  id: number;
  question: string;
  answer: string;
};

export type MatchingPair = {
  left: string;
  right: string;
};

export type TimedQuizQuestion = {
  id: number;
  question: string;
  options: string[];
  correct_answer: string;
};

export type ClinicalCase = {
  id: number;
  scenario: string;
  options: string[];
  correct_answer: string;
};

export type OrderingGame = {
  game_mode: "ordering";
  prompt: string;
  steps_correct_order: string[];
};

export type GameModes = {
  flashcards?: {
    game_mode: "flashcards";
    cards: Flashcard[];
  };
  matching?: {
    game_mode: "matching";
    pairs: MatchingPair[];
  };
  timed_quiz?: {
    game_mode: "timed_quiz";
    time_limit_seconds: number;
    questions: TimedQuizQuestion[];
  };
  clinical_cases?: {
    game_mode: "clinical_cases";
    cases: ClinicalCase[];
  };
  ordering?: OrderingGame;
};

// Section overview data
export type SectionOverview = {
  summary: string;
  objectives: string[];
  key_points: string[];
  high_yield_clinical_pearls?: string[];
};

export type Section = {
  id: string;
  section: string;
  category: string;
  overview: SectionOverview;
  game_modes: GameModes;
};

export type StudyData = {
  sections: Section[];
};

// Drug types
export type Drug = {
  id: string;
  generic_name: string;
  brand_names?: string[];
  class: string;
  mechanism: string;
  key_indications: string[];
  contraindications?: string[];
  adverse_effects: string[];
  monitoring?: string[];
  pregnancy_breastfeeding?: string;
  high_yield_facts?: string[];
};

export type DrugCategory = {
  id: string;
  name: string;
  description?: string;
  drugs: Drug[];
};

export type DrugsModule = {
  categories: DrugCategory[];
};

// Progress tracking types
export type GameProgress = {
  questionsAttempted: number;
  questionsCorrect: number;
  lastScore: number;
};

export type SectionProgress = {
  [gameMode: string]: GameProgress;
};

export type ProgressData = {
  [sectionName: string]: SectionProgress;
};

// Exam history types
export type ExamResult = {
  id: string;
  date: number; // timestamp
  score: number; // percentage
  correct: number;
  total: number;
  questionsAnswered: number;
};

export type ExamHistory = {
  attempts: ExamResult[];
};

// Game mode type union
export type GameModeType = keyof GameModes;

// Navigation state
export type NavigationState = {
  currentScreen: 'home' | 'concepts' | 'section' | 'drugs' | 'drugCategory' | 'drugDetail';
  currentSection?: Section;
  currentGameMode?: GameModeType;
  currentDrugCategory?: DrugCategory;
  currentDrug?: Drug;
  currentTab?: 'overview' | GameModeType;
};
