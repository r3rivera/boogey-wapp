<script>
	import Cards from './lib/Cards.svelte';
	import { v4 as uuid } from 'uuid';

	const bucketList = [
		{ id: uuid(), title: 'House', desc: 'US House', completed: false },
		{ id: uuid(), title: 'Condo', desc: 'Condo Unit in the Home Country', completed: false },
		{ id: uuid(), title: 'Car', desc: 'SUV in US', completed: true },
		{ id: uuid(), title: 'Dog', desc: 'Pet Dog - Labrador', completed: false },
		{ id: uuid(), title: 'Home Business', desc: 'Business in Home', completed: false },
		{ id: uuid(), title: 'Gun', desc: 'Real M4 Gun', completed: false },
		{ id: uuid(), title: 'Garden', desc: 'Place to get away', completed: false },
		{ id: uuid(), title: 'Money', desc: 'Money for happiness', completed: false }
	];
</script>

{#each bucketList as bucket (bucket.id)}
	<Cards>
		<div slot="cardHeader">{bucket.title}</div>
		<div slot="cardContent">{bucket.desc}</div>
		<div>{bucket.completed}</div>
	</Cards>
{/each}
<Cards />

<style lang="scss">
</style>
