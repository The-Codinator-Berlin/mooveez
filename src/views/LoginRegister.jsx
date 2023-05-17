import React from "react";
import "../css/LoginRegister.css";
function LoginRegister() {
  return (
    <div className="loginBoxContainer">
      <div className="loginBox">
        <p className="text-4xl text-red-600 font-light">Login</p>
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

        <button className="bg-red-600 rounded hover:bg-slate-400">Submit</button>
        <br></br>
        <p className="text-neutral-50 hover:text-slate-400"><u>Create a free account</u></p>
      </div>
    </div>
  );
}

export default LoginRegister;
