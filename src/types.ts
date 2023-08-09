export type ModelType = { name: string; features: MappingType[]; order: number };

type CommonProperties = {
	name: string;
	label: string;
	info: string;
	default: number;
	description: string;
	required: boolean;
};

export type MappingType = CommonProperties &
	(
		| { type: 'boolean' }
		| { type: 'slider'; min: number; max: number; step: number }
		| { type: 'fixed' }
	);

type AlteringFeatureType = MappingType & { value: number };

export type PatientDataType = Record<string, number>;

export type PredictionResults = {
	base_value: number;
	altering_features: AlteringFeatureType[];
	out_value: number;
};
