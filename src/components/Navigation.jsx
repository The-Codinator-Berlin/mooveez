import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Navigation.css';


function Navigation() {
  return (
    <>
        <nav className="navigation-box border-b	border-blue-700 h-10 bg-blue-950 p-2">
          <Link className="navigation-links bg-neutral-900 rounded text-neutral-50">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link className="navigation-links bg-neutral-900 rounded text-neutral-50">Mooveez</Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link className="navigation-links bg-neutral-900 rounded text-neutral-50">About</Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link className="bg-red-500	rounded text-neutral-50 navigation-links">Login</Link>
        </nav>
      
    </>
  )
}

export default Navigation;