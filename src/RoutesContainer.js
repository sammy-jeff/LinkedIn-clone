import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import styles from './CSS/loggedInCss/home.module.css'
import MainLogin from './Components/login/MainLogin'
import SignInScreen from './Components/login/SignInScreen'
import SignUpScreen from './Components/login/SignUpScreen'

import ProtectedRoutes from './ProtectedRoutes'
import HomeNav from './Components/loggedIn/HomeScreen/HomeNav'
import CreatePost from './Components/loggedIn/HomeScreen/CreatePost'
import Main from './Components/loggedIn/HomeScreen/Main'
// import Dashboard from './Components/loggedIn/Dashboard'
import useStateChange from './customs/useStateChange'

function RoutesContainer() {
	const [showPassword, setShowPassword] = useState(false)
	const { userAuth } = useSelector((state) => state.userAuth)
	const { user } = useSelector((state) => state.user.value)
	const { postModal } = useSelector((state) => state.postModal)
	console.log(user)
	console.log(userAuth)
	useStateChange()
	return (
		<div className={userAuth ? styles.home : ''}>
			<>
				{userAuth && <HomeNav />}
				{postModal && <CreatePost />}
			</>
			<Routes>
				<>
					<Route index element={<MainLogin />} />
					<Route
						path='/'
						element={<MainLogin showPassword={showPassword} setShowPassword={setShowPassword} />}
					/>
					<Route
						path='signIn'
						element={<SignInScreen showPassword={showPassword} setShowPassword={setShowPassword} />}
					/>
					<Route
						path='signUp'
						element={<SignUpScreen showPassword={showPassword} setShowPassword={setShowPassword} />}
					/>{' '}
				</>

				<>
					<Route element={<ProtectedRoutes userAuth={userAuth} />}>
						<Route path='home' element={<Main />} />
						{/* <Route path='dashboard' element={<Dashboard />} /> */}
						<Route path='networks' element={<h1>Page under construction</h1>} />
						<Route path='jobs' element={<h1>Page under construction</h1>} />
						<Route path='messaging' element={<h1>Page under construction</h1>} />
					</Route>
				</>
				<Route path='*' element={<h1>Page not found</h1>} />
			</Routes>

			{/* {user && postModal && <CreatePost />} */}
		</div>
	)
}

export default RoutesContainer
