<script>
  export let grid = [4, 4];

  $: col = `repeat(${grid[1]}, 1fr)`;
  $: row = `50px , repeat(${grid[0] - 1}, 1fr)`;

  let list = ["ECS Major", "SO @ 1/5th", "JR @ 1/4th", "SR @ 1/3rd"];

  let requirements = [
    "BMEN",
    "3.881",
    "3.801",
    "3.529",
    "CE",
    "3.69",
    "3.442",
    "3.442",
    "CS",
    "3.845",
    "3.738",
    "3.553",
    "EE",
    "3.75",
    "3.584",
    "3.484",
    "MECH",
    "3.704",
    "3.484",
    "3.375",
    "SE",
    "3.651",
    "3.625",
    "3.413",
  ];
  let count = -1;

  function updateCount() {
    count++;
    return count;
  }
</script>

<style>
  .container {
    display: grid;
    border: 0.01px solid #999;
    border-radius: 2px;
    width: 100%;
    grid-row-gap: 1px;
    background: #fff;
				margin: 1rem 0;
				
				
  }
		.grid{
			height:33.5px;
			display: grid;
			align-content: center;
			border-bottom: 0.05px solid rgb(230, 228, 228);
			padding-left:25px;
		}
		.grid-header{
				height:50px !important;
		}

  /* CUSTOM TAG for div title */
  divTitle {
    height: 50px;
    white-space: normal;
    word-break: break-word;
    display: flex;
    align-items: center;
    color: rgb(38, 156, 195);
  }
	@media screen and (max-width:637px){
		.grid{
			min-width:169.5px;
		}
		.container{
			overflow-x: scroll;
		}
	}
</style>

<div
  class="container"
  style="grid-template-rows: {row}; grid-template-columns: {col};">
  {#each { length: 1 } as _, k (k)}
    {#each { length: 4 } as _, l (l)}
      <div class="grid grid-header" style="background: {k.fixed};">
        <divTitle><strong> {list[l]} </strong></divTitle>
      </div>
    {/each}
  {/each}
  {#each { length: grid[0] } as _, i (i)}
    {#each { length: grid[1] } as _, j (j)}
      <div class="grid" style="background: {i.fixed};">
        <p>{requirements[updateCount()]}</p>
      </div>
    {/each}
  {/each}
</div>
