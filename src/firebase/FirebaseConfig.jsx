// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmhV-8SxRk94PbQfOzFZX40hOv0hvI4Sw",
  authDomain: "budgetgadget-f587d.firebaseapp.com",
  projectId: "budgetgadget-f587d",
  storageBucket: "budgetgadget-f587d.appspot.com",
  messagingSenderId: "204417342545",
  appId: "1:204417342545:web:6d982ef026b7c3473e2c70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);