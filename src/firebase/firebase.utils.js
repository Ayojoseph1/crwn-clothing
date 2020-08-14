import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDnKWj8xvVT9HWnkb9p3FSXYxjj4A0mWeQ",
    authDomain: "crwn-db-28050.firebaseapp.com",
    databaseURL: "https://crwn-db-28050.firebaseio.com",
    projectId: "crwn-db-28050",
    storageBucket: "crwn-db-28050.appspot.com",
    messagingSenderId: "199920311373",
    appId: "1:199920311373:web:6424990a240e4e15dbd004",
    measurementId: "G-DBJJG1WMDY"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select account' });
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider)

  export default firebase;