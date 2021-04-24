<script>
 import Carousel from "@beyonk/svelte-carousel";
 export let images = [];
 import {ChevronLeftIcon, ChevronRightIcon} from "svelte-feather-icons";
</script>
<Carousel perPage=1 autoplay=6000 duration=3000 draggable=false>
 <!-- <span class="control" slot ="left-control"><ChevronLeftIcon/></span> -->
  {#each images as image}
    <div class="slide-content">
     <img src={image}/>
   </div>
  {/each}
  <!-- <span class="control" slot ="right-control"><ChevronRightIcon/></span> -->
</Carousel>