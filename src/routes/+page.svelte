<script lang="ts">
	// project component imports
	import BooleanRadioGroup from '../components/BooleanRadioGroup.svelte';
	import FormSlider from '../components/FormSlider.svelte';
	import CustomChart from '../components/CustomChart.svelte';

	// project type imports
	import type { PatientData } from '../types/PatientData';
	import type { PredictionResults } from '../types/PredictionResults';
	import HelpModal from '../components/HelpModal.svelte';

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
		cardiac_arrest: 0,
		bmi: 28,
		// ratebreathssec: 12,
		// fio2: 100,
		pao2: 150,
		sbp: 77,
		intubation_time: 10,
		age_years: 80,
		lactate: 7.2
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
	>
		<HelpModal slot="help-modal">
			Cardiac arrest is defined as any event(s) that require the use of cardiopulmonary
			resuscitation (CPR) with the administration of external cardiac massage.
			<br /><br />
			Select 'Yes' or 'No depending on if the patient experienced a cardiac arrest within 24 hours prior
			to commencement of the ECLS support.
			<br />
			Select 'Yes', if the patient received ECPR.
			<br />
			If this information is unknown or unavailable, keep the default value of 'No'.
			<br /><br />
			Note: Pre-ECMO cardiac arrest is greatly predictive in this model, as such it is highly advisable
			to enter in a value if available.
		</HelpModal>
	</BooleanRadioGroup>
	<FormSlider label="BMI (kg/cm2)" min={10} max={85} bind:value={patientData.bmi}>
		<HelpModal slot="help-modal">
			Body Mass Index (BMI) = persons body weight in kilograms divided by the square of height in
			meters.
			<br />
			For pounds and inches, the BMI can be calculated by dividing weight in pounds by the square of
			height in inches (in) and multiplying by a conversion factor of 703.
		</HelpModal>
	</FormSlider>
	<!-- <FormSlider label="Breathing Rate (/min)" min={0} max={60} step={2} bind:value={patientData.ratebreathssec} /> -->
	<!-- <FormSlider label="FiO2 (%)" min={0} max={100} step={5} bind:value={patientData.fio2} /> -->
	<FormSlider label="PaO2 (mmHg)" min={0} max={600} step={5} bind:value={patientData.pao2}>
		<HelpModal slot="help-modal">
			The partial pressure of oxygen (PaO2) is based on an arterial blood gas drawn prior to, and no
			more than 6 hours before, the ECLS start time.
			<br />
			If multiple arterial blood gases exist in this time period, choose the pre-ECLS blood gas closest
			to AND before the ECLS start time.
			<br /><br />
			If this information is unknown or unavailable, keep the default value of 150 mmHg.
			<br /><br />
			A PaO2 between10 mmHg and 600 mmHg can be entered.
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
			Enter the systolic value of a single measurement of blood pressure taken no more than than 6
			hours before the ECLS start time.
			<br />
			If an arterial blood pressure and non-invasive cuff pressure exist, please choose the arterial
			pressure monitor reading.
			<br /><br />
			In the setting of cardiac arrest where no recordable blood pressure was obtained via invasive or
			non-invasive means and the patient was pulseless, please select 0mmHg.
			<br />
			If this information is unknown or unavailable, keep the default value of 77 mmHg.
			<br /><br />
			A systolic pressure between 0 mmHg and 300 mmHg can be entered.
		</HelpModal>
	</FormSlider>
	<FormSlider
		label="Intubation Time (Hours)"
		min={0}
		max={672}
		bind:value={patientData.intubation_time}
	>
		<HelpModal slot="help-modal">
			Number of hours prior to commencement of ECLS where the patient had a newly placed artificial
			airway.
			<br />
			Intubation refers to placement of an artificial airway, whether it is an oral endotracheal, nasotracheal
			or tracheostomy tube.
			<br /><br />
			If a patient was intubated immediately prior to ECLS commencement, select '0' hours.
			<br />
			If a patient was intubated for more than 672 hours prior to ECLS (three months), select '672'.
			<br /><br />
			This value is required. Hours between 1 and 672 may be entered here.
		</HelpModal>
	</FormSlider>
	<FormSlider label="Age (Years)" min={0} max={81} bind:value={patientData.age_years}>
		<HelpModal slot="help-modal">
			The patient's age at the time that ECLS was established.
			<br /><br />
			If patient is older than 81 years, select '81' years.
			<br /><br />
			Ages between 18 and 81 years may be entered here.
		</HelpModal>
	</FormSlider>
	<FormSlider label="Lactate (mmol/L)" min={0} max={40} step={1} bind:value={patientData.lactate}>
		<HelpModal slot="help-modal">
			Highest serum lactate concentration drawn in the 6 hours preceding ECLS.
			<br />
			Both arterial or venous lactate are acceptable.
			<br /><br />
			If this information is unknown or unavailable, keep the default value of 7.2 mmol/L.
			<br /><br />
			Note: Blood Lactate is greatly predictive in this model, as such it is highly advisable to enter
			in a value if available.
		</HelpModal>
	</FormSlider>
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

