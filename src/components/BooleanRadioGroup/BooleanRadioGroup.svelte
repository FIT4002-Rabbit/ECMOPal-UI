<script lang="ts">
	export let label: string;
	export let name: string;
	export let value: number;

	let css = {
		input_group: 'input-group btn-group h-12 w-fit my-1',
		input_text: 'w-64',
		boolean_button: 'btn w-32'
	};
</script>

<label class={css.input_group}>
	<span class={css.input_text}>{label}</span>
	<input
		class={css.boolean_button}
		type="radio"
		{name}
		data-title="Yes"
		checked={value === 1}
		on:change={() => (value = 1)}
	/>
	<input
		class={css.boolean_button}
		type="radio"
		{name}
		data-title="No"
		checked={value === 0}
		on:change={() => (value = 0)}
	/>
</label>
