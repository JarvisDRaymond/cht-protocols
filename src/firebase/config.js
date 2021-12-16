import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import 'firebase/compat/storage';
import 'firebase/firestore';


 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBxErri99ZWRXpktcvVgXu-LiuOjQIQVrY",
   authDomain: "photo-app-a9bee.firebaseapp.com",
   projectId: "photo-app-a9bee",
   storageBucket: "photo-app-a9bee.appspot.com",
   messagingSenderId: "1002628104484",
   appId: "1:1002628104484:web:ce9086c3710a606d7433b1"
 };


 // Initialize Firebase
 const app = firebase.initializeApp(firebaseConfig);

 const projectStorage = firebase.storage();
 const projectFirestore = firebase.firestore(); 
 const timestamp = firebase.firestore.FieldValue.serverTimestamp;
 export {projectFirestore, projectStorage, timestamp}; 
