import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIzrdqEcfGwaP_r5cgrW72kZXt9UxcQNY",
  authDomain: "goeazymart-dubai.firebaseapp.com",
  databaseURL: "https://goeazymart-dubai-default-rtdb.firebaseio.com",
  projectId: "goeazymart-dubai",
  storageBucket: "goeazymart-dubai.firebasestorage.app",
  messagingSenderId: "857122607474",
  appId: "1:857122607474:web:f63e0ada7c8dc3262d8deb",
  measurementId: "G-73YM1W84EW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export instances
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
export const db = getDatabase(app);
export default app;
