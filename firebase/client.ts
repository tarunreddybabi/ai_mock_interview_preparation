// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv4Q1ukg-_pUtYS_pdDfoOGC1hlT4ykN4",
  authDomain: "interviewmastery-bf3d0.firebaseapp.com",
  projectId: "interviewmastery-bf3d0",
  storageBucket: "interviewmastery-bf3d0.firebasestorage.app",
  messagingSenderId: "5106186222",
  appId: "1:5106186222:web:cb3aa585cc513f942b80ff",
  measurementId: "G-DCSJX87RD2"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);auth