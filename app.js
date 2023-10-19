// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3Q7bULr6E0d4aGWpSbAfzvBvyzy2wIME",
  authDomain: "future-fast.firebaseapp.com",
  projectId: "future-fast",
  storageBucket: "future-fast.appspot.com",
  messagingSenderId: "25712076210",
  appId: "1:25712076210:web:fb5b9dce61999cd1cb70ab",
  measurementId: "G-N7ZB9V193X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);