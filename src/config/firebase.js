// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyDNPXqCtldUa3FCCE-fbfW1JDbMXF4wE1k",
  authDomain: "budget-app-adcdc.firebaseapp.com",
  projectId: "budget-app-adcdc",
  storageBucket: "budget-app-adcdc.appspot.com",
  messagingSenderId: "546235366068",
  appId: "1:546235366068:web:e359220f6cd12e2712f5e1",
  measurementId: "G-J31YKT0DKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);
const analytics = getAnalytics(app);

export {auth, db};