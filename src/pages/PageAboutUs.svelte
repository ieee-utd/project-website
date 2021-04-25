<script>
  import Banner from "../components/Banner/banner.svelte";
  import Carousel from "../components/Carousel.svelte";
  import Slide from "../components/slide.svelte";
  let picDir = "../ui/img/forge-about-us.jpg";
  let images = ['../ui/img/about-us7.JPG', '../ui/img/about-us2.JPG', '../ui/img/about-us6.JPG','../ui/img/about-us3.JPG', '../ui/img/about-us4.jpg']
  let title = "about us";
</script>

<style>

  .img-container {
    max-width: 587px;
  }
  .photo {
    width: 100%;
  }
  .content {
    margin-top: 1rem;
  }

  .slide-show-center{
    text-align: center;
  }
  .slide-show-center h3{
    margin-bottom:2rem;
  }
  @media screen and (min-width: 776px) {

  }
  @media screen and (min-width: 992px) {
    .section-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-content: center;
      grid-column-gap: 40px;
    }

  }
</style>

<main id="about">
  <Banner {picDir} {title}  id="top" />
  <section class="mission section" id="mission">
    <div class="section-center">
      <div class="img-container">
        <img src="../ui/img/about-us.JPG" class="photo" alt="statement" />
      </div>
      <div class="content">
        <h3 class="title">mission statement</h3>
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
  <section class="history section" id="history">
    <div class="section-center">
      <div class="content">
        <h3 class="title">History</h3>
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
        <img src="../ui/img/IEEE_Group.jpg" class="mission-photo" alt="history" />
      </div>
    </div>
  </section>
  <!-- slide show -->
  <section class ="slideShow section" style="max-width:900px">
  <div class="slide-show-center">
    <h3 class="title">Gallery</h3>
    <Carousel {images}/>
  </div>
</section>
</main>
