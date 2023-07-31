<script lang="ts">
	import type { ModelType, PredictionResults } from '../types';
	export let model: ModelType;

	// project component imports
	import BooleanRadioGroup from '../components/BooleanRadioGroup.svelte';
	import FormSlider from '../components/FormSlider.svelte';
	import CustomChart from '../components/CustomChart.svelte';

	// project type imports
	import HelpModal from '../components/HelpModal.svelte';

	// json data imports
	import helpModalText from '../data/helpModalText';
	import feature_mapping, { type MappingType } from '../data/featureMapping';

	let features: ({ name: string; description: string } & MappingType)[];
	$: features = model.features.map((feature) => ({
		name: feature,
		...feature_mapping[feature],
		description: helpModalText[feature]?.join('\n')
	}));
	$: console.log(features);
	let patientData: Record<string, number>;
	$: patientData = Object.fromEntries(features.map((feature) => [feature.name, feature.default]));
	$: console.log(features, patientData);

	let predictionResults: PredictionResults;

	async function queryModel() {
		let body = { model_name: model.name, variables: patientData };
		const res = await fetch('http://127.0.0.1:5000/evaluate', {
			method: 'POST',
			headers: new Headers({ 'Content-Type': 'application/json' }),
			body: JSON.stringify(body)
		});
		const json = await res.json();
		return JSON.stringify(json);
	}

	async function handleSubmit() {
		const result = await queryModel();
		predictionResults = JSON.parse(result);
		document.querySelector('#chart')?.scrollIntoView({
			behavior: 'smooth'
		});
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
				name={feature.name}
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
				label={feature.name}
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

	<!-- <BooleanRadioGroup
		label="Chronic Lung Disease"
		name="chronicLungDisease"
		bind:value={patientData.chronic_lung_disease}
	/>
	<BooleanRadioGroup
		label="Chronic Heart Failure"
		name="chronicHeartFailure"
		bind:value={patientData.chronic_heart_failure}
	/>
	<BooleanRadioGroup
		label="Coronary Artery Disease"
		name="coronaryArteryDisease"
		bind:value={patientData.coronary_artery_disease}
	/>
	<BooleanRadioGroup label="Lung Transplant" name="lungTransplant" bind:value={patientData.lung_transplant} />
	<BooleanRadioGroup
		label="Vasopressors/Inotropes"
		name="vasopressorsInotropes"
		bind:value={patientData.vasopressors_inotropes}
	/>
	<BooleanRadioGroup
		label="Cardiothoracic Surgery"
		name="cardiothoracicSurgery"
		bind:value={patientData.cardiothoracic_surgery}
	/>
	<FormSlider label="pH" min={0} max={8} step={0.1} bind:value={patientData.ph} />
	<BooleanRadioGroup
		label="Bicarbonate Infusion"
		name="bicarbonateInfusion"
		bind:value={patientData.bicarbonate_infusion}
	/>
	<FormSlider label="PCO2" min={15} max={200} step={5} bind:value={patientData.pco2} />
	<FormSlider label="HCO3" min={1} max={40} step={1} bind:value={patientData.hco3} />
	<BooleanRadioGroup
		label="Acute Kidney Injury"
		name="acuteKidneyInjury"
		bind:value={patientData.acute_kidney_injury}
	/>
	<BooleanRadioGroup
		label="Renal Replacement Therapy"
		name="renalReplacementTherapy"
		bind:value={patientData.renal_replacement_therapy}
	/> -->
	<!-- <BooleanRadioGroup
		label="Cardiac Arrest"
		name="cardiacArrest"
		bind:value={patientData.cardiac_arrest}
	>
		<HelpModal slot="help-modal">
			{helpModalText['Cardiac Arrest'].join('\n')}
		</HelpModal>
	</BooleanRadioGroup>
	<FormSlider label="BMI (kg/cm2)" min={10} max={85} bind:value={patientData.bmi}>
		<HelpModal slot="help-modal">
			{helpModalText['BMI (kg/cm2)'].join('\n')}
		</HelpModal>
	</FormSlider> -->
	<!-- <FormSlider label="Breathing Rate (/min)" min={0} max={60} step={2} bind:value={patientData.ratebreathssec} /> -->
	<!-- <FormSlider label="FiO2 (%)" min={0} max={100} step={5} bind:value={patientData.fio2} /> -->
	<!-- <FormSlider label="PaO2 (mmHg)" min={0} max={600} step={5} bind:value={patientData.pao2}>
		<HelpModal slot="help-modal">
			{helpModalText['PaO2 (mmHg)'].join('\n')}
		</HelpModal>
	</FormSlider>
	<FormSlider
		label="Systolic Blood Pressure (mmHg)"
		min={0}
		max={300}
		step={10}
		bind:value={patientData.sbp}
	>
		<HelpModal slot="help-modal">
			{helpModalText['Systolic Blood Pressure (mmHg)'].join('\n')}
		</HelpModal>
	</FormSlider>
	<FormSlider
		label="Intubation Time (Hours)"
		min={0}
		max={672}
		bind:value={patientData.intubation_time}
	>
		<HelpModal slot="help-modal">
			{helpModalText['Intubation Time (Hours)'].join('\n')}
		</HelpModal>
	</FormSlider>
	<FormSlider label="Age (Years)" min={0} max={81} bind:value={patientData.age_years}>
		<HelpModal slot="help-modal">
			{helpModalText['Age (Years)'].join('\n')}
		</HelpModal>
	</FormSlider>
	<FormSlider label="Lactate (mmol/L)" min={0} max={40} step={1} bind:value={patientData.lactate}>
		<HelpModal slot="help-modal">
			{helpModalText['Lactate (mmol/L)'].join('\n')}
		</HelpModal>
	</FormSlider> -->
	<!-- <BooleanRadioGroup
		label="Pulmonary Embolism"
		name="pulmonaryEmbolism"
		bind:value={patientData.pulmonary_embolism}
	/> -->

	<!-- Break for forcing submit button to its own row -->
	<div class="basis-full h-0" />

	<button class="btn btn-primary w-32 m-1" on:click={handleSubmit}>Submit</button>
	<div class="basis-full h-0" />
	<div class="rounded bg-base-300 h-auto w-5/6 md:w-2/3 m-1 p-3">
		<CustomChart data={predictionResults} />
	</div>
</div>
