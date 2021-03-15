<script>
	import Banner from '../Banner/banner.svelte'
	import SmallNav from "./smallNavBar.svelte"
	import BigNav from "./bigNavBar.svelte"
    let menu = 1;
	let screenWidth;
</script>

<style>
	nav{
		background: transparent;
	}
	
</style>
<svelte:window bind:innerWidth={screenWidth} />;
<nav class="nav">
		{#if screenWidth > 773}
			 <BigNav />
		{:else}
			<SmallNav />
		{/if}
</nav>