<script>
  import { routeIsActive } from "svelte-router-spa";
  import {scale} from "svelte/transition"
  import { quadInOut, quintInOut } from "svelte/easing";
  document.body.style.overflow = "scroll"
  let list = ["#technical committee","#the forge","#events committee","#robotics","#ieee wie"]
    let y;
  function handleClick(z) 
  {
    location.href  =  "/programs" +  z;
  }
  
</script>
<svelte:window bind:scrollY={y}/>

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
  color: var(--color-paper-grey);
  transition: 1s ease-in linear;
  padding-right: 1rem;
}
.nav-link:hover {
  color: var(--color-white);
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background:transparent;
  left:-30%;
  min-width: 180px;
  box-shadow: 0px 8px 16px 0px rgba(247, 247, 247, 0.2);
  z-index: 5;
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
}
.drop-down-link{
  font-size:0.85rem;
  text-transform: uppercase;
  font-weight: 600 ;
  color: var(--color-paper-grey);
  transition: 1s ease-in linear;
}
.drop-down-link:hover {
  color: var(--color-white);
}

.dropdown:hover .dropdown-content {display: block;}

</style>

<div class="nav-center">
  <ul id="menu">
    <li>
      <div  class="nav-logo">
        <img src="../ui/img/IEEE-logo.svg" class="logo" alt="logo" /></div>
    </li>
    <li>
      <a href="/" class="nav-link" class:active={routeIsActive('/')}>Home</a>
    </li>
    <li>
      <a
        href="/aboutus"
        class="nav-link"
        class:active={routeIsActive('/aboutus')}>About</a>
    </li>
    <li>
      <a
        href="/ourTeam"
        class="nav-link"
        class:active={routeIsActive('/ourTeam')}>Our Team</a>
    </li>
    <li>
      <a
        href="/events"
        class="nav-link"
        class:active={routeIsActive('/events')}>Events</a>
    </li>
    <li>
      <a
        href="/tutoring"
        class="nav-link"
        class:active={routeIsActive('/tutoring')}>Tutoring</a>
    </li>
    <div class = "dropdown">
      <li><a href= "/programs" class="nav-link" class:active={routeIsActive('/programs')}>Programs</a></li>
      <div class="dropdown-content">
          {#each list as item}
          <div>
            <button on:click={() => handleClick(item.replace(/\s+/g, ''))}> <strong class = "drop-down-link">{item.slice(1)}</strong></button>
          </div>

          {/each}
      </div>
  </div>
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
