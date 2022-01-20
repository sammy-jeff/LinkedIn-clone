import React from 'react'
import LoginSection from './LoginSection'
import Nav from './Nav'
import './Login.css'

function Login() {
	return (
		<div className='login'>
			<Nav />
			<LoginSection />
		</div>
	)
}

export default Login
