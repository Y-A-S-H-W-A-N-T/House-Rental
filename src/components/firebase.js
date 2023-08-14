import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getStorage } from '@firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyCvMV6yxHae2n-MP2oMyQnSYcgEVYIVqrI",
  authDomain: "rents-7a677.firebaseapp.com",
  projectId: "rents-7a677",
  storageBucket: "rents-7a677.appspot.com",
  messagingSenderId: "555322343592",
  appId: "1:555322343592:web:2d2e492f029f64c5cc829d",
  measurementId: "G-M29TXF2HNE"
};

  const app = initializeApp(firebaseConfig)
  
  export const storage = getStorage(app)
  export const db = getFirestore(app)