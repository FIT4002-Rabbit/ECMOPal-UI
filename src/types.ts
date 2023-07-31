export type ModelType = { name: string; features: string[]; order: number };

export type MappingType =
	| { type: 'boolean'; default: number; label?: string }
	| { type: 'slider'; min: number; max: number; default: number; step: number; label?: string }
	| { type: 'fixed'; default: number; label?: string };

export type FeatureType = { name: string; description: string } & MappingType;

export type PatientDataType = Record<string, number>;

export type PredictionResults = {
	base_value: number;
	feature_names: string[];
	feature_values: number[];
	out_value: number;
};
