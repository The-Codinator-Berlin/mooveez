import React, { useContext, useState } from 'react'
import "../css/Register.css"



function Register() {

  const handleEmailChange = (e) => {
  setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setEmail(e.target.value)
    }

 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
  
  return (
    <div className="RegisterContainer">
      <div className="RegisterBox">
        <p className="text-6xl text-red-600 font-light">Register</p>
        <span>
          
            <h2 className=" py-4 text-blue-600">
              Input your first name & create a username & password
            </h2>
        </span>
        {/* <br></br>
        <div className="mt-2">
          <input
            type="name"
            name="name"
            id="name"
            value ={name}
            className="block w-70 rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-red-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6"
            placeholder="First name..."
          />
        </div> */}
        <br></br>
        <div className="mt-2">
          <input
            type="email"
            name="email"
            id="email"
            value ={email}
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
        <button
          variant="info"
          // onClick={HandleRegisterClick}
          className="bg-red-600 rounded hover:bg-slate-400 hover:active:bg-green-600"
        >
          Go {">"}
        </button>
      </div>
    </div>
  );
};

export default Register;
