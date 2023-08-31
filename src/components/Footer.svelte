<script lang="ts">
	import { onMount } from 'svelte';
	import { getLastUpdatedDate } from '../database/db';

	let lastUpdated = '';

	onMount(async () => {
		lastUpdated = await getLastUpdatedDate();
	});
</script>

<footer class="w-full flex justify-center pt-4 text-gray-500 text-sm">
	<span class="border-t border-gray-500 border-opacity-30 px-12 py-4"
		>Last updated: {lastUpdated}</span
	>
</footer>
