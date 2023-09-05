import { test, expect, type Page } from '@playwright/test';

async function get_models(page: Page) {
	const OverlayButton = page.getByTestId("overlay");
	await OverlayButton.click();
	page.route('*/**/models', async (route) => {
		const json = [
			{
				categories: [
					{
						features: [
							{
								category: 'Clinical History',
								default: 1,
								description: '',
								label: 'ECMO Year',
								max: 0,
								min: 0,
								name: 'Year',
								required: false,
								step: 0,
								type: 'fixed'
							},
							{
								category: 'Clinical History',
								default: 18,
								description:
									"The patient's age at the time that ECLS was established.\n\nIf patient is older than 81 years, select '81' years.\n\nAges between 18 and 81 years may be entered here.",
								label: 'Age (years)',
								max: 81,
								min: 18,
								name: 'AgeYears',
								required: true,
								step: 1,
								type: 'slider'
							},
							{
								category: 'Clinical History',
								default: 28,
								description:
									'Body Mass Index (BMI) = persons body weight in kilograms divided by the square of height inmeters.\nFor pounds and inches, the BMI can be calculated by dividing weight in pounds by the square of height in inches (in) and multiplying by a conversion factor of 703.',
								label: 'BMI (kg/cm2)',
								max: 85,
								min: 10,
								name: 'BMI',
								required: false,
								step: 1,
								type: 'slider'
							},
							{
								category: 'Clinical History',
								default: 0,
								description:
									"Number of hours prior to commencement of ECLS where the patient had a newly placed artificial airway.\nIntubation refers to placement of an artificial airway, whether it is an oral endotracheal, nasotracheal or tracheostomy tube.\n\nIf a patient was intubated immediately prior to ECLS commencement, select '0' hours.\nIf a patient was intubated for more than 672 hours prior to ECLS (three months), select '672'.\n\nThis value is required. Hours between 1 and 672 may be entered here.",
								label: 'Pre-ECMO Intubation Time (hours)',
								max: 500,
								min: 0,
								name: 'IntubationToTimeOnHours',
								required: true,
								step: 1,
								type: 'slider'
							},
							{
								category: 'Clinical History',
								default: 0,
								description:
									"Cardiac arrest is defined as any event(s) that require the use of cardiopulmonary resuscitation (CPR) with the administration of external cardiac massage.\n\nSelect 'Yes' or 'No depending on if the patient experienced a cardiac arrest within 24 hours prior to commencement of the ECLS support.\nSelect 'Yes', if the patient received ECPR.\nIf this information is unknown or unavailable, keep the default value of 'No'.\n\nNote: Pre-ECMO cardiac arrest is greatly predictive in this model, as such it is highly advisableto enter in a value if available.",
								label: 'Pre-ECMO Arrest and ECPR',
								max: 0,
								min: 0,
								name: 'Arrest Ordinal',
								required: false,
								step: 0,
								type: 'boolean'
							}
						],
						name: 'Clinical History'
					},
					{
						features: [
							{
								category: 'Hemodynamics',
								default: 77,
								description:
									'Enter the systolic value of a single measurement of blood pressure taken no more than than 6 hours before the ECLS start time.\nIf an arterial blood pressure and non-invasive cuff pressure exist, please choose the arterial pressure monitor reading.\n\nIn the setting of cardiac arrest where no recordable blood pressure was obtained via invasive or non-invasive means and the patient was pulseless, please select 0mmHg.\nIf this information is unknown or unavailable, keep the default value of 77 mmHg.\n\nA systolic pressure between 0 mmHg and 300 mmHg can be entered.',
								label: 'Systolic Blood Pressure (mmHg)',
								max: 280,
								min: 0,
								name: 'SBP',
								required: false,
								step: 1,
								type: 'slider'
							},
							{
								category: 'Hemodynamics',
								default: 150,
								description:
									'The partial pressure of oxygen (PaO2) is based on an arterial blood gas drawn prior to, and no more than 6 hours before, the ECLS start time.\nIf multiple arterial blood gases exist in this time period, choose the pre-ECLS blood gas closest to AND before the ECLS start time.\n\nIf this information is unknown or unavailable, keep the default value of 150 mmHg.\n\nA PaO2 between10 mmHg and 600 mmHg can be entered.',
								label: 'PaO₂ (mmHg)',
								max: 600,
								min: 10,
								name: 'PO2',
								required: false,
								step: 1,
								type: 'slider'
							}
						],
						name: 'Hemodynamics'
					},
					{
						features: [
							{
								category: 'Biochemistry',
								default: 7.2,
								description:
									'Highest serum lactate concentration drawn in the 6 hours preceding ECLS.\nBoth arterial or venous lactate are acceptable.\n\nIf this information is unknown or unavailable, keep the default value of 7.2 mmol/L.\n\nNote: Blood Lactate is greatly predictive in this model, as such it is highly advisable to enter in a value if available.',
								label: 'Lactate (mmol/L)',
								max: 40,
								min: 0,
								name: 'Lactate',
								required: false,
								step: 1,
								type: 'slider'
							}
						],
						name: 'Biochemistry'
					}
				],
				name: 'Lite',
				order: 0
			},
			{
				categories: [
					{
						features: [
							{
								category: 'Clinical History',
								default: 1,
								description: '',
								label: 'ECMO Year',
								max: 0,
								min: 0,
								name: 'Year',
								required: false,
								step: 0,
								type: 'fixed'
							},
							{
								category: 'Clinical History',
								default: 18,
								description:
									"The patient's age at the time that ECLS was established.\n\nIf patient is older than 81 years, select '81' years.\n\nAges between 18 and 81 years may be entered here.",
								label: 'Age (years)',
								max: 81,
								min: 18,
								name: 'AgeYears',
								required: true,
								step: 1,
								type: 'slider'
							},
							{
								category: 'Clinical History',
								default: 28,
								description:
									'Body Mass Index (BMI) = persons body weight in kilograms divided by the square of height inmeters.\nFor pounds and inches, the BMI can be calculated by dividing weight in pounds by the square of height in inches (in) and multiplying by a conversion factor of 703.',
								label: 'BMI (kg/cm2)',
								max: 85,
								min: 10,
								name: 'BMI',
								required: false,
								step: 1,
								type: 'slider'
							},
							{
								category: 'Clinical History',
								default: 0,
								description:
									"Number of hours prior to commencement of ECLS where the patient had a newly placed artificial airway.\nIntubation refers to placement of an artificial airway, whether it is an oral endotracheal, nasotracheal or tracheostomy tube.\n\nIf a patient was intubated immediately prior to ECLS commencement, select '0' hours.\nIf a patient was intubated for more than 672 hours prior to ECLS (three months), select '672'.\n\nThis value is required. Hours between 1 and 672 may be entered here.",
								label: 'Pre-ECMO Intubation Time (hours)',
								max: 500,
								min: 0,
								name: 'IntubationToTimeOnHours',
								required: true,
								step: 1,
								type: 'slider'
							},
							{
								category: 'Clinical History',
								default: 0,
								description:
									'Patient has a history of coronary artery disease or ischaemic heart disease, treated or otherwise, including prior coronary artery bypass surgery or coronary angioplasty.\nAcute coronary syndromes or coronary artery bypass surgery directly related or associated with the patients current presentation are also included.',
								label: 'Coronary Artery Disease',
								max: 0,
								min: 0,
								name: 'Coronary Artery Disease',
								required: false,
								step: 0,
								type: 'boolean'
							},
							{
								category: 'Clinical History',
								default: 0,
								description:
									'Any previous diagnosis of heart failure prior to the patients current ECLS associated medical presentation.\nThis includes any prior hospitalisations due to heart failure, previous clinical documentation or echocardiogardiophic evidence of  heart faliure with reduced or preserved ejection fraction, or acute heart failure episodes.\n\nExclusions: Where patients have de-novo (or new) heart failure confirmed for the current ECLS associated medical presenation.',
								label: 'Chronic Heart Failure',
								max: 0,
								min: 0,
								name: 'Chronic Heart Failure',
								required: false,
								step: 0,
								type: 'boolean'
							},
							{
								category: 'Clinical History',
								default: 0,
								description:
									'History, clinical and radiological features of chronic respiratory disease, such as chronic obstructive pulmonary disease, emphysema, asthma, interstitial lung disease, cystic fibrosis and bronchiectasis.\n\nExclusions: Sleep apnoea, lung cancer and neurological causes for respiratory compromise.',
								label: 'Chronic Lung Disease',
								max: 0,
								min: 0,
								name: 'Chronic Lung Disease',
								required: false,
								step: 0,
								type: 'boolean'
							},
							{
								category: 'Clinical History',
								default: 0,
								description:
									'Where ECLS was initiated immediately following or in the post-operative period following cardiothroacic surgery.\nSurgery of the heart, lungs and pleural or mediastinal structures are included.\n\nExclusions: Percutanous and thorascopic procedures.',
								label: 'Pre-ECMO Cardiothoracic Surgery',
								max: 0,
								min: 0,
								name: 'Pre ECMo C/T Surg',
								required: false,
								step: 0,
								type: 'boolean'
							},
							{
								category: 'Clinical History',
								default: 0,
								description:
									'Where ECLS was initiated immediately following or in the post-operative period following lung transplantation.\nThis includes cases of single lung transplant or combination heart and lung transplant.',
								label: 'Pre-ECMO Lung Transplant',
								max: 0,
								min: 0,
								name: 'PE ECLS Ltx',
								required: false,
								step: 0,
								type: 'boolean'
							},
							{
								category: 'Clinical History',
								default: 0,
								description:
									'Pulmonary embolism diagnosed with CT pulmonary angiogram, ventilation perfusion scan (V/Q) or contrast pulmonary angiography.',
								label: 'Pulmonary Embolism',
								max: 0,
								min: 0,
								name: 'Pulmonary Embolism',
								required: false,
								step: 0,
								type: 'boolean'
							},
							{
								category: 'Clinical History',
								default: 0,
								description:
									"Cardiac arrest is defined as any event(s) that require the use of cardiopulmonary resuscitation (CPR) with the administration of external cardiac massage.\n\nSelect 'Yes' or 'No depending on if the patient experienced a cardiac arrest within 24 hours prior to commencement of the ECLS support.\nSelect 'Yes', if the patient received ECPR.\nIf this information is unknown or unavailable, keep the default value of 'No'.\n\nNote: Pre-ECMO cardiac arrest is greatly predictive in this model, as such it is highly advisableto enter in a value if available.",
								label: 'Pre-ECMO Arrest and ECPR',
								max: 0,
								min: 0,
								name: 'Arrest Ordinal',
								required: false,
								step: 0,
								type: 'boolean'
							},
							{
								category: 'Clinical History',
								default: 0,
								description:
									'Select whether the patient had an acute kidney injury prior to the commencement of ECLS.\nAn acute kidney injury is defined by having a > 1.5 x rise in creatinine that develops within a period of 7 days in a patient not receiving renal replacement therapy.',
								label: 'Acute Kidney Injury',
								max: 0,
								min: 0,
								name: 'AKI',
								required: false,
								step: 0,
								type: 'boolean'
							},
							{
								category: 'Clinical History',
								default: 0,
								description:
									"This generally refers to renal replacment support received within the 24 hours leading up to ECLS, though may also include supports initiated short days prior to ECLS commencement.\n\nSelect 'Yes' if the patient received renal replacement therapy (this includes hemodialysis, continuous renal replacement therapy and peritoneal dialysis) prior to, or concurrent to the commencment of ECLS.",
								label: 'Renal Replacement Therapy',
								max: 0,
								min: 0,
								name: 'Renal Replacement Therapy',
								required: false,
								step: 0,
								type: 'boolean'
							},
							{
								category: 'Clinical History',
								default: 1,
								description:
									'Vasopressor or ionotrope infusions that were employed for at least 6 hours within 24 hours of the ECLS start time.\nThis includes Epinephrine, Norepinephrine, Phenylephrine, Vasopressin, Metaraminol, Enoximone, Milrinone, Levosimendan, Dopamine and Dobutamine.\n\nNote: This does not include bolus doses, such as those given in CPR, unless it was given in addition to an infusion totalling 6 hours in duration prior to the commencemnt of ECLS.',
								label: 'Vasopressors/Inotropes',
								max: 0,
								min: 0,
								name: 'Vasopressors/Inotropes',
								required: false,
								step: 0,
								type: 'boolean'
							},
							{
								category: 'Clinical History',
								default: 0,
								description:
									"Select 'Yes' if the patient received intravenous bicarbonate within the 24 hours prior to the ECLS start time, administered as an infusion or as a bolus for metabolic acidosis.",
								label: 'Pre-ECMO Bicarbonate Infusion',
								max: 0,
								min: 0,
								name: 'Bicarbonate',
								required: false,
								step: 0,
								type: 'boolean'
							}
						],
						name: 'Clinical History'
					},
					{
						features: [
							{
								category: 'Hemodynamics',
								default: 77,
								description:
									'Enter the systolic value of a single measurement of blood pressure taken no more than than 6 hours before the ECLS start time.\nIf an arterial blood pressure and non-invasive cuff pressure exist, please choose the arterial pressure monitor reading.\n\nIn the setting of cardiac arrest where no recordable blood pressure was obtained via invasive or non-invasive means and the patient was pulseless, please select 0mmHg.\nIf this information is unknown or unavailable, keep the default value of 77 mmHg.\n\nA systolic pressure between 0 mmHg and 300 mmHg can be entered.',
								label: 'Systolic Blood Pressure (mmHg)',
								max: 280,
								min: 0,
								name: 'SBP',
								required: false,
								step: 1,
								type: 'slider'
							},
							{
								category: 'Hemodynamics',
								default: 12,
								description:
									'Select a respiratory rate if the patient was mechanically ventilated with either conventional or high frequency oscillatory ventilation.\n\nRespiratory rate units of measure is breaths per minute (bpm).  A respiratory rate between 0 and 90 bpm can be selected.',
								label: 'Respiratory Rate (breaths/min)',
								max: 60,
								min: 0,
								name: 'RateBreathsSec',
								required: false,
								step: 1,
								type: 'slider'
							},
							{
								category: 'Hemodynamics',
								default: 100,
								description:
									'The percentage of inspired oxygen (FiO2) provided to the patient.\nIf arterial blood gas variables are entered in to the prediction tool please select the FiO2 provided at the time the of pre-ECLS arterial blood gas was obtained.',
								label: 'FiO₂ (%)',
								max: 100,
								min: 0,
								name: 'FiO2',
								required: false,
								step: 1,
								type: 'slider'
							},
							{
								category: 'Hemodynamics',
								default: 150,
								description:
									'The partial pressure of oxygen (PaO2) is based on an arterial blood gas drawn prior to, and no more than 6 hours before, the ECLS start time.\nIf multiple arterial blood gases exist in this time period, choose the pre-ECLS blood gas closest to AND before the ECLS start time.\n\nIf this information is unknown or unavailable, keep the default value of 150 mmHg.\n\nA PaO2 between10 mmHg and 600 mmHg can be entered.',
								label: 'PaO₂ (mmHg)',
								max: 600,
								min: 10,
								name: 'PO2',
								required: false,
								step: 1,
								type: 'slider'
							},
							{
								category: 'Hemodynamics',
								default: 47,
								description:
									"The arterial partial pressure of carbon dioxide (PaCO2) is based on an arterial blood gas drawn prior to, and no more than 6 hours before, the ECLS start time.\nIf multiple arterial blood gases exist in this time period, choose the pre-ECLS blood gas closest to AND before the ECLS start time.\n\nIf this information is unknown or unavailable, keep the default value of '47'.\n\nA PaCO2 between 15 mmHg and 200 mmHg can be entered.",
								label: 'PaCO₂ (mmHg)',
								max: 200,
								min: 15,
								name: 'PCO2',
								required: false,
								step: 1,
								type: 'slider'
							}
						],
						name: 'Hemodynamics'
					},
					{
						features: [
							{
								category: 'Biochemistry',
								default: 7.2,
								description:
									'Highest serum lactate concentration drawn in the 6 hours preceding ECLS.\nBoth arterial or venous lactate are acceptable.\n\nIf this information is unknown or unavailable, keep the default value of 7.2 mmol/L.\n\nNote: Blood Lactate is greatly predictive in this model, as such it is highly advisable to enter in a value if available.',
								label: 'Lactate (mmol/L)',
								max: 40,
								min: 0,
								name: 'Lactate',
								required: false,
								step: 1,
								type: 'slider'
							},
							{
								category: 'Biochemistry',
								default: 7.27,
								description:
									"The blood pH is based on blood gas drawn prior to, and no more than 6 hours before, the ECLS start time.\nIf multiple blood gases exist in this time period, choose the pre-ECLS blood gas closest to AND before the ECLS start time.\n\nIf this information is unknown or unavailable, keep the default value of '7.27'.\n\nA pH between 6.0 and 8.0 can be selected.",
								label: 'pH',
								max: 8,
								min: 6,
								name: 'pH',
								required: false,
								step: 0.1,
								type: 'slider'
							},
							{
								category: 'Biochemistry',
								default: 19,
								description:
									"The bicarbonate (HCO3) is based on an arterial blood gas drawn prior to, and no more than 6 hours before, the ECLS start time.\nIf multiple arterial blood gases exist in this time period, choose the pre-ECLS blood gas closest to AND before the ECLS start time.\n\nIf this information is unknown or unavailable, keep the default value of '19'.\n\nA HCO3 between 1 mmol/L and 40 mmol/L (or 10 mEq/L and 40 mEq/L) can be entered.",
								label: 'HCO₃ (mmol/L)',
								max: 70,
								min: 1,
								name: 'HCO3',
								required: false,
								step: 1,
								type: 'slider'
							}
						],
						name: 'Biochemistry'
					}
				],
				name: 'Full',
				order: 1
			}
		];
		await route.fulfill({ json });
	});
}

test('has title', async ({ page }) => {
	await page.goto('/');

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/ECMO PAL Lite/);
});

test('Check that clicking "no" button deselects "yes" button', async ({ page }) => {
	await get_models(page);

	await page.goto('/');

	const responsePromise = page.waitForResponse('*/**/models');
	await responsePromise;

	const yesButton = page.getByTestId('yes');
	const noButton = page.getByTestId('no');

	await expect(yesButton).toHaveAttribute('value', '0');
	await expect(noButton).toHaveAttribute('value', '1');

	await yesButton.click(); // click "yes" button

	// Check that "yes" button is checked and "no" button is unchecked
	await expect(yesButton).toHaveAttribute('value', '1');
	await expect(noButton).toHaveAttribute('value', '0');

	await noButton.click(); // click "no" button

	// Check that "no" button is checked and "yes" button is unchecked
	await expect(yesButton).toHaveAttribute('value', '0');
	await expect(noButton).toHaveAttribute('value', '1');
});

test('Check "no" button is checked by default', async ({ page }) => {
	await get_models(page);

	await page.goto('/');

	const responsePromise = page.waitForResponse('*/**/models');
	await responsePromise;

	const yesButton = page.getByTestId('yes');
	const noButton = page.getByTestId('no');

	await expect(yesButton).toHaveAttribute('value', '0');
	await expect(noButton).toHaveAttribute('value', '1');
});

test('Check slider min and max values', async ({ page }) => {
	await get_models(page);
	await page.goto('/');

	const responsePromise = page.waitForResponse('*/**/models');
	await responsePromise;

	const slider = page.getByTestId('Pre-ECMO Intubation Time (hours) slider');

	const box = await slider.boundingBox();

	await slider.click({
		position: {
			x: box?.width ? box.width - 10 : 0,
			y: box?.height ? box.height / 2 : 0
		}
	});

	await expect(slider).toHaveValue('500');

	await slider.click({
		position: {
			x: 1,
			y: box?.height ? box.height / 2 : 0
		}
	});

	await expect(slider).toHaveValue('0');
});

test('Text fields limited to numeric inputs', async ({ page }) => {
	await get_models(page);
	await page.goto('/');

	const responsePromise = page.waitForResponse('*/**/models');
	await responsePromise;

	const input_box = page.getByTestId('Pre-ECMO Intubation Time (hours) number');

	await input_box.fill('52');

	await expect(input_box).toHaveValue('52');

	await expect(input_box).toHaveAttribute('type', 'number');
});

test('Info buttons trigger popup', async ({ page }) => {
	await get_models(page);
	await page.goto('/');

	const responsePromise = page.waitForResponse('*/**/models');
	await responsePromise;

	const input_box = page.getByTestId('info-button').nth(0);
	const info_popup = page.getByTestId('info-popup');
	const exit_button = page.getByTestId('info-exit-button');

	await expect(info_popup).not.toBeAttached();
	await input_box.click();
	await expect(info_popup).toBeAttached();
	await expect(info_popup).toBeEnabled();

	await exit_button.click();
	await expect(info_popup).not.toBeAttached();
});

test('Test submit button', async ({ page }) => {
	await get_models(page);
	await page.goto('/');

	const responsePromise = page.waitForResponse('*/**/models');
	await responsePromise;

	const chart = page.getByTestId('chart');
	await expect(chart).not.toBeAttached();

	const submit = page.getByTestId('submit');
	const input_box = page.getByTestId('Pre-ECMO Intubation Time (hours) number');
	await input_box.fill('1');

	// Mock api response
	await page.route('*/**/evaluate', async (route) => {
		const json = {
			altering_features: [
				{
					category: 'Clinical History',
					default: 1,
					description: '',
					label: 'ECMO Year',
					max: 0,
					min: 0,
					name: 'Year',
					required: false,
					step: 0,
					type: 'fixed',
					value: 0.0019097135588662384
				},
				{
					category: 'Clinical History',
					default: 0,
					description:
						"Cardiac arrest is defined as any event(s) that require the use of cardiopulmonary resuscitation (CPR) with the administration of external cardiac massage.\n\nSelect 'Yes' or 'No depending on if the patient experienced a cardiac arrest within 24 hours prior to commencement of the ECLS support.\nSelect 'Yes', if the patient received ECPR.\nIf this information is unknown or unavailable, keep the default value of 'No'.\n\nNote: Pre-ECMO cardiac arrest is greatly predictive in this model, as such it is highly advisableto enter in a value if available.",
					label: 'Pre-ECMO Arrest and ECPR',
					max: 0,
					min: 0,
					name: 'Arrest Ordinal',
					required: false,
					step: 0,
					type: 'boolean',
					value: 0.0001993661748566633
				},
				{
					category: 'Clinical History',
					default: 28,
					description:
						'Body Mass Index (BMI) = persons body weight in kilograms divided by the square of height inmeters.\nFor pounds and inches, the BMI can be calculated by dividing weight in pounds by the square of height in inches (in) and multiplying by a conversion factor of 703.',
					label: 'BMI (kg/cm2)',
					max: 85,
					min: 10,
					name: 'BMI',
					required: false,
					step: 1,
					type: 'slider',
					value: -0.02663735626933396
				},
				{
					category: 'Hemodynamics',
					default: 150,
					description:
						'The partial pressure of oxygen (PaO2) is based on an arterial blood gas drawn prior to, and no more than 6 hours before, the ECLS start time.\nIf multiple arterial blood gases exist in this time period, choose the pre-ECLS blood gas closest to AND before the ECLS start time.\n\nIf this information is unknown or unavailable, keep the default value of 150 mmHg.\n\nA PaO2 between10 mmHg and 600 mmHg can be entered.',
					label: 'PaO₂ (mmHg)',
					max: 600,
					min: 10,
					name: 'PO2',
					required: false,
					step: 1,
					type: 'slider',
					value: 0.034662809842981895
				},
				{
					category: 'Hemodynamics',
					default: 77,
					description:
						'Enter the systolic value of a single measurement of blood pressure taken no more than than 6 hours before the ECLS start time.\nIf an arterial blood pressure and non-invasive cuff pressure exist, please choose the arterial pressure monitor reading.\n\nIn the setting of cardiac arrest where no recordable blood pressure was obtained via invasive or non-invasive means and the patient was pulseless, please select 0mmHg.\nIf this information is unknown or unavailable, keep the default value of 77 mmHg.\n\nA systolic pressure between 0 mmHg and 300 mmHg can be entered.',
					label: 'Systolic Blood Pressure (mmHg)',
					max: 280,
					min: 0,
					name: 'SBP',
					required: false,
					step: 1,
					type: 'slider',
					value: 0.25134954403689114
				},
				{
					category: 'Clinical History',
					default: 0,
					description:
						"Number of hours prior to commencement of ECLS where the patient had a newly placed artificial airway.\nIntubation refers to placement of an artificial airway, whether it is an oral endotracheal, nasotracheal or tracheostomy tube.\n\nIf a patient was intubated immediately prior to ECLS commencement, select '0' hours.\nIf a patient was intubated for more than 672 hours prior to ECLS (three months), select '672'.\n\nThis value is required. Hours between 1 and 672 may be entered here.",
					label: 'Pre-ECMO Intubation Time (hours)',
					max: 500,
					min: 0,
					name: 'IntubationToTimeOnHours',
					required: true,
					step: 1,
					type: 'slider',
					value: 0.0009260372010233553
				},
				{
					category: 'Clinical History',
					default: 18,
					description:
						"The patient's age at the time that ECLS was established.\n\nIf patient is older than 81 years, select '81' years.\n\nAges between 18 and 81 years may be entered here.",
					label: 'Age (years)',
					max: 81,
					min: 18,
					name: 'AgeYears',
					required: true,
					step: 1,
					type: 'slider',
					value: -0.010953012231089743
				},
				{
					category: 'Biochemistry',
					default: 7.2,
					description:
						'Highest serum lactate concentration drawn in the 6 hours preceding ECLS.\nBoth arterial or venous lactate are acceptable.\n\nIf this information is unknown or unavailable, keep the default value of 7.2 mmol/L.\n\nNote: Blood Lactate is greatly predictive in this model, as such it is highly advisable to enter in a value if available.',
					label: 'Lactate (mmol/L)',
					max: 40,
					min: 0,
					name: 'Lactate',
					required: false,
					step: 1,
					type: 'slider',
					value: -0.13569356884118067
				}
			],
			base_value: 0.5842355605363845,
			out_value: 0.6999990940093994
		};
		await route.fulfill({ json });
	});

	await submit.click();
	await expect(chart).toBeAttached();
	await expect(chart).toBeEnabled();
});
