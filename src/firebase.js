import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD9-0sbkg0PdS2xq-WHKgGJykdZikHVnkE",
  authDomain: "clone-2o-fab9b.firebaseapp.com",
  projectId: "clone-2o-fab9b",
  storageBucket: "clone-2o-fab9b.appspot.com",
  messagingSenderId: "872204406053",
  appId: "1:872204406053:web:2496b3d2f76e600538decc",
  measurementId: "G-8GGKFZ9BRM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
