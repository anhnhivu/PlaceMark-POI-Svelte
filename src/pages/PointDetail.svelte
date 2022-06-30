<script>
    import TitleBar from "../components/TitleBar.svelte";
    import Footer from "../components/Footer.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import PointDescription from "../components/PointDescription.svelte";
    import PointMultiMap from "../components/PointMultiMap.svelte";

    export let params;
  </script>
  
  <div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar title={"Placemark Inc."} subTitle={"All places"}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>
  
  <div class="columns">
    <div class="column box is-half">
        <PointDescription pointId={params.id}/>
    </div>
    <div class="column">
        <PointMultiMap pointId={params.id}/>
    </div>
</div>
  
<Footer/>