// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXYCTE7zxq0NGMqG2Sg0pqajNlILhvzpM",
  authDomain: "reminder-app-505de.firebaseapp.com",
  projectId: "reminder-app-505de",
  storageBucket: "reminder-app-505de.firebasestorage.app",
  messagingSenderId: "398922174232",
  appId: "1:398922174232:web:eb207e46f7ca33cbf3586d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firebase.firestore();

firebase.auth().signInAnonymously();
