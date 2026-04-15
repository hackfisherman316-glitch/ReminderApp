<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js"></script>

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
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// Anonymous login
firebase.auth().signInAnonymously()
  .then(() => console.log("Logged in anonymously"))
  .catch(err => console.error(err));
</script>
