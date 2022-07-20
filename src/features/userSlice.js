import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	user: null,
	isLoading: false,
	friendsList: [],
}

const userSlice = createSlice({
	name: 'user',
	initialState: { value: initialState },
	reducers: {
		setUser(state, { payload }) {
			state.value.user = payload
		},
		setLoading(state, { payload }) {
			state.value.isLoading = payload
		},
		setFriends(state, { payload }) {
			state.value.friendsList.push(payload)
		},
	},
})
export const { setUser, setLoading, setFriends } = userSlice.actions
export default userSlice.reducer
