import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore"; 
import { getAuth } from "firebase/auth"; 


const firebaseConfig = {
  apiKey: "AIzaSyAIspVitFi0kWDZ5tBS7yBZWiQhMPnW47c",
  authDomain: "darxx830.firebaseapp.com",
  projectId: "darxx830",
  storageBucket: "darxx830.firebasestorage.app",
  messagingSenderId: "1015760525652",
  appId: "1:1015760525652:web:2a993c429a7159351250c1",
  measurementId: "G-RW9SV0ZJ3G"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app); 
export { db, auth, analytics, collection, addDoc };