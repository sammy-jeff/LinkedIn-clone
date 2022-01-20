import React from 'react'
import { BrowserRouter, Link, Router, useNavigate } from 'react-router-dom'
import './Nav.css'
function Nav() {
	const navigate = useNavigate()
	return (
		<div className='cont1'>
			<div className='container1'>
				<img
					src='Linkedin_logo_PNG4.png'
					alt='Linkedin'
					onClick={() => {
						navigate('/')
					}}
				/>

				<div className='signIn'>
					<h2 className='join__btn'>
						<Link to='/signUp'>Join now</Link>
					</h2>

					<h2 className='signIn__btn'>
						<Link to='/signIn'> Sign in</Link>
					</h2>
				</div>
			</div>
		</div>
	)
}

export default Nav
