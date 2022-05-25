<script>
  import architectureandcity from "/src/assets/architecture-and-city.png";
  import WelcomeNavigator from "../components/WelcomeNavigator.svelte";
  import TitleBar from "../components/TitleBar.svelte";
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
  <div class="column has-text-centered">
    <img width="300" src="{architectureandcity}" alt="architecture-and-city">
  </div>
  <div class="column">
    <h1 class="title">Discover new places</h1>
    <p>Find your own place here with us!</p>
  </div>
</div>