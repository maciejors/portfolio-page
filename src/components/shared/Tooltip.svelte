<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		tooltipText: string;
		delayed?: boolean;
	}
	let { children, tooltipText, delayed = false }: Props = $props();
</script>

<span class="tooltip">
	<span class="tooltip-text" class:delayed>{tooltipText}</span>
	{@render children()}
</span>

<style lang="postcss">
	.tooltip {
		@apply relative;
	}

	.tooltip-text {
		@apply invisible opacity-0 absolute bottom-full left-1/2 -translate-x-1/2 z-20 mb-1;
		@apply bg-gray-700 text-white text-sm text-center rounded px-1.5 py-0.5 whitespace-nowrap;
	}

	.tooltip:hover .tooltip-text {
		@apply visible opacity-100 transition-opacity;
	}

	.tooltip:hover .delayed {
		@apply delay-500;
	}
</style>
