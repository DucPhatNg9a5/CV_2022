import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBWj8TfHx-fwd2_wk6UnVR0daRydxKkmiU",
  authDomain: "forcv-2d3c8.firebaseapp.com",
  databaseURL: "https://forcv-2d3c8.firebaseio.com",
  projectId: "forcv-2d3c8",
  storageBucket: "forcv-2d3c8.appspot.com",
  messagingSenderId: "832512417901",
  appId: "1:832512417901:web:ad84e0aabbf70871999f64",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
