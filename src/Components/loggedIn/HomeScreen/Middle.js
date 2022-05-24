import React from 'react'
import styles from '../../../CSS/loggedInCss/middle.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faFileVideo, faNewspaper, faPhotoVideo, faPlay, faVideo } from '@fortawesome/free-solid-svg-icons'
function Middle() {
	return (
		<section className={styles.middle}>
			<div className={styles.start__post}>
				<div className={styles.top__part}>
					<div className={styles.img__container}>
						<img src='IMG-20220126-WA0001.jpg' alt='profile__pics' />
					</div>
					<div className={styles.post__action}>
						<p>Start a post</p>
					</div>
				</div>
				<div className={styles.bottom__part}>
					<ul className={styles.icons}>
						<li>
							<FontAwesomeIcon color='#378fe9' icon={faPhotoVideo} />
							<p>Photo</p>
						</li>
						<li>
							<FontAwesomeIcon color='#5f9b41' icon={faVideo} />
							<p>Video</p>
						</li>
						<li>
							<FontAwesomeIcon color='#c37d16' icon={faCalendar} />
							<p>Events</p>
						</li>
						<li>
							<FontAwesomeIcon color='#e16745' icon={faNewspaper} />
							<p>Write Article</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Middle
