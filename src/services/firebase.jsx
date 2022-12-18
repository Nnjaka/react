import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6X7xYgfcRKAP1jzJyy64FbMD7Eh6SSwA",
  authDomain: "react-8c825.firebaseapp.com",
  databaseURL: "https://react-8c825-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "react-8c825",
  storageBucket: "react-8c825.appspot.com",
  messagingSenderId: "911117482721",
  appId: "1:911117482721:web:18c0ff560187d905ac15a0"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

export const signUp = async (email, password) => 
    await createUserWithEmailAndPassword(firebaseAuth, email, password);

export const logIn = async (email, password) => 
    await signInWithEmailAndPassword (firebaseAuth, email, password);

export const logOut = async () => 
    await signOut(firebaseAuth);

export const db = getDatabase(app);

export const getChats = () => ref(db, 'chats');