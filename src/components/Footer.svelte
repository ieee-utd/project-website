<script>
  import { fly } from "svelte/transition";
  import {
    mdiFacebook,
    mdiDiscord,
    mdiTwitter,
    mdiInstagram,
    mdiLinkedin,
  } from "@mdi/js";
  import MdiIcon from "./MdiIcon.svelte";
</script>

<style>
  footer {
    width: 100%;
    min-height: 50vh;
    background: white;
  }
  .sponsor-logo-container {
    padding: 1rem;
  }
  .title {
    color: #222;
    font-size: 1.2rem;
    /* text-transform: capitalize; */
    font-weight: 700;
    text-align: center;
  }
  .logo {
    display: block;
    height: 200px;
    margin: 0 auto;
  }

  .socials-container {
    margin-top: 1rem;
    font-weight: 500;
    color: #222;
    text-transform: capitalize;
    text-align: center;
    padding-bottom: 2rem;
  }

  .copyright {
    margin-top: 1rem;
  }
  @media screen and (min-width: 776px) {
    .logo {
      display: inline-block;
    }
    .sponsor-logo-container {
      text-align: center;
    }
  }
</style>

<footer class="footer">
  <div class="sponsor-logo-container">
    <p class="title center">Thank you to the IEEE UTD sponsors</p>
    <div class="container-wrapper">
      <img src="../ui/img/texas-instrument.jpg" alt="" class="logo" />
      <img src="../ui/img/murata.png" alt="" class="logo" />
    </div>
  </div>
  <div class="socials-container">
    <a href="https://www.facebook.com/" target="_blank"><MdiIcon
        icon={mdiFacebook}
        class="icon" /></a>
    <a href="https://discord.com/" target="_blank"><MdiIcon
        icon={mdiDiscord}
        class="icon" /></a>
    <a href="https://twitter.com/" target="_blank"><MdiIcon
        icon={mdiTwitter}
        class="icon" /></a>
    <a href="https://www.instagram.com/" target="_blank"><MdiIcon
        icon={mdiInstagram}
        class="icon" /></a>
    <a href="https://www.linkedin.com/" target="_blank"><MdiIcon
        icon={mdiLinkedin}
        class="icon" /></a>
    <p class="copyright">&copy; 2021 IEEE UTD. All rights reserved</p>
  </div>
</footer>
