<script>
  import Navbar from "../Navbar/navbar.svelte";
  import { quintOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  export let picDir = "";
  export let title = "";
</script>

<style>
  .banner-title {
    color: var(--color-white);
    letter-spacing: 5px;
    font-weight: 700;
    position: absolute;
    z-index: 3;
    bottom: 15px;
    text-transform: uppercase;
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
    height: 100%;
    width: 100%;
    padding-left:2rem;
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
    height: 320px;
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
  }
</style>

<header class="banner">
  <div class="img-container">
    <img src={picDir} alt="" class="banner-photo" />
  </div>
  <div class="banner-wrapper">
    <Navbar />
    <h2 class="banner-title">{title}</h2>
  </div>
</header>
