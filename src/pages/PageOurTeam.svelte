<script lang="ts">
    import Banner from "../components/Banner/banner.svelte";
    import Carousel from "../components/Carousel.svelte";
    
    let picDir = "../ui/img/forge-about-us.jpg";
    let title = "our team";

</script>
  
  <style>
   
    .section {
        margin-bottom: 2rem;
        width: 100%;
    }
    .photo {
      display: grid;
      grid-template-areas:
          "header header"
          "sidebar content"
          "footer footer";
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 20px;
    }
    h1{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      align-items: center;
      grid-column-gap: 20px;
      
    }
    .content {
      margin-top: 0.5rem;
    }
  
    @media screen and (min-width: 776px) {
  
    }
    @media screen and (min-width: 992px) {
      .section-center {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        align-items: center;
        justify-content: center;
        grid-column-gap: 40px;
      }
  
    }
  </style>
  
  <main id="our team">
    <Banner {picDir} {title}  id="top" />
    <section class="about section" id="about">
      <div class="section-1">
        <div class="content">
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


    <!-- team -->
    <section class="team section" id="team">
        <h class="title">{title}</h>        
        <div class="photo">
          <img src="../ui/img/default picture.jpg" class="team-photo" alt="Dylan" />
          <img src="../ui/img/default picture.jpg" class="team-photo" alt="team" />
          <img src="../ui/img/default picture.jpg" class="team-photo" alt="team" />
          <img src="../ui/img/default picture.jpg" class="team-photo" alt="team" />
          <header>Dylan Hiu</header>
          <nav>Saravan Narayanan</nav>
          <main>Julie Smith</main>
          <footer>Aarifa Gowani</footer>
        </div>
        <div class="photo">
          <img src="../ui/img/default picture.jpg" class="team-photo" alt="Dylan" />
          <img src="../ui/img/default picture.jpg" class="team-photo" alt="team" />
          <img src="../ui/img/default picture.jpg" class="team-photo" alt="team" />
          <img src="../ui/img/default picture.jpg" class="team-photo" alt="team" />
          <header>Leon Khalyavin</header>
          <nav>Hansvi Patel</nav>
          <main>Marie Sofijczuk</main>
          <footer>Rooshi Nagar</footer>
        </div>
        <div class="photo">
          <img src="../ui/img/default picture.jpg" class="team-photo" alt="Dylan" />
          <img src="../ui/img/default picture.jpg" class="team-photo" alt="team" />
          <img src="../ui/img/default picture.jpg" class="team-photo" alt="team" />
          <img src="../ui/img/default picture.jpg" class="team-photo" alt="team" />
          <header>Leon Khalyavin</header>
          <nav>Hansvi Patel</nav>
          <main>Marie Sofijczuk</main>
          <footer>Rooshi Nagar</footer>
        </div>
        <div class="photo">
          <img src="../ui/img/default picture.jpg" class="team-photo" alt="Dylan" />
          <img src="../ui/img/default picture.jpg" class="team-photo" alt="team" />
          <img src="../ui/img/default picture.jpg" class="team-photo" alt="team" />
          <img src="../ui/img/default picture.jpg" class="team-photo" alt="team" />
          <header>Omar Faris</header>
          <nav>Jenna Evans</nav>
          <main>Victor Lopez</main>
          <footer>Neil Rathod</footer>
        </div>
        <div class="photo">
          <img src="../ui/img/default picture.jpg" class="team-photo" alt="Dylan" />
          <img src="../ui/img/default picture.jpg" class="team-photo" alt="team" />
          <img src="../ui/img/default picture.jpg" class="team-photo" alt="team" />
          <img src="../ui/img/default picture.jpg" class="team-photo" alt="team" />
          <header>Nuha Siddiqui</header>
          <nav>Julie Smith</nav>
          <main>Maxine Cabrasawan</main>
          <footer>Dr. Andrea Fumagalli</footer>
        </div>
        <div class="photo">
          <img src="../ui/img/default picture.jpg" class="team-photo" alt="Dylan" />
          <img src="../ui/img/default picture.jpg" class="team-photo" alt="team" />
        </div>
        <div class="photo">
          <header>Jerry Alexander</header>
          <nav>Dr. Nasser Kehtarnavaz</nav>
        </div>

    </section>
      
  </main>
