<script>
	import Counter from './lib/Counter.svelte';

	const popo = {
		initVal: 0,
		mValue: 10
	};
</script>

<Counter initialCount={1} maxCount={10} {...popo} hsamppo={4} />

<style>
	h1 {
		color: red;
	}
</style>
