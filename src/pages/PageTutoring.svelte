<script>
  import Banner from "../components/Banner/banner.svelte";
  let title = "Tutoring";
  let picDir = "../ui/img/tutoring.png";
</script>

<style>

  .link {
    color: var(--color-primary);
    text-decoration: underline;
    text-transform: capitalize;
  }
  .link:hover {
    color: var(--color-accent);
  }
  ul {
    list-style-type: disc;
    padding-left: 2.5rem;
    margin: 1rem 0;
  }
  li {
    margin-bottom: 0.2rem;
  }
  .heading {
    font-weight: bold;
    margin-bottom: 1.3rem;
    font-family: var(--font-head);
  }
  .sub-heading {
    margin-bottom: 1rem;
  }
  .tutor-info-contact {
    margin-bottom: 1.3rem;
    max-width: 70vw;
  }
  @media screen and (min-width: 776px) {
    .section {
      padding: 2rem 4rem;
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
  }
</style>

<Banner {title} {picDir} />
<main class="section">
  <div class="tutoring">
    <h3 class="heading">
      Due to the COVID-19 outbreak, all tutoring services have moved online
      until further notice.
    </h3>
    <div class="tutor-info">
      <p class="tutor-info-contact">
        Join us on our official <a
          href="https://discord.com/"
          target="_blank"
          class="link">Discord server</a> where we offer dedicated tutoring channels
        where you can connect with our experienced tutors as well as other students.
        Let us help you make the grade!
      </p>
      <p>We offer student led tutoring for:</p>
      <ul>
        <li>Introduction to Electrical Engineering (CE/EE 1202)</li>
        <li>Introduction to Digital Systems (CE/EE 2310)</li>
        <li>Electrical Network Analysis (CE/EE 3301)</li>
        <li>Digital Circuits (CE/EE 3320)</li>
        <li>Signals and Systems (CE/EE 3302)</li>
      </ul>
    </div>
  </div>
  <section class="schedule">
    <div class="schedule">
      <h3 class="heading">Tutor Schedules</h3>
      <p class="sub-heading">
        Check out our calendar below to find tutors for your courses!
      </p>
    </div>
    <div class="container-center">
      <iframe
        class="frame-container"
        src="https://outlook.office365.com/calendar/published/16c7ed4463b14cb88df73535b02c7e4f@UTDallas.edu/0e865a87e7bb471ba2877a3e0ea8f69717838207453034454286/calendar.html" />
    </div>
  </section>
</main>
