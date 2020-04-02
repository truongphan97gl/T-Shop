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
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { email, displayName } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ email, displayName, createdAt, ...additionalData });
    } catch (error) {
      console.log("there is an error", error);
    }
  }

  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
