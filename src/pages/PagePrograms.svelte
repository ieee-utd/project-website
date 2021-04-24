<script>
  import Banner from "../components/Banner/banner.svelte";
  import NavigationBtn from "../components/navigationBtn.svelte";
  import { fade } from 'svelte/transition';
  let picDir = "../ui/img/forge-program.jpg";
  let title = "program";
  let list = ["#Technical","#Forge","#Events","#Robotics","#IEEE"]

  let y;
</script>

<style>
  .container{
    max-width: 100%;
    font-size: 14px;
  }
  .robotic-link{
    color:var(--color-primary)
  }
  .robotic-link:hover{
    color:var(--color-accent)
  }
@media screen and (min-width: 776px) {
  .container{
    padding: 5px 15%;

  }
}
</style>

<main id = program>
<NavigationBtn {list} />
<Banner {picDir} {title} id="top" />
<section  in:fade="{{ y: 200, duration: 750 }}" class="tech commitee section" id = "Technical">
  <div class="container">
    <div >
      <h2 id="tech" class = "title" >Technical Committee </h2>
    </div>  
    <p>
      The IEEE Tech committee is a culmination of students who come together and provide ways for students to enhance their engineering skills throughout their academic and professional careers. We have, and will be hosting workshops in Soldering, microcontrollers, AWS certification, HAM radio, as well as PCB Licensing. The committee strives for excellence in whatever we do and creates opportunities for our fellow students to grow and be desired in the job market. The tech committee is composed of Workshop Developers who come up with projects that refine engineering skills for students, a Website Manager who is in charge of running and updating the IEEE website, and a Technical Liaison who works to keep mutually beneficial relations with other clubs within UTD.
    </p>
    </div>
  </section>

  <section in:fade="{{ y: 200, duration: 750 }}" class="forge section" id = "Forge">
  <div class="container">
  <h2 class = "title">The Forge</h2>
  <p>
    dus nesciunt ut harum veniam repudiandae dolores natus quasi labore,
    molestiae pariatur molestias facere quas voluptatibus corrupti vitae? Ipsa
    molestias officiis reprehenderit voluptatum a magni fugit, quos doloribus
    excepturi placeat voluptates nemo minus nostrum repellendus magnam
    possimus corrupti exercitationem quasi porro iure, asperiores expedita
    illo veritatis! Deleniti modi labore, nulla quo autem qui earum illum?
    Praesentium impedit quasi quibusdam alias cumque nisi dignissimos odit
    modi, soluta, iure hic illum optio amet assumenda consequatur officiis
    numquam error harum quis quos, nam nemo neque? Hic quas qui repellendus
    deserunt, laborum sint quos at nostrum quisquam ipsam inventore neque. Aut
    vitae accusamus deleniti quaerat pariatur nobis ullam, quos sint omnis
    officia provident architecto eveniet. Placeat quos accusamus dolores
    laudantium.
  </p>
  </div>
  </section>

<section in:fade="{{ y: 200, duration: 750 }}" class="events committee section" id = "Events">
  <div class="container">
  <h2 class = "title">Events Committee</h2>
  <div class="section-center">
  <p>
    The Events Committee plans and organizes events for IEEE, whether it is working with another organization on campus or with companies such as Texas Instruments and Murata Electronics. We host a range of events from socials - where you can meet fellow engineering students - to professional development - where you can build your resume or attend company tech talks. We also create and market material for the events hosted by the other IEEE committees, such as the tech workshops. A lot goes into creating a successful event, so we rely on our committee members' artistic, social, and networking capabilities to tie everything together
  </p>
  </div>
</section>

<section in:fade="{{ y: 200, duration: 750 }}" class="robotics section" id = "Robotics">
  <div class="container">
  <h2 class = "title">Robotics</h2>
  <p>
    The IEEE UTD Robotics Team participates in the IEEE Region 5 Student Robotics Competition, which happens once a year in April. While the competition team is limited to 10, the robotics team opens meetings to all members interested in robotics and teamwork. You can view the next competition details here: 
    <a href="https://r5conferences.org/robotics/" target="_blank" class = "robotic-link">https://r5conferences.org/robotics/</a>. If you would like to get involved in IEEE UTD robotics, make sure to attend the next Technical Committee Meeting or the next Robotics Meeting, or DM us on Discord for ways to get involved.
  </p>  
</div>
</section>


<section in:fade="{{ y: 200, duration: 750 }}" class="ieee wie section" id = "IEEE">
  <div class="container">
  <h2 class = "title">IEEE WIE </h2>
  <p>
    Women In Engineering (WIE UTD) is an initiative to increase the representation of women and underrepresented people in IEEE. We work to create a community where CE and EE majors can connect, support each other, and be supported by IEEE. We collaborate with other organizations to bring you events for your personal, professional, and academic growth. These events include biweekly study sessions, professional Q&A panels, volunteer opportunities, social events, and much much more! Everyone is welcome at our events!
  </p>
</section>
</main>
