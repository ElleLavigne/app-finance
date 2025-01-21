// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeeSEsaTIHWr_Tsw2jZPJ6LnGDB_VcLPI",
  authDomain: "finance-manager-e1a4c.firebaseapp.com",
  projectId: "finance-manager-e1a4c",
  storageBucket: "finance-manager-e1a4c.firebasestorage.app",
  messagingSenderId: "1011287911291",
  appId: "1:1011287911291:web:00864726c637377ec96bde",
  measurementId: "G-YF3LTPVECB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app)