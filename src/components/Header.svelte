<script lang="ts">
	import { GithubIcon, LinkedinIcon } from 'svelte-feather-icons';
	import Tooltip from './shared/Tooltip.svelte';
</script>

<header>
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
	</div>
</header>

<style lang="postcss">
	header {
		@apply w-full h-60 bg-cover text-white bg-green-600 flex flex-col justify-center items-center gap-8 px-16;
	}

	h1 {
		@apply lg:text-7xl text-center sm:text-start;
	}

	.socials-list {
		@apply flex flex-row items-center justify-center sm:justify-start gap-6 h-8;
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
