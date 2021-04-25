<script>
    import Slide from "../components/slide2.svelte";
    import NavigationBtn from "../components/navigationBtn.svelte"
    import Navbar from '../components/Navbar/navbar.svelte';
    let list = ["#mission" , "#history"]
    let ironImage = "https://s3.amazonaws.com/ieee-utd/branding/ieeeutd_logo.svg";
    let bImage = "https://raw.githubusercontent.com/ieee-utd/website-polymer/4bf6cf15218975ce51ab30dade939bf3f8baafd1/ui/img/hero.svg"
  </script>
  
  <main class="index">
    <NavigationBtn {list} />
    <div class="navbar">
    <Navbar/>
    </div>
     <div><img  src={ironImage} alt="" class = "ieee-logo"></div>

     <section class="mission section" id = "mission">
    
    <div class = "slideshow">
        <Slide/>
    </div>
         <br>
         <br>
    <div class="center">
            <strong> We are the student chapter of the Institute of Electrical and Electronics <br> 
              Engineers (IEEE) at The University of Texas at Dallas (UTD).</strong>
    </div>

    <br>

    <div class= "buttons">
      <a href ="https://groups.google.com/g/ieee-utdallas?pli=1"><button1> <strong>Join our mailing list</strong> </button1> </a> 
      <a href = "/aboutus"><button2> <strong>Learn more</strong> </button2></a>
    </div>
    </section>
  
  </main>
  
  <style>
  
  
  
    .section {
      width: 100%;
    }
    .mission {
      background:var(--color-gray);
    }

    .center {
    position: relative;
    color:white;
    font-size:1.0rem;
    top: 120;
    width: 100%;
    text-align: center;

  }

  .ieee-logo{
    position: relative;
    margin-top: 40px;
    width:100%;
    height:120px;
    z-index: 3;
    top: 10%;

  }


  .index {
      background: linear-gradient(to top,rgb(0, 0, 0, .800) , rgba(29, 28, 28));
      z-index: 0;
      position: relative;
      padding-bottom: 180px;
  }
  .index::after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://raw.githubusercontent.com/ieee-utd/website-polymer/4bf6cf15218975ce51ab30dade939bf3f8baafd1/ui/img/hero.svg');
    
    z-index: -4;
  }

  button2{
    color: white;
    padding: 15px 15px;
    margin: 0;
    position: relative;
    top: 50%;
    left: 42.5%;
    height: 10rem;
		width: 200px;
		background-color: rgb(250, 97, 8);
		font-size: 1.00rem;
		background-position: 100%;
		background-size: 500%;
    text-align: center;
    border-radius: 5px;
  }
  button1{
    text-decoration: underline;
    color: white;
    padding: 15px 15px;
    position: relative;
    top: 50%;
    left: 42%;
    height: 20rem;
		width: 200rem;
		background-color: rgb(250, 97, 8);
		font-size: 1.00rem;
		background-position: 100%;
		background-size: 500%;
    text-align: center;
    border-radius: 5px;
  }

  .slideshow{
    width:55%;
    height:55%;
    justify-content: center;
    padding-top: 1%;
  }
  
  .navbar{
    padding-top: 1.65%;
  }
  </style>
  