import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignUpScreen.css'
function SignUpScreen() {
	const [revealPass__reg, setRevealPass__reg] = useState(false)
	let navigate = useNavigate()
	let [text__reg, setText__reg] = useState('')
	let [regex__reg, setRegex__reg] = useState(false)
	let regex_email = /^([a-z0-9\.-]+)@([a-z|\d]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
	let regex__phone = /^[\d]{10}$/
	const ok = 123

	const activate__regex = (text) => {
		setText__reg(text)
		if (text__reg !== '') {
			if (!regex_email.test(text__reg) && !regex__phone.test(text__reg)) {
				setRegex__reg(true)
			} else {
				setRegex__reg(false)
			}
		} else {
			return
		}
		// console.log(text__reg.length - 1)
		// console.log(regex_email.test(text__reg))
	}

	return (
		<div className='signUpScreen'>
			<div className='header__signUp'>
				<img
					src='Linkedin_logo_PNG4.png'
					alt='Linkedin'
					onClick={() => {
						navigate('/')
					}}
				/>
			</div>
			<div className='leading__text'>
				<h1>Make the most of your professional life</h1>
			</div>
			<div className='signUpCard'>
				<div className='inner__card'>
					<form className='reg'>
						<div
							className={
								regex__reg && text__reg !== '' ? `email__phone__reg__invalid` : 'email__phone__reg'
							}>
							<label htmlFor='email__reg'>Email or Phone number</label>
							<input
								type='text'
								id='email__reg'
								value={text__reg}
								onChange={(e) => activate__regex(e.target.value)}
							/>
							{/* for regex purposes start */}

							{text__reg === '' && <p>Please enter your email address or mobile number</p>}
							{regex__reg && text__reg != '' ? (
								<p>Please enter a valid email address or phone number</p>
							) : (
								''
							)}
							{/* for regex purposes end */}
						</div>
						<div className='password__reg'>
							<label htmlFor='pass__reg'>Password (6 or more characters)</label>
							<input type={revealPass__reg ? 'text' : 'password'} id='pass__reg' />
							<h3 className='password__reveal__reg' onClick={() => setRevealPass__reg(!revealPass__reg)}>
								{revealPass__reg ? 'hide' : 'show'}
							</h3>
							{/* for regex purposes start */}
							{/* for regex purposes end */}
						</div>
						<div className='service__policy'>
							<p>
								By clicking Agree & Join, you agree to the LinkedIn{' '}
								<Link to='/signUp'>User Agreement, Privacy Policy</Link> , and{' '}
								<Link to='/signUp'>Cookie Policy</Link>.
							</p>
						</div>
						<button className='signUp__btn'>Agree & Join</button>
						<div className='separator__reg'>
							<span>or</span>
						</div>
						<button className='google__signUp'>
							<img src='20210313114223!Google__G__Logo.svg' alt='google-icon' /> <p>Join with Google</p>
						</button>
					</form>
					<p className='checkout__reg'>
						Already on LinkedIn? <Link to='/signIn'>Sign in</Link>
					</p>
				</div>
			</div>
		</div>
	)
}

export default SignUpScreen
