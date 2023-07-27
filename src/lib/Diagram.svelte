<script>
	import * as go from 'gojs';
	import { onMount } from 'svelte';

	let diagramContainer;
	let diagram;

	onMount(() => {
		diagram = new go.Diagram(diagramContainer);
		diagram.model = new go.Model([{ key: 'Alpha' }]);
	});
</script>

<div bind:this={diagramContainer} class="DiagramContainer" />

<style lang="scss">
	.DiagramContainer {
		width: 800px;
		height: 600px;
		margin: 0;
		padding: 0;
		background-color: #dae4e4;
	}
</style>
