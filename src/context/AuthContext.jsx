import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, provider } from "../config/FirebaseConfig.js";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();


export const AuthContextProvider = (props) => {
  const navigateToMooveezOnLog = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const registerUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("userCrential :>> ", userCredential);
      const user = userCredential.user;
      setUser(user);
      alert("Your registration was successful!");
      navigateToMooveezOnLog("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorMessage :>> ", errorMessage);
      setUser(null);
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
      setUser(user);
      navigateToMooveezOnLog("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // TODO if lese handling of error to check if email is already used or not.
      // if(errorCode===400){
      //   setError("invalid email")
      // }
      console.log("errorMessage :>> ", errorMessage);
      setUser(null);
    }
  };

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
      navigateToMooveezOnLog("/");
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfUserIsLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // User is signed in
        // ...
        console.log("User IS logged in!", user);
        setUser(user);
      } else {
        // User is signed out
        // ...
        console.log("User is NOT loggin in!");
        setUser(null);
      }
    });
  };

  const logout = async () => {
    try {
      await signOut(auth, provider);
      setUser(null);
      alert("Logout successful!");
    } catch (error) {
      setUser(user);
      alert("There was a problem with logging you out!");
    }
  };

  // const AccessMoreInfoForMooveeWhenLogged = () => {
  //   if (user) {
  //     MooveeCardMoreButton()
  //   } else {
  //     alert("Please login to access features!");
  //   }
  // };

  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, registerUser, login, logout, error, googleLogin }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
