<script lang="ts">
	import '../app.postcss';
	import Navbar from '../components/nav/Navbar.svelte';
</script>

<Navbar />
<div class="bg-gray-300">
	<slot />
</div>
