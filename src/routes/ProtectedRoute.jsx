import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

function ProtectedRoute(props) {
console.log('props :>> ', props);
    const {user} =useContext(AuthContext)

    const isUserAuth = user !==null ? true : false
  return (
    <>{isUserAuth ? props.children : <Navigate to="/login"/>}</>
  )
}

export default ProtectedRoute;