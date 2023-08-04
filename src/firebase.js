import { GoogleAuthProvider, getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwVAyf-aF6Gf8DzQEvAh1UumKPhZNtxZw",
  authDomain: "zing-mp3-5d0e8.firebaseapp.com",
  databaseURL: "https://zing-mp3-5d0e8-default-rtdb.firebaseio.com",
  projectId: "zing-mp3-5d0e8",
  storageBucket: "zing-mp3-5d0e8.appspot.com",
  messagingSenderId: "164831791894",
  appId: "1:164831791894:web:260a09bd69d4914ac45e37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();