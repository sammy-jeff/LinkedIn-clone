import React, { useEffect, useState } from 'react'
import styles from '../../../CSS/loginCss/callToaction.module.css'
function CallToAction() {
	const initialValues = {
		email: '',
		password: '',
	}
	const [values, setValues] = useState(initialValues)
	const handleChanges = (e) => {
		let { name, value } = e.target
		setValues({ ...values, [name]: value })
	}
	const [showPassword, setShowPassword] = useState(false)

	return (
		<section className={styles.action}>
			<div>
				<h1>Welcome to your professional community</h1>
				<form className={styles.form}>
					<div className={styles.forEmail}>
						<label htmlFor='email' className={values.email.length >= 1 ? styles.active__label : ''}>
							Email or Phone number
						</label>
						<input
							type='text'
							name='email'
							id='email'
							className={styles.email__phone}
							value={values.email}
							onChange={handleChanges}
						/>
					</div>
					<div className={styles.forPassword}>
						<input
							type={showPassword ? 'text' : 'password'}
							name='password'
							id='password'
							className={styles.password}
							value={values.password}
							onChange={handleChanges}
						/>
						<label htmlFor='password' className={values.password.length >= 1 ? styles.active__label : ''}>
							Password
						</label>
						<span onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</span>
					</div>
					<p className={styles.forgot}>Forgot password?</p>
					<button id={styles.signInBtn}>Sign in</button>
					<span className={styles.or}>
						<p>or</p>
					</span>
					<button className={styles.googleSignIn}>
						<img src='20210313114223!Google__G__Logo.svg' alt='googleIcon' />
						<p>Sign in with Google</p>
					</button>
				</form>
			</div>
			<div className={styles.imgContainer}>
				<img src='hero.svg' className={styles.hero} />
			</div>
		</section>
	)
}

export default CallToAction
