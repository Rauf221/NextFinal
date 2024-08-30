// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqRJ-bP0GqRcIUuK6Ex5PFzveX0iKpNSM",
  authDomain: "nextauthwood.firebaseapp.com",
  projectId: "nextauthwood",
  storageBucket: "nextauthwood.appspot.com",
  messagingSenderId: "412969651554",
  appId: "1:412969651554:web:705260a4a8bacc42e3f03b",
  measurementId: "G-WJE4R0ESJT"
};

// Initialize Firebase
const  app= initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);