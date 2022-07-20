import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	userAuth: null,
}

const userAuth = createSlice({
	name: 'userAuth',
	initialState,
	reducers: {
		setUserAuth: (state, action) => {
			state.userAuth = action.payload
		},
	},
})
export const { setUserAuth } = userAuth.actions
export default userAuth.reducer
