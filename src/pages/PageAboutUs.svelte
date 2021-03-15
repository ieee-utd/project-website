<script>
  import Banner from "../components/Banner/banner.svelte";
  let picDir = "../ui/img/forge-about-us.jpg";
  let title = "about";
  let subtitle = "us";
</script>

<Banner {picDir} {title} {subtitle} />
<main id="about">
  <section class="mission section">
    <div class="section-center">
      <div class="img-container">
        <img src="../ui/img/statement.jpeg" class="photo" alt="statement" />
      </div>
      <div class="content">
        <h3 class="title">mission statement</h3>
        <h4 class="subtitle">what we do ?</h4>
        <p>
          We are the student chapter of the Institute of Electrical and
          Electronics Engineers (IEEE) at the University of Texas at Dallas
          (UTD). Since its founding, IEEE UTD has remained true to its mission.
          IEEE UTD members are often involved in other engineering and computer
          science organizations, such as the American Society of Mechanical
          Engineers (ASME), UTD Makerspace, the Association for Computing
          Machinery (ACM), and many more! By leveraging both IEEE and UTD
          resources, we help students to enforce engineering knowledge they
          learn and develop connections with other engineers within their fields
          of interest
        </p>
      </div>
    </div>
  </section>
  <!-- history -->
  <section class="history section">
    <div class="section-center">
      <div class="content">
        <h3 class="title">History</h3>
        <h4 class="subtitle">knowing more about us</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div class="img-container">
        <img src="../ui/img/history.jpeg" class="mission-photo" alt="history" />
      </div>
    
    </div>
  </section>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,700&family=Open+Sans&display=swap");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .section {
    padding: 3rem;
    margin-bottom: 2rem;
    width: 100%;
  }
  .mission {
    background: #eeaf4a;
  }
  .img-container {
    border: 8px solid #aa8b66;
    margin: 1rem 0;
  }
  .photo {
    width: 100%;
  }
  .content {
    margin-top: 1rem;
    font-family: "Lato", sans-serif;
  }
  .title {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 900;
    letter-spacing: 0.3rem;
  }
  .subtitle {
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: capitalize;
    letter-spacing: 0.3rem;
    margin: 0.5rem 0;
  }
  .content p {
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
  }
  @media screen and (min-width: 992px) {
    .section-center {
      padding: 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-content: center;
      grid-column-gap: 40px;
    }
  }
  /* History */
</style>
