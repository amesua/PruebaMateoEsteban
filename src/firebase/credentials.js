import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDIhtqUKwy7q2O0NBVoO-RBnuyaFOaTEeg",
  authDomain: "prueba-b6647.firebaseapp.com",
  databaseURL: "https://prueba-b6647-default-rtdb.firebaseio.com",
  projectId: "prueba-b6647",
  storageBucket: "prueba-b6647.appspot.com",
  messagingSenderId: "389498816576",
  appId: "1:389498816576:web:1eadd26102160da69cb7a5",
};

export const credentials = initializeApp(firebaseConfig);
