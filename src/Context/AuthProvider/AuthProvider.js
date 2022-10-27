import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import { useState } from "react";
import { useEffect } from "react";
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (profile) => {
    return updateProfile(auth.loginUser, profile);
  };
  const emailVerified = () => {
    return sendEmailVerification(auth.loginUser);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loginUser) => {
      console.log("use state change", loginUser);
      setUser(loginUser);
      // if (loginUser === null || loginUser.emailVerified) {
      //   setUser(loginUser);
      // }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    logOut,
    user,
    setUser,
    providerLogin,
    createUser,
    login,
    error,
    setError,
    emailVerified,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
