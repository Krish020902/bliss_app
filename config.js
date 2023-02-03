import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"



export const firebaseConfig = {
  apiKey: "AIzaSyDJAXgO_47jIFtq3fZ7QU1hzrwFQoczsJk",
  authDomain: "test-de110.firebaseapp.com",
  projectId: "test-de110",
  storageBucket: "test-de110.appspot.com",
  messagingSenderId: "280255693872",
  appId: "1:280255693872:web:78062c8f72cca1243a99f5",
  measurementId: "G-L8N6MXB9WK"

}


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)

}