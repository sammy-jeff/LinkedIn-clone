import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './SignInScreen.css'
function SignInScreen({}) {
	const [revealPass, setRevealPass] = useState(false)
	const navigate = useNavigate()
	const [active, setActive] = useState(false)
	const [isActive, setisActive] = useState(false)
	const [value, setValue] = useState('')
	const [value_2, setValue_2] = useState('')
	// const [revealPass, setRevealPass] = useState(false)
	const handleTextChange = (text) => {
		setValue(text)
		if (text !== '') {
			setActive(true)
		} else {
			setActive(false)
		}
	}
	const handleTextChange1 = (text) => {
		setValue_2(text)
		if (text !== '') {
			setisActive(true)
		} else {
			setisActive(false)
		}
	}
	return (
		<div className='signInScreen'>
			<div className='header'>
				<img
					src='Linkedin_logo_PNG4.png'
					alt='Linkedin'
					onClick={() => {
						navigate('/')
					}}
				/>
			</div>
			<div className='main'>
				<div className='signInCard'>
					<div className='inner__container'>
						<div className='header__content'>
							<h1>Sign in</h1>
							<p className='subheading'>stay updated on your proffesional world</p>
						</div>
						<form className='form__section'>
							{/* Start of Floating input for email  */}
							<div className='floating__input'>
								<label htmlFor='email' className={active ? 'active__label1' : ''} aria-hidden>
									Email or Phone
								</label>
								<input
									type='text'
									id='email'
									className='email__phone'
									value={value}
									onChange={(e) => handleTextChange(e.target.value)}
								/>
							</div>
							{/* End of Floating input for email   */}
							{/* Start of Floating input for password */}
							<div className='floating__input__password'>
								<label htmlFor='password' className={isActive ? 'active__label2' : ''} aria-hidden>
									Password
								</label>
								<input
									type={revealPass ? 'text' : 'password'}
									id='password'
									className='password'
									value={value_2}
									onChange={(e) => handleTextChange1(e.target.value)}
								/>
								<h3
									className='reveal'
									onClick={() => {
										setRevealPass(!revealPass)
									}}>
									{revealPass ? 'hide' : 'show'}
								</h3>
							</div>
							{/* End of Floating input for password */}
						</form>
						<div className='password__retrieve'>
							<h3>Forgot password?</h3>
						</div>
						<div className='sign__in__btn'>
							<button>Sign in</button>
						</div>
						<div className='separator'>
							<span>or</span>
						</div>
						<div className='otp__sign__in'>
							<button>
								<FontAwesomeIcon icon={faEnvelope} /> Sign in with one-time code
							</button>
						</div>
						<div className='apple__sign__in'>
							<button>
								<FontAwesomeIcon icon={faAppleAlt} /> <span className='apple'>Sign in with apple</span>
							</button>
						</div>
					</div>
				</div>
				<div className='join'>
					New to LinkedIn? <Link to='/signUp'>join now</Link>
				</div>
			</div>
		</div>
	)
}

export default SignInScreen
