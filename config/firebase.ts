// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import { getFirestore  } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider  } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJEYiFWK2Cb5dOrPiKsldyLDMEWvfb5L0",
  authDomain: "app-chap-540bf.firebaseapp.com",
  projectId: "app-chap-540bf",
  storageBucket: "app-chap-540bf.appspot.com",
  messagingSenderId: "155093538433",
  appId: "1:155093538433:web:b6d424542948b842265f80"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db=getFirestore(app)

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {db,auth,provider}

