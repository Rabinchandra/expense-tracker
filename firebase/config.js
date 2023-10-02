import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsuVcrCNSb_ZVVv6qvEZTU9eksvUHOj5I",
  authDomain: "expense-tracker-app-82a81.firebaseapp.com",
  projectId: "expense-tracker-app-82a81",
  storageBucket: "expense-tracker-app-82a81.appspot.com",
  messagingSenderId: "167304583378",
  appId: "1:167304583378:web:331afcd483e040c090b50b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
