<script>
    import Navbar from '../Navbar/navbar.svelte';
    import { quintOut } from 'svelte/easing';
    import {fly} from "svelte/transition"
    export let picDir = '';
    export let title = '';
    export let subtitle = '';
</script>
<!-- Note we can't use attribute directly to the CSS file  -->
<!-- I made variable from inline css so we can access it in the css file -->
<header class = "banner" style = "--image: url({picDir})" >
    <Navbar />
    <h1 class = "title" 
    >{title} <span class = "subtitle">{subtitle}</span></h1>

</header>
<style>
    .title {
    color: #ffff;
    letter-spacing: 5px;
    font-size:3.5rem;
    font-weight: bold;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,-50%);
    text-transform: uppercase;

  }
  .subtitle{
    color:#E88F0C;
  }

  .banner{
    background-image: linear-gradient(to bottom,rgba(0, 0, 0, 0.6) , rgba(0,0,0,0.3)), var(--image);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 50vh;
    position: relative;
    padding: 1rem 3rem ;
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