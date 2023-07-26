<script>
	import { createEventDispatcher, onMount, onDestroy } from 'svelte';
	onMount(() => {
		//This should be at the top most
		console.log('OnMount Called!');
	});

	onDestroy(() => {
		console.log('OnDestroy Called!');
	});

	const dispatchEvent = createEventDispatcher();
	let inputField;

	function handlerAddSubmit() {
		if (!inputField) return;
		dispatchEvent('AddItem', {
			title: inputField
		});
	}

	function handleRemoveItem(itemId) {
		dispatchEvent('RemoveItem', {
			id: itemId
		});
	}

	function handleToggle(itemId, isChecked) {
		dispatchEvent('ToggleItem', {
			itemId,
			isChecked
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
	<ul>
		{#each todoList as todoItem}
			<!-- {@debug todoItem} -->
			<li>
				<label>
					<input
						on:input={(e) => {
							e.currentTarget.checked = todoItem.completed;
							handleToggle(todoItem.id, !todoItem.completed);
						}}
						type="checkbox"
						checked={todoItem.completed}
					/>

					{todoItem.title}
				</label>
				<button
					on:click={() => {
						handleRemoveItem(todoItem.id);
					}}>Remove</button
				>
			</li>
		{/each}
	</ul>
{/if}
