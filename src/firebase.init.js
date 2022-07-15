// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4riSo_4bfblugqZ62K81R9XI_pOd24QU",
    authDomain: "justice-for--everybody.firebaseapp.com",
    projectId: "justice-for--everybody",
    storageBucket: "justice-for--everybody.appspot.com",
    messagingSenderId: "456852064051",
    appId: "1:456852064051:web:d1b26d5a384ec79b8c2046"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;