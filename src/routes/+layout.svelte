<script lang="ts">
	import '../app.postcss';
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/nav/Navbar.svelte';
</script>

<div class="bg-gray-300 min-h-screen">
	<Navbar />
	<slot />
	<Footer />
</div>
