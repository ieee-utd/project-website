<script>
    import Navbar from '../Navbar/navbar.svelte';
    import { quintOut } from 'svelte/easing';
    import {fly} from "svelte/transition";
    export let picDir = '';
    export let title = '';
    export let subtitle = '';
</script>
<header class = "banner"  >
  <Navbar />
    <h1 class = "title" >{title} <span class = "subtitle">{subtitle}</span></h1>
    <div class="img-container">
        <img src={picDir} alt="" class = "banner-photo">
    </div>
</header>
<style>
    .title {
    color:white;
    letter-spacing: 5px;
    font-size:3.5rem;
    font-weight: bold;
    position: absolute;
    z-index: 3;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,-50%);
    text-transform: uppercase;

  }
  .subtitle{
    color:var(--color-white);
  }
  .banner-photo{
    width:100%;
    height:100%;
    object-fit: cover;
    
  }
  .img-container{
    height:100%;
    position: relative;
  }
  .img-container::after{
    content:'';
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: linear-gradient(to bottom,rgba(0, 0, 0, 0.6) , rgba(0,0,0,0.3));
    z-index: 1;
  }
  .banner{
    height: 50vh;
    position: relative;
    background:transparent;
  }
  @media screen and (max-width:687px){
    .banner{
      height:30vh;
    }
    .title{
      transform: translate(0,0);
      left: 3rem;
      bottom: 2rem;
      font-size: 2rem;
    }
  }
</style>