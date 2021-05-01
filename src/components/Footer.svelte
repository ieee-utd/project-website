<script>
  import { fly } from "svelte/transition";
  let year;
  year = new Date().getFullYear();
</script>

<style>
  footer {
    width: 100%;
    min-height: 50vh;
    background: #fff;
  }
  .sponsor-logo-container {
    padding: 1rem;
  }
  .footer-title {
    color: var(--color-paper-grey);
    text-align: center;
    padding-top:1.7rem;
  }
  .logo {
    display: block;
    height: 200px;
    margin: 0 auto;
  }

  .socials-container {
    margin-top: 1rem;
    font-weight: 500;
    color: #222;
    text-transform: capitalize;
    text-align: center;
  }
.icon{
 width: 2rem;
 height:2.5rem;
 display:inline-block;
 font-size:2rem;
 padding-left:0.4rem;
 color:#222;
 transition: var(--transition);
}
.icon:hover{
 transform: translateY(-10px);
}
.copyright {
  margin-top: 1rem;
}
@media screen and (min-width: 776px) {
  .logo {
    display: inline-block;
  }
  .sponsor-logo-container {
    text-align: center;
  }
}
</style>

<footer class="footer">
  <div class="sponsor-logo-container">
    <h4 class="footer-title center">Thank you to the IEEE UTD sponsors</h4>
    <div class="container-wrapper">
      <img src="../ui/img/texas-instrument.jpg" alt="" class="logo" />
      <img src="../ui/img/murata.png" alt="" class="logo" />
    </div>
  </div>
  <div class="socials-container">
    <a href="https://www.facebook.com/IEEEUTD" target="_blank"><i class="fab fa-facebook icon"></i></a>
    <a href="https://discord.gg/aqw6bjNR2J" target="_blank"><i class="fab fa-discord icon"></i></a>
    <a href="https://twitter.com/ieeeutd" target="_blank"><i class="fab fa-twitter icon"></i></a>
    <a href="https://www.instagram.com/ieeeutd/" target="_blank"><i class="fab fa-instagram icon"></i></a>
    <a href="https://www.linkedin.com/company/ieee-utd/" target="_blank"><i class="fab fa-linkedin icon"></i></a>
    <p class="copyright">&copy; {year} IEEE UTD. All rights reserved</p>
  </div>
</footer>
