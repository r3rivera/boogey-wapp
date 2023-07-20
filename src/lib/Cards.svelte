<script>
</script>

<div class="card-container">
	<div class="card-container--header"><slot name="cardHeader" /></div>
	<div class="card-container--content"><slot name="cardContent">Items</slot></div>
</div>

<style lang="scss">
	.card-container {
		align-content: center;

		padding: 6px;
		margin: 12px 6px;

		border-radius: 6px;
		border: 1px solid #fff;

		&--header {
			color: #f00;
			padding: 6px;
		}

		&--content {
			padding: 6px;
		}
	}
</style>
