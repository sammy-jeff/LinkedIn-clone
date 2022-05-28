import './App.css'
import Home from './Components/loggedIn/Home'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import Main from './Components/login/Main'
import postReducer from './features/createPost'
const store = configureStore({
	reducer: {
		postModal: postReducer,
	},
})
function App() {
	let user = true
	return (
		<div className='App'>
			{' '}
			<Provider store={store}>{user ? <Home /> : <Main />}</Provider>
		</div>
	)
}

export default App
