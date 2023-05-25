import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/FirebaseConfig.js";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);

  const registerUser = async (email, password) => {
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
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      setUser(user)

    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorMessage :>> ", errorMessage);
      setUser(null)
    }
  };

  const checkIfUserIsLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // User is signed in
        // ...
        console.log("User IS logged in!", user)
        setUser(user);
      } else {
        // User is signed out
        // ...
        console.log("User is NOT loggin in!");
        setUser(null)
      }
    });
  }

useEffect(() => {
 checkIfUserIsLoggedIn()
}, [])


  return (
    <AuthContext.Provider value={{ user, setUser, registerUser, login }}>
      {props.children}
    </AuthContext.Provider>
  );
};
  