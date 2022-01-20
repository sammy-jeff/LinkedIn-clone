import React from 'react'
import './RightPane.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faInfo, faPlus } from '@fortawesome/free-solid-svg-icons'
function RightPane() {
	const truncate = (string, n) => {
		return string?.length > n ? string.slice(0, n - 1) + '...' : string
	}

	return (
		<div className='Right'>
			<section className='follow__suggestion'>
				<div className='top__section'>
					<h3>Add to feed</h3>
					<FontAwesomeIcon icon={faInfo} className='info_icon' />
				</div>
				<div className='middle__section'>
					<div className='portions'>
						<div className='img__container'></div>
						<div className='info'>
							<h4>LinkedIn</h4>
							<h5>{truncate('Company . Internet', 75)}</h5>
							<button>
								<span>
									<FontAwesomeIcon icon={faPlus} />
								</span>{' '}
								Follow
							</button>
						</div>
					</div>
					<div className='portions'>
						<div className='img__container'></div>
						<div className='info'>
							<h4>David .I. Adeleke</h4>
							<h5>{truncate('Communications Lead, Nestcoin & Managing Editior, Branch', 75)}</h5>
							<button>
								<span>
									<FontAwesomeIcon icon={faPlus} />
								</span>{' '}
								Follow
							</button>
						</div>
					</div>
					<div className='portions'>
						<div className='img__container'></div>
						<div className='info'>
							<h4>Aderonke Salami</h4>
							<h5>
								{truncate(
									'HR and Recruitment officer for SME|Career Coach & Advisory| LinkedIn Local Consulatant',
									75
								)}
							</h5>
							<button>
								<span>
									<FontAwesomeIcon icon={faPlus} />
								</span>{' '}
								Follow
							</button>
						</div>
					</div>
				</div>
				<div className='bottom__section'>
					<h2>
						View all recommendations{' '}
						<span>
							<FontAwesomeIcon icon={faArrowRight} />
						</span>
					</h2>
				</div>
			</section>
		</div>
	)
}

export default RightPane
