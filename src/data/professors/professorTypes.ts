// Type definitions for professor-specific exam prep content

export interface FlashCard {
  id: string;
  question: string;
  answer: string;
  learningObjective?: string;
  emphasis?: 'high' | 'medium' | 'low'; // based on slide emphasis (bold, highlighted, etc.)
  slideReference?: string; // which slide deck this came from
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct_answer: string;
  explanation: string;
  learningObjective?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  slideReference?: string;
}

export interface ProfessorOverview {
  summary: string;
  topics: string[];
  learningObjectives: string[];
  highYieldConcepts: string[]; // emphasized/starred/highlighted content
  clinicalPearls?: string[];
  relatedSections: string[]; // IDs of existing sections from studyData
}

export interface ProfessorContent {
  id: string;
  name: string;
  fullName: string; // e.g., "Dr. Burmeister"
  slideFiles: string[];
  overview: ProfessorOverview;
  flashcards: FlashCard[];
  quiz: QuizQuestion[];
  drugCards?: DrugCard[]; // Comprehensive drug information organized by drug/class
  flowchartFile?: string; // Path to interactive draw.io flowchart file
  icon?: string; // emoji or icon identifier
  specialty?: string; // e.g., "Pathophysiology", "Pharmacology", "Medicinal Chemistry"
}

export interface DrugCard {
  id: string;
  drugName: string; // Generic name
  brandNames?: string[]; // Common brand names
  drugClass: string; // e.g., "PDE5 Inhibitor", "Bisphosphonate"

  // Medicinal Chemistry (Weldon/Virga focus)
  chemicalClass?: string; // e.g., "Quinazoline", "Pyrazolopyrimidinone"
  chemicalStructure?: string; // Text description of key structural features
  sar?: string[]; // Structure-Activity Relationships - key points
  metabolism?: string; // How the drug is metabolized
  prodrug?: string; // If it's a prodrug or has active metabolites

  // Pharmacology (Breeze focus)
  moa?: string; // Mechanism of action
  indications?: string[]; // What it's used for
  sideEffects?: string[]; // Key adverse effects
  contraindications?: string[]; // Absolute contraindications
  drugInteractions?: string[]; // Important drug interactions
  clinicalConsiderations?: string[]; // Dosing, timing, special populations

  // Pathophysiology context (Burmeister focus)
  pathophysiologyContext?: string; // How it relates to disease mechanism

  // What to memorize for exam
  highYield: string[]; // Most important points to remember
  medChemFocus?: string[]; // Specific med chem points to know

  slideReference?: string;
}

export interface ProfessorProgress {
  flashcardsReviewed: number;
  flashcardsKnew: number;
  flashcardsNeedReview: number;
  quizAttempted: boolean;
  quizScore?: number;
  quizCorrect?: number;
  quizTotal?: number;
  lastStudied?: string; // ISO date string
  completed: boolean;
}
