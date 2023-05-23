import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../css/Navigation.css";
import { AuthContext } from "../context/AuthContext";


function Navigation() {
  
  const { setUser } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
    const login = () => {
  setUser({
    name:"Carl",
    });
  
    };

  return (
    <>
      <nav className="navigation-box border-b	border-blue-700 h-10 bg-blue-950 p-2">
        <Link
          to="/"
          className="navigation-links bg-neutral-900 rounded text-neutral-50 hover:active:bg-green-600 hover:bg-slate-400"
        >
          Mooveez
        </Link>
        <Link
          to="/about"
          className="navigation-links bg-neutral-900 rounded text-neutral-50 hover:active:bg-green-600 hover:bg-slate-400"
        >
          About
        </Link>

        { user ? <Link to="/login/register" className="text-neutral-50 border-blue-700 rounded bg-green-600 hover:active:bg-green-600 hover:bg-slate-400 logOutButton">Log out  </Link> : <Link to="/login/register" className=" bg-red-500	rounded text-neutral-50 navigation-link-login hover:active:bg-green-600 hover:bg-slate-400 loginButton border-blue-700 ">Login/Register</Link> }
       
        {/* <Link
         to="/login/register"
          className="bg-red-500	rounded text-neutral-50 navigation-link-login hover:active:bg-green-600 hover:bg-slate-400 loginButton "
        >
          Login/Register
        </Link> */}
      </nav>
    </>
  );
}

export default Navigation;
