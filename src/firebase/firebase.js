import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firbase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnUrd-2l0EY8LagzbKeIWQ4_pB_eteIJE",
    authDomain: "card-chasers.firebaseapp.com",
    projectId: "card-chasers",
    storageBucket: "card-chasers.appspot.com",
    messagingSenderId: "494726258066",
    appId: "1:494726258066:web:348e1130a93076c8ef354b",
    measurementId: "G-GMZBLDSTMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };