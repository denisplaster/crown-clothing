import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyBWsyvcmkrhsai5eV46Q-TJf1EFUpnwqiw",
    authDomain: "crown-db-54d5c.firebaseapp.com",
    databaseURL: "https://crown-db-54d5c.firebaseio.com",
    projectId: "crown-db-54d5c",
    storageBucket: "crown-db-54d5c.appspot.com",
    messagingSenderId: "408944842820",
    appId: "1:408944842820:web:de8d7da6c2eda8de3b4411"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;