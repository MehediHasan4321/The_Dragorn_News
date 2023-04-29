// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgYbSZqrR_Wsr8umq3O3XgSuKIhz3Iw1g",
  authDomain: "the-dragon-news-6359b.firebaseapp.com",
  projectId: "the-dragon-news-6359b",
  storageBucket: "the-dragon-news-6359b.appspot.com",
  messagingSenderId: "515366779041",
  appId: "1:515366779041:web:96fbb984732dd4618a98e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app