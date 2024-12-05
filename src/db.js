import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpEnZgxSzML7vc92lUjmTrnKJZ68AmJ_M",
  authDomain: "contact-book-bc9fc.firebaseapp.com",
  projectId: "contact-book-bc9fc",
  storageBucket: "contact-book-bc9fc.firebasestorage.app",
  messagingSenderId: "1071261361853",
  appId: "1:1071261361853:web:f49e006ed6ca6c87f5b9d4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { app, db };
