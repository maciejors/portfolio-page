<script lang="ts">
	import Card from './Card.svelte';
	import Icon from '@iconify/svelte';

	interface SocialPlatformAcc {
		id: number;
		iconId: string;
		url: string;
	}

	const socials: SocialPlatformAcc[] = [
		{ id: 1, iconId: 'mdi:github', url: 'https://github.com/maciejors' },
		{ id: 2, iconId: 'mdi:linkedin', url: 'https://www.linkedin.com/in/maciejors/' },
	];
</script>

<header class="bg-home w-full h-96">
	<div
		class="flex flex-col h-full justify-center items-center bg-white bg-opacity-40 px-4 text-gray-800"
	>
		<Card>
			<div class="p-4 flex flex-col items-center gap-4">
				<h1 class="text-center">Maciej Orsłowski</h1>
				<div class="flex flex-row items-center gap-6">
					{#each socials as social (social.id)}
						<a href={social.url}>
							<Icon icon={social.iconId} width="32" height="32" />
						</a>
					{/each}
				</div>
			</div>
		</Card>
	</div>
</header>
