import React from 'react'
import { Link } from 'react-router-dom'
import './LoginSection.css'

function LoginSection() {
	return (
		<div className='LoginSection__cont'>
			<section className='hero-section'>
				<div className='section-style'>
					<h1>Welcome to your professional community</h1>
					<div className='section-style2'>
						<img src='20210313114223!Google__G__Logo.svg' alt='google-icon' />
						<Link to='/signIn'>
							<h3 className='hov-black'>Sign in with Google</h3>
						</Link>
					</div>
				</div>
				<img src='login-hero.svg' alt='hero' />
			</section>
		</div>
	)
}

export default LoginSection
