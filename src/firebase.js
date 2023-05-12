// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "video-sharing-app-bcdb9.firebaseapp.com",
    projectId: "video-sharing-app-bcdb9",
    storageBucket: "video-sharing-app-bcdb9.appspot.com",
    messagingSenderId: "85917486390",
    appId: "1:85917486390:web:fedf1155cc1c907c1b3797"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider()
export default app;