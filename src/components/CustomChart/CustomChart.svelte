<script lang="ts">
	// d3 imports
	import * as d3 from 'd3';

	// project component imports
	import type { PredictionResults } from '../../types/PredictionResults';

	// project type imports
	export let data: PredictionResults;

	function drawChart(data: PredictionResults) {
		const viewWidth = 1000;
		const viewHeight = 600;

		const margin = { top: 100, right: 20, bottom: 20, left: 200 };
		const width = viewWidth - margin.left - margin.right;
		const height = viewHeight - margin.top - margin.bottom;

		// Create an array of indices for feature_names
		const indices = Array.from({ length: data.feature_names.length }, (_, i) => i);

		// Sort indices based on the corresponding values in feature_values
		indices.sort((a, b) => data.feature_values[b] - data.feature_values[a]);

		// Re-order feature_names based on the sorted indices
		data.feature_values = indices.map((i) => data.feature_values[i]);
		data.feature_names = indices.map((i) => data.feature_names[i]);

		d3.select('#chart').selectAll('svg').remove();
		const svg = d3
			.select('#chart')
			.append('svg')
			.attr('viewBox', `0 0 ${viewWidth + margin.left} ${viewHeight + margin.top}`)
			.append('g')
			.attr('transform', `translate(${margin.left}, ${margin.top})`);

		const x = d3
			.scaleLinear()
			.range([0, width])
			.domain(d3.extent(data.feature_values) as number[])
			.nice();

		const y = d3.scaleBand().range([0, height]).domain(data.feature_names).padding(0.1);

		svg
			.selectAll('rect')
			.data(data.feature_values)
			.enter()
			.append('rect')
			.attr('x', (d) => x(Math.min(0, d)))
			.attr('y', (d, i) => y(data.feature_names[i]) ?? 0)
			.attr('width', (d) => Math.abs(x(d) - x(0)))
			.attr('height', y.bandwidth())
			.attr('fill', (d) => (d < 0 ? 'red' : 'steelblue'));

		svg
			.append('g')
			.attr('transform', `translate(0, ${height})`)
			.call(d3.axisBottom(x).tickFormat((d) => `${Math.abs(Number(d))}`))
			.selectAll('text')
			.attr('transform', 'rotate(-45)')
			.style('text-anchor', 'end')
			.attr('dx', '-.8em')
			.attr('dy', '.15em');

		svg
			.append('text')
			.attr('x', viewWidth / 2)
			.attr('y', -80)
			.attr('text-anchor', 'middle')
			.style('fill', 'white')
			.style('font-size', '24px')
			.append('tspan')
			.text('Survival Prediction:')
			.attr('x', viewWidth / 2)
			.attr('dy', '1.2em')
			.attr('text-anchor', 'middle')
			.append('tspan')
			.text(Number(data.out_value.toFixed(3)))
			.attr('x', viewWidth / 2)
			.attr('dy', '1.2em')
			.attr('text-anchor', 'middle');
		svg.append('g').call(d3.axisLeft(y));
	}

	$: if (data) {
		drawChart(data);
	}
</script>

<div id="chart" />
