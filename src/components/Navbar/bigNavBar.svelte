<script>
  import { routeIsActive } from "svelte-router-spa";
</script>

<style>
  .active {
    color: var(--color-white) !important;
  }
  .nav-center {
    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
  }
  .logo {
    display: inline-block;
    width: 48px;
    height: 48px;
  }
  #menu li {
    display: inline-block;
    padding: 6px;
  }
  .nav-link {
    color: grey;
    transition: 1s ease-in linear;
  }
  .nav-link:hover {
    color: var(--color-white);
  }
</style>

<div class="nav-center">
  <ul id="menu">
    <li>
      <a href="/" class="nav-logo">
        <img src="../ui/img/IEEE-logo.svg" class="logo" alt="logo" /></a>
    </li>
    <li>
      <a href="/" class="nav-link" class:active={routeIsActive('/')}>Home</a>
    </li>
    <li>
      <a
        href="/aboutus"
        class="nav-link"
        class:active={routeIsActive('/aboutus')}>About us</a>
    </li>
    <li>
      <a
        href="/ourTeam"
        class="nav-link"
        class:active={routeIsActive('/ourTeam')}>Our Team</a>
    </li>
    <li>
      <a
        href="/programs"
        class="nav-link"
        class:active={routeIsActive('/programs')}>Programs</a>
    </li>
    <li>
      <a
        href="/tutoring"
        class="nav-link"
        class:active={routeIsActive('/tutoring')}>Tutoring</a>
    </li>
    <li>
      <a
        href="/hkn"
        class="nav-link"
        class:active={routeIsActive('/hkn')}>HKN</a>
    </li>
    <li>
      <a
        href="/contact"
        class="nav-link"
        class:active={routeIsActive('/contact')}>Contact</a>
    </li>
  </ul>
</div>
