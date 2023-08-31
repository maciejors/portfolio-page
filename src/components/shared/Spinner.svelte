<script lang="ts">
	export let radius = 16;
	export let width = 4;
	$: size = `${radius * 2}px`;
</script>

<span
	class="inline-block border-8 rounded-[100%] border-b-transparent animate-spin"
	style={`width: ${size}; height: ${size}; border-width: ${width}px;`}
/>
