import React, { useState } from 'react'
import styles from '../../../CSS/loggedInCss/leftSide.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faChevronDown, faChevronUp, faPlus, faSquare } from '@fortawesome/free-solid-svg-icons'
function LeftSide() {
	const [lessMore, setLessMore] = useState(false)
	return (
		<section className={styles.LeftSide}>
			<div className={styles.identity__container}>
				<div className={styles.user}>
					<div className={styles.back__img}></div>
					<div className={styles.profile__container}>
						<div className={styles.profilePic__container}>
							<img src='user-avatar-svgrepo-com.svg' alt='' />
						</div>
						<p className={styles.name}>Okoye Chibuike Samuel</p>
					</div>
				</div>

				<div className={lessMore ? styles.invisible : styles.grow__network}>
					<p>Connection</p>
					<p>68</p>
					<p>Grow your network</p>
				</div>
				<div className={lessMore ? styles.invisible : styles.exclusives}>
					<p>Access exclusive tools & insights</p>
					<p className={styles.access}>
						<span>
							<FontAwesomeIcon icon={faSquare} />
						</span>
						Try Premium for free
					</p>
				</div>
				<div className={lessMore ? styles.invisible : styles.items}>
					<span>
						<FontAwesomeIcon icon={faBookmark} />
					</span>
					<p>My Items</p>
				</div>
			</div>
			<div className={lessMore ? styles.invisible : styles.events}>
				<p>Groups</p>
				<p>
					Events{' '}
					<span>
						<FontAwesomeIcon icon={faPlus} />
					</span>
				</p>
				<p>Followed Hashtags</p>
				<div className={styles.discover}>
					<a>Discover more</a>
				</div>
			</div>

			<div className={styles.hide} onClick={() => setLessMore(!lessMore)}>
				{lessMore ? (
					<>
						<a>Show More</a>
						<FontAwesomeIcon icon={faChevronDown} />
					</>
				) : (
					<>
						<a>Show Less</a>
						<FontAwesomeIcon icon={faChevronUp} />
					</>
				)}
			</div>
		</section>
	)
}

export default LeftSide
