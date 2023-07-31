<!-- svelte-ignore-all a11y-missing-attribute -->
<script lang="ts">
	import Layout from './Layout.svelte';
	import { onMount } from 'svelte';
	import type { FeatureType, ModelType, PatientDataType } from '../types';
	import Model from './Model.svelte';

	import helpModalText from '../data/helpModalText';
	import featureMapping from '../data/featureMapping';
	import ErrorMessage from './ErrorMessage.svelte';

	let loading = true;
	let error: string | undefined;
	let models: ModelType[] = [];
	let activeModel = 'Lite';

	let model: ModelType | undefined;
	$: model = models.find((model) => model.name === activeModel);

	let features: FeatureType[];
	$: features =
		model?.features.map((feature) => ({
			name: feature,
			...featureMapping[feature],
			description: helpModalText[feature]?.join('\n')
		})) ?? [];

	let patientData: PatientDataType;
	$: patientData = Object.fromEntries(features.map((feature) => [feature.name, feature.default]));

	onMount(async () => {
		try {
			const res = await fetch('http://127.0.0.1:5000/models');
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
		class={`flex-1 bg-base-100 ${loading || error ? 'flex items-center justify-center' : ''}`}
		slot="content"
	>
		{#if loading}
			<span class="loading loading-infinity loading-lg" />
		{:else if error}
			<div class="h-auto w-5/6 md:w-2/3 m-1">
				<ErrorMessage>{error}</ErrorMessage>
			</div>
		{:else if model}
			<Model {model} {features} {patientData} />
		{/if}
	</div>
</Layout>
