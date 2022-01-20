import './App.css'
import Home from './Components/HomeScreen/Home'
import Login from './Components/Login/Login'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import postReducer from './features/createPostSlice'
import MainLogin from './Components/Login/MainLogin'

const store = configureStore({
	reducer: {
		post: postReducer,
	},
})
function App() {
	let user = false
	return (
		<div className='App'>
			{' '}
			<Provider store={store}>{user ? <Home /> : <MainLogin />}</Provider>
		</div>
	)
}

export default App
