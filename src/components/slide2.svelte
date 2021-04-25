<script>
	import { hslide } from '../util/hslide.js';
    let image1 = "https://github.com/ieee-utd/project-website/blob/master/public/ui/img/index1.jpg?raw=true";
    let image2 = "https://github.com/ieee-utd/project-website/blob/master/public/ui/img/index2.JPG?raw=true";
    let image3 = "https://github.com/ieee-utd/project-website/blob/master/public/ui/img/index3.jpg?raw=true";
    let image4 = "https://github.com/ieee-utd/project-website/blob/master/public/ui/img/index4.JPG?raw=true";

  let slides = [
    {  bg: image1 },
    {  bg: image2 },
    { bg: image3 },
    { bg: image4 },

]
	
	let cur = 0;
	
	function changeSlide(slide) {
		cur = slide;
	}
	
	const clamp = (number, min, max) => Math.min(Math.max(number, min), max);
	const transition_args = {
		duration: 200,
	}
	
	function prev(e) {
		cur = clamp( --cur, 0, slides.length-1 )
	}
	
	function next(e) {
		cur = clamp( ++cur, 0, slides.length-1 )
	}
	
  const ARROW_LEFT = 37;
	const ARROW_RIGHT = 39;
	function handleShortcut(e) {
        if (e.keyCode === ARROW_LEFT ) {
						prev();
        }
		    if (e.keyCode === ARROW_RIGHT ) {
            next();
        }
    }




  const secondsToMinutes = (seconds) => Math.floor(seconds / 60);
  const padWithZeroes = (number) => number.toString().padStart(2, '0');

  // length of a pomodoro in seconds
  const POMODORO_S = 5;

  // time left in the current pomodoro
  let pomodoroTime = POMODORO_S;

  let count = 0;

  window.onload = function startSliding() { 
  setInterval(() => {

    if (pomodoroTime >0)
    {
        pomodoroTime -= 1;
    }
    else
    {
        if (count < slides.length)
        {
            count++;
            next();
            pomodoroTime = 5;
        }
        else
        {
            count = 0;
            changeSlide(0);
            pomodoroTime = 5;
        }
        
    }
  },1000);
}
</script>

<svelte:window on:keyup={handleShortcut} />

<div class="extra-outer-wrapper">
	<div class="outer-wrapper">
		<div class="inner-wrapper">
			{#each slides as slide, id}
				{#if id === cur}
				<div
						 style="background-image: url({slide.bg})"
						 class="slide"
						 in:hslide={transition_args}
						 out:hslide={transition_args}
				>	
				</div>
				{/if}
			{/each}
			<div class="controls">
				<button on:click="{()=>prev()}">
					&lt;
				</button>
				<button on:click="{()=>next()}">
					&gt;
				</button>
			</div>
		</div>
	</div>
</div>


<style>
	button {
		background: transparent;
		color: #FFF;
		border-color: transparent;
		width: 3.2rem;
		height: 3.2rem;
	}
	
	button:hover,
	button:focus{
		background: rgba(0,0,0,0.5);
	}
	.extra-outer-wrapper {
		width: 80%;
		margin: 0 auto;
	}
	.outer-wrapper {
		width: 100%;
		padding-bottom: 56.25%;
		position: relative;
        padding-left: 50%;

	}
	
	.inner-wrapper {
		height: 100%;
		width: 100%;
		display: flex;
		position: absolute;
	}
	.controls button:first-child {
		position: absolute;
		left: 0;
		top: calc(50% - 1.2rem);
	}
	
	.controls button:last-child {
		position: absolute;
        right: 0%;
		top: calc(50% - 1.2rem);
	}
	
	.slide {
		flex: 1 0 auto;
		width: 100%;
		height: 100%;
		background-image: url('../ui/img/about-us1.JPG');  
        background-position:center ;
        background-size:cover ;
        background-repeat: no-repeat ;
	    align-items: center;
		justify-content: center;
		display: flex;
		text-align: center;
		font-weight: bold;
		font-size: 2rem;
		color: white;
	}
	
	.controls {
		text-align: center;
		width: 100%;
		display: block;
	}
</style> 