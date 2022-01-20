import React, { useEffect, useState } from 'react'
import './LeftPane.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faPlus, faSquare } from '@fortawesome/free-solid-svg-icons'

function LeftPane() {
	const [fixed, setFixed] = useState(false)
	const handleScroll = () => {
		let effectit = window.scrollY > 550 ? setFixed(true) : setFixed(false)
		return effectit
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div className='container__left'>
			<div className='box1'>
				<div className='pic__section'>
					<div className='pic__container'></div>
				</div>
				<div className='about__container'>
					<h2 className='abt'>Okoye Chibuike Samuel</h2>

					<div className='about'>
						<h6>Petroleum Engineering Graduate || Front End Web Developer</h6>
					</div>
				</div>
				<div className='connection'>
					<h4 style={{ color: '#00000099' }}>Connections</h4>
					<h4 style={{ color: '#0a66c2' }}>7</h4>
					<h4 style={{ color: '000000e6', fontWeight: 400 }}>Grow your Network</h4>
				</div>
				<div className='exclusives'>
					<h4 style={{ color: '#00000099' }}>Access exclusive tools and insights</h4>
					<h4 style={{ color: '000000e6', fontWeight: 400 }} id='premium_hov'>
						<span style={{ color: 'goldenrod' }}>
							<FontAwesomeIcon icon={faSquare} />
						</span>{' '}
						Try Premium for free
					</h4>
				</div>
				<div className='my_items'>
					<h4 style={{ color: '000000e6', fontWeight: 400 }}>
						<span>
							<FontAwesomeIcon icon={faAward} style={{ color: 'gray' }} />
						</span>{' '}
						My Items
					</h4>
				</div>
			</div>
			<div className={`box2 ${fixed && 'fixed'}`}>
				<div className='events'>
					<h4 id='first'>Groups</h4>
					<h4 id='second' style={{ gridArea: 4 }}>
						Events
					</h4>
					<h3 id='plus_placement'>
						<FontAwesomeIcon icon={faPlus} />
					</h3>
					<h4 id='third' style={{ gridArea: 5 }}>
						Followed Hashtags
					</h4>
				</div>
				<div className='discover'>
					<h3>Discover More</h3>
				</div>
			</div>
		</div>
	)
}

export default LeftPane
