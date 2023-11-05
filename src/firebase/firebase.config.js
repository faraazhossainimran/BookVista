// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApys-hDEFTu1ZPt1vRi7qLNPSGngC3BiI",
  authDomain: "bookvista-9b00d.firebaseapp.com",
  projectId: "bookvista-9b00d",
  storageBucket: "bookvista-9b00d.appspot.com",
  messagingSenderId: "893802494805",
  appId: "1:893802494805:web:0ea31fceccc1d185f48ddc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;