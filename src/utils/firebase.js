import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB7ClYcf3U1UAtBIJ2CHb0N_OyOk9COOfk",
  authDomain: "tengolugar-c71c6.firebaseapp.com",
  projectId: "tengolugar-c71c6",
  storageBucket: "tengolugar-c71c6.appspot.com",
  messagingSenderId: "159274417066",
  appId: "1:159274417066:web:53fddeb239151e258509d3",
};
// Inicializar la aplicación de Firebase
export const initFirebase = initializeApp(firebaseConfig);

// Obtener la instancia de la base de datos Firestore
export const db = getFirestore(initFirebase);
