<script>
  import {getContext, onMount} from 'svelte'

  const placemarkService = getContext("PlacemarkService");
  let pointList = [];

  onMount(async () => {
    pointList = await placemarkService.getPoints();
  });
</script>

<table class="table is-fullwidth">
  <thead>
    <th>Name</th>
    <th>Zip Code</th>
    <th>Category</th>
    <th>Added By</th>
  </thead>
  <tbody>
    {#each pointList as point}
      <tr>
        <td>
          {point.name}
        </td>
        <td>
          {point.zipCode}
        </td>
        <td>
          {point.category.name}
        </td>
        <td>
          
        </td>
      </tr>
    {/each}
  </tbody>
</table>