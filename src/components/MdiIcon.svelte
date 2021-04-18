<script>
  // externals

  // elements

  // export let size = 20;
  export let icon;

</script>

<svg  viewbox="0 0 24 24">
  <path fill="currentColor" d={icon} />
</svg>

<style>
svg{
 width: 2.5rem;
 height:2.5rem;
 display:inherit;
 border-radius: 50%;
 color:var(--color-primary);
 transition: all 0.5s ease-in-out; 
}
svg:hover{
 transform: translateY(-10px);
}
</style>