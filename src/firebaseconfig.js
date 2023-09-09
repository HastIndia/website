import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyBxuic0ZF-tqQAVvzN8iMREfXaeiWH95iA",

  authDomain: "hastindia-c5e6f.firebaseapp.com",

  projectId: "hastindia-c5e6f",

  storageBucket: "hastindia-c5e6f.appspot.com",

  messagingSenderId: "958981151307",

  appId: "1:958981151307:web:2019cd51a513d3a7fa0bce",

  measurementId: "G-560ERC14YV"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app)