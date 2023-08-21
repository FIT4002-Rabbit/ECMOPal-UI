<script lang="ts">
	import type { CategoryType, PatientDataType } from '../types';
	import BooleanRadioGroup from './BooleanRadioGroup.svelte';
	import FormSlider from './FormSlider.svelte';
	import HelpModal from './HelpModal.svelte';

	export let category: CategoryType;
	export let patientData: PatientDataType;
</script>

<div class="w-full">
	<h2 class="text-2xl text-secondary">{category.name}</h2>
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
		{#each category.features as feature}
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
	</div>
</div>
