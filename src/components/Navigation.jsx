import React from "react";
import { Link } from "react-router-dom";
import "../css/Navigation.css";

function Navigation() {
  return (
    <>
      <nav className="navigation-box border-b	border-blue-700 h-10 bg-blue-950 p-2">
        <Link
          to="/"
          className="navigation-links bg-neutral-900 rounded text-neutral-50 hover:active:bg-green-600 hover:bg-slate-400"
        >
          Home
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link
          to="/mooveez"
          className="navigation-links bg-neutral-900 rounded text-neutral-50 hover:active:bg-green-600 hover:bg-slate-400"
        >
          Mooveez
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link
          to="/about"
          className="navigation-links bg-neutral-900 rounded text-neutral-50 hover:active:bg-green-600 hover:bg-slate-400"
        >
          About
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link
          to="/login/register"
          className="bg-red-500	rounded text-neutral-50 navigation-links hover:active:bg-green-600 hover:bg-slate-400"
        >
          Login
        </Link>
      </nav>
    </>
  );
}

export default Navigation;
