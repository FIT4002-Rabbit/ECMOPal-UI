<script lang="ts">
	import { fade, scale } from 'svelte/transition';

	let is_open = false;
</script>

<button class="bg-base-100 rounded-sm w-6" on:click={() => (is_open = true)}>?</button>
{#if is_open === true}
	<!-- Black background that blocks interaction -->
	<div
		transition:fade={{ duration: 150 }}
		class="fixed z-50 left-0 top-0 w-full h-full bg-black/[.5] flex align-middle"
		on:mousedown={() => (is_open = false)}
	>
		<!-- Content box for modal -->
		<div
			transition:scale={{ duration: 150 }}
			on:mousedown|stopPropagation={() => undefined}
			class="relative w-2/3 lg:w-1/2 m-auto p-10 bg-base-100 rounded-md text-left whitespace-pre-line"
		>
			<button
				class="absolute top-0 right-0 w-8 h-8 m-2 rounded-sm bg-base-300"
				on:click={() => (is_open = false)}>X</button
			>
			<slot />
		</div>
	</div>
{/if}
