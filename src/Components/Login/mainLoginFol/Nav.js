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
					<Link to='/discover'>
						<FontAwesomeIcon icon={faCompass} />
						<p>Discover</p>
					</Link>
				</li>
				<li>
					<Link to='/people'>
						<FontAwesomeIcon icon={faPeopleArrows} />
						<p>People</p>
					</Link>
				</li>
				<li>
					<Link to='/learning'>
						<FontAwesomeIcon icon={faBook} />
						<p>Learning</p>
					</Link>
				</li>
				<li>
					<Link to='/jobs'>
						<FontAwesomeIcon icon={faBriefcase} />
						<p>Jobs</p>
					</Link>
				</li>
			</ul>
			<div className={styles.bottomLinks}>
				<Link to='/signUp' className={styles.join}>
					Sign Up
				</Link>
				<Link to='/signIn' className={styles.signInBtn}>
					Sign In
				</Link>
			</div>
		</nav>
	)
}

export default Nav
