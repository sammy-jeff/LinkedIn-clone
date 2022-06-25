import React, { useEffect, useRef, useState } from 'react'
import styles from '../../../CSS/loggedInCss/middleMain.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faImage, faPaperPlane, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import useEmoji from '../../../customs/useEmojis'
import useTruncation from '../../../customs/useTruncation'

function MiddleMain() {
	const [comment, setComment] = useState({ 0: false, 1: false })
	const [showReactions, setShowReactions] = useState({ 0: false, 1: false, 2: false })
	const handleComment = (id) => {
		const val = true
		setComment({ ...comment, [id]: val })
	}
	const rxnVisible = (id) => {
		setShowReactions({ ...showReactions, [id]: true })
	}
	const rxnHidden = (id) => {
		setShowReactions({ ...showReactions, [id]: false })
	}
	const handleKeyDownComments = (e) => {
		e.target.style.height = 'inherit'
		e.target.style.height = `${e.target.scrollHeight}px`
	}
	const [post__text__comment, setPost__text__comment] = useState({ comment: '', reply: '' })
	const handleChange = (e) => {
		const { name, value } = e.target
		setPost__text__comment({ ...post__text__comment, [name]: value })
	}
	const emojis = useEmoji()
	const truncateText = useTruncation()
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
					<li onMouseLeave={() => rxnHidden(0)}>
						<FontAwesomeIcon icon={faThumbsUp} onMouseEnter={() => rxnVisible(0)} />
						<p>Like</p>
						{showReactions[0] && (
							<>
								<div className={styles.reactions}>
									<ul className={styles.sub__rxn}>
										{emojis.map((emoji, index) => (
											<li key={index}>{emoji.emoji__rxn}</li>
										))}
									</ul>
								</div>
							</>
						)}
					</li>
					<li onClick={() => handleComment(0)}>
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
			</div>
			{comment[0] && (
				<>
					<div className={styles.post__comment}>
						<div className={styles.img__container__comments}>
							<img src='IMG-20220126-WA0001.jpg' alt='' />
						</div>
						<div className={styles.text__area__container}>
							<textarea
								placeholder='Add a Comment'
								value={post__text__comment.comment}
								name='comment'
								onChange={handleChange}
								onKeyDown={handleKeyDownComments}></textarea>
							<FontAwesomeIcon icon={faImage} />
						</div>
						{post__text__comment.comment.length > 3 && (
							<button className={styles.button__blue}>Post</button>
						)}
					</div>
					<div className={styles.comments}>
						<div className={styles.img__container__comments}>
							<img src='IMG-20220126-WA0001.jpg' alt='' />
						</div>
						<div className={styles.comment__body}>
							<div className={styles.user__comment}>
								<h3>Okoye Chibuike Samuel</h3>
								<p>18h</p>
							</div>
							<p className={styles.comment__proper}>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque quibusdam
								magnam unde consectetur libero sunt est fugiat vel explicabo culpa, aut commodi tenetur,
								suscipit eos expedita id ipsum recusandae Lorem ipsum dolor sit amet consectetur
								adipisicing elit.
							</p>
						</div>
						<div className={styles.comment__actions}>
							<ul className={styles.actions__lists}>
								<li onMouseLeave={() => rxnHidden(1)}>
									<p onMouseEnter={() => rxnVisible(1)}>Like</p>{' '}
									{showReactions[1] && (
										<>
											<div className={styles.reactions}>
												<ul className={styles.sub__rxn}>
													{emojis.map((emoji, index) => (
														<li key={index}>{emoji.emoji__rxn}</li>
													))}
												</ul>
											</div>
										</>
									)}
								</li>
								<li style={{ display: 'flex', gap: '3px' }}>
									<span className={styles.rxns}>
										{emojis.map((emoji) => (
											<>{emoji.emoji__rxn}</>
										))}
									</span>
									<p>20</p>
								</li>
								<li onClick={() => handleComment(1)}>
									<p>Reply</p>
								</li>
								<li>
									<p>10 replies</p>
								</li>
							</ul>
						</div>
						<div className={styles.replies}>
							<div className={styles.img__container__comments}>
								<img src='IMG-20220126-WA0001.jpg' alt='' />
							</div>
							<div className={styles.comment__body}>
								<div className={styles.user__comment}>
									<h3>Okoye Chibuike Samuel</h3>
									<p>18h</p>
								</div>
								<p className={styles.comment__proper}>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum doloremque quibusdam
									magnam unde consectetur libero sunt est fugiat vel explicabo culpa, aut commodi
									tenetur, suscipit eos expedita id ipsum recusandae Lorem ipsum dolor sit amet
									consectetur adipisicing elit.
								</p>
							</div>
							<div className={styles.replies__actions}>
								<ul className={styles.actions__lists}>
									<li onMouseLeave={() => rxnHidden(2)}>
										<p onMouseEnter={() => rxnVisible(2)}> Like</p>
										{showReactions[2] && (
											<div className={styles.reactions}>
												<ul className={styles.sub__rxn}>
													{emojis.map((emoji, index) => (
														<li key={index}>{emoji.emoji__rxn}</li>
													))}
												</ul>
											</div>
										)}
									</li>
									<li style={{ display: 'flex', gap: '3px' }}>
										<span className={styles.rxns}>
											{emojis.map((emoji) => (
												<>{emoji.emoji__rxn}</>
											))}
										</span>
										<p>20</p>
									</li>
									<li onClick={() => handleComment(1)}>
										<p>Reply</p>
									</li>
									<li>
										<p>10 replies</p>
									</li>
								</ul>
								{comment[1] && (
									<div className={styles.post__comment}>
										<div className={styles.img__container__comments}>
											<img src='IMG-20220126-WA0001.jpg' alt='' />
										</div>
										<div className={styles.text__area__container}>
											<textarea
												placeholder='Add a reply'
												value={post__text__comment.reply}
												name='reply'
												onChange={handleChange}
												onKeyDown={handleKeyDownComments}></textarea>
											<FontAwesomeIcon icon={faImage} />
										</div>
										{post__text__comment.reply.length > 3 && (
											<button className={styles.button__blue}>Post</button>
										)}
									</div>
								)}
							</div>
						</div>
					</div>
				</>
			)}
		</article>
	)
}

export default MiddleMain
