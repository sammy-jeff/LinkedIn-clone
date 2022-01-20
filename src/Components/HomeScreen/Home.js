import React from 'react'
import HomeNav from './HomeNav'
import Main from './Main'
import './Home.css'
import { useSelector } from 'react-redux'
import CreatePost from './CreatePost'
function Home() {
	const post = useSelector((state) => state.post.value)
	return (
		<div className='Home'>
			<HomeNav />
			{post.createPost && <CreatePost />}
			<Main />
		</div>
	)
}

export default Home
