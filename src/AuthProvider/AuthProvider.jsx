import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app);
    const goolgeProvider = new GoogleAuthProvider()


    const createUserWithEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, goolgeProvider)
    }

    const logInWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const userInfo = {
        createUserWithEmail,
        logInWithGoogle,
        logInWithEmail,
        logOut,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;