<script lang="ts">
	import { ExternalLinkIcon, CodeIcon } from 'svelte-feather-icons';
	import type Project from '../../types/project';
	import ImageViewer from '../ImageViewer.svelte';
	import Pill from '../shared/Pill.svelte';
	import Tooltip from '../shared/Tooltip.svelte';

	export let project: Project;
</script>

<div
	class="card bg-white border border-gray-100 w-full sm:w-72 h-56 p-3 flex flex-col justify-between"
>
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
			<Tooltip tooltipText="View project">
				<a href={project.projectUrl}>
					<ExternalLinkIcon size="24" />
				</a>
			</Tooltip>
		{/if}
		{#if project.pictureUrls !== undefined}
			<Tooltip tooltipText="View images">
				<ImageViewer images={project.pictureUrls} />
			</Tooltip>
		{/if}
		<Tooltip tooltipText="View code">
			<a href={project.repoUrl}>
				<CodeIcon size="24" />
			</a>
		</Tooltip>
	</footer>
</div>
