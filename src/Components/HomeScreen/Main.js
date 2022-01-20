import React from 'react'
import Feeds from './Feeds'
import LeftPane from './LeftPane'
import './Main.css'
import RightPane from './RightPane'
function Main() {
	return (
		<div className='container'>
			<LeftPane />
			<Feeds />
			<RightPane />
		</div>
	)
}

export default Main
