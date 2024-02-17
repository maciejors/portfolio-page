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

export async function getProjectsFromList(listName: string): Promise<Project[]> {
	const listSnapshot = await get(databaseRef(db, `lists/${listName}`));
	if (!listSnapshot.exists()) {
		return [];
	}
	const projectIdsRaw: string = listSnapshot.val();
	const projectIds: number[] = projectIdsRaw.split(',').map((v) => parseInt(v));
	let projects: Project[] = [];
	for (let projectId of projectIds) {
		// fetch project data
		const project = await getProjectData(projectId);
		// add a project to the project list
		projects.push(project);
	}
	return projects;
}

async function getProjectData(projectId: number): Promise<Project> {
	const projectSnapshot = await get(databaseRef(db, `projects/${projectId}`));
	if (!projectSnapshot.exists()) {
		console.log(`No data for project of id ${projectId}`);
	}
	const project: Project = projectSnapshot.val();
	return project;
}

export async function getProjectImages(projectId: number) {
	const pictureRefs = (await listAll(storageRef(storage, `app-screenshots/${projectId}`))).items;
	if (pictureRefs.length === 0) {
		return [];
	}
	const pictureUrls: string[] = [];
	for (let picture of pictureRefs) {
		const downloadUrl = await getDownloadURL(picture);
		pictureUrls.push(downloadUrl);
	}
	return pictureUrls;
}

export async function getCvDownloadUrl(): Promise<string> {
	return await getDownloadURL(storageRef(storage, 'CV.pdf'));
}
