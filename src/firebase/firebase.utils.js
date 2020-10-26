import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// firebase init with the custom config //

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

// usefull fct to interract with the db //

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating the user . ", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndItems = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch(); // batch in order for us to make all the instructions inside ( if any of them fail, all of them should fail ) case of a internet disconnection

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      id: doc.id,
      title,
      items,
      routeName: encodeURI(title.toLowerCase()), // convert a string to a link readable and without special caracter so it can be accepted by the browser
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

// Auth methods init. section //

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
const FacebookProvider = new firebase.auth.FacebookAuthProvider();

GoogleProvider.setCustomParameters({ propmt: "select_account" });
FacebookProvider.setCustomParameters({ propmt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);
export const signInWithFaceBook = () => auth.signInWithPopup(FacebookProvider);

export default firebase;
