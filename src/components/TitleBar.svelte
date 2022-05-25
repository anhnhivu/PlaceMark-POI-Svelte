<script>
  import empirestatebuilding from "/src/assets/empire-state-building.png"
  export let title = "";
  export let subTitle = "";
</script>

<div class="box has-text-centered columns m-2">
  <div class="column">
    <img src="{empirestatebuilding}" width="60" alt="img"/>
  </div>
  <div class="column">
    <div class="title is-5"> {title} </div>
    <div class="subtitle is-5"> {subTitle} </div>
  </div>
  <div class="column">
    <i class="fas fa-map fa-3x" style="color:rgb(133, 196, 221)"></i>
        <div class="is-size-7">Placemark-Hapi 0.1</div>
  </div>
</div>