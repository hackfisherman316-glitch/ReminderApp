// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCXYCTE7zxq0NGMqG2Sg0pqajNlILhvzpM",
  authDomain: "reminder-app-505de.firebaseapp.com",
  projectId: "reminder-app-505de",
  storageBucket: "reminder-app-505de.firebasestorage.app",
  messagingSenderId: "398922174232",
  appId: "1:398922174232:web:eb207e46f7ca33cbf3586d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// 🔥 IMPORTANT: make db GLOBAL
window.db = firebase.firestore();

// Auth (optional but recommended)
firebase.auth().signInAnonymously()
  .then(() => console.log("✅ Logged in"))
  .catch(err => console.error("Auth error:", err));

console.log("🔥 Firebase initialized");
