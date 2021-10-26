// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp ({
  apiKey: "AIzaSyD-yopmPNi6Hr9lJyRiWcV1XHMgmEi2GPU",
  authDomain: "smarthomeapp-52e02.firebaseapp.com",
  projectId: "smarthomeapp-52e02",
  storageBucket: "smarthomeapp-52e02.appspot.com",
  messagingSenderId: "849217606595",
  appId: "1:849217606595:web:ef83eaf9a26e42fdd46376",
  measurementId: "G-63B5QEVBG7"
})

// Initialize Firebase
export const db = firebase.firestore(app)
export const BatteriesRef = db.collection("Batteries")
export const auth = app.auth()
export default app


