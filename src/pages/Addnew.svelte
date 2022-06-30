<script>
  import AddnewForm from "../components/AddnewForm.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
  import PointsMap from "../components/PointsMap.svelte";
  import Footer from "../components/Footer.svelte";

  let pointsMap = null;
  function newPointAdded(event) {
    pointsMap.addnewMarker(event.detail.point);
  }
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
    <PointsMap bind:this={pointsMap}/>
  </div>
  <div class="column box has-text-centered">
    <h1 class="title is-4">Add a new place</h1>
      <AddnewForm on:message={newPointAdded}/>
  </div>
</div>

<Footer/>