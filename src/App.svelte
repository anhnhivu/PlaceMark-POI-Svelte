<script>
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Signup from "./pages/Signup.svelte"
  import Discover from "./pages/Discover.svelte";
  import Addnew from "./pages/Addnew.svelte";
  import Report from "./pages/Report.svelte";
  import Charts from "./pages/Charts.svelte";
  import UserList from "./pages/UserList.svelte";
  import Router from "svelte-spa-router";
  import { PlacemarkService } from "./services/placemark-service.js"
  import { setContext } from "svelte";

  setContext("PlacemarkService", new PlacemarkService("http://localhost:4000"));

  let routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/main": Main,
    "/addnew": Addnew,
    "/report": Report,
    "/discover": Discover,
    "/charts": Charts,
    "/users": UserList,
    "/logout": Main
  }
</script>

<div class="container">
  <Router {routes}/>
</div>