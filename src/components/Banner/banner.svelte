<script>
  import Navbar from "../Navbar/navbar.svelte";
  import { quintOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  export let picDir = "";
  export let title = "";
  export let subtitle = "";
</script>

<style>
  .title {
    color: var(--color-white);
    letter-spacing: 5px;
    font-size: 3rem;
    font-weight: 700;
    font-family: var(--font-head);
    position: absolute;
    z-index: 3;
    bottom: 0;
    text-transform: uppercase;
  }
  .subtitle {
    color: var(--color-white);
  }
  .banner-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .banner-wrapper {
    background: transparent;
    z-index: 3;
    position: absolute;
    top: 0;
    padding: 2rem;
    height: 100%;
    width: 100%;
  }
  .img-container {
    height: 100%;
    position: relative;
  }
  .img-container::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.5)
    );
    z-index: 1;
  }
  .banner {
    width: 100%;
    height: 50vh;
    position: relative;
    background: transparent;
  }
  @media screen and (max-width: 776px) {
    .banner {
      height: 30vh;
    }
    .title {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 776px) {
    .banner-wrapper {
      padding: 2rem 4rem;
    }
  }
</style>

<header class="banner">
  <div class="img-container">
    <img src={picDir} alt="" class="banner-photo" />
  </div>
  <div class="banner-wrapper section">
    <Navbar />
    <h1 class="title">{title} <span class="subtitle">{subtitle}</span></h1>
  </div>
</header>
