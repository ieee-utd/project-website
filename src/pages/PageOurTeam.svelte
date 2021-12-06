<script lang="ts">
    import Banner from "../components/Banner/banner.svelte";
    import Carousel from "../components/Carousel.svelte";
    
    let picDir = "../ui/img/forge-about-us.jpg";
    let title = "our team";

</script>

<head>
  <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
  html {
    box-sizing: border-box;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  .column {
    float: left;
    width: 33.3%;
    margin-bottom: 16px;
    padding: 0 2rem;
  }
  
  img {
  object-fit: cover;
  max-height:30rem;
}

  @media screen and (max-width: 650px) {
    .column {
      
      width: 100%;
      display: block;
    }
  }
  
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .heading{
      font-weight: bold;
      font-size: 2rem;
      padding-left: 2rem;
      padding-bottom: 1rem;
      margin-bottom: 2rem;
      text-transform: uppercase;
    }

  .container {
    padding: 0 1rem;
  }
  
  .container::after, .row::after {
    padding-left: 4.5rem;
    content: "";
    clear: both;
    display: table;
  }

  .title {
    color: grey;
    font-family: 'Roboto', sans-serif;
    text-transform: capitalize;
    font-size: 1rem;
  }
  
  </style>
</head>
  
  
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
            of interest.
          </p>
        </div>
      </div>
    </section>


    <!-- team -->
    
    <body>
      <div class="heading">{title}</div>      
      
      <div class="row">
        <div class="column">
          <div class="card">
            <img src="../ui/img/Officer Photos/IMG_Dylan_master.jpg" alt="Dylan" style="width:100%">
            <div class="container">
              <h2>Dylan Hiu</h2>
              <p class="title">President</p>
              <p>example@example.com</p>
            </div>
          </div>
        </div>
      
        <div class="column">
          <div class="card">
            <img src="../ui/img/Officer Photos/IMG_Saravan_master.jpg" alt="Saravan" style="width:100%">
            <div class="container">
              <h2>Saravan Narayanan</h2>
              <p class="title">Vice President</p>
              <p>example@example.com</p>
            </div>
          </div>
        </div>
        
        <div class="column">
          <div class="card">
            <img src="../ui/img/Officer Photos/IMG_Julie_master.jpg" alt="Julie" style="width:100%">
            <div class="container">
              <h2>Julie Smith</h2>
              <p class="title">Vice President</p>
              <p>example@example.com</p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src="../ui/img/Officer Photos/Aarifa - Edited.jpg" alt="Aarifa" style="width:100%">
            <div class="container">
              <h2>Aarifa Gowani</h2>
              <p class="title">Head of The Forge</p>
              <p>example@example.com</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src="../ui/img/Officer Photos/IMG_Leon_master.jpg" alt="Leon" style="width:100%">
            <div class="container">
              <h2>Leon Khalyavin</h2>
              <p class="title">Head of The Forge</p>
              <p>example@example.com</p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src="../ui/img/Officer Photos/IMG_Hansvi_master.jpg" alt="Hansvi" style="width:100%">
            <div class="container">
              <h2>Hansvi Patel</h2>
              <p class="title">Director of Tutoring</p>
              <p>example@example.com</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src="../ui/img/Officer Photos/IMG_Marie_master.jpg" alt="Marie" style="width:100%">
            <div class="container">
              <h2>Marie Sofijczuk</h2>
              <p class="title">Director of Tutoring</p>
              <p>example@example.com</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src="../ui/img/Officer Photos/IMG_Rooshi.jpg" alt="Rooshi" style="width:100%">
            <div class="container">
              <h2>Rooshi Nagar</h2>
              <p class="title">Industry/Organization Liaison</p>
              <p>example@example.com</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src="../ui/img/Officer Photos/IMG_Omar_master.jpg" alt="Omar" style="width:100%">
            <div class="container">
              <h2>Omar Faris</h2>
              <p class="title">Director of Public Relations</p>
              <p>example@example.com</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src="../ui/img/Officer Photos/IMG_Jenna_master.jpg" alt="Jenna" style="width:100%">
            <div class="container">
              <h2>Jenna Evans</h2>
              <p class="title">Director of Public Relations</p>
              <p>example@example.com</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src="../ui/img/Officer Photos/IMG_Victor_master.jpg" alt="Victor" style="width:100%">
            <div class="container">
              <h2>Victor Lopez</h2>
              <p class="title">Director of Technology</p>
              <p>example@example.com</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src="../ui/img/Officer Photos/IMG_Neil_master.jpg" alt="Neil" style="width:100%">
            <div class="container">
              <h2>Neil Rathod</h2>
              <p class="title">Director of Technology</p>
              <p>example@example.com</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src="../ui/img/Officer Photos/IMG_Nuha_master.jpg" alt="Nuha" style="width:100%">
            <div class="container">
              <h2>Nuha Siddiqui</h2>
              <p class="title">Secretary</p>
              <p>example@example.com</p>
            </div>
          </div>
        </div>
        

      </div>
      
      </body>
      
  </main>
