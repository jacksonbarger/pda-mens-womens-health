import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

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

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
