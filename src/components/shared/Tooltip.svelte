<script lang="ts">
	export let tooltipText: string;
</script>

<div class="tooltip">
	<span class="tooltip-text">{tooltipText}</span>
	<slot />
</div>

<style lang="postcss">
	.tooltip {
		@apply relative inline-block;
	}

	.tooltip-text {
		@apply opacity-0 absolute bottom-full left-1/2 -translate-x-1/2 z-20 mb-1;
		@apply bg-gray-700 text-white text-sm text-center rounded px-1.5 py-0.5 whitespace-nowrap;
	}

	.tooltip:hover .tooltip-text {
		@apply opacity-100 transition-opacity delay-700;
	}
</style>
