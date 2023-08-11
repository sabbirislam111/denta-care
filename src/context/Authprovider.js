import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { set } from 'date-fns';

export const AuthContext = createContext()
const auth = getAuth(app)



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cancel, setCancel] = useState('');

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const setUserName = (userInfo) => {
        return updateProfile(user, userInfo)
    }

   const userLogOut = () => {
        return signOut(auth);
   } 

    const userLogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

   

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => unsubscribe();

    },[])

    const authInfo = {
        createUser,
        userLogIn,
        setUserName,
        userLogOut,
        loading,
        user,
        cancel, 
        setCancel
    }

    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;