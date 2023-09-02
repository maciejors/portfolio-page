<script lang="ts">
	import { ArrowLeftIcon, ArrowRightIcon, ImageIcon, XIcon } from 'svelte-feather-icons';
	import Spinner from './shared/Spinner.svelte';
	import { getProjectImages } from '../database/db';

	export let projectId: number;

	let visible = false;
	let images: string[] = [];
	let activeImageIdx = 0;
	let activeImageUrl = '';
	let isLoading = true;

	async function showImages() {
		// reset state
		isLoading = true;
		activeImageIdx = 0;
		activeImageUrl = '';
		visible = true;
		document.body.style.overflowY = 'hidden';
		// get images urls
		if (images.length === 0) {
			images = await getProjectImages(projectId);
		}
		// finish loading
		updateImage();
	}

	function hideImages() {
		visible = false;
		document.body.style.overflowY = 'auto';
	}

	function prevImage() {
		activeImageIdx--;
		updateImage();
	}

	function nextImage() {
		activeImageIdx++;
		updateImage();
	}

	function updateImage() {
		// display spinner
		isLoading = true;
		const newUrl = images[activeImageIdx];
		// preload image
		const img = new Image();
		img.onload = () => {
			// hide spinner
			isLoading = false;
			// update image
			activeImageUrl = newUrl;
		};
		img.src = newUrl;
	}
</script>

<button class="inline" on:click={showImages}>
	<ImageIcon size="24" />
</button>
{#if visible}
	<div class="overlay">
		<div class="image-container">
			<img
				src={activeImageUrl}
				alt="Image {activeImageIdx + 1}/{images.length}"
				class:invisible={activeImageUrl === ''}
			/>
			<div class="spinner-container" class:invisible={!isLoading}>
				<Spinner radius={32} width={8} />
			</div>
		</div>
		<nav class:invisible={images.length === 0}>
			<button class="h-fit" on:click={prevImage} class:invisible={activeImageIdx === 0}>
				<ArrowLeftIcon size="48" />
			</button>
			<button
				class="h-fit"
				on:click={nextImage}
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

	.image-container {
		@apply px-16 w-full h-full flex justify-center items-center;
	}

	.spinner-container {
		@apply absolute w-full h-full flex justify-center items-center;
	}

	img {
		max-width: 90%;
		max-height: 100%;
	}

	nav {
		@apply h-full w-full absolute top-0 left-0 p-2 flex justify-between items-center transition-opacity;
	}

	nav button {
		@apply text-gray-100 hover:text-gray-300;
	}
</style>
