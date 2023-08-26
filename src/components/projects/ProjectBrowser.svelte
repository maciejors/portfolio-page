<script lang="ts">
	import { onMount } from 'svelte';
	import Container from '../Container.svelte';
	import ProjectCard from './ProjectCard.svelte';
	import type Project from '../../types/project';
	import { getProjects } from '../../database/db';

	let projects: Project[] = [];

	onMount(async () => {
		projects = await getProjects();
	});
</script>

<article>
	<Container>
		<div class="transition ease-out duration-1000" class:load-transition={projects.length === 0}>
			<h2 class="w-full text-center md:text-start py-4">My projects:</h2>
			<section class="grid grid-flow-row gap-8 py-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{#each projects as project}
					<div class="col-span-1">
						<ProjectCard {project} />
					</div>
				{/each}
			</section>
		</div>
	</Container>
</article>

<style lang="postcss">
	.load-transition {
		@apply opacity-0 -translate-y-4;
	}
</style>
