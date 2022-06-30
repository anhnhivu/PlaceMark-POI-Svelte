<script>
  import cover from "/src/assets/cover.jpeg";
  import WelcomeNavigator from "../components/WelcomeNavigator.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import Footer from "../components/Footer.svelte";
  import { getContext } from "svelte";

  const placemarkService = getContext("PlacemarkService");
  placemarkService.logout();
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar title={"Placemark Inc."} subTitle={"Sign up or Log in"}/>
  </div>
  <div class="column">
    <WelcomeNavigator/>
  </div>
</div>

<div class="columns is-vcentered content">
  <div class="column has-text-centered is-two-thirds">
    <img src="{cover}" alt="cover-img" class="cover-img">
  </div>
  <div class="column cover-text">
    <h1 class="title is-1"> Discover the city</h1>
    <p> For incoming international exchange students</p>
  </div>
</div>

<Footer/>

<style>
  .cover-img {
    padding: 7px;
    border-radius: 10px;
  }
  .cover-text {
    align-items: stretch;
    flex-grow: 1;
    height: 100%;
  }
</style>