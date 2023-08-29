<script lang="ts">
	import IconGithub from './icons/IconGithub.svelte';
	import IconLinkedin from './icons/IconLinkedin.svelte';
	import Card from './shared/Card.svelte';
	import Tooltip from './shared/Tooltip.svelte';
</script>

<header class="w-full h-96 bg-cover bg-home bg-no-repeat">
	<div
		class="flex flex-col h-full justify-center items-center bg-white bg-opacity-40 px-4 backdrop-blur-sm"
	>
		<Card>
			<div class="p-4 flex flex-col items-center gap-4">
				<h1 class="text-center">Maciej Orsłowski</h1>
				<div class="flex flex-row items-center gap-6 h-8">
					<Tooltip tooltipText="Github">
						<a href="https://github.com/maciejors">
							<IconGithub size="28" />
						</a>
					</Tooltip>
					<Tooltip tooltipText="LinkedIn">
						<a href="https://www.linkedin.com/in/maciejors/">
							<IconLinkedin size="28" />
						</a>
					</Tooltip>
				</div>
			</div>
		</Card>
	</div>
</header>
