import React from 'react'
import styles from '../../CSS/loggedInCss/home.module.css'
import HomeNav from './HomeScreen/HomeNav'
import Main from './HomeScreen/Main'
function Home() {
	return (
		<div className={styles.home}>
			<HomeNav />
			<Main />
		</div>
	)
}

export default Home
