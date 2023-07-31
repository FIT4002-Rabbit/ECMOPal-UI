<script lang="ts">
	import type { FeatureType, ModelType, PatientDataType, PredictionResults } from '../types';
	export let model: ModelType;
	export let features: FeatureType[];
	export let patientData: PatientDataType;

	// project component imports
	import BooleanRadioGroup from '../components/BooleanRadioGroup.svelte';
	import FormSlider from '../components/FormSlider.svelte';
	import CustomChart from '../components/CustomChart.svelte';

	// project type imports
	import HelpModal from '../components/HelpModal.svelte';
	import Error from './Error.svelte';

	let predictionResults: PredictionResults;
	let error: string | undefined;
	let loading = false;

	async function queryModel() {
		let body = { model_name: model.name, variables: patientData };
		const res = await fetch('http://127.0.0.1:5000/evaluate', {
			method: 'POST',
			headers: new Headers({ 'Content-Type': 'application/json' }),
			body: JSON.stringify(body)
		});

		const json = await res.json();
		if (!res.ok) {
			throw new Error(json.error);
		}
		return json;
	}

	async function handleSubmit() {
		error = undefined;
		loading = true;

		try {
			predictionResults = await queryModel();
			document.querySelector('#chart')?.scrollIntoView({
				behavior: 'smooth'
			});
		} catch (err) {
			if (err instanceof Error) {
				error = err.message;
			} else {
				error = 'Failed to calculate survivability';
			}
		}

		loading = false;
	}
</script>

<div class="mx-auto my-5 flex flex-wrap flex-row justify-center">
	<p class="w-5/6 md:w-2/3 text-center">
		Please enter the following information regarding the patient
	</p>

	{#each features as feature}
		{#if feature.type === 'boolean'}
			<BooleanRadioGroup
				label={feature.label ?? feature.name}
				bind:value={patientData[feature.name]}
			>
				{#if feature.description}
					<HelpModal>
						{feature.description}
					</HelpModal>
				{/if}
			</BooleanRadioGroup>
		{:else if feature.type === 'slider'}
			<FormSlider
				label={feature.label ?? feature.name}
				bind:value={patientData[feature.name]}
				min={feature.min}
				max={feature.max}
				step={feature.step}
			>
				{#if feature.description}
					<HelpModal>
						{feature.description}
					</HelpModal>
				{/if}
			</FormSlider>
		{/if}
	{/each}

	<!-- Break for forcing submit button to its own row -->
	<div class="basis-full h-0" />

	{#if loading}
		<span class="loading loading-infinity loading-lg" />
	{:else}
		<button class="btn btn-primary w-32 m-1" on:click={handleSubmit}>Submit</button>
	{/if}

	<div class="basis-full h-0" />
	{#if error}
		<div class="h-auto w-5/6 md:w-2/3 m-1">
			<Error>{error}</Error>
		</div>
	{/if}
	<div class="rounded bg-base-300 h-auto w-5/6 md:w-2/3 m-1 p-3">
		<CustomChart data={predictionResults} />
	</div>
</div>
