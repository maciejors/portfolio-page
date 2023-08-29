<script lang="ts">
	import type Project from '../../types/project';
	import IconCodeJson from '../icons/IconCodeJson.svelte';
	import IconImageMultiple from '../icons/IconImageMultiple.svelte';
	import IconLaunch from '../icons/IconLaunch.svelte';
	import Card from '../shared/Card.svelte';
	import Pill from '../shared/Pill.svelte';
	import Tooltip from '../shared/Tooltip.svelte';

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
				<Tooltip tooltipText="View project">
					<a href={project.projectUrl}>
						<IconLaunch size="24" />
					</a>
				</Tooltip>
			{/if}
			{#if project.pictureUrls !== undefined}
				<Tooltip tooltipText="View images">
					<button class="inline">
						<IconImageMultiple size="24" />
					</button>
				</Tooltip>
			{/if}
			<Tooltip tooltipText="View code">
				<a href={project.repoUrl}>
					<IconCodeJson size="24" />
				</a>
			</Tooltip>
		</footer>
	</div>
</Card>
