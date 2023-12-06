// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfHP-UL4GMe_iBOmKMikfgIGTXKj1J3RE",
  authDomain: "brotherssite-12d3f.firebaseapp.com",
  projectId: "brotherssite-12d3f",
  storageBucket: "brotherssite-12d3f.appspot.com",
  messagingSenderId: "1010683975773",
  appId: "1:1010683975773:web:13ba381afbb1e069db15b4",
  measurementId: "G-08140NBT9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);