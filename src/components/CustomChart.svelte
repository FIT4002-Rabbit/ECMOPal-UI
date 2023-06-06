<script lang="ts">
	// d3 imports
	import * as d3 from 'd3';

	// project component imports
	import type { PredictionResults } from '../types/PredictionResults';

	// project type imports
	export let data: PredictionResults;
	let chartTitle = "";
	let chartProbability = ""

	function drawChart(data: PredictionResults) {
		chartTitle = "Survivability";
		chartProbability = `${Number((data.out_value * 100).toFixed(2)) }%`
		const labelColor = (value: number) => (value < 0 ? 'red' : 'steelblue');
		// Create an array of indices for feature_names
		const indices = Array.from({ length: data.feature_names.length }, (_, i) => i);

		// Sort indices based on the corresponding values in feature_values
		indices.sort((a, b) => data.feature_values[b] - data.feature_values[a]);

		// Re-order feature_names based on the sorted indices
		data.feature_names = indices.map((i) => `${data.feature_names[i]} ${Number((data.feature_values[i] * 100).toFixed(2)) }%`);
		data.feature_values = indices.map((i) => data.feature_values[i]);


		//multiplier is a magic number just setting what looks right currently
		const maxLabelWidth = (d3.max(data.feature_names, (d) => d.length) ?? 150) * 5.5; 
		const margin = { top: 10, right: 20, bottom: 10, left: maxLabelWidth * 10 };

		const viewWidth = 500;
		const viewHeight = 1000;

		const width = viewWidth - margin.right;
		const height = viewHeight - margin.top - margin.bottom;

		// cleanup before new render
		d3.select('#chart').selectAll('svg').remove();
		const svg = d3
			.select('#chart')
			.append('svg')
			.attr('viewBox', `0 0 ${viewWidth + margin.left} ${viewHeight + margin.top}`)
			.append('g')
			.attr('transform', `translate(${margin.left}, ${margin.top})`);

		// x
		const x = d3
			.scaleLinear()
			.range([0, width])
			.domain(d3.extent(data.feature_values) as number[])
			.nice();

		// y
		const y = d3
			.scaleBand()
			.range([0, height])
			.domain(data.feature_names)
			.padding(0.2);

		// bars
		svg
			.selectAll('rect')
			.data(data.feature_values)
			.enter()
			.append('rect')
			.attr('x', (d) => x(Math.min(0, d)))
			.attr('y', (d, i) => y(data.feature_names[i]) ?? 0)
			.attr('width', (d) => Math.abs(x(d) - x(0)))
			.attr('height', 100)
			.attr('fill', (d) => labelColor(d));


		// y axis
		const percentageRegex = /(-?\d+(\.\d+)?)%/;
		svg
			.append('g').call(d3.axisLeft(y))
			.selectAll('text')
			.attr('class', 'text-8xl')
			.html((d, i) => {
				const label = data.feature_names[i];
				const percentageMatch = label.match(percentageRegex);
				const percentageValue = percentageMatch ? percentageMatch[1] : '';
				const totalLength = 6; // Total length for number component of axis label including spaces, negative symbol, and number
				let prefixSpaces = '';
				const remainingLength = totalLength - percentageValue.length;
				if (remainingLength > 0) {
					prefixSpaces = '&nbsp;'.repeat(remainingLength);
				}
				const coloredPercentage = `<tspan style="font-family: 'Fira Code', monospace;" fill="${labelColor(parseFloat(percentageValue))}">${prefixSpaces}${percentageValue}</tspan>`;
				return label.replace(percentageRegex, coloredPercentage);
				});
			}

	$: if (data) {
		drawChart(data);
	}
</script>
<h1 id="chart-title" class="text-1xl md:text-2xl text-center">{chartTitle}</h1>
<h1 id="chart-probability" class="text-4xl md:text-6xl text-center">{chartProbability}</h1>
<div id="chart" />
