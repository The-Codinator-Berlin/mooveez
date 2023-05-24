import React, { useContext } from 'react'
import "../css/Register.css"



function Register() {
 
  
  return (
    <div className="RegisterContainer">
      <div className="RegisterBox">
        <p className="text-6xl text-red-600 font-light">Register</p>
        <span>
          
            <h2 className=" py-4 text-blue-600">
              Input a username & password
            </h2>
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
          onClick={Register}
          className="bg-red-600 rounded hover:bg-slate-400 hover:active:bg-green-600"
        >
          Go {">"}
        </button>
      </div>
    </div>
  );
};

export default Register;
