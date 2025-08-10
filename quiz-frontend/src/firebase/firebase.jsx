// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "REDACTED",
  authDomain: "quiz-app-gayatri.firebaseapp.com",
  projectId: "quiz-app-gayatri",
  storageBucket: "quiz-app-gayatri.firebasestorage.app",
  messagingSenderId: "728078397266",
  appId: "1:728078397266:web:b5b7fc3572e1e3690a548b",
  measurementId: "G-Z4NQE4BQN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export default app;