<script lang="ts">
	export let label: string;
	export let min = 0;
	export let max = 100;
	export let step = 1;
	export let value = 0;

	let css = {
		input_group: 'input-group btn-group h-12 w-fit my-1',
		input_text: 'w-64',
		slider_range: 'w-48 range m-auto',
		slider_input: 'w-16',
		boolean_button: 'btn w-32'
	};
</script>

<label class={css.input_group}>
	<span class={css.input_text}>{label}</span>
	<input class={css.slider_input} type="number" bind:value {min} {max} {step} />
	<input class={css.slider_range} type="range" bind:value {min} {max} {step} />
</label>
