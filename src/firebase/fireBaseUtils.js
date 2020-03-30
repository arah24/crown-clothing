import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvTS8hezSWMFFYr5unMEF33oP4fvtNiE4",
  authDomain: "crown-db-34413.firebaseapp.com",
  databaseURL: "https://crown-db-34413.firebaseio.com",
  projectId: "crown-db-34413",
  storageBucket: "crown-db-34413.appspot.com",
  messagingSenderId: "362021674646",
  appId: "1:362021674646:web:8154d95554448836ed2cb7"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
