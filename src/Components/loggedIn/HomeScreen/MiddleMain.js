import React, { useState } from 'react'
import styles from '../../../CSS/loggedInCss/middleMain.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faAngry,
	faComment,
	faHeart,
	faImage,
	faLaugh,
	faPaperPlane,
	faShare,
	faSurprise,
	faThumbsUp,
} from '@fortawesome/free-solid-svg-icons'
function MiddleMain() {
	const [isClicked, setisClicked] = useState(false)
	const [showReactions, setShowReactions] = useState(false)
	const handleKeyDownComments = (e) => {
		e.target.style.height = 'inherit'
		e.target.style.height = `${e.target.scrollHeight}px`
	}
	const [post__text__comment, setPost__text__comment] = useState('')
	const truncateText = (string, n) => {
		if (isClicked) {
			return string
		} else {
			return (
				<>
					{string.slice(0, n)}
					<h5
						onClick={() => setisClicked(true)}
						style={{
							textDecoration: 'underline',
							cursor: 'pointer',
							display: 'inline-block',
							marginLeft: 5,
						}}>
						...See more
					</h5>
				</>
			)
		}
	}
	return (
		<article className={styles.main__post}>
			<div className={styles.top}>
				<div className={styles.img__container__mini}>
					{' '}
					<img src='IMG-20220126-WA0001.jpg' alt='profile__pics' />
				</div>
				<p>
					<span>Sammy</span> likes this
				</p>
			</div>
			<div className={styles.user}>
				<div className={styles.img__container}>
					{' '}
					<img src='IMG-20220126-WA0001.jpg' alt='profile__pics' />
				</div>
				<p>Okoye Chibuike Samuel</p>
			</div>
			<div className={styles.post__msg}>
				<p>
					{truncateText(
						'sahskaskasjaksjaksjaksajskajksajksajskajsajksjaksjaksjaksajskajskasjkasjkasjkasjkasjkasjakjskajskasjkajskajskajsajskajskajksajskajksajkskajsasasgajsgjasgjagsjgjgjgjgjgjdsdsd; dfdfdffsd rfwdew edsdsd sresedsdld sedsdswdkl; ssd sdsdk;sd k; sds sd k; sd ',
						80
					)}
				</p>
			</div>
			<div className={styles.post__img}>
				<img src='sammy.jpg' alt='' />
				<img src='p-5.jpg' alt='' />
				<img src='IMG-20220126-WA0001.jpg' alt='' />
			</div>
			<div className={styles.cta}>
				<ul className={styles.cta__list}>
					<li onMouseEnter={() => setShowReactions(true)}>
						<FontAwesomeIcon icon={faThumbsUp} />
						<p>Like</p>
					</li>
					<li>
						<FontAwesomeIcon icon={faComment} />
						<p>Comment</p>
					</li>
					<li>
						<FontAwesomeIcon icon={faShare} />
						<p>Share</p>
					</li>
					<li>
						<FontAwesomeIcon icon={faPaperPlane} />
						<p>Send</p>
					</li>
				</ul>
				{showReactions && (
					<div
						className={styles.reactions}
						onMouseEnter={() => setShowReactions(true)}
						onMouseLeave={() => setShowReactions(false)}>
						<ul className={styles.sub__rxn}>
							<li>
								<FontAwesomeIcon color='#0a66c2' icon={faThumbsUp} />
							</li>
							<li>
								<FontAwesomeIcon color='#f7b125' icon={faLaugh} />
							</li>
							<li>
								<FontAwesomeIcon color='#f33e58' icon={faHeart} />
							</li>
							<li>
								<FontAwesomeIcon color='#f7b125' icon={faSurprise} />
							</li>
							<li>
								<FontAwesomeIcon color='#e9710f' icon={faAngry} />
							</li>
						</ul>
					</div>
				)}
			</div>
			<div className={styles.post__comment}>
				<div className={styles.img__container__comments}>
					<img src='IMG-20220126-WA0001.jpg' alt='' />
				</div>
				<div className={styles.text__area__container}>
					<textarea
						placeholder='Add a Comment'
						value={post__text__comment}
						onChange={(e) => setPost__text__comment(e.target.value)}
						onKeyDown={handleKeyDownComments}></textarea>
					<FontAwesomeIcon icon={faImage} />
				</div>
				{post__text__comment.length > 3 && <button className={styles.button__blue}>Post</button>}
			</div>
			<div className={styles.comments}></div>
		</article>
	)
}

export default MiddleMain
