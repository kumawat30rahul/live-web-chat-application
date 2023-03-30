import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDi0FEWluPDzFMbJyDzrOcK1yViqw39VbA",
  authDomain: "live-chat-application-eaba1.firebaseapp.com",
  projectId: "live-chat-application-eaba1",
  storageBucket: "live-chat-application-eaba1.appspot.com",
  messagingSenderId: "103939823833",
  appId: "1:103939823833:web:dc782ce0c2ac345f14c6c8"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();