import {useState,useEffect} from 'react';

import { getAuth, signInWithPopup, GoogleAuthProvider,signOut, onAuthStateChanged } from "firebase/auth";

import firebaseInitialize from '../Firebase/firebase.init';


firebaseInitialize()

function UseFirebase() {

    const [users, setUsers] = useState({})
    const [isLogin, setIsLogin] = useState(true)
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInGoogle=()=>{
      setIsLogin(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            setUsers(user)
          })
          .finally(() => setIsLogin(false));
    }


    useEffect(() => {
      const unsubscribed = onAuthStateChanged(auth, user => {
          if (user) {
              setUsers(user);
          }
          else {
              setUsers({})
          }
          setIsLogin(false);
      });
      return () => unsubscribed;
  }, [])


    const logout=()=>{
      setIsLogin(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLogin(false));
    }

    return{
        users,
        signInGoogle,
        logout,
        isLogin
    }
}

export default UseFirebase;
