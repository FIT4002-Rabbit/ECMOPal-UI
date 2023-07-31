<script lang="ts">
	// d3 imports
	import * as d3 from 'd3';

	// project component imports
	import type { PredictionResults } from '../types';

	// project type imports
	export let data: PredictionResults;
	let chartTitle = 'Survivability';
	let chartProbability = '-.-%';

	// Used to calculate the width of the text for the svg margins
	function getTextWidth(txt: string, fontname: string): number {
		const canvas = document.createElement('canvas');
		const canvas_context = canvas.getContext('2d');
		if (!canvas_context) return 0;
		canvas_context.font = fontname;
		const width = canvas_context.measureText(txt).width;
		canvas.remove();
		return width;
	}

	function drawChart(data: PredictionResults) {
		chartProbability = `${(data.out_value * 100).toFixed(2)}%`;

		// Create an array of indices for feature_names
		const indices = Array.from({ length: data.feature_names.length }, (_, i) => i);

		// Sort indices and features based on the corresponding values in feature_values
		indices.sort((a, b) => Math.abs(data.feature_values[b]) - Math.abs(data.feature_values[a]));
		data.feature_names = indices.map((i) => data.feature_names[i]);
		data.feature_values = indices.map((i) => data.feature_values[i]);

		// Calculate the maximum width of the labels
		const maxLabelWidth = d3.max(data.feature_names, (d) => getTextWidth(d, 'Fira Code')) ?? 200;
		const maxValueWidth =
			d3.max(data.feature_values, (d) => getTextWidth((d * 100).toFixed(2), 'Fira Code')) ?? 20;
		const margin = { top: 10, right: 20, bottom: 10, left: (maxLabelWidth + maxValueWidth) * 10 };

		// Calculate the width and height of the chart
		const viewWidth = 800;
		const viewHeight = 1000;
		const width = viewWidth - margin.right;
		const height = viewHeight - margin.bottom;

		// Remove any existing svg elements
		d3.select('#chart').selectAll('svg').remove();

		// Create the svg element
		const svg = d3
			.select('#chart')
			.append('svg')
			.attr('viewBox', `0 0 ${viewWidth + margin.left} ${viewHeight + margin.top}`)
			.append('g')
			.attr('transform', `translate(${margin.left}, ${margin.top})`);

		// X axis scale linear
		const x = d3
			.scaleLinear()
			.range([0, width])
			.domain(d3.extent(data.feature_values) as number[])
			.nice();

		// Y axis scale band
		const y = d3.scaleBand().range([0, height]).domain(data.feature_names).padding(0.2);

		// Create the bar graph
		const labelColor = (value: number) => (value < 0 ? 'red' : 'steelblue');
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

		// Create feature names with percentages
		const percentageLength = d3.max(data.feature_values, (d) => (d * 100).toFixed(2).length) ?? 0;
		svg
			.append('g')
			.call(d3.axisLeft(y))
			.selectAll('text')
			.attr('class', 'text-8xl')
			.html((d, i) => {
				const label = data.feature_names[i];
				const percentageValue = (data.feature_values[i] * 100)
					.toFixed(2)
					.padStart(percentageLength, '\u2002'); // \u2002 is a unicode em space, the width of one character
				const percentageColor = labelColor(data.feature_values[i] * 100);
				const coloredPercentage = `<tspan style="font-family: 'Fira Code', monospace;" fill="${percentageColor}">${percentageValue}</tspan>`;
				return label + coloredPercentage;
			});
	}

	$: if (data) {
		drawChart(data);
	}
</script>

<h1 id="chart-title" class="text-1xl md:text-2xl text-center">{chartTitle}</h1>
<h1 id="chart-probability" class="text-4xl md:text-6xl text-center">{chartProbability}</h1>
<div id="chart" />
