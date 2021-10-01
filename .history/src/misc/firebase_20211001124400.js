import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';

const config = {
    apiKey: "AIzaSyDDC2lCsy2fGuJsLkttIlrGWFwkgoaww5o",
    authDomain: "chat-web-app-a7729.firebaseapp.com",
    databaseURL: "https://chat-web-app-a7729-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-a7729",
    storageBucket: "chat-web-app-a7729.appspot.com",
    messagingSenderId: "985916971305",
    appId: "1:985916971305:web:939220a984941e1d04bf38"
};

// Initialize Firebase
const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();