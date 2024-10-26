<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		active?: boolean;
		onclick: () => void;
	}
	let { children, active = false, onclick }: Props = $props();
</script>

<button class="pill" class:active {onclick}>
	{@render children()}
</button>

<style lang="postcss">
	.pill {
		@apply px-2 py-0.5 rounded-full text-xs bg-gray-200 hover:bg-gray-300 transition-colors;
	}

	.pill.active {
		@apply bg-green-400 hover:bg-green-500;
	}
</style>
