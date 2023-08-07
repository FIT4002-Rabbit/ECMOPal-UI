<script lang="ts">
	// project component imports
	import type { PredictionResults } from '../types';
	import mapping from '../data/featureMapping';

	// project type imports
	export let data: PredictionResults | undefined;

	let maxValue: number;
	$: maxValue = Math.max(...(data?.feature_values.map((val) => Math.abs(val)) ?? []));

	let results: { name: string; label: string; value: number; scaledValue: number }[];
	$: results =
		data?.feature_names
			.map((name, i) => ({
				name,
				label: mapping[name].label ?? name,
				value: (data?.feature_values?.[i] ?? 0) * 100,
				scaledValue: ((data?.feature_values?.[i] ?? 0) / maxValue) * 100
			}))
			.sort((a, b) => Math.abs(b.value) - Math.abs(a.value)) ?? [];
</script>

<style>
	.grid-cols {
		grid-template-columns: minmax(min-content, max-content) min-content minmax(20%, 1fr) minmax(20%, 1fr);
	}
</style>

{#if data}
	<div class="rounded bg-base-200 h-auto w-full md:w-2/3 m-1 p-3">
		<h1 id="chart-title" class="text-1xl md:text-2xl text-center">Survivability</h1>
		<h1 id="chart-probability" class="text-4xl md:text-6xl text-center mb-2">
			<b>{(data.out_value * 100).toFixed(2)}%</b>
		</h1>

		<div
			class="grid auto-rows-fr grid-cols w-full gap-y-2"
		>
			{#each results as { label, value, scaledValue }}
				<div class="pe-2">{label}</div>
				<div class="pe-2 self-center text-right" class:text-success={value >= 0} class:text-error={value < 0}>
					<b>{value.toFixed(2)}%</b>
				</div>
				<div>
					{#if value < 0}
						<div style="width: {Math.abs(scaledValue)}%;" class="bg-error h-full ms-auto" />
					{/if}
				</div>
				<div>
					{#if value >= 0}
						<div style="width: {scaledValue}%;" class="bg-success h-full me-auto" />
					{/if}
				</div>
			{/each}
		</div>
	</div>
{/if}
