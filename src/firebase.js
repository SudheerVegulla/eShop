import firebase from 'firebase/compat/app';
// import { initializeApp } from 'firebase/app';
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBFplvfTVYmyLC-BWnsVc6N2vuO_h6gixs",
    authDomain: "eshop-55793.firebaseapp.com",
    projectId: "eshop-55793",
    storageBucket: "eshop-55793.appspot.com",
    messagingSenderId: "684504919264",
    appId: "1:684504919264:web:94040de28619d477123485",
    measurementId: "G-17L472BDZW"
  };


  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();

  const auth=firebase.auth()

  export {db,auth};