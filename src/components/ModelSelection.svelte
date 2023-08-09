<!-- svelte-ignore-all a11y-missing-attribute -->
<script lang="ts">
	import Layout from './Layout.svelte';
	import { onMount } from 'svelte';
	import type { ModelType, PatientDataType } from '../types';
	import Model from './Model.svelte';
	import { page } from '$app/stores';

	import ErrorMessage from './ErrorMessage.svelte';
	import { PUBLIC_BACKEND } from '$env/static/public';
	import { goto } from '$app/navigation';

	let loading = true;
	let error: string | undefined;
	let models: ModelType[] = [];
	let activeModel = $page.url.hash?.slice(1) ?? 'Lite';
	$: if (models.length > 0 && !models.find((model) => model.name === activeModel)) {
		activeModel = models[0].name;
	}

	let model: ModelType | undefined;
	$: model = models.find((model) => model.name === activeModel);
	$: if (model) goto(`#${model.name}`);

	let patientData: PatientDataType;
	$: patientData = Object.fromEntries(
		model?.features?.map((feature) => [feature.name, feature.default]) ?? []
	);

	onMount(async () => {
		try {
			const res = await fetch(PUBLIC_BACKEND + '/models');
			const json = await res.json();
			if (!res.ok) {
				throw new Error(json.error);
			}
			models = json;
		} catch (err) {
			if (err instanceof Error) {
				error = err.message;
			} else {
				error = 'Failed to load models';
			}
		}

		loading = false;
	});
</script>

<Layout>
	<div class="tabs justify-center" slot="header">
		{#each models as { name }}
			<button
				class="tab tab-lg tab-lifted w-1/2 md:w-1/3 lg:w-1/6"
				class:tab-active={name == activeModel}
				on:click={() => (activeModel = name)}>{name}</button
			>
		{/each}
	</div>
	<div
		class={`flex-1 bg-base-100 ${loading || error ? 'flex items-center justify-center' : ''}`}
		slot="content"
	>
		{#if loading}
			<span class="loading loading-infinity loading-lg" />
		{:else if error}
			<div class="h-auto w-full md:w-2/3 m-1">
				<ErrorMessage>{error}</ErrorMessage>
			</div>
		{:else if model}
			{#key model.name}
				<Model {model} {patientData} />
			{/key}
		{/if}
	</div>
</Layout>
