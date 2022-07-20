import React, { useState } from 'react'
import styles from '../../../CSS/loggedInCss/homenav.module.css'
import {
	faBell,
	faBriefcase,
	faCaretDown,
	faCommentDots,
	faEllipsisH,
	faHome,
	faPeopleArrows,
	faSquareFull,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { signOut } from 'firebase/auth'
import { auth, db } from '../../../firebase'
import { doc, updateDoc } from 'firebase/firestore'
import { NavLink } from 'react-router-dom'
function HomeNav() {
	const [showwork, setShowWork] = useState(false)
	const [showLogOut, setShowLogOut] = useState(false)
	const handleSignOut = async () => {
		await updateDoc(doc(db, 'users', auth.currentUser.uid), {
			isOnline: false,
		})
		await signOut(auth)
	}
	return (
		<nav className={styles.nav}>
			<header className={styles.header}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='34'
					height='34'
					viewBox='0 0 34 34'
					className='global-nav__logo'>
					<title>LinkedIn</title>

					<g>
						<path
							d='M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z'
							fill='currentColor'></path>
					</g>
				</svg>
			</header>
			<ul className={styles.lists}>
				{' '}
				<li className={styles.icons__container}>
					<NavLink
						to='/home'
						className={({ isActive }) => (isActive ? styles.active__link : styles.icons__container)}>
						<FontAwesomeIcon icon={faHome} />
						<span className={styles.icon__titles}>Home</span>
					</NavLink>
				</li>
				<li className={styles.icons__container}>
					<NavLink
						to='/networks'
						className={({ isActive }) => (isActive ? styles.active__link : styles.icons__container)}>
						{' '}
						<FontAwesomeIcon icon={faPeopleArrows} />
						<span className={styles.icon__titles}>My Network</span>
					</NavLink>
				</li>{' '}
				<li className={styles.icons__container}>
					<NavLink
						to='/jobs'
						className={({ isActive }) => (isActive ? styles.active__link : styles.icons__container)}>
						{' '}
						<FontAwesomeIcon icon={faBriefcase} />
						<span className={styles.icon__titles}>Jobs</span>
					</NavLink>
				</li>
				<li className={styles.icons__container}>
					<NavLink
						to='/messaging'
						className={({ isActive }) => (isActive ? styles.active__link : styles.icons__container)}>
						<FontAwesomeIcon icon={faCommentDots} />
						<span className={styles.icon__titles}>Messaging</span>
					</NavLink>
				</li>
				<li className={styles.icons__container}>
					<NavLink
						to='/notifications'
						className={({ isActive }) => (isActive ? styles.active__link : styles.icons__container)}>
						<FontAwesomeIcon icon={faBell} />
						<span className={styles.icon__titles}>Notifications</span>
					</NavLink>
				</li>
				<li
					className={styles.icons__container}
					onClick={() => {
						setShowLogOut(!showLogOut)
						setShowWork(false)
					}}>
					<div className={styles.me}>
						<img src='user-avatar-svgrepo-com.svg' alt='' />
					</div>
					<span className={styles.icon__titles}>
						me{' '}
						<span>
							<FontAwesomeIcon icon={faCaretDown} />
						</span>
					</span>
					{showLogOut && (
						<div className={styles.logOut} onClick={handleSignOut}>
							<p>Sign Out</p>
						</div>
					)}
				</li>
				<li
					className={styles.icons__container}
					onClick={() => {
						setShowWork(!showwork)
						setShowLogOut(false)
					}}>
					<FontAwesomeIcon icon={faEllipsisH} />
					{showwork && (
						<div className={styles.work}>
							<FontAwesomeIcon icon={faSquareFull} />
							<p>Try Premium for free</p>
						</div>
					)}
				</li>
			</ul>
		</nav>
	)
}

export default HomeNav
