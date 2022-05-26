<script>
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Signup from "./pages/Signup.svelte"
  import Discover from "./pages/Discover.svelte";
  import Report from "./pages/Report.svelte";
  import Router from "svelte-spa-router";
  import { PlacemarkService } from "./services/placemark-service.js"
  import { setContext } from "svelte";


  setContext("PlacemarkService", new PlacemarkService("http://localhost:4000"));

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