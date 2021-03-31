<script>
 import Banner from "../components/Banner/banner.svelte"
 import NavigationButton from "../components/navigationBtn.svelte";
  import { mdiFacebook,mdiDiscord,mdiTwitter, mdiInstagram, mdiLinkedin} from '@mdi/js';
  import MdiIcon from "../components/MdiIcon.svelte"
 let title = "contact";
 let subtitle = "us";
 let picDir = "../ui/img/forge-about-us.jpg";
</script>
<Banner {title} {subtitle} {picDir}/>
<main>
<p class = "contact-notification">Please fill out the form below or reach out to us through our social media platforms</p>
<div class="contact">
<article class="contact-form">
 <div class="contact-title-form">
 <h4 class = "title">contact form</h4>
</div>
  <fieldset class = "contact-full-name">
   <legend >Name *</legend>
   <div class="container-wrapper">
     <div class="first-name ">
    <label class = "name-wrapper">
     <input type="text" name ="firstname" >
     <span class = "label-bottom">first name</span>
    </label>
   </div>
   <div class="last-name ">      
    <label class = "name-wrapper">
    <input type="text" name ="lastname" >
    <span class = "label-bottom">last name</span>
   </label>
   </div>
   </div>
   
  </fieldset>
  <div class="contact-item">
   <label for="email">Email *</label>
   <input type="email" name ="email" >
  </div>
  <div class="contact-item">
   <label for="subject">Subject *</label>
   <input type="email" name ="subject">
  </div>
    <div class="contact-item">
   <label for="message">Message *</label>
   <textarea name="message" id="message"  rows="5"></textarea>
  </div>
  <!-- button -->
  <button class = "btn submit" type = "submit">submit</button>
</article>
<article class="contact-sosicals">
 <div class="contact-title-form">
 <h4 class = "title">Social Media</h4>
</div>
   <div class="socials-container" >
   <a href="https://www.facebook.com/" target="_blank"><MdiIcon icon={mdiFacebook} class ="icon"></MdiIcon></a>
   <a href="https://discord.com/" target="_blank"><MdiIcon icon={mdiDiscord}  class = "icon"></MdiIcon></a>
   <a href="https://twitter.com/" target="_blank"><MdiIcon icon={mdiTwitter}  class = "icon"></MdiIcon></a>
   <a href="https://www.instagram.com/" target="_blank"><MdiIcon icon={mdiInstagram}  class = "icon"></MdiIcon></a>
   <a href="https://www.linkedin.com/" target="_blank"><MdiIcon icon={mdiLinkedin}  class = "icon"></MdiIcon></a>
  </div>
</article>
</div>

</main> 
<style>
 main{
  padding:3.5rem;
 }
 .contact-notification{
  font-weight: 400;
  color: grey;
  font-size:1rem;
  text-align: center;
 }
 .title{
  font-weight: 700;
  font-size:1.8rem;
  padding:2rem 0 ;
  color:black;
  text-transform: capitalize;
 }
 .contact-form{
  color:grey;
 }
 .label-bottom{
  display:block;
  font-size:0.6rem;
  text-transform: capitalize;
  color:grey;
  margin-top:-0.5rem;
 }

.name-wrapper{
 width:100%;
 height:100%;
}
input{
 margin:0.7rem 0 1.2rem 0;
 width:100%;
 height:2.4rem;
 border:1px solid grey;
 background:transparent;
 color:black;
 border-radius:0.3rem;
 padding-left:0.3rem;
 display:block;
}
input:focus, textarea:focus{
 background:var(--color-white);
 border:2px solid black;
}
.contact-full-name{
 margin-bottom:1.5rem;
}
label{
 margin-bottom:0.5rem;
}
textarea{
 display:block;
 margin-top:0.7rem;
 width:100%;
 border:1px solid grey;
 background:transparent;
 padding-left:0.3rem;
 border-radius:0.3rem;
}

.submit{
  font-size:1.5rem;
 text-transform: uppercase;
 font-weight: 500;
 text-align: center;
 padding:0.5rem 3rem;
 margin-top:2rem;
 border:1px solid grey;
 background: transparent;
 transition:all 0.3s linear;
}
.btn:hover{
 background:white;
 border-color:black;
 color:black;
 border-radius:0.3rem;
}
@media screen and (min-width:667px){
.contact-notification{
 text-align: left;
}
.contact{
 display:grid;
 grid-template-columns: repeat(2,1fr);
 grid-gap:3rem;
}
.container-wrapper{
 display:grid;
 grid-template-columns: 1fr 1fr;
 grid-gap:1.3rem;
}
}
</style>

