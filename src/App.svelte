<script>
	import PrimaryButton from './lib/PrimaryButton.svelte';
	import SecondaryButton from './lib/SecondaryButton.svelte';
	import FaAngellist from 'svelte-icons/fa/FaAngellist.svelte';
</script>

<PrimaryButton buttonLabel="Submit" />
<SecondaryButton size="large"><span slot="prefixName"><FaAngellist /></span>Cancel</SecondaryButton>

<style lang="scss">
</style>
