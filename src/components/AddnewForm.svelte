<script>
  import { createEventDispatcher, getContext, onMount } from "svelte";
  import Coordinates from "./Coordinates.svelte";

  const placemarkService = getContext("PlacemarkService");
  const dispatch = createEventDispatcher();

  let name = "";
  let zipCode = "";
  let city = "Regensburg";
  let street = "";
  let houseNumber = "";
  let img = "";
  let description = "";

  let lat = 49.005;
  let lng = 12.071;

  let categoryList = [];
  let selectedCategory = "";

  let message = "";

  onMount(async () => {
    categoryList = await placemarkService.getCategories()
  });

  async function addPoint() {
    if (selectedCategory && name && zipCode && street && houseNumber) {
      const category = categoryList.find(category => category.name == selectedCategory);
      const point = {
        name: name,
        zipCode: zipCode,
        category: category._id,
        lat: lat,
        lng: lng,
        city: city,
        street: street,
        houseNumber: houseNumber,
        img: img,
        description: description,
      };
      const success = await placemarkService.addPoint(point);
      if (!success) {
        message = "Cannot add this place - some error occurred";
        return;
      }
      message = `Thanks! You pinned ${name} on the map, as a ${category.name}`;
      dispatch("message", {
        point: point,
      });
    } else {
      message = "Please fill in all the required fields.";
    }
  }
</script>

<form on:submit|preventDefault={addPoint}>
  <div class="field columns">
    <div class="column is-two-thirds">
      <label class="label" for="name">Name of place</label>
      <input bind:value={name} class="input" id="name" name="name" type="text">
    </div>
    <div class="column">
      <div class="field selectCat">
        <label class="label" for="name">Choose Category</label>
        <div class="select selectCat">
          <select bind:value={selectedCategory}>
            {#each categoryList as category}
              <option>{category.name}</option>
            {/each}
          </select>
        </div>
      </div>
    </div>
  </div>
  <div class="field columns">
    <div class="column is-two-thirds">
      <label class="label" for="city">Street</label>
      <input bind:value={street} class="input" id="street" name="street" type="text">
    </div>
    <div class="column">
      <label class="label" for="city">House Number</label>
      <input bind:value={houseNumber} class="input" id="houseNumber" name="houseNumber" type="text">
    </div>
  </div>
  <div class="field columns">
    <div class="column is-one-third">
      <label class="label" for="zipCode">Zip Code</label>
      <input bind:value={zipCode} class="input" id="zipCode" name="zipCode" type="text">
    </div>
    <div class="column">
      <label class="label" for="city">City</label>
      <input bind:value={city} class="input" id="city" name="city" type="text">
    </div>
  </div>
  <div class="field columns">
    <div class="column is-one-third">
      <label class="label" for="city">Image Source</label>
      <input bind:value={img} class="input" id="img" name="img" type="text">
    </div>
    <div class="column">
      <label class="label" for="city">Description</label>
      <input bind:value={description} class="input" id="description" name="description" type="text">
    </div>
  </div>
  
  <Coordinates bind:lat={lat} bind:lng={lng}/>
  <div class="field">
    <div class="control">
      <button class="button is-link is-light m-2">Add</button>
    </div>
  </div>
  <div>
    {message}
  </div>
</form>
