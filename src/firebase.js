import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5wJXg4D-JF1GpAkEAFj0htZStqoEfJk",
  authDomain: "calmly-2e0d4.firebaseapp.com",
  projectId: "calmly-2e0d4",
  storageBucket: "calmly-2e0d4.appspot.com",
  messagingSenderId: "401976361964",
  appId: "1:401976361964:web:c0a7a44a9fd98cf6c836c9", // Ensure this is correct
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Function for Google Sign-In
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("User Info:", result.user);
    return result; // Return result for further processing
  } catch (error) {
    console.error("Error signing in:", error);
    throw error; // Throw error for handling in UI
  }
};

// Exporting necessary modules
export { app, auth, provider, signInWithGoogle };