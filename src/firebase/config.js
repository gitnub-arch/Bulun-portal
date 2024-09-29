// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn5rlUfOrEtRxxIrhAUltsL1vUhRe1WdE",
  authDomain: "bulun-portal.firebaseapp.com",
  databaseURL: "https://bulun-portal-default-rtdb.firebaseio.com",
  projectId: "bulun-portal",
  storageBucket: "bulun-portal.appspot.com",
  messagingSenderId: "206699661294",
  appId: "1:206699661294:web:52f11e6e86166563dbf0ff",
  measurementId: "G-3BWXN3FSQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(); // Инициализация базы данных Firestore
const auth = getAuth(app); // Инициализация системы верификации
const storage = getStorage(app); // Инициализация хранилища файлов

export { db, auth, storage };