<script>
	import { createEventDispatcher } from 'svelte';

	const dispatchEvent = createEventDispatcher();
	let inputField;

	function handlerAddSubmit() {
		if (!inputField) return;
		dispatchEvent('AddItem', {
			title: inputField
		});
	}

	export let todoList;
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
