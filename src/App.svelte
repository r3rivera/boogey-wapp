<svelte:options immutable={true} />

<script>
	import { v4 as uuid } from 'uuid';
	import TodoTemp from './lib/TodoTemp.svelte';
	import Login from './lib/Login.svelte';

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

	async function handleAuthentication(credential) {
		const headers = new Headers();
		headers.append('Authorization', 'Basic ' + credential);
		//headers.append('Access-Control-Request-Headers', 'Authorization');
		await fetch('http://localhost:8080/web/login2', {
			method: 'POST',
			headers: headers,
			redirect: 'follow'
		})
			.then(async (response) => {
				if (response.ok) {
					console.log('Success');
					const data = await response.json();
					console.log(data);
				} else {
					console.error('Error with authentication');
				}
			})
			.catch((err) => {
				console.error(JSON.stringify(err));
			});
	}
</script>

<!-- 
{#await loadPromise}
	<p>Loading</p>
{:then response}
	<p>Good</p>
{:catch}
	<p>Error</p>
{/await} -->

<Login
	on:DispatchAuth={(e) => {
		handleAuthentication(e.detail['credentials']);
	}}
/>

<!-- 
<h3>{bucketList.length} {itemLabel}</h3>

<TodoTemp
	todoList={bucketList}
	on:AddItem={(e) => {
		bucketList = [
			...bucketList,
			{
				id: uuid(),
				title: e.detail['title'],
				desc: 'US House',
				completed: false
			}
		];
	}}
	on:RemoveItem={(e) => {
		bucketList = bucketList.filter((item) => e.detail['id'] !== item.id);
	}}
	on:ToggleItem={(e) => {
		bucketList = bucketList.map((t) => {
			if (t.id === e.detail.itemId) {
				return {
					...t,
					completed: e.detail.isChecked
				};
			}
			return { ...t };
		});
	}}
/>

{#each bucketList as item}
	<Cards
		itemId={item.id}
		isCloseable={true}
		on:onDeleteItemEvent={(e) => {
			console.log(e.detail);
		}}
	>
		<div slot="cardHeader">{item.title}</div>
	</Cards>
{/each} -->
