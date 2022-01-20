import React, { useRef, useState } from 'react'
import './CreatePost.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faBriefcase,
	faCaretDown,
	faCommentAlt,
	faEllipsisH,
	faFile,
	faImage,
	faPoll,
	faStar,
	faTimes,
	faUsers,
	faVideo,
} from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { showWindow } from '../../features/createPostSlice'
function CreatePost() {
	const dispatch = useDispatch()
	const [text, setText] = useState('')
	const textRef = useRef(null)
	const handleText = () => setText(textRef.current.value)
	console.log(text)

	return (
		<div className='dark'>
			<div className='createPost'>
				<div className='top__modal'>
					<h2>Create a Post</h2>
					<FontAwesomeIcon
						className='cancel__icon'
						icon={faTimes}
						onClick={() => dispatch(showWindow({ createPost: false }))}
					/>
				</div>
				<div className='second__row'>
					<div className='img__container1'></div>
					<div className='userName'>
						<h2>Okoye Chibuike Samuel</h2>
					</div>
					<div className='privacy__option'>
						<FontAwesomeIcon icon={faUsers} />
						<h3>Connections only</h3>
						<FontAwesomeIcon icon={faCaretDown} />
					</div>
				</div>
				<div className='third__row'>
					<textarea
						className='writePost'
						placeholder='What do you want to talk about'
						ref={textRef}
						value={text}
						onChange={handleText}
					/>
				</div>
				<div className='footer'>
					<div className='icon__container'>
						<FontAwesomeIcon icon={faImage} />
						<FontAwesomeIcon icon={faVideo} />
						<FontAwesomeIcon icon={faFile} />
						<FontAwesomeIcon icon={faBriefcase} />
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faPoll} />
						<FontAwesomeIcon icon={faEllipsisH} />
					</div>
					<div className='post__btn'>
						<h3>
							<span>
								<FontAwesomeIcon icon={faCommentAlt} />
							</span>{' '}
							Connections
						</h3>
						<button
							disabled={text?.length < 2 ? true : false}
							className={text?.length < 2 ? 'disabled__state' : 'btn'}>
							Post
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CreatePost
