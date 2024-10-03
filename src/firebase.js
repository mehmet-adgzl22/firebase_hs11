import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkDxIK3Kf6NfX5tbUCJisGoOzA8vwlqdY",
  authDomain: "posts-app-21bd2.firebaseapp.com",
  projectId: "posts-app-21bd2",
  storageBucket: "posts-app-21bd2.appspot.com",
  messagingSenderId: "189608668410",
  appId: "1:189608668410:web:02f9ec00240e944bdead43"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);