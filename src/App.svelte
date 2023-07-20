<script>
	import PrimaryButton from './lib/PrimeBtn.svelte';
	import SecondaryButton from './lib/SecondaryButton.svelte';
	import FaAngellist from 'svelte-icons/fa/FaAngellist.svelte';
	import FaAngleRight from 'svelte-icons/fa/FaAngleRight.svelte';
	import FaAngleDoubleRight from 'svelte-icons/fa/FaAngleDoubleRight.svelte';
</script>

<PrimaryButton
	>Submit Button
	<FaAngleRight slot="suffixIcon" />
</PrimaryButton>
<SecondaryButton let:isMouseHovered size="large">
	<span slot="prefixName"><FaAngellist /></span>
	<span>Cancel</span>
	{#if isMouseHovered}
		<FaAngleDoubleRight />
	{:else}
		<FaAngleRight />
	{/if}
</SecondaryButton>

<style lang="scss">
</style>
