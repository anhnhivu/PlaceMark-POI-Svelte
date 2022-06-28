<script>
  import home from "/src/assets/home.png"
  export let title = "";
  export let subTitle = "";
  import { user } from "../stores.js";
</script>

<div class="box has-text-centered columns m-2 title-bar">
  <a href="/#/" class="column is-one-quarter">
    <img src="{home}" width="80" alt="img"/>
  </a>
  <div class="column is-half">
    <div class="title is-3"> {title} </div>
    <div class="subtitle is-6"> {subTitle} </div>
  </div>
  <div class="column">
    
    {#if $user.email}
      {#if $user.isAdmin}
        <i class="fas fa-user-circle fa-3x" style="color:rgb(255, 86, 74)"></i>
        <div class="is-size-7 admin-text">Admin</div>
        <div class="is-size-7">{$user.email} </div>
      {:else}
        <i class="fas fa-user-circle fa-3x" style="color:rgb(133, 196, 221)"></i>
        <div class="is-size-7">{$user.email} </div>
      {/if}
    {:else}
      <i class="fas fa-map fa-3x" style="color:rgb(133, 196, 221)"></i>
      <div class="is-size-7">Placemark-Svelte 1.0</div>
    {/if}
  </div>

</div>

<style>
.title-bar {
  align-items: center;
}
.admin-text {
  font-weight: bold;
}
</style>