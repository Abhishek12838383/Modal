// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzw6Obw8ObzAXB9jU9pUMGqVsbf-CcMsM",
  authDomain: "e-commerce-af1f2.firebaseapp.com",
  projectId: "e-commerce-af1f2",
  storageBucket: "e-commerce-af1f2.appspot.com",
  messagingSenderId: "66772999363",
  appId: "1:66772999363:web:6c8dbcd1427904a8769676",
  measurementId: "G-C6WV4ZYYVN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);