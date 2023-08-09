<script lang="ts">
	export let label: string;
	export let value: number;

	let checked: boolean;
	$: checked = value === 1;

	let css = {
		input_group:
			'flex flex-wrap align-left flex-row justify-between rounded bg-base-200 h-fit min-h-16 w-full md:w-2/3 lg:w-1/3 m-1 p-1',
		input_text: 'text-center my-auto basis-full md:basis-1/2',
		boolean_button: 'btn join-item w-1/2',
		btn_group: 'join basis-full md:basis-1/2 my-auto'
	};
</script>

<div class={css.input_group}>
	<span class={css.input_text}>
		{label}
		<slot />
	</span>
	<div class={css.btn_group}>
		<button
			class={css.boolean_button}
			class:btn-primary={checked}
			class:bg-base-100={!checked}
			on:click={() => {
				value = 1;
			}}>Yes</button
		>
		<button
			class={css.boolean_button}
			class:btn-primary={!checked}
			class:bg-base-100={checked}
			on:click={() => {
				value = 0;
			}}>No</button
		>
	</div>
</div>
