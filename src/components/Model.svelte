<script lang="ts">
	import type { ModelType, PatientDataType, PredictionResults } from '../types';
	export let model: ModelType;
	export let patientData: PatientDataType;

	// project component imports
	import CustomChart from '../components/CustomChart.svelte';

	// project type imports
	import ErrorMessage from './ErrorMessage.svelte';
	import { PUBLIC_BACKEND } from '$env/static/public';
	import CategoryGroup from './CategoryGroup.svelte';

	let predictionResults: PredictionResults | undefined;
	let error: string | undefined;

	let loading = false;

	async function queryModel() {
		let body = { model_name: model.name, variables: patientData };
		const res = await fetch(PUBLIC_BACKEND + '/evaluate', {
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
			// TODO: Change how required fields are handled
			// const missingRequiredFields = model.categories
			// 	.flatMap(({ features }) => features)
			// 	.filter((feature) => feature.required && !patientData[feature.name]);
			// if (missingRequiredFields.length > 0) {
			// 	throw new Error(
			// 		`${missingRequiredFields.map((field) => field.label).join(', ')} can not be zero`
			// 	);
			// }

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

<div class="my-5 md:w-2/3 flex flex-col gap-2 justify-start items-center">
	{#each model.categories as category}
		<CategoryGroup {category} bind:patientData />
	{/each}

	{#if loading}
		<span class="loading loading-infinity loading-lg" />
	{:else}
		<button data-testid="submit" class="btn btn-primary w-32" on:click={handleSubmit}>Submit</button>
	{/if}

	{#if error}
		<div class="h-auto">
			<ErrorMessage>{error}</ErrorMessage>
		</div>
	{/if}

	<CustomChart data={predictionResults} />
</div>
