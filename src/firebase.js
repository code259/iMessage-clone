import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI6KJaqrZi62HY-80bVs3cpZ3EgnuTClk",
  authDomain: "imessage-clone-733b4.firebaseapp.com",
  databaseURL: "https://imessage-clone-733b4.firebaseio.com",
  projectId: "imessage-clone-733b4",
  storageBucket: "imessage-clone-733b4.appspot.com",
  messagingSenderId: "367578663838",
  appId: "1:367578663838:web:6f93a4885408743e6e648f",
  measurementId: "G-BK2WFSC839",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
