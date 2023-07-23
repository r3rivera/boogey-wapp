<script>
	import FaTimes from 'svelte-icons/fa/FaTimes.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatchEvent = createEventDispatcher();

	export let itemId;
	export let isCloseable = false;
</script>

<div class="card-container">
	{#if $$slots.cardHeader || isCloseable}
		<div class="card-container--header__box">
			{#if $$slots.cardHeader}
				<div class="card-container--header"><slot name="cardHeader">Header</slot></div>
			{:else}
				<div class="card-container--header">&nbsp;</div>
			{/if}
			{#if isCloseable}
				<div class="card-container--header__box-close">
					<button
						on:click={() => {
							dispatchEvent('onDeleteItemEvent', itemId);
						}}><FaTimes /></button
					>
				</div>
			{/if}
		</div>
	{/if}

	<div class="card-container--content"><slot name="cardContent">Items</slot></div>
	{#if $$slots.cardFooter}
		<div class="card-container--footer"><slot name="cardFooter">Footer</slot></div>
	{/if}
</div>

<style lang="scss">
	.card-container {
		align-content: center;

		padding: 1.25rem;
		margin: 1.25rem 0.75rem;

		border-radius: 6px;
		border: 1px solid #fff;

		&--header__box {
			display: flex;
			margin-bottom: 0.75rem;
			width: 100%;

			&-close {
				position: relative;
				top: -9px;
				left: 3px;

				margin: 6px;
				width: 15px;
				align-items: center;
				cursor: pointer;
			}
		}

		&--header {
			color: #f00;
			width: 100%;
		}

		&--content {
			margin: 0.25rem 0;
		}

		&--footer {
			margin: 0.25rem 0;
		}
	}
</style>
