import { createContext, useEffect, useState } from "react";
import { auth, provider } from "../config/FirebaseConfig.js";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

//SECTION ------------------------------------------------------------------------------------------->
//NOTE - creating the context and exporting it so that it is available anywhere throughout my app

export const AuthContext = createContext();

//SECTION - // -------------------------------------------------------------------------------------->
//NOTE - Initial states relating to authentication set and saved in variables
export const AuthContextProvider = (props) => {
  const navigateToMooveezOnLog = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // ------------------------------------------------------------------------------------------------>

  //SECTION ----------------------------------------------------------------------------------------->
  //NOTE - Firebase registerUser async function that takes email and password as paramand checks if the credentials
  //are correct before completeing the process and navigating to Mooveez(home page)
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

  // ------------------------------------------------------------------------------------------------>

  //SECTION ----------------------------------------------------------------------------------------->
  //NOTE - Firebase login async function that also takes email and password as paramand checks if the credentials
  //are correct before completeing the process and navigating to Mooveez(home page)
  const Login = async (email, password) => {
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
      //NOTE - Leaving TODO for further development
      // TODO if lese handling of error to check if email is already used or not
      // if(errorCode===400){
      //   setError("invalid email")
      // }
      console.log("errorMessage :>> ", errorMessage);
      setUser(null);
    }
  };

  // ------------------------------------------------------------------------------------------------>

  //SECTION ----------------------------------------------------------------------------------------->
  //NOTE - googleLogin function uses signInWithPopup async function from Firebase that perferoms the
  //signInWithPopup function using the auth object and provider.It cecks if there is a name, email
  //and profile picture and if there is stores them in local storage within the page and logs them
  //in, then navigating to Mooveez(home page)
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

  // ------------------------------------------------------------------------------------------------>

  //SECTION ----------------------------------------------------------------------------------------->
  //NOTE - CheckIfUserIsLoggedIn function uses a Firebase onAuthStateChanged function taking the
  //auth(authentication process from Firebase) and the user and checks the state of the user and if
  //they are logged or not

  const checkIfUserIsLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // User is signed in
        // ...
        console.log("User IS logged in!", user);
        setUser(user);
        setLoading(false);
      } else {
        // User is signed out
        // ...
        console.log("User is NOT loggin in!");
        setUser(null);
        setLoading(false);
      }
    });
  };

  // ------------------------------------------------------------------------------------------------>

  //SECTION ----------------------------------------------------------------------------------------->
  //NOTE - Logout function is using an async function form Firebase signOut which checks auth and
  //provider and if passes sets user to null, if not user is still active.
  const Logout = async () => {
    try {
      await signOut(auth, provider);
      setUser(null);
      alert("Logout successful!");
    } catch (error) {
      setUser(user);
      alert("There was a problem with logging you out!");
    }
  };

  // ------------------------------------------------------------------------------------------------>

  //SECTION ----------------------------------------------------------------------------------------->
  //NOTE - UseEffect function called every time page is loaded to check if user is logged in or not
  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  // ------------------------------------------------------------------------------------------------>

  //SECTION ----------------------------------------------------------------------------------------->
  //NOTE - This is where all the functions are exported and made available to the rest of the components/pages.
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        registerUser,
        Login,
        loading,
        Logout,
        error,
        googleLogin,
        checkIfUserIsLoggedIn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
