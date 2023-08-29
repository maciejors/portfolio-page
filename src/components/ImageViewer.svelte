<script lang="ts">
	import { ArrowLeftIcon, ArrowRightIcon, ImageIcon, XIcon } from 'svelte-feather-icons';

	export let images: string[];

	let visible = false;
	let activeImageIdx = 0;

	function showImages() {
		activeImageIdx = 0;
		visible = true;
		document.body.style.overflowY = 'hidden';
	}

	function hideImages() {
		visible = false;
		document.body.style.overflowY = 'scroll';
	}
</script>

<button class="inline" on:click={showImages}>
	<ImageIcon size="24" />
</button>
{#if visible}
	<div class="overlay">
		<div class="px-16 w-full h-full flex justify-center items-center">
			<img src={images[activeImageIdx]} alt="Image {activeImageIdx + 1}/{images.length}" />
		</div>
		<nav
			class="h-full w-full absolute top-0 left-0 p-2 flex justify-between items-center transition-opacity"
		>
			<button
				class="h-fit"
				on:click={() => activeImageIdx--}
				class:invisible={activeImageIdx === 0}
			>
				<ArrowLeftIcon size="48" />
			</button>
			<button
				class="h-fit"
				on:click={() => activeImageIdx++}
				class:invisible={activeImageIdx === images.length - 1}
			>
				<ArrowRightIcon size="48" />
			</button>
			<button class="absolute top-2 right-2" on:click={hideImages}>
				<XIcon size="48" />
			</button>
		</nav>
	</div>
{/if}

<style lang="postcss">
	.overlay {
		@apply fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-40;
	}

	img {
		max-width: 90%;
		max-height: 100%;
	}

	nav button {
		@apply text-gray-100 hover:text-gray-300;
	}
</style>
