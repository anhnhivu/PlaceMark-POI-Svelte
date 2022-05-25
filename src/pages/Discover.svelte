<script>
  import flat from "/src/assets/flat.png";
  import AddnewForm from "../components/AddnewForm.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar title={"Placemark Inc."} subTitle={"Add new places!"}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div>

<div class="columns">
  <div class="column has-text-centered">
    <img width="300" src={flat} alt={"flat"}/>
  </div>
  <div class="column box has-text-centered">
    <h1 class="title is-4">Add a new place</h1>
      <AddnewForm/>
  </div>
</div>