import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD8qco9qpM7V6Q-CHM1QzfqgvKcWQZMfAQ",
  authDomain: "ecom-store-782b3.firebaseapp.com",
  databaseURL: "https://ecom-store-782b3.firebaseio.com",
  projectId: "ecom-store-782b3",
  storageBucket: "ecom-store-782b3.appspot.com",
  messagingSenderId: "426185988615",
  appId: "1:426185988615:web:95eda80764bf512c92a8a2",
  measurementId: "G-3TZC7JFEV5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
const FacebookProvider = new firebase.auth.FacebookAuthProvider();

GoogleProvider.setCustomParameters({ propmt: "select_account" });
FacebookProvider.setCustomParameters({ propmt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);
export const signInWithFaceBook = () => auth.signInWithPopup(FacebookProvider);

export default firebase;
