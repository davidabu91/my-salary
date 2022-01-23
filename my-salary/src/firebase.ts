import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD2ipaZtJ_TYuzRj0EsjYcltZ8K8LlRbQM",
  authDomain: "my-salary-otniel.firebaseapp.com",
  projectId: "my-salary-otniel",
  storageBucket: "my-salary-otniel.appspot.com",
  messagingSenderId: "384835070648",
  appId: "1:384835070648:web:d9dd7eb0901389c0fce24d",
  measurementId: "G-78T688GEXK"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });