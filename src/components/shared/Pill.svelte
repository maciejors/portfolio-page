<script lang="ts">
	export let active = false;
</script>

<button class="pill" class:active on:click>
	<slot />
</button>

<style lang="postcss">
	.pill {
		@apply px-2 py-0.5 rounded-full text-xs bg-gray-200 hover:bg-gray-300 transition-colors;
	}

	.pill.active {
		@apply bg-green-400 hover:bg-green-500;
	}
</style>
