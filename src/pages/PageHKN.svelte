<script>
  import Banner from "../components/Banner/banner.svelte";
  import Grid from "../components/grid.svelte";
  let title = "Eta Kappa Nu Honor Society";
  let picDir = "../ui/img/forge-program.jpg";
  let grid = [6, 4];
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

  .title {
    font-size: 1.5rem;
    font-weight: 800;
    padding-bottom: 1%;
  }

  div {
    display: flex;
    width: 200px;
    justify-content: space-between;
  }

  div span:first-child {
    margin-right: 20px;
  }

  input {
    width: 100%;
  }
</style>

<Banner {picDir} {title} id="top" />
<main class="section">
  <section id="section-1">
    <p>
      Eta Kappa Nu (HKN) is the honor society of IEEE, promoting professional
      accomplishment, service, and development for students and professionals in
      electrical engineering, computer engineering, and other IEEE fields of
      interest. More information regarding the 2019-2020 cutoffs are coming
      soon.
    </p>
    <br />
  </section>
  <section id="section-2">
    <h2 id="tech" class="title">Requirements</h2>
    <p>
      Below are the requirements Fall 2018 ECS majors with the cumulative GPA
      (Summer 2018) at the appropriate 1/5th, 1/4th, and 1/3rd point for HKN.
    </p>
    <Grid {grid} />
    <p>
      In addition, applicants will need to have completed 15 hours of volunteer
      service in STEM-related fields. Fill out this <a
        style="text-decoration:underline;"
        href="https://docs.google.com/forms/d/e/1FAIpQLSdPjSg_lHb4_-3eGkTYglESZ-Ssg1WYCq7RHAVyVIMPiRm7aw/viewform">interest
        form</a> form to learn more about HKN.
    </p>
  </section>
</main>
