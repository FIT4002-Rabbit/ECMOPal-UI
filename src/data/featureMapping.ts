import type { MappingType } from '../types';

const mapping: Record<string, MappingType> = {
	Year: { label: 'ECMO Year', type: 'fixed', default: 1 },
	'Chronic Lung Disease': { type: 'boolean', default: 0 },
	'Chronic Heart Failure': { type: 'boolean', default: 0 },
	'Coronary Artery Disease': { type: 'boolean', default: 0 },
	'PE ECLS Ltx': { label: 'Pre-ECMO Lung Transplant', type: 'boolean', default: 0 },
	'Vasopressors/Inotropes': { type: 'boolean', default: 1 },
	'Pre ECMo C/T Surg': { label: 'Pre-ECMO Cardiothoracic Surgery', type: 'boolean', default: 0 },
	pH: { type: 'slider', min: 6, max: 8, step: 0.1, default: 7.2 },
	Bicarbonate: { label: 'Pre-ECMO Bicarbonate Infusion', type: 'boolean', default: 0 },
	PCO2: { label: 'PaCO₂ (mmHg)', type: 'slider', min: 15, max: 200, step: 1, default: 47 },
	HCO3: { label: 'HCO₃ (mmol/L)', type: 'slider', min: 1, max: 70, step: 1, default: 19 },
	AKI: { label: 'Acute Kidney Injury', type: 'boolean', default: 0 },
	'Renal Replacement Therapy': { type: 'boolean', default: 0 },
	'Arrest Ordinal': { label: 'Pre-ECMO Arrest and ECPR', type: 'boolean', default: 0 },
	BMI: { label: 'BMI (kg/cm2)', type: 'slider', min: 10, max: 85, step: 1, default: 28 },
	RateBreathsSec: {
		label: 'Breathing Rate (breaths/min)',
		type: 'slider',
		min: 0,
		max: 60,
		step: 1,
		default: 12
	},
	FiO2: { label: 'FiO₂ (%)', type: 'slider', min: 0, max: 100, step: 1, default: 100 },
	PO2: { label: 'PaO₂ (mmHg)', type: 'slider', min: 10, max: 600, step: 1, default: 150 },
	SBP: {
		label: 'Systolic Blood Pressure (mmHg)',
		type: 'slider',
		min: 0,
		max: 280,
		step: 1,
		default: 77
	},
	IntubationToTimeOnHours: {
		label: 'Pre-ECMO Intubation Time (hours)',
		type: 'slider',
		min: 0,
		max: 500,
		step: 1,
		default: 0
	},
	AgeYears: { label: 'Age (years)', type: 'slider', min: 0, max: 81, step: 1, default: 0 },
	Lactate: { label: 'Lactate (mmol/L)', type: 'slider', min: 0, max: 40, step: 1, default: 0 },
	'Pulmonary Embolism': { type: 'boolean', default: 0 }
};

export const REQUIRED_FIELDS = ['IntubationToTimeOnHours', 'AgeYears', 'Lactate'];

export default mapping;
