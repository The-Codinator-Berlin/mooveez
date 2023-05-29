import React, { useContext, useState } from "react";
import "../css/LoginRegister.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// TODO Make an alert when user logs in but doesn't have account
function Login() {
  

  const handleGoogle = () => {
    googleLogin();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, googleLogin } = useContext(AuthContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginClick = () => {
    login(email, password);
  };
  

  return (
    <div className="loginBoxContainer">
      <div className="loginBox">
        <p className="text-6xl text-red-600 font-light">Login</p>
        <span>
          <h2 className=" py-4 pb-0 text-blue-600">
            Please login to access features
          </h2>
          {error && <h1>{error}</h1>}
        </span>
        <br></br>
        <div className="mt-2">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="block w-80 text-center rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-red-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6"
            placeholder="Username..."
          />
        </div>
        <br></br>
        <div className="mt-2">
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="block w-70 text-center rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-red-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6"
            placeholder="Password..."
          />
        </div>
        <br></br>
        <button
          className="bg-blue-600 w-40 rounded hover:bg-slate-400 hover:active:bg-green-600 mt-2"
          onClick={handleGoogle}
        >
          Singin with Google
        </button>
        <br></br>

        <button
          variant="info"
          onClick={handleLoginClick}
          className="bg-red-600 rounded  hover:bg-slate-400 hover:active:bg-green-600 mt-2"
        >
          Go {">"}
        </button>
        <br></br>

        {/* //NOTE - Alternative way to home after login */}
        {/* <span>
          {user ? (
            <>
              <Link
                to="/"
                className="text-neutral-50 border-blue-700 rounded bg-green-500 hover:active:bg-green-500 hover:bg-blue-500 logOutButton"
              >
                Continue to Mooveez
              </Link>
            </>
          ) : (
            [""]
          )}
        </span> */}

        <span className="text-neutral-50 hover:text-slate-400">
          <Link to="/register">
            <u>Create a free account</u>
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
