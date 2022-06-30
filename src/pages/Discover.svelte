<script>
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
  import PointsMap from "../components/PointsMap.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"Map of all places"} title={"Placemark Inc."}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div>

<PointsMap/>

<Footer/>