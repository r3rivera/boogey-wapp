<script>
	import Cards from './lib/Cards.svelte';
	import Login from './lib/Login.svelte';
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

	let inputField;
	function handlerAddSubmit() {
		alert(inputField);
	}
</script>

<Login />
<br />
<br />
<form class="add-todo-form" on:submit|preventDefault={handlerAddSubmit}>
	<!-- Option 1
		<input
		on:input={(e) => {
			console.log(e.currentTarget.value);
		}}
	/> -->

	<!-- Option 2 - Binding the input element, accessible by using value prop
		<input bind:this={inputField} /> -->

	<input bind:value={inputField} />
	<button type="submit">Add</button>
</form>

<!-- {#each bucketList as { id, title, desc, completed } (id)}
	<Cards isCloseable={true}>
		<div slot="cardHeader">{title}</div>
		<div slot="cardContent">{desc}</div>
		<div>{completed}</div>
	</Cards>
{/each}
 -->
<style lang="scss">
</style>
