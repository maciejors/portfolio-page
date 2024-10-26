<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<div
	class="flex flex-col justify-center items-center
  px-6 sm:px-12 lg:px-18 xl:px-36"
>
	{@render children()}
</div>
