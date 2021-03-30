<script>
  import Banner from "../components/Banner/banner.svelte"
  import Navbar from "../components/Navbar/navbar.svelte"
  import NavigationBtn from "../components/navigationBtn.svelte"
  let list = ["#mission" , "/programs#history"]
  let picDir = "../ui/img/forge-about-us.jpg";
</script>

<main id="about">
   <NavigationBtn {list} />
  <header class = "banner" >
    <Navbar />
    <h1 class = "banner-title" 
    >about <span class = "banner-subtitle">us</span></h1>
  </header>
  <section class="mission section" id = "mission">
    <div class="section-center">
      <div class="img-container">
        <img src="../ui/img/statement.jpeg" class="photo" alt="statement" />
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
  <section class="history section" id ="history">
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
        <img src="../ui/img/history.jpeg" class="mission-photo" alt="history" />
      </div>
    </div>
  </section>

</main>

<style>

 .banner-title {
    color: #ffff;
    letter-spacing: 5px;
    font-size:3.5rem;
    font-weight: bold;
    position: absolute;
    bottom: 0;
    font-family: 'Rubik', sans-serif;
    font-weight: 600;
    left: 50%;
    transform: translate(-50%,-50%);
    text-transform: uppercase;

  }
  .banner-subtitle{
    color:#E88F0C;
  }

  .banner{
    background-image: linear-gradient(to bottom,rgba(0, 0, 0, 0.6) , rgba(0,0,0,0.3)),url("../ui/img/forge-about-us.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 50vh;
    position: relative;
    padding: 1rem 3rem ;
  }
  .section {
    padding: 3rem;
    margin-bottom: 2rem;
    width: 100%;
  }
  .mission {
    background:var(--color-white);
    /* background: linear-gradient(165deg, rgba(207,134,27,0.8685224089635855) 36%, rgba(6,2,71,0.8836485277704832) 62%); */
  }
  .img-container {
    
    margin: 1rem 0;
    max-width:587px;
  }
  .photo {
    width:100%;
  }
  .content {
    margin-top: 1rem;
  }
  .title {
    text-transform: uppercase;
    display:inline-block;
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 0.2rem;
    font-family: 'Rubik', sans-serif;
    color:#060247;
    margin-bottom:2rem;
    background: 
      linear-gradient(currentColor 0 0) 
      0 100% /var(--d, 0) 3px 
    no-repeat;
  transition:0.5s;
  }
  .title:hover{
--d: 50%;
  }

  .history .content p{
    color:black;
  }
  .content p {
    font-family: 'Rubik', sans-serif; 
    line-height:2.2;
    color:black;
    font-family: "Lato", sans-serif;
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
  /* Banner setting */
    @media screen and (max-width:687px){
    .banner{
      height:30vh;
    }
    .banner-title{
      transform: translate(0,0);
      left: 3rem;
      bottom: 2rem;
      font-size: 2rem;
    }
  }
</style>
