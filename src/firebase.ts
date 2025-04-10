import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCyXf4eAYOz9732x7qWco5i6QJ4e5hnNc0",
  authDomain: "muscle-exercises.firebaseapp.com",
  projectId: "muscle-exercises",
  storageBucket: "muscle-exercises.firebasestorage.app",
  messagingSenderId: "176332533356",
  appId: "1:176332533356:web:65d4d0e96197b68a68f249",
  measurementId: "G-GTKHGC6HLK"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }; 