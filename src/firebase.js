// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    sendPasswordResetEmail
} from "firebase/auth";
import {getAnalytics} from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0otFlau6_lqEOzTilPDnt084G_7DHnIk",
    authDomain: "fs-webapp-react.firebaseapp.com",
    projectId: "fs-webapp-react",
    storageBucket: "fs-webapp-react.appspot.com",
    messagingSenderId: "802577712906",
    appId: "1:802577712906:web:f0174f41ed905865879cf3",
    measurementId: "G-NRL9W3M1LP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    googleProvider,
    sendPasswordResetEmail
};