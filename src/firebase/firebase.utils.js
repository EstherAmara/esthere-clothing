import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCA1e2qrxXpLRv8YZBpFsrEpA_CvUHMcZI",
    authDomain: "esthere-db.firebaseapp.com",
    databaseURL: "https://esthere-db.firebaseio.com",
    projectId: "esthere-db",
    storageBucket: "esthere-db.appspot.com",
    messagingSenderId: "267439548344",
    appId: "1:267439548344:web:9893d96af6e6b944ef114d",
    measurementId: "G-7TW9XRG8HB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
