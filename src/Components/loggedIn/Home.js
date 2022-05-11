import React from 'react'
import styles from '../../CSS/loggedInCss/home.module.css'
import HomeNav from './HomeScreen/HomeNav'
function Home() {
	return (
		<div className={styles.home}>
			<HomeNav />
		</div>
	)
}

export default Home
