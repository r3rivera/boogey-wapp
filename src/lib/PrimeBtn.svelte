<script>
	export let btnWidth = '150px;';
</script>

<button
	{...$$restProps}
	on:click|once|trusted={(event) => alert(true)}
	on:focus
	style="width:{btnWidth}"
>
	{#if $$slots.prefixIcon}
		<span class="pIcon"><slot name="prefixIcon" /></span>
	{/if}
	<slot>Submit</slot>
	{#if $$slots.suffixIcon}
		<span class="sIcon"><slot name="suffixIcon" /></span>
	{/if}
</button>

<style lang="scss">
	button {
		display: flex;

		align-items: center;
		padding: 10px 15px;
		border: none;
		border-radius: 6px;

		margin: 3px;

		cursor: pointer;
		.pIcon,
		.sIcon {
			width: 16px;
			margin: 3px 6px;
		}

		&:disabled {
			opacity: 0.6;
			cursor: not-allowed;
		}
	}
</style>
