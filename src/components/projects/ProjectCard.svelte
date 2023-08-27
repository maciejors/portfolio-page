<script lang="ts">
	import Icon from '@iconify/svelte';
	import type Project from '../../types/project';
	import Card from '../shared/Card.svelte';
	import Pill from '../shared/Pill.svelte';

	export let project: Project;
</script>

<Card>
	<div class="w-full sm:w-72 h-56 p-3 flex flex-col justify-between">
		<main class="flex flex-col gap-3">
			<h3>{project.name}</h3>
			<p class="flex flex-row flex-wrap gap-1.5">
				{#each project.technologies as t (t)}
					<Pill>{t}</Pill>
				{/each}
			</p>
			<p>{project.shortDescription}</p>
		</main>
		<footer class="flex flex-row gap-4 h-6 w-full justify-end">
			{#if project.projectUrl !== undefined}
				<a href={project.projectUrl}>
					<Icon icon="mdi:launch" height="24" />
				</a>
			{/if}
			{#if project.pictureUrls !== undefined}
				<button class="inline">
					<Icon icon="mdi:image" height="24" />
				</button>
			{/if}
			<a href={project.repoUrl}>
				<Icon icon="mdi:code-json" height="24" />
			</a>
		</footer>
	</div>
</Card>
