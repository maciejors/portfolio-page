<script lang="ts">
	import { onMount } from 'svelte';
	import Card from '../components/Card.svelte';
	import { getBackgroundPhotoUrl } from '../database/db';

	let backgroundImage = '';
	onMount(async () => {
		const url = await getBackgroundPhotoUrl();
		backgroundImage = `url('${url}')`;
	});
</script>

<main style="background-image: {backgroundImage}" class="fixed w-full h-full">
	<div class="flex flex-col h-screen justify-center items-center bg-white bg-opacity-40">
		<Card>
			<h1 class="text-6xl font-bold text-center mb-2">WORK IN PROGRESS</h1>
			<h2 class="text-3xl text-center">Please stand by</h2>
		</Card>
	</div>
</main>
