<!-- svelte-ignore-all a11y-missing-attribute -->
<script lang="ts">
	import Layout from './Layout.svelte';
	import { onMount } from 'svelte';
	import type { ModelType } from '../types';
	import Model from './Model.svelte';

	let loading = true;
	let models: ModelType[] = [];
	let activeModel = 'Lite';
	let model: ModelType | undefined;
	$: model = models.find((model) => model.name === activeModel);

	onMount(async () => {
		const res = await fetch('http://127.0.0.1:5000/models');
		models = await res.json();
		loading = false;
	});
</script>

<Layout>
	<div class="tabs" slot="header">
		{#each models as { name }}
			<button
				class="tab tab-lg tab-lifted"
				class:tab-active={name == activeModel}
				on:click={() => (activeModel = name)}>{name}</button
			>
		{/each}
		<div class="tab tab-lg tab-lifted flex-1 cursor-default" />
	</div>
	<div
		class={`flex-1 bg-base-100 ${loading ? 'flex items-center justify-center' : ''}`}
		slot="content"
	>
		{#if loading}
			<span class="loading loading-infinity loading-lg" />
		{:else if model}
			<Model {model} />
		{/if}
	</div>
</Layout>
