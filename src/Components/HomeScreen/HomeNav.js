import React, { useState } from 'react'
import './HomeNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faSearch,
	faHome,
	faNetworkWired,
	faBriefcase,
	faEnvelope,
	faBell,
	faSquare,
	faCaretDown,
} from '@fortawesome/free-solid-svg-icons'

function HomeNav() {
	const [active, setActive] = useState([
		{
			div_classname: 'home',
			icon: faHome,
			title: 'Home',
		},
		{
			div_classname: 'network',
			icon: faNetworkWired,
			title: 'My Network',
		},
		{
			div_classname: 'jobs',
			icon: faBriefcase,
			title: 'Jobs',
		},
		{
			div_classname: 'messaging',
			icon: faEnvelope,
			title: 'Messaging',
		},
		{
			div_classname: 'notifications',
			icon: faBell,
			title: 'Notifications',
		},
	])
	const [activeIndex, setActiveIndex] = useState(0)
	const handleClick = (index) => {
		setActiveIndex(index)
	}

	return (
		<div className='global__container'>
			<nav className='parent_container'>
				<div className='flex2'>
					<div className='logo-input'>
						<img src='LinkedIn.png' alt='LinkedIn' />
						<div className='input__proper'>
							<h2>
								<FontAwesomeIcon icon={faSearch} />
							</h2>
							<input type='text' placeholder='search' />
						</div>
					</div>
					<div className='icons'>
						{active.map((active1, index) => {
							return (
								<div className={active1.div_classname} key={index}>
									<FontAwesomeIcon
										icon={active1.icon}
										onClick={() => handleClick(index)}
										className={activeIndex === index ? 'live' : 'passive'}
									/>
									<h5>{active1.title}</h5>
									<div className={activeIndex === index ? 'active' : 'inactive'}></div>
								</div>
							)
						})}

						<div className='me'>
							<div className='profile__avatar'>
								<img src='' alt='' />
							</div>
							<h5>Me</h5>
							<div className='inactive'></div>
						</div>
					</div>
				</div>
			</nav>
			<div className='flex1'>
				<div className='work'>
					<FontAwesomeIcon icon={faSquare} />
					<h5>
						Work{' '}
						<span>
							<FontAwesomeIcon icon={faCaretDown} />
						</span>
					</h5>
				</div>
			</div>
		</div>
	)
}

export default HomeNav
