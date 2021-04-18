<script>
  function handleToggle() {}
</script>

<style>
  span {
    padding-left: 0.7rem;
    color: rgb(154, 154, 154);
    font-weight: 400;
  }
  .nav-toggle-btn {
    font-size: 1.2rem;
    color: #ffff;
  }
  .nav-toggle-btn .icon {
    font-size: 1.5rem;
  }
</style>

<!-- nav toggle  -->
<div class="nav-toggle-container">
  <button class="nav-toggle-btn" onclick={handleToggle}>
    <i class="fas fa-bars icon" />
    <span class="subtitle">MENU</span>
  </button>
</div>
