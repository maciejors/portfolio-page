<script lang="ts">
	import Card from './shared/Card.svelte';

	interface SocialPlatformAcc {
		id: number;
		icon: string;
		url: string;
	}

	const socials: SocialPlatformAcc[] = [
		{ id: 1, icon: 'github', url: 'https://github.com/maciejors' },
		{ id: 2, icon: 'linkedin', url: 'https://www.linkedin.com/in/maciejors/' },
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
						<a href={social.url} class="h-full">
							<img src={`/iconify-icons/${social.icon}.svg`} alt={social.icon} class="h-full" />
						</a>
					{/each}
				</div>
			</div>
		</Card>
	</div>
</header>
