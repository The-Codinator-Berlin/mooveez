import { Link } from "react-router-dom";
import React, { useContext } from "react";
import "../css/Navigation.css";
import { AuthContext } from "../context/AuthContext";

function Navigation() {
  const { user, Logout } = useContext(AuthContext);

  /* //SECTION -------------------------------------------------------------------------------------------------------------> */
  //NOTE - logot function called from AuthContext via button onClick function handleLogoutUser
  const handleLogoutUser = () => {
    Logout();
  };

  return (
    <>
      {" "}
      {/* //SECTION ----------------------------------------------Navbar----------------------------------------------------> */}
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
        {/*//SECTION ------------------------------------------------------------------------------------------------------->
         */}
        {/* //NOTE - Leaving here for further dvelopment for name input */}
        {/* <span> */}
        {/* {" "} */}
        {/* {user ? (
            <h5 className="text-green-500">{user.name} is logged in! </h5>
          ) : (
            <h2 className=" py-4 text-blue-600">
              {" "}
            </h2>
          )} */}
        {/* </span> */}

        {/* //SECTION - // ------------------------------------------------------------------------------------------------>
         */}
        {/* //NOTE - Is user logged in? If so it shows users email in the Navbar, displays Favouites nav link, and Logout link, otherwise only Mooveez, about and Login/Register */}
        {user ? (
          <>
            <h5 className="text-green-500">{user.email} is logged in! </h5>
            {/*//NOTE -  Google profile pic/ Still showing when logged out/ Leaving for further development */}
            {/* {user && (
              <span>
                <img
                  className="profilePic"
                  src={localStorage.getItem("profilePic")}
                  alt="Profile"
                />
              </span>
            )} */}
            <Link
              to="/favourites"
              className="text-neutral-50 border-blue-700 rounded bg-green-600 hover:active:bg-red-500 hover:bg-slate-400 favouritesButton"
            >
              Favourites
            </Link>
            <Link
              onClick={handleLogoutUser}
              to="/"
              className="text-neutral-50 border-blue-700 rounded bg-red-500 hover:active:bg-red-500 hover:bg-slate-400 logOutButton"
            >
              Logout{" "}
            </Link>
          </>
        ) : (
          <Link
            to="/login"
            className=" bg-blue-700	rounded text-neutral-50 navigation-link-login hover:active:bg-green-600 hover:bg-slate-400 loginButton border-blue-700 "
          >
            Login/Register
          </Link>
        )}
      </nav>
    </>
  );
}

export default Navigation;
