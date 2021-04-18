<script>
  import { Router } from "svelte-router-spa";
  import { routes } from "./routes";
  import Footer from "./components/Footer.svelte";
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Karla&family=Rubik:wght@600&display=swap");
  :root {
    --color-primary: #c75b12;
    --color-primary-blue: #0072a6;
    --color-primary-blue-lighter: #007bb3;
    --color-orange-complement: #e88f0c;
    --color-background: #212121;
    --color-secondary: #424242;
    --color-secondary-active: #616161;
    --color-accent: #f2be32;
    --color-paper: #eeeeee;
    --color-white: #fff;
    --font-head: "Rubik";
    --font-main: "Roboto", sans-serif;
    --font-mono: "Roboto Mono", monospace;
    --transition: all 0.5s ease-in-out;
    --spacing: 0.5;
    --line-height: 1.2;
    --radius: 0.5rem;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: var(--color-paper);
  }
</style>

<div>
  <Router {routes} />
  <Footer />
</div>
