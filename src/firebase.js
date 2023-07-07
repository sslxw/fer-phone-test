import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyByp8XIVagmHquoEk59NaxOmJsM_EyF5yo",
    authDomain: "areef-4d5d9.firebaseapp.com",
    projectId: "areef-4d5d9",
    storageBucket: "areef-4d5d9.appspot.com",
    messagingSenderId: "718920861601",
    appId: "1:718920861601:web:21addf384df04d4b556de0",
    measurementId: "G-604XK7ML3R"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

export const auth = getAuth(app);