<script>
  import skyscraper from "/src/assets/skyscraper.png";
  import PlacemarkList from "../components/PlacemarkList.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar title={"Placemark Inc."} subTitle={"Recent places"}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div>

<div class="columns">
  <div class="column has-text-centered">
    <img alt="skyscraper" src={skyscraper} width="300"/>
  </div>
  <div class="column box has-text-centered">
    <h1 class="title is-4">Recently added places</h1>
    <PlacemarkList/>
  </div>
</div>