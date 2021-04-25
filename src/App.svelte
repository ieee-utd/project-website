<script>
  import { Router } from "svelte-router-spa";
  import { routes } from "./routes";
  import Footer from "./components/Footer.svelte";
  import NavigationBtn from "./components/navigationBtn.svelte"
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Rubik:wght@700&display=swap');
  :root {
    --color-primary: #c75b12;
    --color-primary-blue: #0072a6;
    --color-primary-blue-lighter: #007bb3;
    --color-orange-complement: #e88f0c;
    --color-background: #212121;
    --color-secondary: #424242;
    --color-secondary-active: #616161;
    --color-paper-grey: #757575;
    --color-paper-grey-400: #b1b1b1;
    --color-accent: #f2be32;
    --color-paper: #eeeeee;
    --color-white: #fff;
    --font-head: "Rubik";
    --font-main: 'Roboto', sans-serif;
    --font-mono: "Roboto Mono", monospace;
    --transition: all 0.5s ease-in-out;
    --spacing: 0.5;
    --line-height: 2.1;
    --radius: 0.5rem;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :global(body){
     background: var(--color-paper);
  }
  :global(main){
    padding:0;
    margin:0;
  }
  :global(.section){
  max-width:1400px;
  margin:0 auto;
  padding: 3rem 2rem;
  }
  :global(h1,h2,h3,h4,h5){
    font-family: var(--font-head);
    font-weight: 700;
  }
  :global(h1){
    font-size:2.4rem;
  }
  :global(h2){
    font-size:2rem;
  }
  :global(h3){
    font-size:1.5rem;
  }
    :global(h4){
    font-size:1.2rem;
  }
    :global(h5){
    font-size:.5rem;
  }
  :global(a){
    text-decoration: none;
  }
  :global(p){
    font-family: var(--font-main);
    line-height: var(--line-height);
    font-size:1rem;
  }
  :global(.wrapper-color-white){
    width:100%;
  }
  :global(.title){
    text-transform: uppercase;
    display: inline-block;
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 0.2rem;
    font-family: "Rubik", sans-serif;
    color: #060247;
    margin-bottom: 0.5rem;
    background: linear-gradient(currentColor 0 0) 0 100% / var(--d, 0) 3px
      no-repeat;
    transition: 0.5s;
  }
  :global(.title:hover) {
    --d: 90%;
  }

</style>

<div>
  <Router {routes} />
  <NavigationBtn />
  <Footer />
</div>
