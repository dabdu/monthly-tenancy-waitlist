// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAduPiRmOAK_M4GCpHtKJ6FW0LASveDqDk",
    authDomain: "waitlist-91f6a.firebaseapp.com",
    projectId: "waitlist-91f6a",
    storageBucket: "waitlist-91f6a.appspot.com",
    messagingSenderId: "728570956410",
    appId: "1:728570956410:web:2264cb2535d36b549189c3",
    measurementId: "G-KRQGB7JGTJ"
  };

// Initialize Firebase
// initializeApp(firebaseConfig);
// export const db = getFirestore();

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
export const database = getDatabase(app);