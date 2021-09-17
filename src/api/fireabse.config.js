import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAmIR5U3eFHmwikKq1QZP9YwL5BQgLfKNo",
  authDomain: "raregif-2c532.firebaseapp.com",
  projectId: "raregif-2c532",
  storageBucket: "raregif-2c532.appspot.com",
  messagingSenderId: "358948833563",
  appId: "1:358948833563:web:639a91aabc6e9d00426bbe",
  measurementId: "G-EP6ESEY0M8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
export const db = firebase.firestore();
