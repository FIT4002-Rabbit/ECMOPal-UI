const helpModelText: Record<string, string[]> = {
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
	]
};

export default helpModelText;
