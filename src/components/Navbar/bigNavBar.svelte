<script>
  import { routeIsActive } from "svelte-router-spa";
  import {scale} from "svelte/transition"
import { quadInOut, quintInOut } from "svelte/easing";
  document.body.style.overflow = "scroll"
  let list = ["#Technical","#Forge","#Events","#Robotics","#IEEE WIE"]
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
  min-width: 115px;
  box-shadow: 0px 8px 16px 0px rgba(247, 247, 247, 0.2);
  z-index: 1;
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
}

.dropdown-content a:hover {color: var(--color-white);}
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
        class:active={routeIsActive('/aboutus')}>About us</a>
    </li>
    <li>
      <a
        href="/ourTeam"
        class="nav-link"
        class:active={routeIsActive('/ourTeam')}>Our Team</a>
    </li>
    <div class = "dropdown">
      <li><a href= "/programs" class="nav-link" class:active={routeIsActive('/programs')}>Programs</a></li>
      <div class="dropdown-content">
          {#each list as item}
          <div>
              <!-- svelte-ignore a11y-missing-attribute -->
              <button on:click={() => handleClick(item.replace(/\s+/g, ''))}> <strong class = "nav-link">{item.slice(1)}</strong></button> 
          </div>

          {/each}
      </div>
  </div>
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
