import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyBE7IrU0z2NbRz9wLkCfCQpC8UP2Txnhfo',
	authDomain: 'my-projects-showcase.firebaseapp.com',
	databaseURL: 'https://my-projects-showcase-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'my-projects-showcase',
	storageBucket: 'my-projects-showcase.appspot.com',
	messagingSenderId: '751442375512',
	appId: '1:751442375512:web:811d55222404e88290ab2d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);
