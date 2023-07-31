export type ModelType = { name: string; features: string[] };

export interface PredictionResults {
	base_value: number;
	feature_names: string[];
	feature_values: number[];
	out_value: number;
}
