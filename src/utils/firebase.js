// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_SECRET,
  authDomain: "blog-f092d.firebaseapp.com",
  projectId: "blog-f092d",
  storageBucket: "blog-f092d.appspot.com",
  messagingSenderId: process.env.FIREBASE_SENDER,
  appId: process.env.FIREBASE_ID,
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
