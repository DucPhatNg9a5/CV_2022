import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCfu6VfjQ4mbNrx2pwgWN6su4xCMF8PhlA",
  authDomain: "my-cv-4adc3.firebaseapp.com",
  databaseURL: "https://my-cv-4adc3.firebaseio.com",
  projectId: "my-cv-4adc3",
  storageBucket: "my-cv-4adc3.appspot.com",
  messagingSenderId: "467991980479",
  appId: "1:467991980479:web:243871dc20a3510a25990a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
