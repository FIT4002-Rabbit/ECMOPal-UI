<script>
	import BooleanRadioGroup from '../components/BooleanRadioGroup/BooleanRadioGroup.svelte';
	import FormSlider from '../components/FormSlider/FormSlider.svelte';
	import { onMount } from 'svelte';
	import * as d3 from 'd3';

	let css = {
		input_group: 'input-group btn-group h-12 w-fit m-1 ml-5',
		input_text: 'w-64',
		slider_range: 'w-48 range m-auto',
		slider_input: 'w-16',
		boolean_button: 'btn w-32'
	};

	let year = 0;
	// let chronic_lung_disease = 0;
	// let chronic_heart_failure = 0;
	// let coronary_artery_disease = 0;
	// let lung_transplant = 0;
	// let vasopressors_inotropes = 1;
	// let cardiothoracic_surgery = 0;
	// let ph = 7.27;
	// let bicarbonate_infusion = 0;
	// let pco2 = 47;
	// let hco3 = 19;
	// let acute_kidney_injury = 0;
	// let renal_replacement_therapy = 0;
	let cardiac_arrest = 1;
	let bmi = 28;
	// let ratebreathssec = 12;
	// let fio2 = 100;
	let pao2 = 150;
	let sbp = 77;
	let intubation_time = 10;
	let age_years = 80;
	let lactate = 7;
	// let pulmonary_embolism = 1;

	async function queryModel() {
		const res = await fetch('http://127.0.0.1:5000/predict', {
			method: 'POST',
			headers: new Headers({ 'Content-Type': 'application/json' }),
			body: JSON.stringify([
				year,
				// chronic_lung_disease,
				// chronic_heart_failure,
				// coronary_artery_disease,
				// lung_transplant,
				// vasopressors_inotropes,
				// cardiothoracic_surgery,
				// ph,
				// bicarbonate_infusion,
				// pco2,
				// hco3,
				// acute_kidney_injury,
				// renal_replacement_therapy,
				cardiac_arrest,
				bmi,
				// ratebreathssec,
				// fio2,
				pao2,
				sbp,
				intubation_time,
				age_years,
				lactate
				// pulmonary_embolism
			])
		});
		const json = await res.json();
		return JSON.stringify(json);
	}

	async function handleSubmit() {
		const result = await queryModel();
		await drawChart(JSON.parse(result));
		document.querySelector('#chart')?.scrollIntoView({
			behavior: 'smooth'
		});
	}

	function drawChart(data) {
		const viewWidth = 1000;
		const viewHeight = 600;

		const margin = { top: 100, right: 20, bottom: 20, left: 200 };
		const width = viewWidth - margin.left - margin.right;
		const height = viewHeight - margin.top - margin.bottom;

		// Create an array of indices for feature_names
		const indices = Array.from({ length: data.feature_names.length }, (_, i) => i);

		// Sort indices based on the corresponding values in feature_values
		indices.sort((a, b) => data.feature_values[b] - data.feature_values[a]);

		// Re-order feature_names based on the sorted indices
		data.feature_values = indices.map((i) => data.feature_values[i]);
		data.feature_names = indices.map((i) => data.feature_names[i]);

		d3.select('#chart').selectAll('svg').remove();
		const svg = d3
			.select('#chart')
			.append('svg')
			.attr('viewBox', `0 0 ${viewWidth + margin.left} ${viewHeight + margin.top}`)
			.append('g')
			.attr('transform', `translate(${margin.left}, ${margin.top})`);

		const x = d3.scaleLinear().range([0, width]).domain(d3.extent(data.feature_values)).nice();

		const y = d3.scaleBand().range([0, height]).domain(data.feature_names).padding(0.1);

		svg
			.selectAll('rect')
			.data(data.feature_values)
			.enter()
			.append('rect')
			.attr('x', (d) => x(Math.min(0, d)))
			.attr('y', (d, i) => y(data.feature_names[i]))
			.attr('width', (d) => Math.abs(x(d) - x(0)))
			.attr('height', y.bandwidth())
			.attr('fill', (d) => (d < 0 ? 'red' : 'steelblue'));

		svg
			.append('g')
			.attr('transform', `translate(0, ${height})`)
			.call(d3.axisBottom(x).tickFormat((d) => Math.abs(d)))
			.selectAll('text')
			.attr('transform', 'rotate(-45)')
			.style('text-anchor', 'end')
			.attr('dx', '-.8em')
			.attr('dy', '.15em');

		svg
			.append('text')
			.attr('x', viewWidth / 2)
			.attr('y', -80)
			.attr('text-anchor', 'middle')
			.style('fill', 'white')
			.style('font-size', '24px')
			.append('tspan')
			.text('Survival Prediction:')
			.attr('x', viewWidth / 2)
			.attr('dy', '1.2em')
			.attr('text-anchor', 'middle')
			.append('tspan')
			.text(data.out_value)
			.attr('x', viewWidth / 2)
			.attr('dy', '1.2em')
			.attr('text-anchor', 'middle');
		svg.append('g').call(d3.axisLeft(y));
	}
</script>

<div class="prose container mx-auto mt-3">
	<h1>ECMO PAL Lite</h1>
	<p>Extracorporeal membrane oxygenation survivability predictor</p>
	<p>Please enter the following information regarding the patient</p>

	<!-- <BooleanRadioGroup
		label="Chronic Lung Disease"
		name="chronicLungDisease"
		bind:value={chronic_lung_disease}
	/>
	<BooleanRadioGroup
		label="Chronic Heart Failure"
		name="chronicHeartFailure"
		bind:value={chronic_heart_failure}
	/>
	<BooleanRadioGroup
		label="Coronary Artery Disease"
		name="coronaryArteryDisease"
		bind:value={coronary_artery_disease}
	/>
	<BooleanRadioGroup label="Lung Transplant" name="lungTransplant" bind:value={lung_transplant} />
	<BooleanRadioGroup
		label="Vasopressors/Inotropes"
		name="vasopressorsInotropes"
		bind:value={vasopressors_inotropes}
	/>
	<BooleanRadioGroup
		label="Cardiothoracic Surgery"
		name="cardiothoracicSurgery"
		bind:value={cardiothoracic_surgery}
	/>
	<FormSlider label="pH" min={0} max={8} step={0.1} bind:value={ph} />
	<BooleanRadioGroup
		label="Bicarbonate Infusion"
		name="bicarbonateInfusion"
		bind:value={bicarbonate_infusion}
	/>
	<FormSlider label="PCO2" min={15} max={200} step={5} bind:value={pco2} />
	<FormSlider label="HCO3" min={1} max={40} step={1} bind:value={hco3} />
	<BooleanRadioGroup
		label="Acute Kidney Injury"
		name="acuteKidneyInjury"
		bind:value={acute_kidney_injury}
	/>
	<BooleanRadioGroup
		label="Renal Replacement Therapy"
		name="renalReplacementTherapy"
		bind:value={renal_replacement_therapy}
	/> -->
	<BooleanRadioGroup label="Cardiac Arrest" name="cardiacArrest" bind:value={cardiac_arrest} />
	<FormSlider label="BMI (kg/cm2)" min={10} max={85} bind:value={bmi} />
	<!-- <FormSlider label="Breathing Rate (/min)" min={0} max={60} step={2} bind:value={ratebreathssec} /> -->
	<!-- <FormSlider label="FiO2 (%)" min={0} max={100} step={5} bind:value={fio2} /> -->
	<FormSlider label="PaO2 (mmHg)" min={0} max={600} step={5} bind:value={pao2} />
	<FormSlider label="Systolic Blood Pressure (mmHg)" min={0} max={300} step={10} bind:value={sbp} />
	<FormSlider label="Intubation Time (Hours)" min={1} max={672} bind:value={intubation_time} />
	<FormSlider label="Age (Years)" min={0} max={81} bind:value={age_years} />
	<FormSlider label="Lactate (mmol/L)" min={0} max={40} step={1} bind:value={lactate} />
	<!-- <BooleanRadioGroup
		label="Pulmonary Embolism"
		name="pulmonaryEmbolism"
		bind:value={pulmonary_embolism}
	/> -->

	<button class="my-5 btn btn-primary" on:click={handleSubmit}>Submit</button>
</div>

<div id="chart" />
