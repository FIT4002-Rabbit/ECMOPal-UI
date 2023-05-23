<script lang="ts">
	export let label: string;
	export let name: string;
	export let value: number;

	let css = {
		input_group:
			'flex flex-wrap align-left flex-row justify-between rounded bg-base-300 h-fit min-h-16 w-5/6 md:w-2/3 lg:w-1/3 m-1 p-1',
		input_text: 'text-center my-auto basis-full md:basis-1/2',
		boolean_button: 'btn w-1/2',
		btn_group: 'btn-group basis-full md:basis-1/2 my-auto'
	};
</script>

<label class={css.input_group}>
	<span class={css.input_text}>{label}</span>
	<div class={css.btn_group}>
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
	</div>
</label>
