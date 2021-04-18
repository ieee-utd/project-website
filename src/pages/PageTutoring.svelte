<script>
  import Banner from "../components/Banner/banner.svelte";
  let title = "Tutoring";
  let picDir = "../ui/img/tutoring.png";
</script>

<style>
  .section {
    padding: 3rem 2rem;
    margin-bottom: 2rem;
    width: 100%;
  }
  @media screen and (min-width: 776px) {
    .section {
      padding: 3rem 4rem;
    }
  }
  .frame-container {
    width: 100%;
    height: 100%;
  }
  .container-center {
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    border: 2px solid red;
  }
</style>

<Banner {title} {picDir} />
<main class="section">
  <div class="container-center">
    <iframe
      id="inlineFrameExample"
      title="Inline Frame Example"
      class="frame-container"
      src="https://outlook.office365.com/calendar/published/16c7ed4463b14cb88df73535b02c7e4f@UTDallas.edu/0e865a87e7bb471ba2877a3e0ea8f69717838207453034454286/calendar.html" />
  </div>
</main>
