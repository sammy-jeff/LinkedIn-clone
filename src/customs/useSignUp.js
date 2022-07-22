import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth, db } from '../firebase'
import { setLoading } from '../features/userSlice'
import { doc, setDoc, Timestamp } from 'firebase/firestore'
function useSignUp() {
	const dispatch = useDispatch()
	const { friendsList } = useSelector((state) => state.user.value)
	const handleSignUp = async (e, name, email, password) => {
		e.preventDefault()
		try {
			dispatch(setLoading(true))
			const createUser = await createUserWithEmailAndPassword(auth, email, password)
			await setDoc(doc(db, 'users', createUser.user.uid), {
				name: name,
				email: email,
				friendsList: friendsList,
				id: createUser.user.uid,
				createdAt: Timestamp.fromDate(new Date()),
				isOnline: true,
				avatar: '',
				avatarPath: '',
			})
			dispatch(setLoading(false))
		} catch (error) {
			dispatch(setLoading(false))
		}
	}
	return handleSignUp
}

export default useSignUp
