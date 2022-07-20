import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserAuth } from '../features/userAuth'
import { setUser } from '../features/userSlice'
import { auth, db } from '../firebase'

function useStateChange() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (cUser) => {
			if (cUser) {
				dispatch(setUserAuth(cUser.uid))
				getDoc(doc(db, 'users', cUser.uid)).then((snapShot) => {
					const data = snapShot.data()
					dispatch(setUser({ name: data.name, email: data.email, id: data.id, isOnline: data.isOnline }))
				})
				navigate('/home')
			} else {
				dispatch(setUserAuth(null))
				dispatch(setUser(null))
			}
		})
		return () => {
			return unSubscribe
		}
	}, [dispatch])
}

export default useStateChange
