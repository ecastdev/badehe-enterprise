// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBANrD2LcCVps6tIySUd3PnxWg5fyiveH0",
  authDomain: "badehe-chatroom.firebaseapp.com",
  projectId: "badehe-chatroom",
  storageBucket: "badehe-chatroom.appspot.com",
  messagingSenderId: "219038417222",
  appId: "1:219038417222:web:72714ea7fcb28d2c372547",
  measurementId: "G-7YSZDZEX2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// exporting
export {auth, app, analytics};