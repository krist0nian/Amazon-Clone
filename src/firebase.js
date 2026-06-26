import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHwqdxK7QcATjsWM-beiD8Rd03oAf5H7c",
  authDomain: "clone-9cf3b.firebaseapp.com",
  projectId: "clone-9cf3b",
  storageBucket: "clone-9cf3b.firebasestorage.app",
  messagingSenderId: "233926741704",
  appId: "1:233926741704:web:1f2f9c9efca37555a79ffd"
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);