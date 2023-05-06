<script>
	import BooleanRadioGroup from "../components/BooleanRadioGroup/BooleanRadioGroup.svelte";
	import FormSlider from "../components/FormSlider/FormSlider.svelte";

	let css = {
		input_group: 'input-group btn-group h-12 w-fit m-1 ml-5',
		input_text: 'w-64',
		slider_range: 'w-48 range m-auto',
		slider_input: 'w-16',
		boolean_button: 'btn w-32'
	};

	let year = 1;
	let chronic_lung_disease = 0;
	let chronic_heart_failure = 0;
	let coronary_artery_disease = 0;
	let lung_transplant = 0;
	let vasopressors_inotropes = 1;
	let cardiothoracic_surgery = 0;
	let ph = 7.27;
	let bicarbonate_infusion = 0;
	let pco2 = 47;
	let hco3 = 19;
	let acute_kidney_injury = 0;
	let renal_replacement_therapy = 0;
	let cardiac_arrest = 0;
	let bmi = 28;
	let ratebreathssec = 12;
	let fio2 = 100;
	let po2 = 150;
	let sbp = 77;
	let intubation_time = 1;
	let age_years = 0;
	let lactate = 7.2;
	let pulmonary_embolism = 0;

	let result = '';

	async function submitParams() {
		const res = await fetch('http://127.0.0.1:5000/predict', {
			method: 'POST',
			headers: new Headers({ 'Content-Type': 'application/json' }),
			body: JSON.stringify([
				year,
				chronic_lung_disease,
				chronic_heart_failure,
				coronary_artery_disease,
				lung_transplant,
				vasopressors_inotropes,
				cardiothoracic_surgery,
				ph,
				bicarbonate_infusion,
				pco2,
				hco3,
				acute_kidney_injury,
				renal_replacement_therapy,
				cardiac_arrest,
				bmi,
				ratebreathssec,
				fio2,
				po2,
				sbp,
				intubation_time,
				age_years,
				lactate,
				pulmonary_embolism
			])
		});
		const json = await res.json();
		result = JSON.stringify(json);
	}
</script>

<BooleanRadioGroup label="Chronic Lung Disease" name="chronicLungDisease" bind:value={chronic_lung_disease} />
<BooleanRadioGroup label="Chronic Heart Failure" name="chronicHeartFailure" bind:value={chronic_heart_failure} />
<BooleanRadioGroup label="Coronary Artery Disease" name="coronaryArteryDisease" bind:value={coronary_artery_disease} />
<BooleanRadioGroup label="Lung Transplant" name="lungTransplant" bind:value={lung_transplant} />
<BooleanRadioGroup label="Vasopressors/Inotropes" name="vasopressorsInotropes" bind:value={vasopressors_inotropes} />
<BooleanRadioGroup label="Cardiothoracic Surgery" name="cardiothoracicSurgery" bind:value={cardiothoracic_surgery} />
<FormSlider label="pH" min={0} max={8} step={0.1} bind:value={ph} />
<BooleanRadioGroup label="Bicarbonate Infusion" name="bicarbonateInfusion" bind:value={bicarbonate_infusion} />
<FormSlider label="PCO2" min={15} max={200} step={5} bind:value={pco2} />
<FormSlider label="HCO3" min={1} max={40} step={1} bind:value={hco3} /> 
<BooleanRadioGroup label="Acute Kidney Injury" name="acuteKidneyInjury" bind:value={acute_kidney_injury} />
<BooleanRadioGroup label="Renal Replacement Therapy" name="renalReplacementTherapy" bind:value={renal_replacement_therapy} />
<BooleanRadioGroup label="Cardiac Arrest" name="cardiacArrest" bind:value={cardiac_arrest} />
<FormSlider label="BMI (kg/cm2)" min={10} max={85} bind:value={bmi} />
<FormSlider label="Breathing Rate (/min)" min={0} max={60} step={2} bind:value={ratebreathssec} />
<FormSlider label="FiO2 (%)" min={0} max={100} step={5} bind:value={fio2} />
<FormSlider label="PaO2 (mmHg)" min={0} max={600} step={5} bind:value={po2} />
<FormSlider label="Systolic Blood Pressure (mmHg)" min={0} max={300} step={10} bind:value={sbp} />
<FormSlider label="Intubation Time (Hours)" min={1} max={672} bind:value={intubation_time} />
<FormSlider label="Age (Years)" min={0} max={81} bind:value={age_years} />
<FormSlider label="Lactate (mmol/L)" min={0} max={40} step={1} bind:value={lactate} />
<BooleanRadioGroup label="Pulmonary Embolism" name="pulmonaryEmbolism" bind:value={pulmonary_embolism} />

<button class="btn ml-5" on:click={submitParams}> Submit </button>

<pre>
	{result}
</pre>
