import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyASesJoMw-hIpCvyrwZorB-8g1W0OWATTU",
  authDomain: "manabu-allergies-a9031.firebaseapp.com",
  projectId: "manabu-allergies-a9031",
  storageBucket: "manabu-allergies-a9031.appspot.com",
  messagingSenderId: "894469061687",
  appId: "1:894469061687:web:e4017d14e2a055287913b2",
  measurementId: "G-EHLK3N0HCB"
};


if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export default firebase

export { auth, db, storage }
