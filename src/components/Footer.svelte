<script lang="ts">
	import { onMount } from 'svelte';
	import { getLastUpdatedDate } from '../database/db';

	let lastUpdated = '';

	onMount(async () => {
		lastUpdated = await getLastUpdatedDate();
	});
</script>

<footer>
	<p class="footer-text">Last updated: {lastUpdated}</p>
</footer>

<style lang="postcss">
	footer {
		@apply w-full flex justify-center pt-4 text-gray-500 text-sm;
	}

	.footer-text {
		@apply border-t border-gray-500 border-opacity-30 px-12 py-4;
	}
</style>
