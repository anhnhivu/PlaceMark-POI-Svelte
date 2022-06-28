<script>
  import { user } from "../stores.js";
</script>


<div class="box has-text-centered columns">
  {#if $user.isAdmin}
    <a href="/#/discover" class="column is-2">
      <i class="fas fa-globe fa-3x" style="color:rgb(96, 184, 149)"></i>
    </a>
    <a href="/#/addnew" class="column is-2">
      <i class="fas fa-map-pin fa-3x" style="color:rgb(232, 203, 72)"></i>
    </a>
    <a href="/#/report" class="column is-2">
      <i class="fas fa-th-list fa-3x" style="color:rgb(28, 153, 199)"></i>
    </a>
    <a href="/#/users" class="column is-2">
      <i class="fas fa-users fa-3x" style="color:rgb(237, 135, 88)"></i>
    </a>
    <a href="/#/logout" class="column">
      <i class="fas fa-sign-out-alt fa-3x" style="color:rgb(210, 57, 57)"></i>
    </a>
  {:else}
    <a href="/#/discover" class="column is-3">
      <i class="fas fa-globe fa-3x" style="color:rgb(96, 184, 149)"></i>
    </a>
    <a href="/#/addnew" class="column is-3">
      <i class="fas fa-map-pin fa-3x" style="color:rgb(232, 203, 72)"></i>
    </a>
    <a href="/#/report" class="column is-3">
      <i class="fas fa-th-list fa-3x" style="color:rgb(28, 153, 199)"></i>
    </a>
    <a href="/#/logout" class="column">
      <i class="fas fa-sign-out-alt fa-3x" style="color:rgb(210, 57, 57)"></i>
    </a>
  {/if}
</div>