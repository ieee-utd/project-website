<script>
import * as animateScroll from "svelte-scrollto";
import { quintInOut, quintOut } from "svelte/easing";
import {fade} from "svelte/transition"

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
    transition: var(--transition);
    animation: dropdown 0.2s 1;
  }
  @keyframes dropdown{
    0%{
      transform: scale(0);
    }
    50%{
      transform: scale(0.5);
    }
    100%{
      transform:scale(1);
    }
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
}
.icon{
 width: 2.5rem;
 height:2.5rem;
 color:var(--color-white);
 transition: all 0.5s ease-in-out; 
}

</style>