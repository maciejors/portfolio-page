<script lang="ts">
	export let tooltipText: string;
	export let delayed = false;
</script>

<span class="tooltip">
	<span class="tooltip-text" class:delayed>{tooltipText}</span>
	<slot />
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
		@apply delay-700;
	}
</style>
