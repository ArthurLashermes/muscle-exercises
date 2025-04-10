import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getPerformance, FirebasePerformance } from "firebase/performance";

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

// Initialiser Analytics de manière sécurisée
let analytics = null;
const initAnalytics = async () => {
  try {
    // Vérifier si Analytics est supporté dans l'environnement actuel
    const analyticsSupported = await isSupported();
    if (analyticsSupported) {
      analytics = getAnalytics(app);
      console.log("Firebase Analytics initialisé avec succès");
    } else {
      console.log("Firebase Analytics n'est pas supporté dans cet environnement");
    }
  } catch (error) {
    console.warn("Erreur lors de l'initialisation de Firebase Analytics:", error);
  }
};

// Initialiser Performance Monitoring de manière sécurisée
let performance: FirebasePerformance | null = null;
const initPerformance = () => {
  try {
    performance = getPerformance(app);
    console.log("Firebase Performance Monitoring initialisé avec succès");
  } catch (error) {
    console.warn("Erreur lors de l'initialisation de Firebase Performance Monitoring:", error);
  }
};

// Appeler les initialisations
initAnalytics();
initPerformance();

export { app, analytics, performance }; 