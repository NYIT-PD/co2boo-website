
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYHTLdByzPXYT6EU3nr5LugUA-ddBw4Ck",
  authDomain: "carbonfootprintsignin.firebaseapp.com",
  projectId: "carbonfootprintsignin",
  storageBucket: "carbonfootprintsignin.appspot.com",
  messagingSenderId: "784694746460",
  appId: "1:784694746460:web:d93bd8f84e649dab8bf599"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db, auth};