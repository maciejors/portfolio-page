<script lang="ts">
	import type Project from '../../types/project';
	import Card from '../Card.svelte';

	export let project: Project;
</script>

<Card>
	<div class="w-full sm:w-72 h-56">{project.name}</div>
</Card>
