<script lang="ts">
	import { FileTextIcon, GithubIcon, LinkedinIcon } from 'svelte-feather-icons';
	import Tooltip from './shared/Tooltip.svelte';
	import { onMount } from 'svelte';
	import { getCvDownloadUrl } from '../database/db';

	let cvDownloadUrl = '';

	onMount(async () => {
		cvDownloadUrl = await getCvDownloadUrl();
	});
</script>

<header>
	<span class="bracket">&lt;</span>
	<section>
		<h1>Maciej Orsłowski</h1>
		<div class="socials-list">
			<span class="link-wrapper">
				<Tooltip tooltipText="Github" delayed>
					<a href="https://github.com/maciejors" target="_blank">
						<GithubIcon size="28" />
					</a>
				</Tooltip>
			</span>
			<span class="link-wrapper">
				<Tooltip tooltipText="LinkedIn" delayed>
					<a href="https://www.linkedin.com/in/maciejors/" target="_blank">
						<LinkedinIcon size="28" />
					</a>
				</Tooltip>
			</span>
			<span class="link-wrapper">
				<Tooltip tooltipText="CV" delayed>
					<a href={cvDownloadUrl} target="_blank">
						<FileTextIcon size="28" />
					</a>
				</Tooltip>
			</span>
		</div>
	</section>
	<span class="bracket">/&gt;</span>
</header>

<style lang="postcss">
	header {
		@apply w-full h-80 bg-cover text-white bg-green-600 flex flex-row justify-center items-center gap-8 px-16;
	}

	header section {
		@apply flex flex-col justify-center gap-8;
	}

	h1 {
		@apply lg:text-7xl;
	}

	.bracket {
		@apply hidden sm:block text-6xl md:text-9xl text-white opacity-50;
	}

	.socials-list {
		@apply flex flex-row items-center gap-6 h-8;
	}

	a {
		@apply block cursor-pointer p-2 rounded-full border-gray-300 border-opacity-40 border-4 transition;
	}

	a:hover {
		@apply text-white bg-gray-300 bg-opacity-20 border-opacity-50;
	}

	a:active {
		@apply bg-opacity-30;
	}
</style>
