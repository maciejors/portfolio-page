<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { ExternalLinkIcon, CodeIcon, UsersIcon } from 'svelte-feather-icons';
	import type Project from '../../types/project';
	import ImageViewer from '../ImageViewer.svelte';
	import Pill from '../shared/Pill.svelte';
	import Tooltip from '../shared/Tooltip.svelte';

	const dispatchEvent = createEventDispatcher<{ pillClick: string }>();

	export let project: Project;
	export let activePill: string;
	$: highlighted = project.technologies.includes(activePill);

	let collabHoverText = `${project.collaborators} collaborator`;
	if (project.collaborators > 1) {
		collabHoverText += 's';
	}

	function onPillClick(pillText: string) {
		dispatchEvent('pillClick', pillText);
	}
</script>

<section class="card project-card" class:highlighted>
	<main>
		<h3 class="card-title">
			<span>{project.name}</span>
			{#if project.collaborators > 0}
				<span class="collab-icon">
					<Tooltip tooltipText={collabHoverText}>
						<UsersIcon size="24" />
					</Tooltip>
				</span>
			{/if}
		</h3>
		<p class="pill-list">
			{#each project.technologies as t (t)}
				<Pill on:click={() => onPillClick(t)} active={activePill === t}>{t}</Pill>
			{/each}
		</p>
		<p>{project.shortDescription}</p>
	</main>
	<footer>
		{#if project.projectUrl !== undefined}
			<Tooltip tooltipText="View project" delayed>
				<a href={project.projectUrl} target="_blank">
					<ExternalLinkIcon size="24" />
				</a>
			</Tooltip>
		{/if}
		{#if project.pictureUrls !== undefined}
			<Tooltip tooltipText="View images" delayed>
				<ImageViewer images={project.pictureUrls} />
			</Tooltip>
		{/if}
		{#if project.repoUrl !== undefined}
			<Tooltip tooltipText="View code" delayed>
				<a href={project.repoUrl} target="_blank">
					<CodeIcon size="24" />
				</a>
			</Tooltip>
		{/if}
	</footer>
</section>

<style lang="postcss">
	.project-card {
		@apply bg-white border border-transparent w-full sm:w-72 h-56 p-3 flex flex-col justify-between transition-colors;
	}

	.project-card.highlighted {
		@apply bg-blue-50;
	}

	.collab-icon:hover {
		@apply text-gray-700;
	}

	.project-card main {
		@apply flex flex-col gap-3;
	}

	.project-card footer {
		@apply flex flex-row gap-4 h-6 w-full justify-end;
	}

	.card-title {
		@apply flex flex-row justify-start items-center gap-2;
	}

	.pill-list {
		@apply flex flex-row flex-wrap gap-1.5;
	}
</style>
