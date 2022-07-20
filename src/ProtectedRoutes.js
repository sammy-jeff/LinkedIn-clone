import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoutes({ userAuth }) {
	return userAuth ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoutes
