import firebase from "firebase/app";

import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC8QIq8FKh1prEsVFh18rWKwlX2kGwDHms",
    authDomain: "resume-builder-ac508.firebaseapp.com",
    projectId: "resume-builder-ac508",
    storageBucket: "resume-builder-ac508.appspot.com",
    messagingSenderId: "616540142537",
    appId: "1:616540142537:web:605db71b08571491570618"
  };

firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth();
export const firestore=firebase.firestore();