<script lang="ts">
	import { handleDisabled } from '../helpers';
	import type { MappingType, PatientDataType } from '../types';
	import HelpModal from './HelpModal.svelte';

	export let feature: MappingType;
	export let patientData: PatientDataType;

	let checked: boolean;
	$: checked = patientData[feature.name] === 1;

	let disabled: boolean;
	$: disabled = handleDisabled(feature, patientData, setValue);

	const setValue = (value: number) => {
		patientData[feature.name] = value;
	};

	const css = {
		input_group: 'flex align-left flex-row justify-between rounded bg-base-200 h-fit min-h-16 p-2',
		input_text: 'my-auto basis-full md:basis-1/2',
		boolean_button: 'btn join-item w-1/2 disabled:bg-base-100',
		btn_group: 'join basis-full md:basis-1/2 my-auto'
	};
</script>

<div class={css.input_group}>
	<span class={css.input_text} class:opacity-20={disabled}>
		{feature.label}
	</span>
	{#if feature.description}
		<div class="self-center">
			<HelpModal>
				{feature.description}
			</HelpModal>
		</div>
	{/if}
	<div class={css.btn_group}>
		<button
			class={css.boolean_button}
			class:btn-primary={checked}
			class:bg-base-100={!checked}
			value={checked ? 1 : 0}
			data-testid="yes"
			{disabled}
			on:click={() => setValue(1)}>Yes</button
		>
		<button
			class={css.boolean_button}
			class:btn-primary={!checked}
			class:bg-base-100={checked}
			value={checked ? 0 : 1}
			data-testid="no"
			{disabled}
			on:click={() => setValue(0)}>No</button
		>
	</div>
</div>
