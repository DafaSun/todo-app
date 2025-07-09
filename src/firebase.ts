import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBmQ_Eusp4ZMLCEv6j1wcJZqZ_NLkubokY",
    authDomain: "todo-app-62ded.firebaseapp.com",
    projectId: "todo-app-62ded",
    storageBucket: "todo-app-62ded.firebasestorage.app",
    messagingSenderId: "677411676067",
    appId: "1:677411676067:web:6f2999e54fcc945d6d4416",
    measurementId: "G-R69PWT6D58"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
