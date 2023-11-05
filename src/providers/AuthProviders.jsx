import { createContext, useEffect, useState } from "react"
import app from "../firebase/firebase.config"
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext()

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    // signup
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login 
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password)
    }
    // update users name and profile
    const userDetails = (displayName, photoUrl) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName, photoUrl
        })
    }
    // signOut
    const logOut = () => {
        setLoading(true)
        return signOut(auth)

    }
    // google login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    //   observe user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);
    const authInfo = {
        user, 
        loading,
        signUp, 
        login,
        logOut,
        userDetails,
        googleLogin,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProviders