export type ModelType = { name: string; features: MappingType[]; order: number };

export type MappingType = {
	type: 'boolean' | 'slider' | 'fixed';
	name: string;
	label: string;
	info: string;
	default: number;
	description: string;
	required: boolean;
	min: number;
	max: number;
	step: number;
};

type AlteringFeatureType = MappingType & { value: number };

export type PatientDataType = Record<string, number>;

export type PredictionResults = {
	base_value: number;
	altering_features: AlteringFeatureType[];
	out_value: number;
};
