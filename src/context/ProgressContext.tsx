import React, { createContext, useContext, useState, useEffect } from 'react';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuth } from './AuthContext';
import type { ProgressData, GameProgress, ExamResult, ExamHistory } from '../types';

interface ProgressContextType {
  progress: ProgressData;
  updateProgress: (section: string, gameMode: string, update: GameProgress) => void;
  getElfRank: () => string;
  getCandyCanes: (section: string, gameMode: string) => number;
  getTotalCandyCanes: () => number;
  syncInProgress: boolean;
  // Exam history
  examHistory: ExamHistory;
  addExamResult: (result: Omit<ExamResult, 'id' | 'date'>) => void;
  getExamHistory: () => ExamResult[];
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within ProgressProvider');
  }
  return context;
};

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth();
  const [progress, setProgress] = useState<ProgressData>(() => {
    // Load from localStorage on init (fallback for offline mode)
    const saved = localStorage.getItem('santa-pda-progress');
    return saved ? JSON.parse(saved) : {};
  });
  const [examHistory, setExamHistory] = useState<ExamHistory>(() => {
    // Load from localStorage on init
    const saved = localStorage.getItem('pda-exam-history');
    return saved ? JSON.parse(saved) : { attempts: [] };
  });
  const [syncInProgress, setSyncInProgress] = useState(false);

  // Load progress from Firestore when user logs in
  useEffect(() => {
    const loadProgressFromFirestore = async () => {
      if (!currentUser) {
        // If user logs out, clear progress
        setProgress({});
        localStorage.removeItem('santa-pda-progress');
        return;
      }

      setSyncInProgress(true);
      try {
        const docRef = doc(db, 'users', currentUser.uid, 'progress', 'data');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const firestoreProgress = docSnap.data() as ProgressData;
          setProgress(firestoreProgress);
          // Also save to localStorage as backup
          localStorage.setItem('santa-pda-progress', JSON.stringify(firestoreProgress));
        } else {
          // No progress in Firestore yet, check if there's local progress to migrate
          const localProgress = localStorage.getItem('santa-pda-progress');
          if (localProgress) {
            const parsedProgress = JSON.parse(localProgress);
            setProgress(parsedProgress);
            // Upload local progress to Firestore
            await setDoc(docRef, parsedProgress);
          }
        }
      } catch (error) {
        console.error('Error loading progress from Firestore:', error);
      } finally {
        setSyncInProgress(false);
      }
    };

    loadProgressFromFirestore();
  }, [currentUser]);

  // Save to Firestore whenever progress changes (if user is logged in)
  useEffect(() => {
    const saveProgressToFirestore = async () => {
      if (!currentUser || syncInProgress) return;

      try {
        const docRef = doc(db, 'users', currentUser.uid, 'progress', 'data');
        await setDoc(docRef, progress);
        // Also save to localStorage as backup
        localStorage.setItem('santa-pda-progress', JSON.stringify(progress));
      } catch (error) {
        console.error('Error saving progress to Firestore:', error);
        // Still save to localStorage as fallback
        localStorage.setItem('santa-pda-progress', JSON.stringify(progress));
      }
    };

    saveProgressToFirestore();
  }, [progress, currentUser, syncInProgress]);

  // Load exam history from Firestore when user logs in
  useEffect(() => {
    const loadExamHistoryFromFirestore = async () => {
      if (!currentUser) {
        setExamHistory({ attempts: [] });
        localStorage.removeItem('pda-exam-history');
        return;
      }

      try {
        const docRef = doc(db, 'users', currentUser.uid, 'examHistory', 'data');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const firestoreHistory = docSnap.data() as ExamHistory;
          setExamHistory(firestoreHistory);
          localStorage.setItem('pda-exam-history', JSON.stringify(firestoreHistory));
        } else {
          // Check for local history to migrate
          const localHistory = localStorage.getItem('pda-exam-history');
          if (localHistory) {
            const parsedHistory = JSON.parse(localHistory);
            setExamHistory(parsedHistory);
            await setDoc(docRef, parsedHistory);
          }
        }
      } catch (error) {
        console.error('Error loading exam history from Firestore:', error);
      }
    };

    loadExamHistoryFromFirestore();
  }, [currentUser]);

  // Save exam history to Firestore whenever it changes
  useEffect(() => {
    const saveExamHistoryToFirestore = async () => {
      if (!currentUser || syncInProgress) return;

      try {
        const docRef = doc(db, 'users', currentUser.uid, 'examHistory', 'data');
        await setDoc(docRef, examHistory);
        localStorage.setItem('pda-exam-history', JSON.stringify(examHistory));
      } catch (error) {
        console.error('Error saving exam history to Firestore:', error);
        localStorage.setItem('pda-exam-history', JSON.stringify(examHistory));
      }
    };

    saveExamHistoryToFirestore();
  }, [examHistory, currentUser, syncInProgress]);

  const updateProgress = (section: string, gameMode: string, update: GameProgress) => {
    setProgress(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [gameMode]: update,
      },
    }));
  };

  const getCandyCanes = (section: string, gameMode: string): number => {
    const gameProgress = progress[section]?.[gameMode];
    if (!gameProgress || gameProgress.questionsAttempted === 0) return 0;

    const percentage = (gameProgress.questionsCorrect / gameProgress.questionsAttempted) * 100;

    if (percentage >= 90) return 3;
    if (percentage >= 70) return 2;
    if (percentage >= 50) return 1;
    return 0;
  };

  const getTotalCandyCanes = (): number => {
    let totalCandyCanes = 0;
    Object.keys(progress).forEach(section => {
      Object.keys(progress[section] || {}).forEach(gameMode => {
        totalCandyCanes += getCandyCanes(section, gameMode);
      });
    });
    return totalCandyCanes;
  };

  const getElfRank = (): string => {
    const totalCandyCanes = getTotalCandyCanes();

    if (totalCandyCanes >= 40) return 'Master Scholar';
    if (totalCandyCanes >= 25) return 'Senior Scholar';
    if (totalCandyCanes >= 15) return 'Scholar';
    if (totalCandyCanes >= 5) return 'Apprentice';
    return 'Novice';
  };

  const addExamResult = (result: Omit<ExamResult, 'id' | 'date'>) => {
    const newResult: ExamResult = {
      ...result,
      id: `exam-${Date.now()}`,
      date: Date.now()
    };

    setExamHistory(prev => ({
      attempts: [newResult, ...prev.attempts].sort((a, b) => b.date - a.date) // Most recent first
    }));
  };

  const getExamHistory = (): ExamResult[] => {
    return examHistory.attempts;
  };

  return (
    <ProgressContext.Provider value={{
      progress,
      updateProgress,
      getElfRank,
      getCandyCanes,
      getTotalCandyCanes,
      syncInProgress,
      examHistory,
      addExamResult,
      getExamHistory
    }}>
      {children}
    </ProgressContext.Provider>
  );
};
