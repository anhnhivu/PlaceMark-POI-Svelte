<script>
  import {getContext, onMount} from "svelte";

  const placemarkService = getContext("PlacemarkService");

  let name = "";
  let zipCode = "";
  let city = "";

  let categoryList = [];
  let selectedCategory = "";

  let message = "";

  onMount(async () => {
    categoryList = await placemarkService.getCategories()
  });

  async function addPoint() {
    if (selectedCategory && name && zipCode) {
      const category = categoryList.find(category => category.name == selectedCategory);
      const point = {
        name: name,
        zipCode: zipCode,
        category: category._id,
      };
      const success = await placemarkService.addPoint(point);
      if (!success) {
        message = "Cannot add this place - some error occurred";
        return;
      }
      message = `Thanks! You pinned ${name} on the map, as a ${category.name}`;
    } else {
      message = "Please fill in all the required fields.";
    }
  }
</script>

<form on:submit|preventDefault={addPoint}>
  <div class="field">
    <label class="label" for="name">Enter Name</label>
    <input bind:value={name} class="input" id="name" name="name" type="text">
  </div>
  <div class="field">
    <label class="label" for="name">Enter Zip Code</label>
    <input bind:value={zipCode} class="input" id="zipCode" name="zipCode" type="text">
  </div>
  <div class="field">
    <label class="label" for="name">Enter City</label>
    <input bind:value={city} class="input" id="city" name="city" type="text">
  </div>
  <div class="field">
    <div class="select">
      <select bind:value={selectedCategory}>
        {#each categoryList as category}
          <option>{category.name}</option>
        {/each}
      </select>
    </div>
  </div>
  <div class="field">
    <div class="control">
      <button class="button is-link is-light">Add</button>
    </div>
  </div>
  <div class="box">
    {message}
  </div>
</form>