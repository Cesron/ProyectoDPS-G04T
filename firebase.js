// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCuXBYzoxgifzCRLc0tQJy9vCkabVQUJtI',
	authDomain: 'la-tienda-de-la-abuela.firebaseapp.com',
	projectId: 'la-tienda-de-la-abuela',
	storageBucket: 'la-tienda-de-la-abuela.appspot.com',
	messagingSenderId: '936054042714',
	appId: '1:936054042714:web:6ebbe12de6f9a255142863',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
