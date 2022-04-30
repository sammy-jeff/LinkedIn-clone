import React from 'react'
import Nav from './mainLoginFol/Nav'
import styles from '../../CSS/loginCss/mainlogin.module.css'
import CallToAction from './mainLoginFol/CallToAction'
function MainLogin() {
	return (
		<div className={styles.mainLogin}>
			<Nav />
			<CallToAction />
		</div>
	)
}

export default MainLogin
