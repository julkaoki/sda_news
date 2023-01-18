import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnPfj6MoRK5Abaqc3usy0VOjpwbjUOOdw",
  authDomain: "sda-news-6c763.firebaseapp.com",
  projectId: "sda-news-6c763",
  storageBucket: "sda-news-6c763.appspot.com",
  messagingSenderId: "214935056463",
  appId: "1:214935056463:web:82a1e5406bfcfd9e7d7a3a"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);