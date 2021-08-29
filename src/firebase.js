// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlAaXQBQsAWMWHW8VprvxOAQtRF97PwK8",
    authDomain: "airbnb-clone-bbf7c.firebaseapp.com",
    databaseURL: "https://airbnb-clone-bbf7c.firebaseio.com",
    projectId: "airbnb-clone-bbf7c",
    storageBucket: "airbnb-clone-bbf7c.appspot.com",
    messagingSenderId: "905105917288",
    appId: "1:905105917288:web:01bd79ed3d26ee53bd82dd",
    measurementId: "G-J040M0YH2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);