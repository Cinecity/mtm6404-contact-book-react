// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaz5-_xidSKKrUD-cydvfWW1U6QttSvEU",
  authDomain: "contacts-23467.firebaseapp.com",
  projectId: "contacts-23467",
  storageBucket: "contacts-23467.firebasestorage.app",
  messagingSenderId: "835466735130",
  appId: "1:835466735130:web:a3af1b2890e97ddbe6aba3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };