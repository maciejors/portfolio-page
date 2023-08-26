<script lang="ts">
	import Header from '../components/Header.svelte';
	import ProjectBrowser from '../components/projects/ProjectBrowser.svelte';
</script>

<svelte:head>
	<title>My projects</title>
</svelte:head>

<Header />
<main id="projects">
	<ProjectBrowser />
</main>
