<script>
</script>

<button><slot>SecondaryButton</slot></button>

<style lang="scss">
	//Only needed if we don't have prependData in the svelte.config.js
	//@use '../styles/variables.scss';

	button {
		padding: 10px 15px;
		border: none;
		background-color: #ff3e00;
		color: #fff;

		border-radius: 3px;
		cursor: pointer;
		&:hover {
			background-color: variables.$color;
		}
	}
</style>
