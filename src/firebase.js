import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCf5ps62NqvOyS3JJeipKxOpHYr-352gbg",
  authDomain: "mi-boda-2027.firebaseapp.com",
  projectId: "mi-boda-2027",
  storageBucket: "mi-boda-2027.firebasestorage.app",
  messagingSenderId: "948029294469",
  appId: "1:948029294469:web:057f3844989de80078e6ec"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);