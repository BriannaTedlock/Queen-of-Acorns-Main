// Import the functions you need from the SDKs you need
import { getApps, initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlvqRicA3hzmQffBcJ2D7jxQZmzXX9Rzk",
  authDomain: "queen-of-acorns-gallery.firebaseapp.com",
  projectId: "queen-of-acorns-gallery",
  storageBucket: "queen-of-acorns-gallery.appspot.com",
  messagingSenderId: "542688793081",
  appId: "1:542688793081:web:642bc2e131a7e82575ed28",
  measurementId: "G-LW6N4JWTGW"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const storage = getStorage(app)
const db = getFirestore(app)

export { storage, db, app };