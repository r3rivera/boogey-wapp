<script>
	let emailField;
	let passwordField;

	function onHandleLogin() {
		alert('Email is ' + emailField + ', Password id ' + passwordField);
	}
</script>

<div class="login">
	<div>
		<form class="login--form" on:submit|preventDefault={onHandleLogin}>
			<input bind:value={emailField} />
			<input bind:value={passwordField} />
			<button type="submit">Login</button>
		</form>
	</div>
</div>

<style lang="scss">
	.login {
		background-color: #fff;

		&--form {
			display: flexbox;
			border-radius: 5px;
			border: 1px solid #d1d1d1;

			padding: 10px;
			margin: 10px;
		}
	}
</style>
