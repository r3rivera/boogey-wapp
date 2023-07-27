<script>
	import { createEventDispatcher, onMount, onDestroy } from 'svelte';
	const dispatchEvent = createEventDispatcher();

	onMount(() => {
		//This should be at the top most
		console.log('OnMount Login!');
	});

	onDestroy(() => {
		console.log('OnDestroy Login!');
	});

	let emailField;
	let passwordField;

	function onHandleLogin() {
		const credential = btoa(emailField + ':' + passwordField);
		dispatchEvent('DispatchAuth', {
			credentials: credential
		});
	}
</script>

<div class="login">
	<div>
		<form class="login--form" on:submit|preventDefault={onHandleLogin}>
			<div class="form_field">
				<label for="emailField">Email</label>
				<input id="emailField" bind:value={emailField} type="email" />
			</div>
			<div class="form_field">
				<label for="passwordField">Password</label>
				<input bind:value={passwordField} type="password" />
			</div>
			<div class="button_group">
				<button type="submit">Login</button>
			</div>
		</form>
	</div>
</div>

<style lang="scss">
	.login {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		padding: 10px;

		&--form {
			border-radius: 5px;
			border: 1px solid #d1d1d1;

			padding: 10px;
			margin: 10px;

			.form_field {
				margin: 6px;
				display: flex;
				align-items: center;
				justify-content: space-between;

				label {
					display: inline-block;
					text-align: right;
					margin-right: 13px;
				}
			}

			.button_group {
				display: flex;
			}
		}
	}
</style>
