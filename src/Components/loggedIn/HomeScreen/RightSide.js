import React from 'react'
import styles from '../../../CSS/loggedInCss/rightSide.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faInfo, faPlus } from '@fortawesome/free-solid-svg-icons'
function RightSide() {
	const date = new Date().getFullYear()
	return (
		<section className={styles.rightSide}>
			<div className={styles.add__feed}>
				<div className={styles.headline}>
					<p>Add to your feed</p>
					<div className={styles.info__container}>
						{' '}
						<FontAwesomeIcon icon={faInfo} />
					</div>
				</div>
				<div className={styles.suggestions}>
					<div className={styles.img__container}>
						<img src='googleIcon.png' alt='' />
					</div>
					<div className={styles.sugs__info__container}>
						<p>Decagon</p>
						<p>Company . Information Technology and Services</p>
						<button className={styles.follow}>
							<FontAwesomeIcon icon={faPlus} />
							Follow
						</button>
					</div>
				</div>
				<div className={styles.suggestions}>
					<div className={styles.img__container}>
						<img src='googleIcon.png' alt='' />
					</div>
					<div className={styles.sugs__info__container}>
						<p>Decagon</p>
						<p>Company . Information Technology and Services</p>
						<button className={styles.follow}>
							<FontAwesomeIcon icon={faPlus} />
							Follow
						</button>
					</div>
				</div>
				<div className={styles.suggestions}>
					<div className={styles.img__container}>
						<img src='googleIcon.png' alt='' />
					</div>
					<div className={styles.sugs__info__container}>
						<p>Decagon</p>
						<p>Company . Information Technology and Services</p>
						<button className={styles.follow}>
							<FontAwesomeIcon icon={faPlus} />
							Follow
						</button>
					</div>
				</div>
				<div className={styles.view__all}>
					<p>View all recommendations</p>
					<FontAwesomeIcon icon={faArrowRight} />
				</div>
			</div>
			<div className={styles.ad__board}>
				<img src='ad__img.png' alt='' />
			</div>
			<footer className={styles.footer}>
				<ul className={styles.footer__list}>
					<li>
						<a>About</a>
					</li>
					<li>
						<a>Accessbility</a>
					</li>
					<li>
						<a>Help Center</a>
					</li>
					<li>
						<a>Privacy & Terms</a>
					</li>
					<li>
						<a>Ad Choices</a>
					</li>
					<li>
						<a>Advertising</a>
					</li>
					<li>
						<a>Business Services</a>
					</li>
					<li>
						<a>Get the LinkedIn app</a>
					</li>
					<li>
						<a>More</a>
					</li>
				</ul>
				<div className={styles.copyright}>
					<img src='LinkedIn-Logo.wine.svg' alt='linkedIn' />
					<p>
						LinkedIn Mini Corporation <span>© {date}</span>
					</p>
				</div>
			</footer>
		</section>
	)
}

export default RightSide
