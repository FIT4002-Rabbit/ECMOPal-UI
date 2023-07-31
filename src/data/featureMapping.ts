export type MappingType =
	| { type: 'boolean'; default: number; label?: string }
	| { type: 'slider'; min: number; max: number; default: number; step: number; label?: string };

const mapping: Record<string, MappingType> = {
	Year: { label: 'ECMO Year', type: 'slider', min: 0, max: 1, step: 0.1, default: 0 },
	'Chronic Lung Disease': { type: 'boolean', default: 0 },
	'Chronic Heart Failure': { type: 'boolean', default: 0 },
	'Coronary Artery Disease': { type: 'boolean', default: 0 },
	'PE ECLS Ltx': { label: 'Pre-ECMO Lung Transplant', type: 'boolean', default: 0 },
	'Vasopressors/Inotropes': { type: 'boolean', default: 0 },
	'Pre ECMo C/T Surg': { label: 'Pre-ECMO Cardiothoracic Surgery', type: 'boolean', default: 0 },
	pH: { type: 'slider', min: 0, max: 8, step: 0.1, default: 0 },
	Bicarbonate: { label: 'Pre-ECMO Bicarbonate Infusion', type: 'boolean', default: 0 },
	PCO2: { label: 'PaCO₂', type: 'boolean', default: 0 },
	HCO3: { label: 'HCO₃', type: 'boolean', default: 0 },
	AKI: { label: 'Acute Kidney Injury', type: 'boolean', default: 0 },
	'Renal Replacement Therapy': { type: 'boolean', default: 0 },
	'Arrest Ordinal': { label: 'Pre-ECMO Arrest and ECPR', type: 'boolean', default: 0 },
	BMI: { label: 'BMI (kg/cm2)', type: 'boolean', default: 0 },
	RateBreathsSec: { label: 'Breathing Rate', type: 'boolean', default: 0 },
	FiO2: { label: 'FiO₂', type: 'boolean', default: 0 },
	PO2: { label: 'PaO₂ (mmHg)', type: 'boolean', default: 0 },
	SBP: { label: 'Systolic Blood Pressure (mmHg)', type: 'boolean', default: 0 },
	IntubationToTimeOnHours: { label: 'Intubation Time (Hours)', type: 'boolean', default: 0 },
	AgeYears: { label: 'Age (Years)', type: 'boolean', default: 0 },
	Lactate: { label: 'Lactate (mmol/L)', type: 'boolean', default: 0 },
	'Pulmonary Embolism': { type: 'boolean', default: 0 }
};

export default mapping;
