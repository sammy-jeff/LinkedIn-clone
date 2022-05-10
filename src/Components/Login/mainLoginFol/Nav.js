import React from 'react'
import styles from '../../../CSS/loginCss/nav.module.css'
import { faBook, faBriefcase, faCompass, faPeopleArrows } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Nav() {
	const navigate = useNavigate()
	return (
		<nav className={styles.navContainer}>
			<img src='Linkedin_logo_PNG4.png' className={styles.logo} alt='' onClick={() => navigate('/')} />
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
				<Link to='signUp' className={styles.join}>
					<a href=''>Join now</a>
				</Link>
				<Link to='signIn' className={styles.signInBtn}>
					<a href=''>Sign in</a>
				</Link>
			</div>
		</nav>
	)
}

export default Nav
