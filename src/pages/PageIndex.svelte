<script>
    import Carousel from "../components/Carousel.svelte";
    import NavigationBtn from "../components/navigationBtn.svelte"
    import Navbar from '../components/Navbar/navbar.svelte';
    let list = ["#mission" , "#history"]
    let ironImage = "https://s3.amazonaws.com/ieee-utd/branding/ieeeutd_logo.svg";
    let images = ['../ui/img/1.jpg', '../ui/img/2.JPG', '../ui/img/3.jpg','../ui/img/4.JPG']
  </script>
  
  <main class="index ">
    <section class ="section" style = "max-width: 1200px; padding-top:28px">
    <NavigationBtn {list} />
    <Navbar/>
    <div><img  src={ironImage} alt="" class = "ieee-logo"></div>
      <div class="slide-show-center">
        <Carousel {images}/>
      </div>
    <div class="mission-content">
      <p> We are the student chapter of the Institute of Electrical and Electronics <br> 
        Engineers (IEEE) at The University of Texas at Dallas (UTD).</p>
      <a href ="https://groups.google.com/g/ieee-utdallas?pli=1" class = "btn"><strong>Join our mailing list</strong> </a> 
      <a href = "/aboutus" class = "btn"><strong>Learn more</strong></a>
    </div>
    </section>

  </main>
  
  <style>
  .ieee-logo{
    position: relative;
    margin: 2rem 0;
    width:100%;
    height:120px;
    z-index: 3;
  }

    .mission-content {
    color:white;
    font-size:1.0rem;
    text-align: center;
    padding-top: 0.5rem;
  }



  .index {
      background: linear-gradient(to top,rgb(0, 0, 0, .800) , rgba(29, 28, 28));
      z-index: 0;
      position: relative;
      /* padding-bottom: 50px; */
  }
  .index::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://raw.githubusercontent.com/ieee-utd/website-polymer/4bf6cf15218975ce51ab30dade939bf3f8baafd1/ui/img/hero.svg');
    
    z-index:-4;
  }

  .btn{
    text-decoration: underline;
    color: white;
    display:inline-block;
    margin-top:0.5rem;
    padding:15px;
		background-color: rgb(250, 97, 8);
		font-size: 1rem;
    text-align: center;
    border-radius: 5px;
  }
  @media screen and (min-width:776px){
    .section{
      padding-top:0!important;
    }
  }
  </style>
  