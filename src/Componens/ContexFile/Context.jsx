import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {createContext, useEffect, useState} from "react";
import {Auth} from "../Firebase/firebaseAuth";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);
  const [loding2, setLoding2] = useState(true);

  const createuser = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  };
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(Auth, (currentuser) => {
      setUser(currentuser);
      setLoding(false);
      setLoding2(false);
    });
    return () => unsubcribe();
  }, []);

  const logout = () => {
    localStorage.clear();

    return signOut(Auth);
  };

  const googleLogin = () => {
    return signInWithPopup(Auth, provider);
  };
  const forgotPass = (email) => {
    return sendPasswordResetEmail(Auth, email);
  };

  const exportDetais = {
    createuser,
    user,
    loding,
    loding2,
    loginUser,
    logout,
    googleLogin,
    forgotPass,
  };

  return <AuthContext value={exportDetais}> {children}</AuthContext>;
};
