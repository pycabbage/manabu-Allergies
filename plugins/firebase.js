import firebase from "firebase/app";

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

export default firebase