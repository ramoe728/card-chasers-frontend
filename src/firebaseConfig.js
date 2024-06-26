// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
