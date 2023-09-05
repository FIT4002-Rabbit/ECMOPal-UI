<script lang="ts">
	// project component imports
	import type { PredictionResults } from '../types';

	// project type imports
	export let data: PredictionResults | undefined;

	const sort_methods = [
		{ name: 'Descending Magnitude', func: (a: number, b: number) => Math.abs(b) - Math.abs(a) },
		{ name: 'Ascending Magnitude', func: (a: number, b: number) => Math.abs(a) - Math.abs(b)},
		{ name: 'Descending', func: (a: number, b: number) => b - a },
		{ name: 'Ascending', func: (a: number, b: number) => a - b }
	]
	let selected_sort_method = sort_methods[0];

	let maxValue: number;
	$: maxValue = Math.max(...(data?.altering_features.map(({ value }) => Math.abs(value)) ?? []));

	let results: { name: string; label: string; value: number; scaledValue: number }[];
	$: results =
		data?.altering_features
			.map(({ name, label, value }) => ({
				name,
				label,
				value: value * 100,
				scaledValue: (value / maxValue) * 100
			}))
			.sort((a, b) => selected_sort_method.func(a.value, b.value)) ?? [];

	let filter_amount = -1;
	$: if (filter_amount == -1 && results.length > 0) {
		filter_amount = Math.min(results.filter(result => result.value != 0).length, Math.floor(results.length / 2));
	}
</script>

{#if data}
	<div class="rounded bg-base-200 h-auto w-full p-3" data-testid="chart">
		<div class="relative w-full h-20 lg:h-0">
			<select class="select select-sm top-0 left-0" bind:value={selected_sort_method}>
				{#each sort_methods as method}
					<option value={method}>
						{method.name}
					</option>
				{/each}
			</select>

			<div class="rounded bg-base-100 p-2 absolute top-0 right-0">
				<p class="m-1">Show top {filter_amount} rows: </p>
				<input type="range" class="range range-sm range-primary p-2 m-1" bind:value={filter_amount} min={0} max={results.length} />
			</div>
		</div>

		<h1 id="chart-title" class="text-1xl md:text-2xl text-center">Survivability</h1>
		<h1 id="chart-probability" class="text-4xl md:text-6xl text-center mb-2">
			<b>{(data.out_value * 100).toFixed(2)}%</b>
		</h1>

		<div class="grid auto-rows-fr grid-cols w-full gap-y-2">
			{#each results.slice(0, filter_amount) as { label, value, scaledValue }}
				<div class="pe-2">{label}</div>
				<div
					class="pe-2 self-center text-right"
					class:text-success={value > 0}
					class:text-error={value < 0}
					class:text-neutral-400={value === 0}
				>
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

<style>
	.grid-cols {
		grid-template-columns:
			minmax(min-content, max-content) min-content
			minmax(20%, 1fr) minmax(20%, 1fr);
	}
</style>
