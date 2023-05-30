
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2FzDyr7QKQcAnDVGYMOk2iryF8Ie0h8Y",
  authDomain: "rick-y-morty-be677.firebaseapp.com",
  projectId: "rick-y-morty-be677",
  storageBucket: "rick-y-morty-be677.appspot.com",
  messagingSenderId: "434447394367",
  appId: "1:434447394367:web:476cd379036eb95d757a8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);