<script lang="ts">
	import '../app.postcss';
	import Footer from '../components/Footer.svelte';
</script>

<div class="bg-gray-300 min-h-screen">
	<slot />
	<Footer />
</div>
