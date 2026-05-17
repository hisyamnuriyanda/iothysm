// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import {
    getDatabase
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyD6N0Mn2eQFgtYzfGSN0vVec7gf1IVe9eI",
    authDomain: "iothsym.firebaseapp.com",
    databaseURL: "https://iothsym-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "iothsym",
    storageBucket: "iothsym.firebasestorage.app",
    messagingSenderId: "747762617946",
    appId: "1:747762617946:web:ceceb7658982c7ecb99263"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
