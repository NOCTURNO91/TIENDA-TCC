// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnFYvfY3apypr77NX9oE_VDOMqlX6kvLU",
  authDomain: "quiroz555tiendatcc.firebaseapp.com",
  projectId: "quiroz555tiendatcc",
  storageBucket: "quiroz555tiendatcc.appspot.com",
  messagingSenderId: "559303000785",
  appId: "1:559303000785:web:5526122dce3f230d9d7bf0",
  measurementId: "G-6R5VK95LQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);