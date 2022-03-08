import React, { useEffect, useRef, useState } from 'react'
import './Feeds.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCalendar,
	faCommentAlt,
	faEllipsisH,
	faHeart,
	faImage,
	faNewspaper,
	faPaperPlane,
	faShare,
	faSmile,
	faSurprise,
	faThumbsUp,
	faVideo,
} from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { showWindow } from '../../features/createPostSlice'

function Feeds() {
	const dispatch = useDispatch()
	const truncate = (string, n) => {
		return string?.length > n ? string.slice(0, n - 1) + '...' : string
	}
	const [isClicked, setisClicked] = useState(false)
	const [isComment, setisComment] = useState(false)
	const textRef = useRef(null)
	const [isType, setIsType] = useState(false)
	const [btn, setBtn] = useState('')
	let [height, setHeight] = useState({ mainHeight: `${55}px` })

	useEffect(() => {
		document.addEventListener('keyup', (e) => {
			if (e.target.classList.contains('add__comment')) {
				console.log(true)
				setIsType(true)
				setHeight({ mainHeight: 'auto' })
				let scHeight = e.target.scrollHeight
				setHeight({ mainHeight: `${scHeight}px` })
			} else {
				console.log(false)
			}
		})
		return () => {
			document.removeEventListener('keyup', (e) => {
				if (e.target.classList.contains('add__comment')) {
					setIsType(true)
					setHeight({ mainHeight: 'auto' })
					let scHeight = e.target.scrollHeight
					setHeight({ mainHeight: `${scHeight}px` })
				}
			})
		}
	}, [])

	const handleBtn = () => setBtn(textRef.current.value)

	const truncateText = (string, n) => {
		if (isClicked) {
			return string
		} else {
			return (
				<>
					{string.slice(0, n - 1)}
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
		<div className='Feeds'>
			<section className='add__post'>
				<div className='top__section'>
					<div className='img__container'></div>
					<div className='post__create' onClick={() => dispatch(showWindow({ createPost: true }))}>
						<h3>Start a post</h3>
					</div>
				</div>
				<div className='bottom__section'>
					<h4 style={{ color: '#00000099', fontWeight: '500' }}>
						<span>
							<FontAwesomeIcon icon={faImage} style={{ color: '#70b5f9' }} />
						</span>{' '}
						Photo
					</h4>
					<h4 style={{ color: '#00000099', fontWeight: '500' }}>
						<span>
							<FontAwesomeIcon icon={faVideo} style={{ color: '#7fc15e' }} />
						</span>{' '}
						Video
					</h4>
					<h4 style={{ color: '#00000099', fontWeight: '500' }}>
						<span>
							<FontAwesomeIcon icon={faCalendar} style={{ color: '#e7a33e' }} />
						</span>{' '}
						Events
					</h4>
					<h4 style={{ color: '#00000099', fontWeight: '500' }}>
						<span>
							<FontAwesomeIcon icon={faNewspaper} style={{ color: '#fc9295' }} />
						</span>{' '}
						Write article
					</h4>
				</div>
			</section>

			<section className='posts'>
				<div className='posts__container'>
					<div className='mutualFriend__likes'>
						<h3 style={{ fontSize: 20, fontWeight: 400, color: '#000000e6' }}>
							Someone{' '}
							<span style={{ fontSize: 15, fontWeight: 500, color: '#00000099' }}>liked this</span>
						</h3>
						<FontAwesomeIcon icon={faEllipsisH} style={{ fontWeight: 400, color: '#000000e6' }} />
					</div>
					<div className='user__info'>
						<div className='portions'>
							<div className='img__container'></div>
							<div className='info'>
								<h4>LinkedIn</h4>
								<h5>{truncate('Company . Internet', 75)}</h5>
							</div>
						</div>
					</div>
					<div className='post__text'>
						<h3>
							{truncateText(
								'Find out if the new + 0008 is the right certification for you and your team, during a fully sponsored half-day online skills camp, designed to equip your team with the technical skill required in the real world and an on demand skill wdowdujo rwolwrlwewl weieowieoweoo weioeiwoo wowoworiowrf worowrwo oierwewwowo woeiwoewioei woeiwoeiow woioewoeo wioweoweiw',
								100
							)}
						</h3>
					</div>
					<div className='post__image'>
						<img src='login-hero.svg' alt='' />
						<img src='logo512.png' alt='' />
						<img
							src='https://www.creativecircle.com/wp-content/uploads/2020/04/working-remote.png'
							alt=''
						/>
					</div>
					<div className='post__reactions'>
						<div className='reaction-col'>
							<h3>
								<FontAwesomeIcon
									className='reactions'
									style={{
										background: 'rgb(12, 69, 255)',
										borderRadius: 50,
										color: ' rgb(252, 249, 249)',
										padding: 4,
									}}
									icon={faThumbsUp}
								/>
								<FontAwesomeIcon
									className='reactions'
									style={{
										background: 'rgba(214, 23, 23, 0.932)',
										borderRadius: 50,
										color: ' rgb(252, 249, 249)',
										padding: 4,
									}}
									icon={faHeart}
								/>
								<FontAwesomeIcon
									className='reactions'
									style={{ color: 'rgb(211, 164, 47)' }}
									icon={faSurprise}
								/>{' '}
							</h3>
							<h4>142</h4>
						</div>
						<div className='comment__indicator'>
							<h4 onClick={() => setisComment(true)}>9 comments</h4>
						</div>
					</div>
					<div className='post__actions'>
						<div className='pad__it'>
							<h2>
								<FontAwesomeIcon icon={faThumbsUp} /> <span>Like</span>
							</h2>
						</div>
						<div className='pad__it'>
							<h2>
								<FontAwesomeIcon icon={faCommentAlt} /> <span>Comment</span>
							</h2>
						</div>
						<div className='pad__it'>
							<h2>
								<FontAwesomeIcon icon={faShare} /> <span>Share</span>
							</h2>
						</div>
						<div className='pad__it'>
							<h2>
								<FontAwesomeIcon icon={faPaperPlane} /> <span>Send</span>
							</h2>
						</div>
					</div>
					{isComment && (
						<div className='comments'>
							<div className='add__comment__container'>
								<div className='img__container'></div>
								<div className='comment__create__container'>
									<textarea
										className='add__comment'
										ref={textRef}
										placeholder='Add a comment'
										onChange={handleBtn}
										style={{ height: isType ? height.mainHeight : `${55}px` }}
									/>

									<div className='comment__emoji__pics'>
										<FontAwesomeIcon icon={faSmile} />
										<FontAwesomeIcon icon={faImage} />
									</div>
								</div>
							</div>
							{btn.length > 2 && <button className='post__comment'>Post</button>}
						</div>
					)}
				</div>
			</section>
			<section className='posts'>
				<div className='posts__container'>
					<div className='mutualFriend__likes'>
						<h3 style={{ fontSize: 20, fontWeight: 400, color: '#000000e6' }}>
							Someone{' '}
							<span style={{ fontSize: 15, fontWeight: 500, color: '#00000099' }}>liked this</span>
						</h3>
						<FontAwesomeIcon icon={faEllipsisH} style={{ fontWeight: 400, color: '#000000e6' }} />
					</div>
					<div className='user__info'>
						<div className='portions'>
							<div className='img__container'></div>
							<div className='info'>
								<h4>LinkedIn</h4>
								<h5>{truncate('Company . Internet', 75)}</h5>
							</div>
						</div>
					</div>
					<div className='post__text'>
						<h3>
							{truncateText(
								'Find out if the new + 0008 is the right certification for you and your team, during a fully sponsored half-day online skills camp, designed to equip your team with the technical skill required in the real world and an on demand skill wdowdujo rwolwrlwewl weieowieoweoo weioeiwoo wowoworiowrf worowrwo oierwewwowo woeiwoewioei woeiwoeiow woioewoeo wioweoweiw',
								100
							)}
						</h3>
					</div>
					<div className='post__image'>
						<img src='login-hero.svg' alt='' />
						<img src='logo512.png' alt='' />
						<img
							src='https://www.creativecircle.com/wp-content/uploads/2020/04/working-remote.png'
							alt=''
						/>
					</div>
					<div className='post__reactions'>
						<div className='reaction-col'>
							<h3>
								<FontAwesomeIcon
									className='reactions'
									style={{
										background: 'rgb(12, 69, 255)',
										borderRadius: 50,
										color: ' rgb(252, 249, 249)',
										padding: 4,
									}}
									icon={faThumbsUp}
								/>
								<FontAwesomeIcon
									className='reactions'
									style={{
										background: 'rgba(214, 23, 23, 0.932)',
										borderRadius: 50,
										color: ' rgb(252, 249, 249)',
										padding: 4,
									}}
									icon={faHeart}
								/>
								<FontAwesomeIcon
									className='reactions'
									style={{ color: 'rgb(211, 164, 47)' }}
									icon={faSurprise}
								/>{' '}
							</h3>
							<h4>142</h4>
						</div>
						<div className='comment__indicator'>
							<h4 onClick={() => setisComment(true)}>9 comments</h4>
						</div>
					</div>
					<div className='post__actions'>
						<div className='pad__it'>
							<h2>
								<FontAwesomeIcon icon={faThumbsUp} /> <span>Like</span>
							</h2>
						</div>
						<div className='pad__it'>
							<h2>
								<FontAwesomeIcon icon={faCommentAlt} /> <span>Comment</span>
							</h2>
						</div>
						<div className='pad__it'>
							<h2>
								<FontAwesomeIcon icon={faShare} /> <span>Share</span>
							</h2>
						</div>
						<div className='pad__it'>
							<h2>
								<FontAwesomeIcon icon={faPaperPlane} /> <span>Send</span>
							</h2>
						</div>
					</div>
					{isComment && (
						<div className='comments'>
							<div className='add__comment__container'>
								<div className='img__container'></div>
								<div className='comment__create__container'>
									<textarea
										className='add__comment'
										ref={textRef}
										placeholder='Add a comment'
										onChange={handleBtn}
										style={{ height: isType ? height.mainHeight : `${55}px` }}
									/>

									<div className='comment__emoji__pics'>
										<FontAwesomeIcon icon={faSmile} />
										<FontAwesomeIcon icon={faImage} />
									</div>
								</div>
							</div>
							{btn.length > 2 && <button className='post__comment'>Post</button>}
						</div>
					)}
				</div>
			</section>
		</div>
	)
}

export default Feeds
