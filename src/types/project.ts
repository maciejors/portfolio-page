export default interface Project {
	id: number;
	name: string;
	shortDescription: string;
	technologies: string[];
	repoUrl: string;
	projectUrl?: string;
	pictureUrls?: string[];
}
