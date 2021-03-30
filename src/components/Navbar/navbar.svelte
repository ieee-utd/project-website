<script>
	import SmallNav from "./smallNavBar.svelte"
	import BigNav from "./bigNavBar.svelte"
	let screenWidth;
</script>

<style>

	nav{
		background:transparent;
		z-index: 3;
		position: absolute;
		left:25%;
	}
	
</style>
<svelte:window bind:innerWidth={screenWidth} />
<nav class="nav">
		{#if screenWidth > 773}
			 <BigNav />
		{:else}
			<SmallNav />
		{/if}
</nav>