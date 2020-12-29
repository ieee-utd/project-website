<script>
    import PageIndex from "../pages/PageIndex.svelte";
    import PageAboutUs from "../pages/PageAboutUs.svelte";
    import PageOurTeam from "../pages/PageOurTeam.svelte";
    import PagePrograms from "../pages/PagePrograms.svelte";
    import PageTutoring from "../pages/PageTutoring.svelte";
    import PageHKN from "../pages/PageHKN.svelte";
	import PageContact from "../pages/PageContact.svelte";
	
	import App from "../App.svelte";

    export let menu = 1;
</script>

<style>
	ul#menu li{
	display: inline;
	padding: 6px;
	}

</style>

<ul id="menu">
	<li><a href= ".PageIndex" on:click|preventDefault={() => (menu = 1)}>Home</a></li>
	<li><a href= ".PageAboutUs" on:click|preventDefault={() => (menu = 2)}>About us</a></li>
	<li><a href= ".PageOurTeam" on:click|preventDefault={() => (menu = 3)}>Our Team</a></li>
	<li><a href= ".PagePrograms" on:click|preventDefault={() => (menu = 4)}>Programs</a></li>
	<li><a href= ".PageTutoring" on:click|preventDefault={() => (menu = 5)}>Tutoring</a></li>
	<li><a href= ".PageHkn" on:click|preventDefault={() => (menu = 6)}>HKN</a></li>
	<li><a href= ".PageContact" on:click|preventDefault={() => (menu = 7)}>Contact</a></li>
</ul>