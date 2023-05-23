import React, { useContext } from "react";
import "../css/LoginRegister.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function LoginRegister() {
  const { setUser } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const login = () => {
    setUser({
      name: "Carl",
    });
  };

  return (
    <div className="loginBoxContainer">
      <div className="loginBox">
        <p className="text-6xl text-red-600 font-light">Login</p>
        <span>
          {" "}
          {user ? (
            <h5 className="text-green-500">{user.name} is logged in! </h5>
          ) : (
            <h2 className=" py-4 text-blue-600">
              Please login to access features
            </h2>
          )}
        </span>
        <br></br>
        <div className="mt-2">
          <input
            type="text"
            name="name"
            id="name"
            className="block w-70 rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-red-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6"
            placeholder="Username..."
          />
        </div>
        <br></br>
        <div className="mt-2">
          <input
            type="text"
            name="password"
            id="password"
            className="block w-70 rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-red-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6"
            placeholder="Password..."
          />
        </div>
        <br></br>
        <button
          variant="info"
          onClick={login}
          className="bg-red-600 rounded hover:bg-slate-400 hover:active:bg-green-600"
        >
          Go {">"}
        </button>
        <br></br>
        <span className="text-neutral-50 hover:text-slate-400">
          <Link to="/register">
            <u>Create a free account</u>
          </Link>
        </span>
      </div>
    </div>
  );
}

export default LoginRegister;
