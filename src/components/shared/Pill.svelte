<script lang="ts">
	export let textColour = '';
	export let bgColour = '#e5e7eb';

	$: textColourStyle = textColour !== '' ? `color: ${textColour}` : '';
</script>

<span
	class="px-2 py-0.5 rounded-full text-xs bg-gray-200"
	style={`background: ${bgColour}; ${textColourStyle}`}
>
	<slot />
</span>
