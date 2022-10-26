import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmiB4w6F8DMkmhQRbaJFe58OnPgS7Qdgs",
  authDomain: "red-onion-thai-res.firebaseapp.com",
  projectId: "red-onion-thai-res",
  storageBucket: "red-onion-thai-res.appspot.com",
  messagingSenderId: "947907787179",
  appId: "1:947907787179:web:0afc05214ca4a3f68c3aee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
