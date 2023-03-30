import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyC8N9NbFtqvw59k_BBZwkINzbBN0qNQpso",
    authDomain: "linkedin-clone-41f82.firebaseapp.com",
    projectId: "linkedin-clone-41f82",
    storageBucket: "linkedin-clone-41f82.appspot.com",
    messagingSenderId: "44845939191",
    appId: "1:44845939191:web:f330bab1ebb71f286d16f2"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;