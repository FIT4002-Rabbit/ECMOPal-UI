<script>
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
		const res = await fetch('http://127.0.0.1:5000', {
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

<label class={css.input_group}>
	<span class={css.input_text}>Chronic Lung Disease</span>
	<input
		class={css.boolean_button}
		type="radio"
		name="chronic_lung_disease"
		data-title="Yes"
		on:change={() => (chronic_lung_disease = 1)}
	/>
	<input
		class={css.boolean_button}
		type="radio"
		name="chronic_lung_disease"
		data-title="No"
		on:change={() => (chronic_lung_disease = 0)}
		checked
	/>
</label>

<label class={css.input_group}>
	<span class={css.input_text}>Chronic Heart Failure</span>
	<input
		class={css.boolean_button}
		type="radio"
		name="chronic_heart_failure"
		data-title="Yes"
		on:change={() => (chronic_heart_failure = 1)}
	/>
	<input
		class={css.boolean_button}
		type="radio"
		name="chronic_heart_failure"
		data-title="No"
		on:change={() => (chronic_heart_failure = 0)}
		checked
	/>
</label>

<label class={css.input_group}>
	<span class={css.input_text}>Coronary Artery Disease</span>
	<input
		class={css.boolean_button}
		type="radio"
		name="coronary_artery_disease"
		data-title="Yes"
		on:change={() => (coronary_artery_disease = 1)}
	/>
	<input
		class={css.boolean_button}
		type="radio"
		name="coronary_artery_disease"
		data-title="No"
		on:change={() => (coronary_artery_disease = 0)}
		checked
	/>
</label>

<label class={css.input_group}>
	<span class={css.input_text}>Lung Transplant</span>
	<input
		class={css.boolean_button}
		type="radio"
		name="lung_transplant"
		data-title="Yes"
		on:change={() => (lung_transplant = 1)}
	/>
	<input
		class={css.boolean_button}
		type="radio"
		name="lung_transplant"
		data-title="No"
		on:change={() => (lung_transplant = 0)}
		checked
	/>
</label>

<label class={css.input_group}>
	<span class={css.input_text}>Vasopressors/Inotropes</span>
	<input
		class={css.boolean_button}
		type="radio"
		name="vasopressors_inotropes"
		data-title="Yes"
		on:change={() => (vasopressors_inotropes = 1)}
		checked
	/>
	<input
		class={css.boolean_button}
		type="radio"
		name="vasopressors_inotropes"
		data-title="No"
		on:change={() => (vasopressors_inotropes = 0)}
	/>
</label>

<label class={css.input_group}>
	<span class={css.input_text}>Cardiothoracic Surgery</span>
	<input
		class={css.boolean_button}
		type="radio"
		name="cardiothoracic_surgery"
		data-title="Yes"
		on:change={() => (cardiothoracic_surgery = 1)}
	/>
	<input
		class={css.boolean_button}
		type="radio"
		name="cardiothoracic_surgery"
		data-title="No"
		on:change={() => (cardiothoracic_surgery = 0)}
		checked
	/>
</label>

<label class={css.input_group}>
	<span class={css.input_text}>pH</span>
	<input class={css.slider_input} type="number" bind:value={ph} />
	<input class={css.slider_range} type="range" min="6" max="8" step="0.1" bind:value={ph} />
</label>

<label class={css.input_group}>
	<span class={css.input_text}>Bicarbonate Infusion</span>
	<input
		class={css.boolean_button}
		type="radio"
		name="bicarbonate_infusion"
		data-title="Yes"
		on:change={() => (bicarbonate_infusion = 1)}
	/>
	<input
		class={css.boolean_button}
		type="radio"
		name="bicarbonate_infusion"
		data-title="No"
		on:change={() => (bicarbonate_infusion = 0)}
		checked
	/>
</label>

<label class={css.input_group}>
	<span class={css.input_text}>PCO2 (mmHg)</span>
	<input class={css.slider_input} type="number" bind:value={pco2} />
	<input class={css.slider_range} type="range" min="15" max="200" step="5" bind:value={pco2} />
</label>

<label class={css.input_group}>
	<span class={css.input_text}>HCO3 (mmol/L)</span>
	<input class={css.slider_input} type="number" bind:value={hco3} />
	<input class={css.slider_range} type="range" min="1" max="40" step="1" bind:value={hco3} />
</label>

<label class={css.input_group}>
	<span class={css.input_text}>Acute Kidney Injury</span>
	<input
		class={css.boolean_button}
		type="radio"
		name="acute_kidney_injury"
		data-title="Yes"
		on:change={() => {
			acute_kidney_injury = 1;
		}}
	/>
	<input
		class={css.boolean_button}
		type="radio"
		name="acute_kidney_injury"
		data-title="No"
		on:change={() => {
			acute_kidney_injury = 0;
		}}
		checked
	/>
</label>

<label class={css.input_group}>
	<span class={css.input_text}>Renal Replacement Therapy</span>
	<input
		class={css.boolean_button}
		type="radio"
		name="renal_replacement_therapy"
		data-title="Yes"
		on:change={() => (renal_replacement_therapy = 1)}
	/>
	<input
		class={css.boolean_button}
		type="radio"
		name="renal_replacement_therapy"
		data-title="No"
		on:change={() => (renal_replacement_therapy = 0)}
		checked
	/>
</label>

<label class={css.input_group}>
	<span class={css.input_text}>Cardiac Arrest</span>
	<input
		class={css.boolean_button}
		type="radio"
		name="arrest_ordinal"
		data-title="Yes"
		on:change={() => (cardiac_arrest = 1)}
	/>
	<input
		class={css.boolean_button}
		type="radio"
		name="arrest_ordinal"
		data-title="No"
		on:change={() => (cardiac_arrest = 0)}
		checked
	/>
</label>

<label class={css.input_group}>
	<span class={css.input_text}>BMI (kg/cm2)</span>
	<input class={css.slider_input} type="number" bind:value={bmi} />
	<input class={css.slider_range} type="range" min="10" max="85" bind:value={bmi} />
</label>

<label class={css.input_group}>
	<span class={css.input_text}>Breathing Rate (/min)</span>
	<input class={css.slider_input} type="number" bind:value={ratebreathssec} />
	<input class={css.slider_range} type="range" min="0" max="60" step="2" bind:value={ratebreathssec} />
</label>

<label class={css.input_group}>
	<span class={css.input_text}>FiO2 (%)</span>
	<input class={css.slider_input} type="number" bind:value={fio2} />
	<input class={css.slider_range} type="range" min="0" max="100" step="5" bind:value={fio2} />
</label>

<label class={css.input_group}>
	<span class={css.input_text}>PaO2 (mmHg)</span>
	<input class={css.slider_input} type="number" bind:value={po2} />
	<input class={css.slider_range} type="range" min="0" max="600" step="5" bind:value={po2} />
</label>

<label class={css.input_group}>
	<span class={css.input_text}>Systolic Blood Pressure (mmHg)</span>
	<input class={css.slider_input} type="number" bind:value={sbp} />
	<input class={css.slider_range} type="range" min="0" max="300" step="10" bind:value={sbp} />
</label>

<label class={css.input_group}>
	<span class={css.input_text}>Intubation Time (Hours)</span>
	<input class={css.slider_input} type="number" bind:value={intubation_time} />
	<input class={css.slider_range} type="range" min="1" max="672" step="1" bind:value={intubation_time} />
</label>

<label class={css.input_group}>
	<span class={css.input_text}>Age (Years)</span>
	<input class={css.slider_input} type="number" bind:value={age_years} />
	<input class={css.slider_range} type="range" min="0" max="81" step="1" bind:value={age_years} />
</label>

<label class={css.input_group}>
	<span class={css.input_text}>Lactate (mmol/L)</span>
	<input class={css.slider_input} type="number" bind:value={lactate} />
	<input class={css.slider_range} type="range" min="0" max="40" step="1" bind:value={lactate} />
</label>

<label class={css.input_group}>
	<span class={css.input_text}>Pulmonary Embolism</span>
	<input
		class={css.boolean_button}
		type="radio"
		name="pulmonary_embolism"
		data-title="Yes"
		on:change={() => (pulmonary_embolism = 1)}
	/>
	<input
		class={css.boolean_button}
		type="radio"
		name="pulmonary_embolism"
		data-title="No"
		on:change={() => (pulmonary_embolism = 0)}
		checked
	/>
</label>

<button class="btn ml-5" on:click={submitParams}> Submit </button>

<pre>
	{result}
</pre>
