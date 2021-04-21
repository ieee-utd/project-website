<script>
import * as animateScroll from "svelte-scrollto";

 let y;
</script>
<svelte:window bind:scrollY={y}/>

<div class="dropdown" class:show-menu={y>250}>
  <button class="dropbtn">
    <!-- svelte-ignore a11y-missing-attribute -->
    <a on:click={() => animateScroll.scrollToTop()}><i class="fas fa-arrow-up icon"></i></a>
  </button>
</div> 

<style>
   .dropdown{
    display:none;
    position:fixed;
    bottom:2rem;
    right:1rem;
  }
  .show-menu{
    display:inline-block;
  }
  .dropbtn {
  background-color: #222;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border:none;
  font-size: 18px;
  color: var(--color-white);
  text-align: center;
  border-radius:50%;
  cursor: pointer;
  text-decoration: none;
  transition:var(--transition);
}
.icon{
 width: 2.5rem;
 height:2.5rem;
 color:var(--color-white);
 transition: all 0.5s ease-in-out; 
}

</style>