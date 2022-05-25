<script>
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Signup from "./pages/Signup.svelte"
  import Discover from "./pages/Discover.svelte";
  import Report from "./pages/Report.svelte";
  import Router from "svelte-spa-router";

  let routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/main": Main,
    "/discover": Discover,
    "/report": Report,
    "/logout": Main
  }
</script>

<div class="container">
  <Router {routes}/>
</div>