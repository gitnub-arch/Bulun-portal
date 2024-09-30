// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDIZ8e0pNb-BLvSWnm7yNhGj1a-BHxjF6I",
  authDomain: "twidy-47d99.firebaseapp.com",
  projectId: "twidy-47d99",
  storageBucket: "twidy-47d99.appspot.com",
  messagingSenderId: "575761208994",
  appId: "1:575761208994:web:1754637d50337d0a03a9fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // инициализация проекта Firesbase

const db = getFirestore(); //  инициализация и подключение к бд
const auth = getAuth(app); // инициализация аутентификации(авторизации системы верификации)
const storage = getStorage(app);// инициализация хранилища

export { db, auth, storage };