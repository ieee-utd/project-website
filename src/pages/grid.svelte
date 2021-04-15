<script>
	export let grid = [4, 4];
	
	$: col = `repeat(${grid[1]}, 1fr)`;
	$: row = `repeat(${grid[0]}, 1fr)`;
	$: is_active = Array(grid[0]).fill(0).map(_ => Array(grid[1]).fill(false));
	
	let start = [];
	let end = [];
	let hover_end = []
	let clicked = false;
	
	let list = ["ECS Major", "SO @ 1/5th", "JR @ 1/4th", "SR @ 1/3rd"]

	let requirements = ["BMEN", "3.881", "3.801", "3.529",
	                    "CE", "3.69", "3.442", "3.442",
						"CS", "3.845", "3.738", "3.553",
						"EE", "3.75", "3.584", "3.484",
						"MECH", "3.704", "3.484", "3.375",
						"SE", "3.651", "3.625", "3.413"]
	let count = -1;

	function updateCount(){
		count++;
		return count;
	}
</script>



<div class="container" style="grid-template-rows: {row}; grid-template-columns: {col};">
	
	{#each {length: 1} as _, k (k)}
	{#each {length: 4} as _, l (l)}
	<div class=grid style="background: {k.fixed};">
		  <!-- {#each titleList as title}
			  <li> {title.name} </li>
		  {/each} -->
		  <divTitle>
			  <strong> {list[l]} </strong>
		  </divTitle>
		  
		  
  </div>
	  {/each}
  {/each}
	{#each {length: grid[0]} as _, i (i)}
	  {#each {length: grid[1]} as _, j (j)}
	  <div class=grid  style="background: {i.fixed};">
			<p>{requirements[updateCount()]} </p>
	</div>
		{/each}
	{/each}

</div>

<style>
	.container {
		display: grid;
		border: 0.01px solid #999;
		border-radius: 2px;
		width: 1000px;
		height: 240px;
		grid-row-gap: 1px;
		border-bottom: 0.1px solid #999;
		
	} 
	/* .container-title {
		display: grid;
		border-top: 0.1px solid #999;
		border-right: 0.1px solid #999;
		border-left: 0.1px solid #999;
		border-radius: 2px;
		width: 1000px;
		height: 50px;
		grid-row-gap: 1px;
		background: #fff;
	}  */

	.container div {
		padding: 0 10px;
		background: #fff;
	}	


	divTitle {
	   height: 50px;
       white-space: normal;
       word-break: break-word;
       display: flex;
       align-items: center;
	   color: rgb(38, 156, 195);
	}
</style>