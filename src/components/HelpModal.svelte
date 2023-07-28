<script lang="ts">
	let css = {
		input_group:
			'flex flex-wrap flex-row justify-between rounded bg-base-300 h-16 w-5/6 md:w-2/3 lg:w-1/3 m-1 p-1',
		input_text: 'text-center my-auto basis-full md:basis-1/2',
		slider_group: 'btn-group basis-full md:basis-1/2',
		slider_input: 'w-1/5 rounded text-center',
		slider_range: 'range w-4/5 mx-2 my-auto'
	};

    let is_open: boolean = false;
</script>

<button class="bg-base-100 rounded-sm w-6" on:click={() => is_open = true}>?</button>
{#if is_open === true}
    <!-- Black background that blocks interaction -->
    <div class="fixed z-50 left-0 top-0 w-full h-full bg-black/[.25] flex align-middle" on:mousedown={() => is_open = false}>

        <!-- Content box for modal -->
        <div on:mousedown|stopPropagation={()=>{}} class="relative w-2/3 lg:w-1/2 m-auto p-10 bg-base-100 rounded-md text-left">
            <button class="absolute top-0 right-0 w-8 h-8 m-2 rounded-sm bg-base-300" on:click={() => is_open = false}>X</button>
            <slot />
        </div>
    </div>
{/if}
