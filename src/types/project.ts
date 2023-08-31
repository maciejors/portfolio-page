export default interface Project {
	id: number;
	name: string;
	shortDescription: string;
	technologies: string[];
	collaborators: number;
	repoUrl?: string;
	projectUrl?: string;
	pictureUrls?: string[];
}
