<script>
  import { routeIsActive } from "svelte-router-spa";
  function handleToggle() {
    showNav = true;
    document.body.style.overflow = "hidden";
  }
  let showNav = false;
$: document.body.style.overflow = showNav? "hidden":"scroll";
</script> 
<style>
  span {
    padding-left: 0.7rem;
    color: rgb(154, 154, 154);
    font-weight: 400;
  }
    .nav-toggle-btn {
    font-size: 1.2rem;
    color: #ffff;
  }
  .magical{
    position: absolute;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    background:rgba(0,0,0,0.5);
    opacity: 1;
    display:none;
  }
  .sidebar-container{
    background:var(--color-paper);
    top:0;
    left:0;
    width:300px;
    position: absolute;
    z-index: 4;
    height:100vh;
    padding: 10px;
    display:none;
    animation: sidebar 1s 1;
  }
  @keyframes sidebar {
    0%{
      transform:  translateX(-300px);
    }
    100%{
      transform:translateX(0);
    }
  }
  .show{
    display: block;
  }
  .active{
    color:var(--color-primary-blue)!important;
  }
  .nav-toggle-btn .icon {
    font-size: 1.5rem;
  }
  .logo-container{
  display: block;
  padding: 6px 0 8px 0;
  border-bottom: 1px solid var(--color-paper-grey-400);
  }
  .logo{
    margin: 0 auto 0.75rem auto;
    width:150px;
  }
  .menu{
    padding:1.2rem 0 0 0.7rem;
  }
  .nav-link{
    margin-bottom:1rem;
    display:block;
    color:var(--color-secondary);
    
  }
  .nav-link:hover{
    color:var(--color-primary-blue-lighter);
  }
  /* sidebar-icon */
  .sidebar-icon{
    display: inline-block;
    width:24px;
  }
  .test{
    display:inline-block;
    margin-left:1.2rem;
    font-size:1.3rem;
    text-transform: capitalize;
    font-weight: bold;
  }

</style>

<!-- nav toggle  -->

<div class="nav-toggle-container">
  <button class="nav-toggle-btn" on:click={handleToggle}>
    <i class="fas fa-bars icon" />
    <span class="subtitle">MENU</span>
  </button>
  <!-- sidebar container -->
  <div class="magical" class:show={showNav} on:click="{()=>{
    showNav = false;
  }}"></div>
  <div class="sidebar-container" class:show={showNav} 
  
  >
    <div class="sidebar" >
      <!-- header -->
      <!-- sidebar logo -->
      <a href = "/" class="logo-container" >
        <img src="../ui/img/ieeeutd_sidebar_logo.svg"  class = "logo"alt="">
      </a>
      <!-- link route -->
  <ul class="menu">
      <li>
      <a
      href="/"
      class="nav-link"
      class:active={routeIsActive('/')}> <i class="fas fa-home sidebar-icon "></i> <p class ="test">home</p></a>
    </li>
    <li>
      <a
      href="/ourteam"
      class="nav-link"
      class:active={routeIsActive('/ourteam')}><i class="fas fa-users sidebar-icon"></i> <p class ="test">our team</p></a>
    </li>
    <li>
      <a
      href="/aboutus"
      class="nav-link"
      class:active={routeIsActive('/aboutus')}> <i class="fas fa-book sidebar-icon"></i> <p class ="test">about us</p> </a>
    </li>
    <li>
      <a
      href="/programs"
      class="nav-link"
      class:active={routeIsActive('/programs')}> <i class="fas fa-hammer sidebar-icon"></i> <p class ="test">programs</p></a>
    </li>
    <li>
      <a
      href="/tutoring"
      class="nav-link"
      class:active={routeIsActive('/tutoring')}> <i class="fas fa-chalkboard-teacher sidebar-icon"></i> <p class ="test">tutoring</p></a>
    </li>
    <li>
      <a
      href="/hkn"
      class="nav-link"
      class:active={routeIsActive('/hkn')}> <i class="far fa-star sidebar-icon"></i> <p class ="test">HKN</p></a>
    </li>
    <li>
      <a
      href="/contact"
      class="nav-link"
      class:active={routeIsActive('/contact')}> <i class="far fa-envelope sidebar-icon"></i> <p class ="test">contact</p></a>
    </li>
  </ul>
    </div>
  </div>
</div>
