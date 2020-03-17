import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

export const fbConfig = {
    apiKey: "AIzaSyBql_6A0FWW4svQvEHASkiZ8frJBrCqKXY",
    authDomain: "accountsux.firebaseapp.com",
    databaseURL: "https://accountsux.firebaseio.com",
    projectId: "accountsux",
    storageBucket: "accountsux.appspot.com",
    messagingSenderId: "91940529479",
    appId: "1:91940529479:web:6badccd54c89769fb39862"
};

firebase.initializeApp(fbConfig);
firebase.firestore().settings({ timestampsInSnapshots:true});

export default firebase;



