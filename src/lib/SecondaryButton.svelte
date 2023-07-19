<script>
	export let size = 'small';
	export let shadow = undefined;
</script>

<button class:size-lg={size === 'large'} class:size-sm={size === 'small'}
	><slot>SecondaryButton</slot></button
>

<style lang="scss">
	//Only needed if we don't have prependData in the svelte.config.js
	//@use '../styles/variables.scss';

	button {
		border: none;
		background-color: #ff3e00;
		color: #fff;

		border-radius: 3px;
		cursor: pointer;

		&:hover {
			background-image: linear-gradient(rgba(0, 0, 0, 0.4) 0 0);
		}
		&:active {
			background-image: linear-gradient(rgba(255, 255, 255, 0.1) 0 0);
		}

		&.size-sm {
			padding: 10px 15px;
			font-weight: 300;
		}
		&.size-lg {
			padding: 30px 50px;
			font-weight: bold;
		}
	}
</style>
