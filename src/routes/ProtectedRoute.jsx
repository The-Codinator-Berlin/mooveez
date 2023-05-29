import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

function ProtectedRoute(props) {
  const { user } = useContext(AuthContext)
  const isUserAuth = user !== null

  if (!isUserAuth) {
    alert('Please login to access features');
    return <Navigate to="/login" />;
  }

  return <>{props.children}</>;
}

export default ProtectedRoute;