// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeL6ciGa-anD03oIoYkGMSQS3GppGHECE",
  authDomain: "e-farming-82e73.firebaseapp.com",
  projectId: "e-farming-82e73",
  storageBucket: "e-farming-82e73.firebasestorage.app",
  messagingSenderId: "973646623721",
  appId: "1:973646623721:web:23a5cf78692eecefbc9178",
  measurementId: "G-GKYG0Y95WS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };