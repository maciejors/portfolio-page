<script lang="ts">
	import NavbarTile from './NavbarTile.svelte';
	import type NavbarTileItem from './navbarTileItem';

	const items: NavbarTileItem[] = [
		{ id: 1, label: 'Home', href: '/' },
		{ id: 2, label: 'Browse projects', href: '/#projects' },
	];
</script>

<nav
	class="sticky top-0 w-full bg-primary py-4 z-10
  flex flex-row justify-center sm:justify-start gap-12 sm:px-16"
>
	{#each items as item (item.id)}
		<NavbarTile {item} />
	{/each}
</nav>
