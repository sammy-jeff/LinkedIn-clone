import React, { useEffect, useState } from 'react'
import styles from '../../../CSS/loggedInCss/leftSide.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faBookmark,
	faCamera,
	faChevronDown,
	faChevronUp,
	faPlus,
	faSquare,
	faTrash,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { auth, db, storage } from '../../../firebase'
import { doc, updateDoc } from 'firebase/firestore'
function LeftSide() {
	const [lessMore, setLessMore] = useState(false)
	const { user, friendsList } = useSelector((state) => state.user.value)
	const [width, setWidth] = useState(window.innerWidth)
	const breakPoint = 768
	const [img, setImg] = useState(null)
	useEffect(() => {
		window.addEventListener('resize', () => setWidth(window.innerWidth))
		return window.removeEventListener('resize', () => setWidth(window.innerWidth))
	}, [])
	useEffect(() => {
		if (img) {
			const uploadImg = async () => {
				const imgRef = ref(storage, `avatar/${img.name + new Date().getTime()}`)
				try {
					if (user.avatarPath) {
						await deleteObject(ref(storage, user.avatarPath))
					}
					await uploadBytes(imgRef, img).then(async (snap) => {
						const getDownloadLink = await getDownloadURL(ref(storage, snap.ref.fullPath))
						await updateDoc(doc(db, 'users', auth.currentUser.uid), {
							avatar: getDownloadLink,
							avatarPath: snap.ref.fullPath,
						})
						console.log(getDownloadLink)
						setImg(null)
					})
				} catch (error) {}
			}
			uploadImg()
		}
	}, [img])
	const deleteProfilePics = async () => {
		const confirm = window.confirm('Delete image?')
		if (confirm) {
			await updateDoc(doc(db, 'users', auth.currentUser.uid), {
				avatar: '',
				avatarPath: '',
			})
			alert('Image Deleted Successfully')
			await deleteObject(ref(storage, user.avatarPath))
		}
	}

	console.log(img)
	console.log(user)
	return (
		<section className={styles.LeftSide}>
			<div className={styles.identity__container}>
				<div className={styles.user}>
					<div className={styles.back__img}></div>
					<div className={styles.profile__container}>
						<div className={styles.profilePic__container}>
							<img src={user?.avatar || `user-avatar-svgrepo-com.svg`} alt='' />
							<div className={styles.overlay}>
								<label htmlFor='uploadImg'>
									<FontAwesomeIcon icon={faCamera} />
								</label>
								<input
									type='file'
									id='uploadImg'
									style={{ display: 'none' }}
									onChange={(e) => setImg(e.target.files[0])}
								/>
								<FontAwesomeIcon icon={faTrash} color='red' onClick={deleteProfilePics} />
							</div>
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
