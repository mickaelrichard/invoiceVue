import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBsNdnp6DEShTLnacl5iL_M03WOg4XVqhM",
  authDomain: "invoice-app-64fa6.firebaseapp.com",
  projectId: "invoice-app-64fa6",
  storageBucket: "invoice-app-64fa6.appspot.com",
  messagingSenderId: "49392077345",
  appId: "1:49392077345:web:22cd30e3797ba08847b160",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
