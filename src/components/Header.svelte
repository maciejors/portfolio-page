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
	<div class="profile-card-container">
		<section class="card profile-card">
			<h1>Maciej Orsłowski</h1>
			<div class="socials-list">
				<Tooltip tooltipText="Github" delayed>
					<a href="https://github.com/maciejors" target="_blank">
						<GithubIcon size="28" />
					</a>
				</Tooltip>
				<Tooltip tooltipText="LinkedIn" delayed>
					<a href="https://www.linkedin.com/in/maciejors/" target="_blank">
						<LinkedinIcon size="28" />
					</a>
				</Tooltip>
				<Tooltip tooltipText="My CV" delayed>
					<a href={cvDownloadUrl} target="_blank">
						<FileTextIcon size="28" />
					</a>
				</Tooltip>
			</div>
		</section>
	</div>
</header>

<style lang="postcss">
	header {
		@apply w-full h-96 bg-cover bg-home bg-no-repeat;
	}

	h1 {
		@apply text-center;
	}

	.profile-card-container {
		@apply flex flex-col h-full justify-center items-center bg-white bg-opacity-40 px-4 backdrop-blur-sm;
	}

	.profile-card {
		@apply bg-green-600 text-white p-4 flex flex-col items-center gap-4;
	}

	.socials-list {
		@apply flex flex-row items-center gap-6 h-8;
	}

	a:hover {
		@apply text-gray-200;
	}
</style>
