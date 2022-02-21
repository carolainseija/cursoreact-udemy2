import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBo76S91-7g-dfgp3YAZXtwviTxtjYWDrE",
  authDomain: "finanzas-c752c.firebaseapp.com",
  projectId: "finanzas-c752c",
  storageBucket: "finanzas-c752c.appspot.com",
  messagingSenderId: "51185708269",
  appId: "1:51185708269:web:fe9519d8d6f92fed53f0e4",
  measurementId: "G-G0Y61EGQDM"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default (app, db);