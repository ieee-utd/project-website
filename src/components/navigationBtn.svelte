<script>
import * as animateScroll from "svelte-scrollto";
import { mdiArrowUpBold } from '@mdi/js';
import MdiIcon from "./MdiIcon.svelte"
export let list = [];
 let y;
</script>
<svelte:window bind:scrollY={y}/>

<div class="dropdown" class:show-menu={y>250}>
  <button class="dropbtn"><MdiIcon icon={mdiArrowUpBold} class = "icon"></MdiIcon></button>
    <div class="dropdown-content">
    <a href = "#" on:click={() => animateScroll.scrollToBottom()}> Bottom </a> 
    {#each list as item}
      <a on:click={() => animateScroll.scrollTo({element:item})}> Scroll to {item.slice(1)} </a> 
    {/each}
    <a on:click={() => animateScroll.scrollToTop()}> Top </a>
  </div>
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
  background-color: var(--color-primary-blue);
   width: 50px;
  height: 50px;
  line-height: 50px;
  border:none;
  font-size: 18px;
  color: #fff;
  text-align: center;
  border-radius:50%;
  cursor: pointer;
  text-decoration: none;
  transition:var(--transition);
}
.dropdown-content {
  display: none;
  position: absolute;
  border-radius: var(--radius);
  bottom:2rem;
  right:2rem;
  background:var(--color-primary);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown-content a {
  color:var(--color-white);
  font-weight:400;
  padding:1rem;
  text-decoration: none;
  display: block;
  transition:var(--transition);
}
.dropdown-content a:hover {
  transform:translateX(5px);
  background:var(--color-orange-complement);
  }
.icon{
  color:red;
}
.dropdown:hover .dropdown-content {
  display: block;
  }
.dropdown:hover .dropbtn {background-color: var(--color-primary);}
.dropdown:hover .icon{
  transform:rotate(-50deg);
}
</style>