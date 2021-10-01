import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';

const config = {
    apiKey: 'AIzaSyB10HpW5DDzzm9k9Btjm1oB7ufGwbAJ1bs',
    authDomain: 'chat-app.firebaseapp.com',
    databaseURL: 'https://chat-app-default-rtdb.asia-southeast1.firebasedatabase.app/',
    projectId: 'chat-app',
    storageBucket: 'chat-app.appspot.com',
    messagingSenderId: '4598573577',
    appId: '1:4598573577:web:3fa41830d490357a6526d8',
};

// Initialize Firebase
const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();