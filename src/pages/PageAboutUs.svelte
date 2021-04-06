<script>
  export let mesg;
  console.log(mesg);
  //   let src = "./ui/img/forge-aboutus.jpg";
  let name = "About";
  let img = "../ui/img/IEEE-student-year.png";

  import SliderGalery from "simple-svelte-slideshow";
 
  // These are in the public folder
  let image1 = "../ui/img/about-us1.JPG";
  let image2 = "../ui/img/about-us2.jpg";
  let image3 = "../ui/img/about-us3.JPG";
  let imgArray = [
    { src: image1},
    { src: image2},
    { src: image3},
    
  ];
  const easingMethod = "backInOut";
  const duration = 1000;
</script>

<style>
  main {
    max-width: auto;
    margin: 0;
    align-items: center;
  }
  .container {
    font-family: Roboto;
    align-items: center;
  }

  .content {
    padding-left: 20%;
    padding-right: 20%;
    padding-top: 1%;
    padding-bottom: 1%;
  }

  .title {
    float: left;
    margin: 0 1.5%;
    width: 30%;
    color: white;
    font-size: 2px;
    padding-top: 212px;
    font-size: 30px;
    padding-left: 206px;
  }
  h1 {
    font-size: 3rem;
    font-weight: 400;
  }

  .about {
    background-image: url("../ui/img/forge-aboutus.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 300px;
    opacity: 0.7;
  }
  .demographic{
    width: 100%;
  }
</style>

<main>
  <div class="about">
    <div class="title">
      <h1>{name}</h1>
    </div>
  </div>

  <div class="container">
    <div class="content">
      <h2>Mission Statement</h2>
      <p>
        We are the student chapter of the Institute of Electrical and
        Electronics Engineers (IEEE) at the University of Texas at Dallas (UTD).
        Since its founding, IEEE UTD has remained true to its mission. IEEE UTD
        members are often involved in other engineering and computer science
        organizations, such as the American Society of Mechanical Engineers
        (ASME), UTD Makerspace, the Association for Computing Machinery (ACM),
        and many more! By leveraging both IEEE and UTD resources, we help
        students to enforce engineering knowledge they learn and develop
        connections with other engineers within their fields of interest.<br />
        <br /><br />
      </p>

      <h2>History</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. <br />
      </p>
    </div>
  </div>
  <br> <br>
 
  <div>
    <SliderGalery {imgArray} {duration} {easingMethod}/>
  </div> 
  <div class="demographic">
    <img src={img} alt="demographic" />
  </div>
</main>

  