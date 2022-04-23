import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCqFY1hb3Lf0ORQl0F9qdg81KnVgTk7-cQ",
    authDomain: "react-messaging-fc8ae.firebaseapp.com",
    projectId: "react-messaging-fc8ae",
    storageBucket: "react-messaging-fc8ae.appspot.com",
    messagingSenderId: "117068614484",
    appId: "1:117068614484:web:819d13f36c1e769df616c1",
    measurementId: "G-3B4Q1DW58T"
  
});

const db = firebaseApp.firestore();

export default db;