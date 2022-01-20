import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import SignInScreen from './SignInScreen'
import SignUpScreen from './SignUpScreen'

function MainLogin() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/signIn' element={<SignInScreen />} />
				<Route path='/signUp' element={<SignUpScreen />} />
			</Routes>
		</div>
	)
}

export default MainLogin
