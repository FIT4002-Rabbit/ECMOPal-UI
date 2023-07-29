<script lang="ts">
	// project component imports
	import BooleanRadioGroup from '../components/BooleanRadioGroup.svelte';
	import FormSlider from '../components/FormSlider.svelte';
	import CustomChart from '../components/CustomChart.svelte';

	// project type imports
	import type { PatientData } from '../types/PatientData';
	import type { PredictionResults } from '../types/PredictionResults';

	let predictionResults: PredictionResults;

	let patientData: PatientData = {
		year: 0,
		// chronic_lung_disease: 0,
		// chronic_heart_failure: 0,
		// coronary_artery_disease: 0,
		// lung_transplant: 0,
		// vasopressors_inotropes: 1,
		// cardiothoracic_surgery: 0,
		// ph: 7.27,
		// bicarbonate_infusion: 0,
		// pco2: 47,
		// hco3: 19,
		// acute_kidney_injury: 0,
		// renal_replacement_therapy: 0,
		cardiac_arrest: 1,
		bmi: 28,
		// ratebreathssec: 12,
		// fio2: 100,
		pao2: 150,
		sbp: 77,
		intubation_time: 10,
		age_years: 80,
		lactate: 7
		// pulmonary_embolism: 1
	};

	async function queryModel() {
		let body = patientData;
		const res = await fetch('http://127.0.0.1:5000/predict', {
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
	<p class="w-5/6 md:w-2/3 text-center">Please enter the following information regarding the patient</p>

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
	<BooleanRadioGroup
		label="Cardiac Arrest"
		name="cardiacArrest"
		bind:value={patientData.cardiac_arrest}
	/>
	<FormSlider label="BMI (kg/cm2)" min={10} max={85} bind:value={patientData.bmi} />
	<!-- <FormSlider label="Breathing Rate (/min)" min={0} max={60} step={2} bind:value={patientData.ratebreathssec} /> -->
	<!-- <FormSlider label="FiO2 (%)" min={0} max={100} step={5} bind:value={patientData.fio2} /> -->
	<FormSlider label="PaO2 (mmHg)" min={0} max={600} step={5} bind:value={patientData.pao2} />
	<FormSlider
		label="Systolic Blood Pressure (mmHg)"
		min={0}
		max={300}
		step={10}
		bind:value={patientData.sbp}
	/>
	<FormSlider
		label="Intubation Time (Hours)"
		min={1}
		max={672}
		bind:value={patientData.intubation_time}
	/>
	<FormSlider label="Age (Years)" min={0} max={81} bind:value={patientData.age_years} />
	<FormSlider label="Lactate (mmol/L)" min={0} max={40} step={1} bind:value={patientData.lactate} />
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

