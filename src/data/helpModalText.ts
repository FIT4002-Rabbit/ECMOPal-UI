const helpModelText: Record<string, string[]> = {
	'Chronic Lung Disease': [
		'History, clinical and radiological features of chronic respiratory disease, such as chronic obstructive pulmonary disease, emphysema, asthma, interstitial lung disease, cystic fibrosis and bronchiectasis.',
		'',
		'Exclusions: Sleep apnoea, lung cancer and neurological causes for respiratory compromise.'
	],
	'Chronic Heart Failure': [
		'Any previous diagnosis of heart failure prior to the patients current ECLS associated medical presentation.',
		'This includes any prior hospitalisations due to heart failure, previous clinical documentation or echocardiogardiophic evidence of  heart faliure with reduced or preserved ejection fraction, or acute heart failure episodes.',
		'',
		'Exclusions: Where patients have de-novo (or new) heart failure confirmed for the current ECLS associated medical presenation.'
	],
	'Coronary Artery Disease': [
		'Patient has a history of coronary artery disease or ischaemic heart disease, treated or otherwise, including prior coronary artery bypass surgery or coronary angioplasty.',
		'Acute coronary syndromes or coronary artery bypass surgery directly related or associated with the patients current presentation are also included.'
	],
	'PE ECLS Ltx': [
		'Where ECLS was initiated immediately following or in the post-operative period following lung transplantation.',
		'This includes cases of single lung transplant or combination heart and lung transplant.'
	],
	'Vasopressors/Inotropes': [
		'Vasopressor or ionotrope infusions that were employed for at least 6 hours within 24 hours of the ECLS start time.',
		'This includes Epinephrine, Norepinephrine, Phenylephrine, Vasopressin, Metaraminol, Enoximone, Milrinone, Levosimendan, Dopamine and Dobutamine.',
		'',
		'Note: This does not include bolus doses, such as those given in CPR, unless it was given in addition to an infusion totalling 6 hours in duration prior to the commencemnt of ECLS.'
	],
	'Pre ECMo C/T Surg': [
		'Where ECLS was initiated immediately following or in the post-operative period following cardiothroacic surgery.',
		'Surgery of the heart, lungs and pleural or mediastinal structures are included.',
		'',
		'Exclusions: Percutanous and thorascopic procedures.'
	],
	pH: [
		'The blood pH is based on blood gas drawn prior to, and no more than 6 hours before, the ECLS start time.',
		'If multiple blood gases exist in this time period, choose the pre-ECLS blood gas closest to AND before the ECLS start time.',
		'',
		"If this information is unknown or unavailable, keep the default value of '7.27'.",
		'',
		'A pH between 6.0 and 8.0 can be selected.'
	],
	Bicarbonate: [
		"Select 'Yes' if the patient received intravenous bicarbonate within the 24 hours prior to the ECLS start time, administered as an infusion or as a bolus for metabolic acidosis."
	],
	PCO2: [
		'The arterial partial pressure of carbon dioxide (PaCO2) is based on an arterial blood gas drawn prior to, and no more than 6 hours before, the ECLS start time.',
		'If multiple arterial blood gases exist in this time period, choose the pre-ECLS blood gas closest to AND before the ECLS start time.',
		'',
		"If this information is unknown or unavailable, keep the default value of '47'.",
		'',
		'A PaCO2 between 15 mmHg and 200 mmHg can be entered.'
	],
	HCO3: [
		'The bicarbonate (HCO3) is based on an arterial blood gas drawn prior to, and no more than 6 hours before, the ECLS start time.',
		'If multiple arterial blood gases exist in this time period, choose the pre-ECLS blood gas closest to AND before the ECLS start time.',
		'',
		"If this information is unknown or unavailable, keep the default value of '19'.",
		'',
		'A HCO3 between 1 mmol/L and 40 mmol/L (or 10 mEq/L and 40 mEq/L) can be entered.'
	],
	AKI: [
		'Select whether the patient had an acute kidney injury prior to the commencement of ECLS.',
		'An acute kidney injury is defined by having a > 1.5 x rise in creatinine that develops within a period of 7 days in a patient not receiving renal replacement therapy.'
	],
	'Renal Replacement Therapy': [
		'This generally refers to renal replacment support received within the 24 hours leading up to ECLS, though may also include supports initiated short days prior to ECLS commencement.',
		'',
		"Select 'Yes' if the patient received renal replacement therapy (this includes hemodialysis, continuous renal replacement therapy and peritoneal dialysis) prior to, or concurrent to the commencment of ECLS."
	],
	'Arrest Ordinal': [
		'Cardiac arrest is defined as any event(s) that require the use of cardiopulmonary resuscitation (CPR) with the administration of external cardiac massage.',
		'',
		"Select 'Yes' or 'No depending on if the patient experienced a cardiac arrest within 24 hours prior to commencement of the ECLS support.",
		"Select 'Yes', if the patient received ECPR.",
		"If this information is unknown or unavailable, keep the default value of 'No'.",
		'',
		'Note: Pre-ECMO cardiac arrest is greatly predictive in this model, as such it is highly advisableto enter in a value if available.'
	],
	BMI: [
		'Body Mass Index (BMI) = persons body weight in kilograms divided by the square of height inmeters.',
		'For pounds and inches, the BMI can be calculated by dividing weight in pounds by the square of height in inches (in) and multiplying by a conversion factor of 703.'
	],
	RateBreathsSec: [
		'Select a respiratory rate if the patient was mechanically ventilated with either conventional or high frequency oscillatory ventilation.',
		'',
		'Respiratory rate units of measure is breaths per minute (bpm).  A respiratory rate between 0 and 90 bpm can be selected.'
	],
	FiO2: [
		'The percentage of inspired oxygen (FiO2) provided to the patient.',
		'If arterial blood gas variables are entered in to the prediction tool please select the FiO2 provided at the time the of pre-ECLS arterial blood gas was obtained.'
	],
	PO2: [
		'The partial pressure of oxygen (PaO2) is based on an arterial blood gas drawn prior to, and no more than 6 hours before, the ECLS start time.',
		'If multiple arterial blood gases exist in this time period, choose the pre-ECLS blood gas closest to AND before the ECLS start time.',
		'',
		'If this information is unknown or unavailable, keep the default value of 150 mmHg.',
		'',
		'A PaO2 between10 mmHg and 600 mmHg can be entered.'
	],
	SBP: [
		'Enter the systolic value of a single measurement of blood pressure taken no more than than 6 hours before the ECLS start time.',
		'If an arterial blood pressure and non-invasive cuff pressure exist, please choose the arterial pressure monitor reading.',
		'',
		'In the setting of cardiac arrest where no recordable blood pressure was obtained via invasive or non-invasive means and the patient was pulseless, please select 0mmHg.',
		'If this information is unknown or unavailable, keep the default value of 77 mmHg.',
		'',
		'A systolic pressure between 0 mmHg and 300 mmHg can be entered.'
	],
	IntubationToTimeOnHours: [
		'Number of hours prior to commencement of ECLS where the patient had a newly placed artificial airway.',
		'Intubation refers to placement of an artificial airway, whether it is an oral endotracheal, nasotracheal or tracheostomy tube.',
		'',
		"If a patient was intubated immediately prior to ECLS commencement, select '0' hours.",
		"If a patient was intubated for more than 672 hours prior to ECLS (three months), select '672'.",
		'',
		'This value is required. Hours between 1 and 672 may be entered here.'
	],
	AgeYears: [
		"The patient's age at the time that ECLS was established.",
		'',
		"If patient is older than 81 years, select '81' years.",
		'',
		'Ages between 18 and 81 years may be entered here.'
	],
	Lactate: [
		'Highest serum lactate concentration drawn in the 6 hours preceding ECLS.',
		'Both arterial or venous lactate are acceptable.',
		'',
		'If this information is unknown or unavailable, keep the default value of 7.2 mmol/L.',
		'',
		'Note: Blood Lactate is greatly predictive in this model, as such it is highly advisable to enter in a value if available.'
	],
	'Pulmonary Embolism': [
		'Pulmonary embolism diagnosed with CT pulmonary angiogram, ventilation perfusion scan (V/Q) or contrast pulmonary angiography.'
	]
};

export default helpModelText;
