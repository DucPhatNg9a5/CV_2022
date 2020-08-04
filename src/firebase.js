import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAecWJYIkI1dO9kHKjLqOiHAHZsjLWHBio",
  authDomain: "new-cv-d5cad.firebaseapp.com",
  databaseURL: "https://new-cv-d5cad.firebaseio.com",
  projectId: "new-cv-d5cad",
  storageBucket: "new-cv-d5cad.appspot.com",
  messagingSenderId: "511954721527",
  appId: "1:511954721527:web:5951132b3125d9133c51f2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
