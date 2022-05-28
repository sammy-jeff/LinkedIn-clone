import React from 'react'
import styles from '../../../CSS/loggedInCss/middleTop.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faNewspaper, faPhotoVideo, faVideo } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { showPost } from '../../../features/createPost'
function MiddleTop() {
	const dispatch = useDispatch()
	return (
		<div className={styles.start__post}>
			<div className={styles.top__part}>
				<div className={styles.img__container}>
					<img src='IMG-20220126-WA0001.jpg' alt='profile__pics' />
				</div>
				<div className={styles.post__action} onClick={() => dispatch(showPost(true))}>
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
	)
}

export default MiddleTop
