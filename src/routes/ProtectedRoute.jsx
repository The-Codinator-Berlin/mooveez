import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute(props) {
  const { user, loading } = useContext(AuthContext);
  const isUserAuth = user !== null;
  console.log("isUserAuth :>> ", isUserAuth);

  return (
    <>
      {loading ? (
        <h1 style={{ color: "white" }}>...loading.....</h1>
      ) : isUserAuth ? (
        props.children
      ) : (
        <>
          {alert("Please login to access features")}
          <Navigate to="/login" />
        </>
      )}
    </>
  );
}
export default ProtectedRoute;
