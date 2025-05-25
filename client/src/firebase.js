// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyC0TyWmgetcpBBn5mm1mXtKLTfewZp0ZQg",
  authDomain: "netflix-clone-cd124.firebaseapp.com",
  projectId: "netflix-clone-cd124",
  storageBucket: "netflix-clone-cd124.firebasestorage.app",
  messagingSenderId: "639289297150",
  appId: "1:639289297150:web:665ee4c105a9440c4b7daf"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, email, password) => {
  try {
    const res =  await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user; 
    await addDoc(collection(db, 'user'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    })
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '))
  }
}
const login = async (email, password) => {
  try {
   await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '))
  }
}

const logout = () => {
  signOut(auth);
}

export {auth, db, login, logout, signup }