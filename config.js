import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDgHgBm2EBKXBy0NAvW4G0kx6ZXgpko_mM",
  authDomain: "book-santa-72161.firebaseapp.com",
  projectId: "book-santa-72161",
  storageBucket: "book-santa-72161.appspot.com",
  messagingSenderId: "996050519035",
  appId: "1:996050519035:web:cee54f4d6f03a1f918c15e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
