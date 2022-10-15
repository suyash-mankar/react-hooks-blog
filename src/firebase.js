import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyABP9RtCuS4BOhOZYopzzEnyud2wGsz2DU",
    authDomain: "react-hooks-blog-7fe9e.firebaseapp.com",
    projectId: "react-hooks-blog-7fe9e",
    storageBucket: "react-hooks-blog-7fe9e.appspot.com",
    messagingSenderId: "294220410783",
    appId: "1:294220410783:web:09727d8599e9511aba17aa"
};


firebase.initializeApp(firebaseConfig);


export const firestore = firebase.firestore();
