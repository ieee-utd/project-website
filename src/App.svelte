<script>
  import { Router } from "svelte-router-spa";
  import { routes } from "./routes";
  import Navbar from "./elements/navbar.svelte";
</script>
<Navbar/>
<Router {routes} />
