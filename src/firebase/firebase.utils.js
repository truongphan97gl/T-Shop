import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC0tsVx1JyMXcqVOdFAUmXNs8tjLnbONlU",
  authDomain: "tshop-db.firebaseapp.com",
  databaseURL: "https://tshop-db.firebaseio.com",
  projectId: "tshop-db",
  storageBucket: "tshop-db.appspot.com",
  messagingSenderId: "459467780740",
  appId: "1:459467780740:web:fbdb8a75855343fd7408d1",
  measurementId: "G-9BYXXT54VJ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
