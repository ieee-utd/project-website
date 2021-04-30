<script>
  import * as animateScroll from "svelte-scrollto";
  import Banner from "../components/Banner/banner.svelte";
  import NavigationBtn from "../components/navigationBtn.svelte";
  let picDir = "../ui/img/forge-program.jpg";
  let title = "program";

  let list = ["#section-1", "#section-2", "#section-3", "#section-4"];
</script>

<style>
  .section {
    padding: 3rem 2rem;
    margin-bottom: 2rem;
    width: 100%;
  }
  @media screen and (min-width: 776px) {
    .section {
      padding: 3rem 4rem;
    }
  }
</style>

<NavigationBtn {list} />
<Banner {picDir} {title} id="top" />
<main class="section">
  <section id="section-1">
    <h1>Technical Committee</h1>
    <p>
      The IEEE Tech committee is a culmination of students who come together and 
      provide ways for students to enhance their engineering skills throughout their 
      academic and professional careers. We have, and will be hosting workshops in 
      Soldering, microcontrollers, AWS certification, HAM radio, as well as PCB 
      Licensing. The committee strives for excellence in whatever we do and creates 
      opportunities for our fellow students to grow and be desired in the job market. 
      The tech committee is composed of Workshop Developers who come up with projects 
      that refine engineering skills for students, a Website Manager who is in charge 
      of running and updating the IEEE website, and a Technical Liaison who works to 
      keep mutually beneficial relations with other clubs within UTD.

    </p>
    <section id="section-2">
      <h1>The Forge</h1>
      <p>
        The Forge is a multidisciplinary project-focused innovation hub focusing on developing 
        the next generation of creative and technical leaders while solving engineering challenges 
        in the community. All our projects are made by UTD students for UTD students.
        Students are placed in interdisciplinary teams of 4-6 and challenged to complete 10-week projects. 
        Past projects integrated web development with prototyping and electrical engineering skills to build 
        devices for the UTDallas Makerspace.
  
      </p>
    </section>
  </section>
  <section id="section-3">
    <h1>Events Committee</h1>
    <p>
      The Events Committee plans and organizes events for IEEE, whether it is working 
      with another organization on campus or with companies such as Texas Instruments 
      and Murata Electronics. We host a range of events from socials - where you can 
      meet fellow engineering students - to professional development - where you can 
      build your resume or attend company tech talks. We also create and market material 
      for the events hosted by the other IEEE committees, such as the tech workshops. 
      A lot goes into creating a successful event, so we rely on our committee members' 
      artistic, social, and networking capabilities to tie everything together.
 
    </p>
  </section>
  <section id="section-4">
    <h1>Robotics</h1>
    <p>
      The IEEE UTD Robotics Team participates in the IEEE Region 5 Student Robotics 
      Competition, which happens once a year in April. While the competition team is 
      limited to 10, the robotics team opens meetings to all members interested in 
      robotics and teamwork. You can view the next competition details 
      here: https://r5conferences.org/robotics/. If you would like to get involved 
      in IEEE UTD robotics, make sure to attend the next Technical Committee Meeting 
      or the next Robotics Meeting, or DM us on Discord for ways to get involved.
    </p>
  </section>
  <section id="section-5">
    <h1>IEEE's WIE UTD</h1>
    <p>
      Women In Engineering (WIE UTD) is an initiative to increase the representation 
      of women and underrepresented people in IEEE. We work to create a community where 
      CE and EE majors can connect, support each other, and be supported by IEEE. We 
      collaborate with other organizations to bring you events for your personal, 
      professional, and academic growth. These events include biweekly study sessions, 
      professional Q&A panels, volunteer opportunities, social events, and much much 
      more! Everyone is welcome at our events! 

    </p>
  </section>
</main>
