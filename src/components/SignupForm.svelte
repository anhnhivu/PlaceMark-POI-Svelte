<script>
  import { push } from "svelte-spa-router";
  import { getContext } from "svelte";

  let firstName = "";
  let lastName = "";
  let email = ""
  let password = "";
  let errorMessage = "";

  const placemarkService = getContext("PlacemarkService");

  async function signup() {
    if (firstName && lastName && email && password) {
      let success = await placemarkService.signup(firstName, lastName, email, password);
      if (success) {
        push("/");
      } else {
        errorMessage = "Error Trying to sign up";
      }
    } else {
      errorMessage = "Please fill in all the required fields.";
    }
    
  }
</script>

<form on:submit|preventDefault={signup}>
  <div class="field is-horizontal">
    <div class="field-body">
      <div class="field">
        <label for="firstname" class="label">First Name</label>
        <input bind:value={firstName} class="input" id="firstname" type="text" placeholder="Enter first name" name="firstName">
      </div>
      <div class="field">
        <label for="lastname" class="label">Last Name </label>
        <input bind:value={lastName} class="input" id="lastname" type="text" placeholder="Enter last name" name="lastName">
      </div>
    </div>
  </div>
  <div class="field">
    <label for="email" class="label">Email</label>
    <input bind:value={email} class="input" id="email" type="text" placeholder="Enter email" name="email">
  </div>
  <div class="field">
    <label for="password" class="label">Password</label>
    <input bind:value={password} class="input" id="password"type="password" placeholder="Enter Password" name="password">
  </div>
  <div class="field is-grouped">
    <button class="button is-link">Sign Up</button>
  </div>
</form>
{#if errorMessage}
  <div class="section">
    {errorMessage}
  </div>
{/if}