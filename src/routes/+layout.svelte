<script lang="ts">
	import '../app.postcss';
	import type { Snippet } from 'svelte';
	import Footer from '../components/Footer.svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="bg-gray-300 min-h-screen">
	{@render children()}
	<Footer />
</div>
