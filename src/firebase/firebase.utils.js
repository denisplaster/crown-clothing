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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
    console.log(snapShot);
  
    if (!snapShot.exists) {
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;