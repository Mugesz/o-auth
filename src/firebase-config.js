import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCu_jpEaFSMOQvmaLaSkf5kJMFgZgmKXGQ",
  authDomain: "o-auth-b1623.firebaseapp.com",
  projectId: "o-auth-b1623",
  storageBucket: "o-auth-b1623.appspot.com",
  messagingSenderId: "668903845233",
  appId: "1:668903845233:web:57c714b52a856571d85ad0",
  measurementId: "G-34VVBVXQTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const auth = getAuth(app)

export default auth;