import { createSlice } from '@reduxjs/toolkit'

const postSlice = createSlice({
	name: 'user',
	initialState: { value: { createPost: false } },
	reducers: {
		showWindow: (state, action) => {
			state.value = action.payload
		},
	},
})
export const { showWindow } = postSlice.actions
export default postSlice.reducer
