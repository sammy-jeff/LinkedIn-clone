// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCKw_ul9CP5i8eGk3vx-Aka6T7YKZcvvRU',
	authDomain: 'linkedin-clone-58371.firebaseapp.com',
	projectId: 'linkedin-clone-58371',
	storageBucket: 'linkedin-clone-58371.appspot.com',
	messagingSenderId: '120498568172',
	appId: '1:120498568172:web:1242026eee5973d1f29ec9',
	measurementId: 'G-YRSWK82BR7',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// create db
const db = getFirestore(app)
// create auth
const auth = getAuth(app)
export { auth, db }
