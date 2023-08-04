<script lang="ts">
	export let label: string;
	export let min = 0;
	export let max = 100;
	export let step = 1;
	export let value = 0;

	let css = {
		input_group:
			'flex flex-wrap flex-row justify-between rounded bg-base-300 h-16 w-full md:w-2/3 lg:w-1/3 m-1 p-1',
		input_text: 'text-center my-auto basis-full md:basis-1/2',
		slider_group: 'btn-group basis-full md:basis-1/2',
		slider_input: 'w-1/5 rounded text-center',
		slider_range: 'range w-4/5 mx-2 my-auto'
	};
</script>

<div class={css.input_group}>
	<span class={css.input_text}>
		{label}
		<slot />
	</span>
	<div class={css.slider_group}>
		<input class={css.slider_input} type="number" bind:value {min} {max} {step} />
		<input class={css.slider_range} type="range" bind:value {min} {max} {step} />
	</div>
</div>
