<script>
  import { Router } from "svelte-router-spa";
  import { routes } from "./routes";
  import Navbar from "./components/Navbar/navbar.svelte";
  let menu = 1;
</script>
<div>
  <Router {routes} />
</div>
