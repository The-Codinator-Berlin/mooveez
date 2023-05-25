import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/FirebaseConfig.js";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);

  const registerUser = async (email, password) => {
    // console.log('email, password :>> ', email, password);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log('userCrential :>> ', userCredential);
      const user = userCredential.user;
      setUser(user)

    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('errorMessage :>> ', errorMessage);
      setUser(null)
    }
  };

  const login = async (email, password) => {
    // console.log('email, password :>> ', email, password);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log('userCrential :>> ', userCredential);
      const user = userCredential.user;
      setUser(user)

    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorMessage :>> ", errorMessage);
      setUser(null)
    }
  };

  
  return (
    <AuthContext.Provider value={{ user, setUser, registerUser, login }}>
      {props.children}
    </AuthContext.Provider>
  );
};
  