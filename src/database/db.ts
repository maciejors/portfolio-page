import { initializeApp } from 'firebase/app';
import { getDatabase, ref as databaseRef, get } from 'firebase/database';
import { getStorage, ref as storageRef, getDownloadURL, listAll } from 'firebase/storage';
import type Project from '../types/project';

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

export async function getProjects(): Promise<Project[]> {
	const featuredListSnapshot = await get(databaseRef(db, 'featured'));
	if (!featuredListSnapshot.exists()) {
		return [];
	}
	const projectIds: number[] = featuredListSnapshot.val();
	let projects: Project[] = [];
	for (let projectId of projectIds) {
		// fetch project data
		const projectSnapshot = await get(databaseRef(db, `projects/${projectId}`));
		if (!projectSnapshot.exists()) {
			console.log(`No data for project of id ${projectId}`);
		}
		const project: Project = projectSnapshot.val();
		// fetch project images (if any exist)
		const pictureRefs = (await listAll(storageRef(storage, `app-screenshots/${projectId}`))).items;
		if (pictureRefs.length !== 0) {
			const pictureUrls: string[] = [];
			for (let picture of pictureRefs) {
				const downloadUrl = await getDownloadURL(picture);
				pictureUrls.push(downloadUrl);
			}
			project.pictureUrls = pictureUrls;
		}
		// add a project to the project list
		projects.push(project);
	}
	return projects;
}

export async function getLastUpdatedDate(): Promise<string> {
	const lastUpdatedDateSnapshot = await get(databaseRef(db, 'lastUpdated'));
	if (!lastUpdatedDateSnapshot.exists()) {
		return '';
	}
	return lastUpdatedDateSnapshot.val();
}
