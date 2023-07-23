<script>
	import { v4 as uuid } from 'uuid';

	export let todoList;

	let inputField;
	function handlerAddSubmit() {
		if (!inputField) return;

		todoList = [
			...todoList,
			{
				id: uuid(),
				title: inputField,
				desc: 'Something Added',
				completed: false
			}
		];
	}
</script>

<form on:submit|preventDefault={handlerAddSubmit}>
	<input bind:value={inputField} />
	<button type="submit">Submit</button>
</form>

{#if !todoList}
	<div>Empty</div>
{:else}
	{#each todoList as todoItem}
		<ul>{todoItem.title}</ul>
	{/each}
{/if}
