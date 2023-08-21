<script lang="ts">
	import { handleDisabled } from '../helpers';
	import type { MappingType, PatientDataType } from '../types';
	import HelpModal from './HelpModal.svelte';

	export let feature: MappingType;
	export let patientData: PatientDataType;

	let disabled: boolean;
	$: disabled = handleDisabled(feature, patientData, setValue);

	const setValueElement = (event: Event) => {
		const target = event.target as HTMLInputElement;
		setValue(Number(target.value));
	};

	const setValue = (value: number) => {
		patientData[feature.name] = value;
	};

	const css = {
		input_group: 'flex flex-row justify-between rounded bg-base-200 min-h-16 p-2',
		input_text: 'my-auto basis-full md:basis-1/2',
		slider_group: 'btn-group basis-full md:basis-1/2',
		slider_input: 'w-1/5 bg-base-100 rounded text-center',
		slider_range: 'range range-primary w-4/5 mx-2 my-auto'
	};
</script>

<div class={css.input_group} class:bg-base-300={disabled}>
	<span class={css.input_text}>
		{feature.label}
	</span>
	{#if feature.description}
		<div class="self-center">
			<HelpModal>
				{feature.description}
			</HelpModal>
		</div>
	{/if}
	<div class={css.slider_group}>
		<input
			class={css.slider_input}
			data-testid={feature.label + ' number'}
			type="number"
			value={patientData[feature.name]}
			on:change={setValueElement}
			min={feature.min}
			max={feature.max}
			step={feature.step}
			{disabled}
			class:bg-base-200={disabled}
		/>
		<input
			class={css.slider_range}
			data-testid={feature.label + ' slider'}
			type="range"
			value={patientData[feature.name]}
			on:input={setValueElement}
			min={feature.min}
			max={feature.max}
			step={feature.step}
			{disabled}
			class:range-neutral:={disabled}
		/>
	</div>
</div>
