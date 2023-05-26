import React, { useContext, useState } from "react";
import "../css/Register.css";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Register() {
  const { registerUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // //NOTE - For Name input/ further development.
  // const [name, setName] = useState("");

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const HandleRegisterClick = () => {
    if (!email.includes("@") || password.length < 6) {
      alert("Please check email/ Password should be at least 6 characters!")
    } else {
      registerUser(email, password);
    }
  };

  return (
    <div className="RegisterContainer">
      <div className="RegisterBox">
        <p className="text-6xl text-red-600 font-light">Register</p>
        <span>
          <h2 className=" py-4 text-blue-600">
            {/* //NOTE - Left for further development */}
            {/* Input your first name, email & create a password */}
            Please add you email and create a password
          </h2>
        </span>
        <br></br>

        {/* //NOTE - Left for further development (Name input) */}
        {/* <br></br>
        <div className="mt-2">
          <input
            type="name"
            name="name"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="block w-70 rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-red-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6"
            placeholder="First name..."
          />
        </div>
        <br></br> */}
        <div className="mt-2">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="block w-70 rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-red-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6"
            placeholder="Email..."
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
            className="block w-70 rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-red-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6"
            placeholder="Password..."
          />
        </div>
        <br></br>
        <br></br>

        <button
          variant="info"
          onClick={HandleRegisterClick}
          className="bg-red-600 rounded hover:bg-slate-400 hover:active:bg-green-600"
        >
          Go {">"}
        </button>
        <br></br>

        <Link to="/login"className="text-neutral-50 hover:text-slate-400 mt-2">
          <u>Already have an acount? Go to Login page {">"}</u>
        </Link>
      </div>
    </div>
  );
}

export default Register;
