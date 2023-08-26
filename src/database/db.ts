import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
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
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return [
		{
			id: 1,
			name: 'Lorem ipsum',
			shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
			technologies: ['svelte', 'tailwind', 'python'],
			repoUrl: '/',
			pictureUrls: [
				'https://picsum.photos/600/400',
				'https://picsum.photos/200/400',
				'https://picsum.photos/500/300',
			],
		},
		{
			id: 2,
			name: 'Lorem 2',
			shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elitd sadsad sadasd',
			technologies: ['react', 'java'],
			repoUrl: '/',
			projectUrl: '/',
		},
		{
			id: 1,
			name: 'Lorem ipsum',
			shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
			technologies: ['svelte', 'tailwind', 'python'],
			repoUrl: '/',
			pictureUrls: [
				'https://picsum.photos/600/400',
				'https://picsum.photos/200/400',
				'https://picsum.photos/500/300',
			],
		},
		{
			id: 2,
			name: 'Lorem 2',
			shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elitd sadsad sadasd',
			technologies: ['react', 'java'],
			repoUrl: '/',
			projectUrl: '/',
		},
		{
			id: 1,
			name: 'Lorem ipsum',
			shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
			technologies: ['svelte', 'tailwind', 'python'],
			repoUrl: '/',
			pictureUrls: [
				'https://picsum.photos/600/400',
				'https://picsum.photos/200/400',
				'https://picsum.photos/500/300',
			],
		},
		{
			id: 2,
			name: 'Lorem 2',
			shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elitd sadsad sadasd',
			technologies: ['react', 'java'],
			repoUrl: '/',
			projectUrl: '/',
		},
	];
}
