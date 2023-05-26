import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

function ProtectedRoute(props) {

    const {user} =useContext(AuthContext)
  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute