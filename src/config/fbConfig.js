import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Initialize Firebase
var config = {
  // Put your firebase config here
  apiKey: "AIzaSyBql_6A0FWW4svQvEHASkiZ8frJBrCqKXY",
  authDomain: "accountsux.firebaseapp.com",
  databaseURL: "https://accountsux.firebaseio.com",
  projectId: "accountsux",
  storageBucket: "accountsux.appspot.com",
  messagingSenderId: "91940529479",
  appId: "1:91940529479:web:6badccd54c89769fb39862"
};
firebase.initializeApp(config);
// firebase.firestore(); // We don't need this anymore because we create firestore in index.js

export default firebase;
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();