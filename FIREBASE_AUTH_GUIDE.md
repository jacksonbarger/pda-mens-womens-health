# 🔥 Firebase Authentication & Progress Storage Guide

## Step 1: Setup Firebase Project (5 minutes)

### 1.1 Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Name it: `santa-pda-workshop`
4. Disable Google Analytics (not needed for 60 users)
5. Click "Create project"

### 1.2 Enable Authentication
1. In Firebase Console, click "Authentication" in left sidebar
2. Click "Get started"
3. Click "Email/Password" under Sign-in method
4. Enable the **Email/Password** toggle
5. Save

### 1.3 Enable Firestore Database
1. Click "Firestore Database" in left sidebar
2. Click "Create database"
3. Select **"Start in production mode"** (we'll add rules next)
4. Choose region closest to your users (e.g., `us-central1`)
5. Click "Enable"

### 1.4 Set Firestore Security Rules
Click "Rules" tab and replace with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own progress
    match /users/{userId}/progress/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // Optional: Allow users to read their own profile
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

Click "Publish"

### 1.5 Get Firebase Config
1. Click ⚙️ (Settings) → "Project settings"
2. Scroll to "Your apps" section
3. Click the **Web** icon `</>`
4. Register app nickname: `santa-workshop-web`
5. Copy the `firebaseConfig` object (you'll need this!) __--++  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKNcGtLtTcxZew9tCKtcsFUzXeiGEZj_g",
  authDomain: "mw-study-app.firebaseapp.com",
  projectId: "mw-study-app",
  storageBucket: "mw-study-app.firebasestorage.app",
  messagingSenderId: "547379449450",
  appId: "1:547379449450:web:367068f1ecaf89fc4a8413",
  measurementId: "G-DJ7EC8LW14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

---

## Step 2: Install Firebase SDK

```bash
npm install firebase
```

---

## Step 3: Create Firebase Configuration File

Create `src/config/firebase.ts`:

```typescript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace with your Firebase project config from Step 1.5
const firebaseConfig = {
  apiKey: "AIzaSyDKNcGtLtTcxZew9tCKtcsFUzXeiGEZj_g",
  authDomain: "mw-study-app.firebaseapp.com",
  projectId: "mw-study-app",
  storageBucket: "mw-study-app.appspot.com",
  messagingSenderId: "547379449450",
  appId: "1:547379449450:web:367068f1ecaf89fc4a8413"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Firestore Database
export const db = getFirestore(app);

export default app;
```

---

## Step 4: Create Auth Context

Create `src/context/AuthContext.tsx`:

```typescript
import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { auth } from '../config/firebase';

interface AuthContextType {
  currentUser: User | null;
  signup: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const signup = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
```

---

## Step 5: Update Progress Context to Use Firebase

Update `src/context/ProgressContext.tsx`:

```typescript
import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ProgressData } from '../types';
import { useAuth } from './AuthContext';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

interface ProgressContextType {
  progressData: ProgressData;
  updateProgress: (section: string, gameMode: string, correct: number, total: number) => void;
  getCandyCanes: (section: string, gameMode: string) => number;
  getTotalCandyCanes: () => number;
  getElfRank: () => string;
  loading: boolean;
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
  const [progressData, setProgressData] = useState<ProgressData>({});
  const [loading, setLoading] = useState(true);

  // Load progress from Firestore when user logs in
  useEffect(() => {
    const loadProgress = async () => {
      if (!currentUser) {
        // No user logged in - use empty progress
        setProgressData({});
        setLoading(false);
        return;
      }

      try {
        const docRef = doc(db, 'users', currentUser.uid, 'progress', 'data');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProgressData(docSnap.data() as ProgressData);
        } else {
          // No progress saved yet
          setProgressData({});
        }
      } catch (error) {
        console.error('Error loading progress:', error);
        setProgressData({});
      } finally {
        setLoading(false);
      }
    };

    loadProgress();
  }, [currentUser]);

  // Save progress to Firestore whenever it changes
  useEffect(() => {
    const saveProgress = async () => {
      if (!currentUser || loading) return;

      try {
        const docRef = doc(db, 'users', currentUser.uid, 'progress', 'data');
        await setDoc(docRef, progressData);
      } catch (error) {
        console.error('Error saving progress:', error);
      }
    };

    saveProgress();
  }, [progressData, currentUser, loading]);

  const updateProgress = (section: string, gameMode: string, correct: number, total: number) => {
    const score = Math.round((correct / total) * 100);

    setProgressData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [gameMode]: {
          questionsAttempted: total,
          questionsCorrect: correct,
          lastScore: score
        }
      }
    }));
  };

  const getCandyCanes = (section: string, gameMode: string): number => {
    const sectionProgress = progressData[section];
    if (!sectionProgress) return 0;

    const gameProgress = sectionProgress[gameMode];
    if (!gameProgress) return 0;

    const score = gameProgress.lastScore;

    if (score >= 90) return 3;
    if (score >= 70) return 2;
    if (score >= 50) return 1;
    return 0;
  };

  const getTotalCandyCanes = (): number => {
    let total = 0;
    Object.keys(progressData).forEach(section => {
      Object.keys(progressData[section]).forEach(gameMode => {
        total += getCandyCanes(section, gameMode);
      });
    });
    return total;
  };

  const getElfRank = (): string => {
    const total = getTotalCandyCanes();

    if (total >= 100) return "🎅 Head Elf";
    if (total >= 75) return "⭐ Senior Elf";
    if (total >= 50) return "🎄 Master Elf";
    if (total >= 30) return "🎁 Skilled Elf";
    if (total >= 15) return "🔔 Junior Elf";
    if (total >= 5) return "❄️ Apprentice Elf";
    return "🎀 Toy Maker";
  };

  const value = {
    progressData,
    updateProgress,
    getCandyCanes,
    getTotalCandyCanes,
    getElfRank,
    loading
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};
```

---

## Step 6: Create Login/Signup Components

Create `src/components/auth/AuthForm.tsx`:

```typescript
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { WorkshopButton } from '../shared/WorkshopButton';

export const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { signup, login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await signup(email, password);
      }
    } catch (err: any) {
      setError(err.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-workshop-cream-50 via-white to-workshop-cream-100 px-4">
      <div className="card-workshop p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-primary mb-2">
            🎄 Santa's PDA Workshop
          </h1>
          <p className="text-base text-secondary">
            {isLogin ? 'Welcome back!' : 'Create your account'}
          </p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-base font-semibold text-primary mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-workshop-gold-400 focus:outline-none"
              placeholder="your-email@example.com"
            />
          </div>

          <div>
            <label className="block text-base font-semibold text-primary mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-workshop-gold-400 focus:outline-none"
              placeholder="Min 6 characters"
            />
          </div>

          <WorkshopButton
            type="submit"
            variant="primary"
            className="w-full"
            disabled={loading}
            loading={loading}
          >
            {isLogin ? 'Log In' : 'Sign Up'}
          </WorkshopButton>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-base text-workshop-red-600 hover:underline"
          >
            {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Log in'}
          </button>
        </div>
      </div>
    </div>
  );
};
```

---

## Step 7: Update App.tsx to Include Auth

```typescript
import { AuthProvider } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import { useAuth } from './context/AuthContext';
import { AuthForm } from './components/auth/AuthForm';
import { WorkshopButton } from './components/shared/WorkshopButton';
// ... other imports

function AppContent() {
  const { currentUser, logout } = useAuth();
  // ... existing state and handlers

  // Show login form if not authenticated
  if (!currentUser) {
    return <AuthForm />;
  }

  // Add logout button to header or somewhere visible
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pb-16">
        {renderScreen()}
      </main>
      <footer className="bg-workshop-green-600 text-white py-3 text-center text-base shadow-md mt-auto">
        <div className="flex items-center justify-center gap-4">
          <span aria-hidden="true">🎄</span>
          <span>Made with ❤️ for Pharmacy Students</span>
          <span aria-hidden="true">🎅</span>
          <button
            onClick={() => logout()}
            className="text-sm underline hover:text-workshop-gold-200"
          >
            Logout
          </button>
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
      </ProgressProvider>
    </AuthProvider>
  );
}

export default App;
```

---

## Step 8: Update Header to Show User Email

Update `src/components/shared/Header.tsx`:

```typescript
import { useAuth } from '../../context/AuthContext';

export const Header: React.FC = () => {
  const { getElfRank } = useProgress();
  const { currentUser } = useAuth();

  return (
    <header className="bg-workshop-red-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold tracking-tight">
              🎅 Santa's PDA Workshop
            </h1>
            <p className="text-white/90 text-base mt-1">
              Reproductive & Endocrine Review
            </p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/30">
            <div className="text-center">
              <div className="text-sm text-white/80 font-semibold">
                {currentUser?.email}
              </div>
              <div className="text-lg font-bold mt-1">{getElfRank()}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
```

---

## 🎯 Testing Your Auth System

1. **Sign Up**
   - Enter email (e.g., `student1@test.com`)
   - Enter password (min 6 chars)
   - Click "Sign Up"

2. **Play Games**
   - Complete games to earn candy canes
   - Progress auto-saves to Firebase

3. **Log Out**
   - Click logout button
   - Progress is saved

4. **Log Back In**
   - Use same credentials
   - Progress loads automatically

5. **Test on Another Device**
   - Log in with same account
   - See same progress!

---

## 💰 Cost Breakdown (FREE for 60 users)

**Firebase Free Tier Limits:**
- ✅ Authentication: Unlimited users
- ✅ Firestore reads: 50,000/day
- ✅ Firestore writes: 20,000/day
- ✅ Storage: 1 GB

**Estimated Usage (60 users):**
- Progress save per game: ~1 write
- Progress load on login: ~1 read
- **Daily usage (all 60 users active):**
  - Reads: ~60 (on login) = **0.12%** of limit
  - Writes: ~300 (5 games/user) = **1.5%** of limit

**Result: You'll use <2% of the free tier. Stay free forever!** ✅

---

## 🔒 Security Features

✅ Email verification (optional - enable in Firebase Console)
✅ Password strength requirements (min 6 chars, can increase)
✅ Firestore rules prevent users from seeing others' data
✅ Authentication required to read/write
✅ Each user can ONLY access their own progress

---

## 🚀 Optional Enhancements

1. **Email Verification**
   - Firebase Console → Authentication → Templates
   - Enable email verification

2. **Password Reset**
   - Add "Forgot Password" button
   - Use `sendPasswordResetEmail()` from Firebase

3. **Google Sign-In**
   - Enable in Firebase Console
   - Import `GoogleAuthProvider`
   - Add "Sign in with Google" button

4. **Display Names**
   - Let users set display name
   - Store in Firestore: `users/{uid}/profile`

---

## ✅ Deployment Notes

When deploying to Vercel:
1. Add Firebase config to `.env.local`:
   ```
   VITE_FIREBASE_API_KEY=your-key
   VITE_FIREBASE_AUTH_DOMAIN=your-domain
   # ... other config
   ```

2. Add environment variables in Vercel dashboard

3. Update `firebase.ts` to use env vars:
   ```typescript
   const firebaseConfig = {
     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
     // ... etc
   };
   ```

---

## 🆘 Common Issues

**"Firebase: Error (auth/email-already-in-use)"**
- User already has account, use login instead

**"Firebase: Error (auth/weak-password)"**
- Password must be at least 6 characters

**"Missing or insufficient permissions"**
- Check Firestore security rules are published correctly

**Progress not saving**
- Check browser console for errors
- Verify user is authenticated (`currentUser` exists)
- Check Firebase Console → Firestore to see if data appears

---

You now have **free, secure, multi-device authentication** for up to 60 users! 🎉
