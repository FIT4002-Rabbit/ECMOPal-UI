import type { MappingType, PatientDataType } from './types';

const handleDisabled = (
	feature: MappingType,
	patientData: PatientDataType,
	setValue: (value: number) => void
) => {
	const dependsOn = feature['depends on'];
	let disabled = false;
	if (dependsOn) {
		if (dependsOn[0] === '!') {
			disabled = !!patientData[dependsOn.slice(1)];
		} else {
			disabled = !patientData[dependsOn];
		}
	}

	if (disabled) {
		setValue(feature.default);
	}

	return disabled;
};

export { handleDisabled };
