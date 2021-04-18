<script>
    import {routeIsActive} from "svelte-router-spa";
    let list = ["#Technical","#Forge","#Events","#Robotics","#IEEE"]
    import * as animateScroll from "svelte-scrollto";
    function reset() {
		count.set(x);
	}
    let y;
    let z;
    function handleClick(z) 
    {
		location.href = "/programs" + z;
	}
</script>
<svelte:window bind:scrollY={y}/>

<div class="nav-center">
    <ul id="menu">
        <li><a href="/" class ="nav-logo"> <img src="../ui/img/IEEE-logo.svg" class = "logo" alt="logo" /></a></li>
        <li><a href= "/" class="nav-link" class:active={routeIsActive('/')}>Home</a></li>
        <li><a href= "/aboutus" class="nav-link "class:active={routeIsActive('/aboutus')}>About us</a></li>
        <li><a href= "/ourTeam" class="nav-link" class:active={routeIsActive('/ourTeam')}>Our Team</a></li>
        <div class = "dropdown">
            <li><a href= "/programs" class="nav-link" class:active={routeIsActive('/programs')}>Programs</a></li>
            <div class="dropdown-content">
                {#each list as item}
                <div>
                    <button on:click={() => handleClick(item)}  > <strong>{item.slice(1)}</strong><br> </button> 
                </div>
                        
                {/each}
                </div>
        </div>
        <li><a href= "/tutoring" class="nav-link" class:active={routeIsActive('/tutoring')}>Tutoring</a></li>
        <li><a href= "/hkn" class="nav-link" class:active={routeIsActive('/hkn')}>HKN</a></li>
        <li><a href= "/contact"class="nav-link" class:active={routeIsActive('/contact')}>Contact</a></li>
    </ul>
</div>
<style>
    .active{
        color:var(--color-accent)!important;
    }
    .nav-center{
		font-size: 1.3rem;
		font-weight: 600;
		text-align: center;
		
	}
    .logo{
        display:inline-block;
        width:48px;
        height: 48px;
    }
    #menu li{
	display: inline-block;
	padding: 6px;
	}
    .nav-link{
    color: grey;
    transition: 1s ease-in linear;
    }
    .nav-link:hover{
        color:var(--color-accent);
    }
    .dropdown {
        position: relative;
        display: inline-block;
    }
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: gray;
        min-width: 115px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        opacity: 0.5;
        font-size: 15px;

    }
    .dropdown-content a:hover {color: white;}
    
    .dropdown:hover .dropdown-content {display: block;}
</style>