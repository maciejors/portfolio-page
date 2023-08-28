<script lang="ts">
	import Card from './shared/Card.svelte';
	import Tooltip from './shared/Tooltip.svelte';

	interface SocialBtnData {
		id: number;
		icon: string;
		url: string;
		description: string;
	}

	const socials: SocialBtnData[] = [
		{ id: 1, icon: 'github', url: 'https://github.com/maciejors', description: 'Github' },
		{
			id: 2,
			icon: 'linkedin',
			url: 'https://www.linkedin.com/in/maciejors/',
			description: 'LinkedIn',
		},
	];
</script>

<header class="w-full h-96 bg-cover bg-home bg-no-repeat">
	<div
		class="flex flex-col h-full justify-center items-center bg-white bg-opacity-40 px-4 backdrop-blur-sm"
	>
		<Card>
			<div class="p-4 flex flex-col items-center gap-4">
				<h1 class="text-center">Maciej Orsłowski</h1>
				<div class="flex flex-row items-center gap-6 h-8">
					{#each socials as social (social.id)}
						<Tooltip tooltipText={social.description}>
							<a href={social.url}>
								<img
									src={`/iconify-icons/${social.icon}.svg`}
									alt={social.icon}
									height="32"
									width="32"
								/>
							</a>
						</Tooltip>
					{/each}
				</div>
			</div>
		</Card>
	</div>
</header>
