import React, { useState } from 'react'
import styles from '../../../CSS/loggedInCss/createPost.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faImage, faPlay, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { showPost } from '../../../features/createPost'
function CreatePost() {
	const dispatch = useDispatch()
	const { user } = useSelector((state) => state.user.value)
	const handleKeyDown = (e) => {
		e.target.style.height = 'inherit'
		e.target.style.height = `${e.target.scrollHeight}px`
	}
	const [post__text, setPost__text] = useState('')

	return (
		<div className={styles.postModal}>
			<div className={styles.postCreate}>
				<div className={styles.headline}>
					<h3>Create a Post</h3>
					<h3 onClick={() => dispatch(showPost(false))}>
						{' '}
						<FontAwesomeIcon icon={faTimes} />
					</h3>
				</div>
				<div className={styles.user}>
					<div className={styles.img__container}>
						{' '}
						<img src='IMG-20220126-WA0001.jpg' alt='profile__pics' />
					</div>
					<p>{user?.name}</p>
				</div>
				<div className={styles.post__text}>
					<textarea
						name='post'
						value={post__text}
						placeholder='What do you want to talk about '
						onKeyDown={handleKeyDown}
						onChange={(e) => setPost__text(e.target.value)}></textarea>
				</div>
				<div className={styles.bottom}>
					<ul className={styles.post__types}>
						<li>
							<FontAwesomeIcon icon={faImage} />
						</li>
						<li>
							<FontAwesomeIcon icon={faPlay} />
						</li>
						<li>
							<FontAwesomeIcon icon={faFile} />
						</li>
					</ul>
					<button
						className={post__text.length < 3 ? styles.button__gray : styles.button__blue}
						disabled={post__text.length < 3 ? true : false}>
						Post
					</button>
				</div>
			</div>
		</div>
	)
}

export default CreatePost
