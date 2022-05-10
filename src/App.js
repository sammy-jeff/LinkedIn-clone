import './App.css'
import Home from './Components/loggedIn/Home'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import Main from './Components/login/Main'

const store = configureStore({
	reducer: {},
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
