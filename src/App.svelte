<script>
	import { v4 as uuid } from 'uuid';
	import TodoTemp from './lib/TodoTemp.svelte';

	let bucketList = [
		{ id: uuid(), title: 'House', desc: 'US House', completed: false },
		{ id: uuid(), title: 'Condo', desc: 'Condo Unit in the Home Country', completed: false },
		{ id: uuid(), title: 'Car', desc: 'SUV in US', completed: true },
		{ id: uuid(), title: 'Dog', desc: 'Pet Dog - Labrador', completed: false },
		{ id: uuid(), title: 'Home Business', desc: 'Business in Home', completed: false },
		{ id: uuid(), title: 'Gun', desc: 'Real M4 Gun', completed: false },
		{ id: uuid(), title: 'Garden', desc: 'Place to get away', completed: false },
		{ id: uuid(), title: 'Money', desc: 'Money for happiness', completed: false }
	];

	let itemLabel = 'items';
	$: console.log(bucketList);

	setTimeout(() => {
		itemLabel = 'in Items';
		console.log('Done timeout');
	}, 3000);
</script>

<h3>{bucketList.length} {itemLabel}</h3>
<TodoTemp bind:todoList={bucketList} />

<style lang="scss">
</style>
