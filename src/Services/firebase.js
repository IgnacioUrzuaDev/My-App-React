// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA802970848m557oz-5UPYRcw10QQ_isH0",
  authDomain: "e-commerce-tcg.firebaseapp.com",
  projectId: "e-commerce-tcg",
  storageBucket: "e-commerce-tcg.appspot.com",
  messagingSenderId: "165997023130",
  appId: "1:165997023130:web:2e6e550f74fbcd58e2f423"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db