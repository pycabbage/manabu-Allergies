import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBPBI1X80qznbcXFX5IM4JraiRPOLeb2MA",
  authDomain: "manabu-allergies.firebaseapp.com",
  projectId: "manabu-allergies",
  storageBucket: "manabu-allergies.appspot.com",
  messagingSenderId: "653982808749",
  appId: "1:653982808749:web:8c52b4786ce2acd5bce424",
  measurementId: "G-CHCRY1DZVK"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export default firebase

export { auth, db, storage }