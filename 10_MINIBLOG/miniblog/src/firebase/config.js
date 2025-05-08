import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCctc5SI2dM7chL07MzUDvc9SlPClnoRqo",
  authDomain: "miniblog-1e413.firebaseapp.com",
  projectId: "miniblog-1e413",
  storageBucket: "miniblog-1e413.firebasestorage.app",
  messagingSenderId: "153052402117",
  appId: "1:153052402117:web:1168dd6d376f9f5a657bac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, app };
