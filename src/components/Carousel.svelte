<script>
 import Carousel from "@beyonk/svelte-carousel";
 export let images = [];
 import {ChevronLeftIcon, ChevronRightIcon} from "svelte-feather-icons";
</script>
<Carousel perPage=1 autoplay=3000 duration=2000 draggable=false>
 <!-- <span class="control" slot ="left-control"><ChevronLeftIcon/></span> -->
  {#each images as image}
    <div class="slide-content">
     <img src={image} alt ="place-holder"/>
   </div>
  {/each}
  <!-- <span class="control" slot ="right-control"><ChevronRightIcon/></span> -->
</Carousel>