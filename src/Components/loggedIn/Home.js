import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../../CSS/loggedInCss/home.module.css'
import CreatePost from './HomeScreen/CreatePost'
import HomeNav from './HomeScreen/HomeNav'
import Main from './HomeScreen/Main'
function Home() {
	const post = useSelector((state) => state.postModal)
	console.log(post)
	return (
		<div className={styles.home}>
			<HomeNav />
			<Main />
			{post.postModal && <CreatePost />}
		</div>
	)
}

export default Home
