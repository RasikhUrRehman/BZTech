// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkFoUfgrEPYci6z59IIy0mGv3lTbeiC6g",
  authDomain: "thesisassignmentsuk-1d31a.firebaseapp.com",
  projectId: "thesisassignmentsuk-1d31a",
  storageBucket: "thesisassignmentsuk-1d31a.firebasestorage.app",
  messagingSenderId: "142988081289",
  appId: "1:142988081289:web:30d5a23e3d935031daee58",
  measurementId: "G-45GBLY6WHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };