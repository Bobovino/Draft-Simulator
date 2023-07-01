// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVY8H3-96GK-WHiSVaKz2pOKeFEr3srDw",
  authDomain: "draft-simulator-3b04e.firebaseapp.com",
  projectId: "draft-simulator-3b04e",
  storageBucket: "draft-simulator-3b04e.appspot.com",
  messagingSenderId: "429156583592",
  appId: "1:429156583592:web:486bad8929314171011a9d",
  measurementId: "G-EQ8FH7DGGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);