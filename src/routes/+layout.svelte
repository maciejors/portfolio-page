<script lang="ts">
	import '../app.postcss';
	import Navbar from '../components/nav/Navbar.svelte';
</script>

<div class="bg-gray-300 min-h-screen">
	<Navbar />
	<slot />
</div>
