<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { ExternalLinkIcon, CodeIcon, UsersIcon, BookIcon } from 'svelte-feather-icons';
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
			<Tooltip tooltipText="View project">
				<a href={project.projectUrl} target="_blank">
					<ExternalLinkIcon size="24" />
				</a>
			</Tooltip>
		{/if}
		{#if project.documentationUrl !== undefined}
			<Tooltip tooltipText="View documentation">
				<a href={project.documentationUrl} target="_blank">
					<BookIcon size="24" />
				</a>
			</Tooltip>
		{/if}
		{#if project.hasImages}
			<Tooltip tooltipText="View images">
				<ImageViewer projectId={project.id} />
			</Tooltip>
		{/if}
		{#if project.repoUrl !== undefined}
			<Tooltip tooltipText="View code">
				<a href={project.repoUrl} target="_blank">
					<CodeIcon size="24" />
				</a>
			</Tooltip>
		{/if}
	</footer>
</section>

<style lang="postcss">
	.project-card {
		@apply bg-white transition-colors border border-transparent;
		@apply w-full sm:w-80 sm:h-60 p-3;
		@apply flex flex-col justify-between gap-2;
	}

	.project-card.highlighted {
		@apply bg-green-100 border-green-300;
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
