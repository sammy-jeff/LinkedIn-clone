import React, { useEffect, useState } from 'react'
import styles from '../../../CSS/loggedInCss/leftSide.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faChevronDown, faChevronUp, faPlus, faSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function LeftSide() {
	const [lessMore, setLessMore] = useState(false)
	const { user, friendsList } = useSelector((state) => state.user.value)
	const [width, setWidth] = useState(window.innerWidth)
	const breakPoint = 768
	useEffect(() => {
		window.addEventListener('resize', () => setWidth(window.innerWidth))
		return window.removeEventListener('resize', () => setWidth(window.innerWidth))
	}, [])
	console.log(width)
	// width < breakPoint && lessMore ? styles.invisible : styles.grow__network
	return (
		<section className={styles.LeftSide}>
			<div className={styles.identity__container}>
				<div className={styles.user}>
					<div className={styles.back__img}></div>
					<div className={styles.profile__container}>
						<div className={styles.profilePic__container}>
							<img src='user-avatar-svgrepo-com.svg' alt='' />
						</div>
						<p className={styles.name}>{user?.name}</p>
					</div>
				</div>

				<div className={width < breakPoint && lessMore ? styles.invisible : styles.visible}>
					<div className={styles.grow__network}>
						<p>Connection</p>
						<p>{friendsList.length}</p>
						<p>Grow your network</p>
					</div>
					<div className={styles.exclusives}>
						<p>Access exclusive tools & insights</p>
						<p className={styles.access}>
							<span>
								<FontAwesomeIcon icon={faSquare} />
							</span>
							Try Premium for free
						</p>
					</div>
					<div className={styles.items}>
						<span>
							<FontAwesomeIcon icon={faBookmark} />
						</span>
						<p>My Items</p>
					</div>
				</div>
			</div>
			<div className={width < breakPoint && lessMore ? styles.invisible : styles.events}>
				<p>Groups</p>
				<p>
					Events{' '}
					<span>
						<FontAwesomeIcon icon={faPlus} />
					</span>
				</p>
				<p>Followed Hashtags</p>
				<div className={styles.discover}>
					<Link to='#'>Discover more</Link>
				</div>
			</div>

			{width < breakPoint && (
				<div className={styles.hide} onClick={() => setLessMore(!lessMore)}>
					{lessMore ? (
						<>
							<button>Show More</button>
							<FontAwesomeIcon icon={faChevronDown} />
						</>
					) : (
						<>
							<button>Show Less</button>
							<FontAwesomeIcon icon={faChevronUp} />
						</>
					)}
				</div>
			)}
		</section>
	)
}

export default LeftSide
