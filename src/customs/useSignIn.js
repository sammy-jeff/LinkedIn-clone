import { signInWithEmailAndPassword } from 'firebase/auth'
import { doc, updateDoc } from 'firebase/firestore'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setLoading } from '../features/userSlice'
import { auth } from '../firebase'

function useSignIn() {
	const dispatch = useDispatch()
	const handleSignIn = async (e, email, password) => {
		e.preventDefault()
		try {
			dispatch(setLoading(true))
			const signInUser = await signInWithEmailAndPassword(auth, email, password)
			await updateDoc(doc(auth, 'users', signInUser.user.uid), {
				isOnline: true,
			})
			dispatch(setLoading(false))
		} catch (error) {
			dispatch(setLoading(false))
		}
	}
	return handleSignIn
}

export default useSignIn
