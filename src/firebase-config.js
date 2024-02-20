import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGIN_ID,
  appId: process.env.REACT_APP_FIREBASE_APPI_ID,
  measurementId: process.env.  REACT_APP_FIREBASE_MEASUREMENTID
};

console.log(apiKey)
// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app)
export const imagedb = getStorage(app)

console.log(REACT_APP_FIREBASE_API_KEY)