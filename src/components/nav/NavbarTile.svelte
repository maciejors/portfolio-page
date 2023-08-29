<script lang="ts">
	import type { NavbarTileItem } from '../../types/navbarTileItem';

	export let item: NavbarTileItem;
</script>

<a
	href={item.href}
	class="text-white cursor-pointer border-b-2 border-transparent
  hover:border-white hover:text-white active:text-gray-200 active:border-gray-200"
>
	{item.label}
</a>
