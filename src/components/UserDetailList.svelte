<script>
    import {getContext, onMount} from 'svelte';
  
    const placemarkService = getContext("PlacemarkService");
    let userList = [];
  
    onMount(async () => {
      userList = await placemarkService.getAllUsers();
    });

    const deleteUser = async(id) => {
      var result = confirm("Are you sure you want to remove this account?");
      if (result) {
        await placemarkService.deleteOneUser(id);
        userList = await placemarkService.getAllUsers();
      }
    } 
  </script>
  
  <table class="table is-fullwidth">
    <thead>
      <th>Email</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th></th>
    </thead>
    <tbody>
      {#each userList as user}
        <tr>
          <td class="has-text-left">
            {user.email}
          </td>
          <td>
            {user.firstName}
          </td>
          <td>
            {user.lastName}
          </td>
          <td>
            {#if user.role === "admin"}
              <div></div>
            {:else}
              <button on:click={() => deleteUser(user._id)}>
                <i class="fas fa-trash"></i>
              </button>
            {/if}
            
          </td>
        </tr>
      {/each}
    </tbody>
  </table>