<script lang="ts">
	import type { CategoryType, PatientDataType } from '../types';
	import BooleanRadioGroup from './BooleanRadioGroup.svelte';
	import FormSlider from './FormSlider.svelte';

	export let category: CategoryType;
	export let patientData: PatientDataType;
</script>

<div class="w-full">
	<h2 class="text-2xl text-secondary ms-1 sm:ms-0 font-bold">{category.name}</h2>
	<div class="columns-1 sm:columns-2 gap-2 space-y-2">
		{#each category.features as feature}
			{#if feature.type === 'boolean'}
				<BooleanRadioGroup {feature} bind:patientData />
			{:else if feature.type === 'slider'}
				<FormSlider {feature} bind:patientData />
			{/if}
		{/each}
	</div>
</div>
