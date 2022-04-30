import React from 'react'
import styles from '../../../CSS/loginCss/nav.module.css'
import { faBook, faBriefcase, faCompass, faPeopleArrows } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Nav() {
	return (
		<nav className={styles.navContainer}>
			<img src='Linkedin_logo_PNG4.png' className={styles.logo} alt='' />
			<ul className={styles.topLinks}>
				<li>
					<a href=''>
						<FontAwesomeIcon icon={faCompass} />
						<p>Discover</p>
					</a>
				</li>
				<li>
					<a href=''>
						<FontAwesomeIcon icon={faPeopleArrows} />
						<p>People</p>
					</a>
				</li>
				<li>
					<a href=''>
						<FontAwesomeIcon icon={faBook} />
						<p>Learning</p>
					</a>
				</li>
				<li>
					<a href=''>
						<FontAwesomeIcon icon={faBriefcase} />
						<p>Jobs</p>
					</a>
				</li>
			</ul>
			<div className={styles.bottomLinks}>
				<a href='' className={styles.join}>
					Join now
				</a>
				<a href='' className={styles.signInBtn}>
					Sign in
				</a>
			</div>
		</nav>
	)
}

export default Nav
