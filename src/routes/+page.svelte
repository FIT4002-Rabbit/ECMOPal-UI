<script>
	let year = 1;
	let chronic_lung_disease = 0;
	let chronic_heart_failure = 0;
	let coronary_artery_disease = 0;
	let pe_ecls_ltx = 0;
	let vasopressors_inotropes = 1;
	let pre_ecmo_ct_surg = 0;
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
	let intubation_time = 0;
	let age_years = 0;
	let lactate = 7.2;
	let pulmonary_embolism = 0;

	let result = null;

	async function doPost() {
		const res = await fetch('http://localhost:5000', {
			method: 'POST',
			headers: new Headers({ 'Content-Type': 'application/json' }),
			body: JSON.stringify([
				year,
				chronic_lung_disease,
				chronic_heart_failure,
				coronary_artery_disease,
				pe_ecls_ltx,
				vasopressors_inotropes,
				pre_ecmo_ct_surg,
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
		console.log(res);
		// const json = await res.json();
		// result = JSON.stringify(json);
		// console.log(year, chronic_lung_disease, chronic_heart_failure, coronary_artery_disease, pe_ecls_ltx, vasopressors_inotropes, pre_ecmo_ct_surg, ph, bicarbonate_infusion, pco2, hco3, acute_kidney_injury, renal_replacement_therapy, cardiac_arrest, bmi, ratebreathssec, fio2, po2, sbp, intubation_time, age_years, lactate, pulmonary_embolism)
		// console.log(result);
	}
</script>

<label class="input-group btn-group">
	<span class="w-64">Chronic Lung Disease</span>
	<input
		class="btn w-16"
		type="radio"
		name="chronic_lung_disease"
		data-title="Yes"
		on:change={() => {
			chronic_lung_disease = 1;
		}}
	/>
	<input
		class="btn w-16"
		type="radio"
		name="chronic_lung_disease"
		data-title="No"
		on:change={() => {
			chronic_lung_disease = 0;
		}}
		checked
	/>
</label>

<label class="input-group btn-group">
	<span class="w-64">Chronic Heart Failure</span>
	<input
		class="btn w-16"
		type="radio"
		name="chronic_heart_failure"
		data-title="Yes"
		on:change={() => {
			chronic_heart_failure = 1;
		}}
	/>
	<input
		class="btn w-16"
		type="radio"
		name="chronic_heart_failure"
		data-title="No"
		on:change={() => {
			chronic_heart_failure = 0;
		}}
		checked
	/>
</label>

<label class="input-group btn-group">
	<span class="w-64">Coronary Artery Disease</span>
	<input
		class="btn w-16"
		type="radio"
		name="coronary_artery_disease"
		data-title="Yes"
		on:change={() => {
			coronary_artery_disease = 1;
		}}
	/>
	<input
		class="btn w-16"
		type="radio"
		name="coronary_artery_disease"
		data-title="No"
		on:change={() => {
			coronary_artery_disease = 0;
		}}
		checked
	/>
</label>

<label class="input-group btn-group">
	<span class="w-64">Pre-ECMO Lung Transplant</span>
	<input
		class="btn w-16"
		type="radio"
		name="pe_ecls_ltx"
		data-title="Yes"
		on:change={() => {
			pe_ecls_ltx = 1;
		}}
	/>
	<input
		class="btn w-16"
		type="radio"
		name="pe_ecls_ltx"
		data-title="No"
		on:change={() => {
			pe_ecls_ltx = 0;
		}}
		checked
	/>
</label>

<label class="input-group btn-group">
	<span class="w-64">Vasopressors/Inotropes</span>
	<input
		class="btn w-16"
		type="radio"
		name="vasopressors_inotropes"
		data-title="Yes"
		on:change={() => {
			vasopressors_inotropes = 1;
		}}
		checked
	/>
	<input
		class="btn w-16"
		type="radio"
		name="vasopressors_inotropes"
		data-title="No"
		on:change={() => {
			vasopressors_inotropes = 0;
		}}
	/>
</label>

<label class="input-group btn-group">
	<span class="w-64">Pre-ECMO Cardiothoracic Surgery</span>
	<input
		class="btn w-16"
		type="radio"
		name="pre_ecmo_ct_surg"
		data-title="Yes"
		on:change={() => {
			pre_ecmo_ct_surg = 1;
		}}
	/>
	<input
		class="btn w-16"
		type="radio"
		name="pre_ecmo_ct_surg"
		data-title="No"
		on:change={() => {
			pre_ecmo_ct_surg = 0;
		}}
		checked
	/>
</label>

<label class="input-group btn-group">
	<span class="w-64">pH</span>
	<input class="w-16" type="number" bind:value={ph} />
	<input class="w-64 range" type="range" min="6" max="8" bind:value={ph} />
</label>

<label class="input-group btn-group">
	<span class="w-64">Pre-ECMO Bicarbonate Infusion</span>
	<input
		class="btn w-16"
		type="radio"
		name="bicarbonate_infusion"
		data-title="Yes"
		on:change={() => {
			bicarbonate_infusion = 1;
		}}
	/>
	<input
		class="btn w-16"
		type="radio"
		name="bicarbonate_infusion"
		data-title="No"
		on:change={() => {
			bicarbonate_infusion = 0;
		}}
		checked
	/>
</label>

<label class="input-group btn-group">
	<span class="w-64">PCO2 (mmHg)</span>
	<input class="w-16" type="number" bind:value={pco2} />
	<input class="w-64 range" type="range" min="15" max="200" bind:value={pco2} />
</label>

<label class="input-group btn-group">
	<span class="w-64">HCO3 (mmol/L)</span>
	<input class="w-16" type="number" bind:value={hco3} />
	<input class="w-64 range" type="range" min="1" max="40" bind:value={hco3} />
</label>

<label class="input-group btn-group">
	<span class="w-64">Acute Kidney Injury</span>
	<input
		class="btn w-16"
		type="radio"
		name="acute_kidney_injury"
		data-title="Yes"
		on:change={() => {
			acute_kidney_injury = 1;
		}}
	/>
	<input
		class="btn w-16"
		type="radio"
		name="acute_kidney_injury"
		data-title="No"
		on:change={() => {
			acute_kidney_injury = 0;
		}}
		checked
	/>
</label>

<label class="input-group btn-group">
	<span class="w-64">Renal Replacement Therapy</span>
	<input
		class="btn w-16"
		type="radio"
		name="renal_replacement_therapy"
		data-title="Yes"
		on:change={() => {
			renal_replacement_therapy = 1;
		}}
	/>
	<input
		class="btn w-16"
		type="radio"
		name="renal_replacement_therapy"
		data-title="No"
		on:change={() => {
			renal_replacement_therapy = 0;
		}}
		checked
	/>
</label>

<label class="input-group btn-group">
	<span class="w-64">Pre-ECMO Cardiac Arrest</span>
	<input
		class="btn w-16"
		type="radio"
		name="arrest_ordinal"
		data-title="Yes"
		on:change={() => {
			cardiac_arrest = 1;
		}}
	/>
	<input
		class="btn w-16"
		type="radio"
		name="arrest_ordinal"
		data-title="No"
		on:change={() => {
			cardiac_arrest = 0;
		}}
		checked
	/>
</label>

<label class="input-group btn-group">
	<span class="w-64">BMI (kg/cm2)</span>
	<input class="w-16" type="number" bind:value={bmi} />
	<input class="w-64 range" type="range" min="10" max="85" bind:value={bmi} />
</label>

<label class="input-group btn-group">
	<span class="w-64">Breathing Rate (/min)</span>
	<input class="w-16" type="number" bind:value={ratebreathssec} />
	<input class="w-64 range" type="range" min="0" max="60" bind:value={ratebreathssec} />
</label>

<label class="input-group btn-group">
	<span class="w-64">FiO2 (%)</span>
	<input class="w-16" type="number" bind:value={fio2} />
	<input class="w-64 range" type="range" min="0" max="100" bind:value={fio2} />
</label>

<label class="input-group btn-group">
	<span class="w-64">PaO2 (mmHg)</span>
	<input class="w-16" type="number" bind:value={po2} />
	<input class="w-64 range" type="range" min="0" max="600" bind:value={po2} />
</label>

<label class="input-group btn-group">
	<span class="w-64">Systolic Blood Pressure (mmHg)</span>
	<input class="w-16" type="number" bind:value={sbp} />
	<input class="w-64 range" type="range" min="0" max="300" bind:value={sbp} />
</label>

<label class="input-group btn-group">
	<span class="w-64">Pre-ECMO Intubation Time (Hours)</span>
	<input class="w-16" type="number" bind:value={intubation_time} />
	<input class="w-64 range" type="range" min="0" max="672" bind:value={intubation_time} />
</label>

<label class="input-group btn-group">
	<span class="w-64">Age (Years)</span>
	<input class="w-16" type="number" bind:value={age_years} />
	<input class="w-64 range" type="range" min="0" max="81" bind:value={age_years} />
</label>

<label class="input-group btn-group">
	<span class="w-64">Lactate (mmol/L)</span>
	<input class="w-16" type="number" bind:value={lactate} />
	<input class="w-64 range" type="range" min="0" max="40" bind:value={lactate} />
</label>

<label class="input-group btn-group">
	<span class="w-64">Pulmonary Embolism</span>
	<input
		class="btn w-16"
		type="radio"
		name="pulmonary_embolism"
		data-title="Yes"
		on:change={() => {
			pulmonary_embolism = 1;
		}}
	/>
	<input
		class="btn w-16"
		type="radio"
		name="pulmonary_embolism"
		data-title="No"
		on:change={() => {
			pulmonary_embolism = 0;
		}}
		checked
	/>
</label>

<button class="btn" on:click={doPost}> Post it. </button>
