<script lang="ts">
	import { onMount } from 'svelte';
	import { getBackgroundPhotoUrl } from '../database/db';
	import Card from './Card.svelte';

	let backgroundImage = '';

	onMount(async () => {
		const url = await getBackgroundPhotoUrl();
		backgroundImage = `url('${url}')`;
	});
</script>

<header style="background-image: {backgroundImage}" class="w-full h-screen">
	<div class="flex flex-col h-full justify-center items-center bg-white bg-opacity-40 px-4">
		<Card>
			<div class="p-4 flex flex-col items-center gap-2">
				<h1 class="text-6xl font-bold text-center">Hi</h1>
				<h2 class="text-xl text-center">This page serves as a showcase for my projects</h2>
				<a href="/#projects" class="btn btn-primary">Browse</a>
			</div>
		</Card>
	</div>
</header>
