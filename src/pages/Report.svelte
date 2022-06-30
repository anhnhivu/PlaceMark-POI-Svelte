<script>
  import TitleBar from "../components/TitleBar.svelte";
  import Footer from "../components/Footer.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
  import ImageGallery from "../components/ImageGallery.svelte";
  import ChartPoint from "../components/ChartPoint.svelte";
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar title={"Placemark Inc."} subTitle={"Analytics and Gallery"}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div>

<div class="box has-text-centered">
  <h1 class="title is-4 title-report">Charts</h1>
  <h2 class=" is-4 subtitle-report">Analytics of saved places.</h2>
  <ChartPoint/>
</div>


<div class="box has-text-centered">
  <h1 class="title is-4 title-report">Image Gallery</h1>
  <h2 class=" is-4 subtitle-report">Photos of all saved places</h2>
  <ImageGallery/>
</div>

<Footer/>

<style>
  .title-report {
    padding-top: 20px;
    margin-bottom: 10px;
  }
  .subtitle-report {
    margin-top: 0px;
    margin-bottom: 10px;
  }
</style>