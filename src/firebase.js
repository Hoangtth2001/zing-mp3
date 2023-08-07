import { GoogleAuthProvider, getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
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
  appId: "1:16483179189getStorage4:web:260a09bd69d4914ac45e37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const database = getDatabase(app);

export const storage = getStorage(app);