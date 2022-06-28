<script>
    import {getContext, onMount} from 'svelte'
  
    const placemarkService = getContext("PlacemarkService");
    let userList = [];
  
    onMount(async () => {
        userList = await placemarkService.getAllUsers();
    });
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
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="ui icon button">
                <i class="fas fa-trash"></i>
            </a>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>