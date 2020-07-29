import firebase from 'firebase'
import 'firebase/auth'
const config = {
    apiKey: "AIzaSyCMl7ftj2bgKOA8yQ3iiFKHbyJRgyTOLt4",
    authDomain: "order-app-3461a.firebaseapp.com",
    databaseURL: "https://order-app-3461a.firebaseio.com",
    projectId: "order-app-3461a",
    storageBucket: "order-app-3461a.appspot.com",
    messagingSenderId: "947445722761",
    appId: "1:947445722761:web:1751fa2ba3a34611746058",
    measurementId: "G-YDD94KL3QK"
  };
  
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
