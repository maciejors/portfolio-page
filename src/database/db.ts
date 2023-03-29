import { initializeApp } from 'firebase/app';
import { getStorage, ref, listAll, getMetadata, getDownloadURL } from 'firebase/storage';

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
const storage = getStorage(app);

export async function getBackgroundPhotoUrl(): Promise<string> {
	const bgImagesRef = ref(storage, 'backgrounds');
	const allImages = (await listAll(bgImagesRef)).items;
	// get an image id
	// different photo every day
	const today = new Date();
	const dateSum = today.getFullYear() + today.getMonth() + today.getDate();
	const imagesCount = allImages.length;
	const id = dateSum % imagesCount;
	const chosenImageRef = allImages[id];
	// return a download url
	const downloadUrl = await getDownloadURL(chosenImageRef);
	return downloadUrl;
}
