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
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus culpa,
      quo, esse, fugiat ut quis expedita suscipit delectus iste blanditiis
      officiis aspernatur. Corporis quae maiores veniam. Quae error sapiente
      inventore omnis, aut laborum fuga voluptas a mollitia provident alias
      eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Temporibus nesciunt, accusamus itaque quisquam quidem ex repellendus non
      obcaecati, expedita doloribus ipsa qui, minima laudantium voluptates
      aperiam amet minus architecto aliquid! Veniam cupiditate qui minus est
      nesciunt eum officiis maiores consequatur. Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Eligendi quaerat fugiat numquam. Quis modi
      quas dolor, nisi quia molestiae? Eligendi neque voluptatem odit et esse
      amet numquam natus itaque beatae in, unde dolores pariatur dicta, sequi
      quae architecto maxime quaerat! Autem esse quasi ad animi saepe quod
      provident, quis dolorum mollitia perspiciatis fugiat repellat harum vero
      aspernatur. Quos non beatae odit qui? Vel quidem cumque quis nihil cum
      vero voluptatum eius optio unde, inventore est quo et quae excepturi atque
      iusto nemo corrupti dolores maiores dolorem earum aliquam
    </p>
  </section>
  <section id="section-2">
    <h1>Events Committee</h1>
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
  </section>
  <section id="section-3">
    <h1>Robotics</h1>
    <p>
      erferendis neque deserunt corporis, maxime doloribus ea illum doloremque
      facilis necessitatibus quod rem odit quae ducimus? Illo consequatur in
      dignissimos velit. Nobis maxime facere sed vel ea ipsa, doloremque
      deleniti neque, quam aliquam unde odit ullam libero nisi quod quos aperiam
      perspiciatis, expedita distinctio magnam reprehenderit inventore corrupti
      harum. Deleniti, et dolore magnam expedita aliquid accusamus quae
      incidunt, corporis veritatis molestias error? Quos sit et aut quisquam
      sint qui unde ipsum necessitatibus tenetur, culpa quis perspiciatis
      deleniti cupiditate itaque ab at tempore voluptate possimus aliquid
      accusamus. Culpa minima sapiente quae! Voluptatibus beatae eaque sapiente
      tempore, minima pariatur, vel debitis quo recusandae quos itaque molestias
      unde assumenda?
    </p>
  </section>
  <section id="section-4">
    <h1>IEEE WIE</h1>
    <p>
      ditiis dignissimos eligendi quos assumenda veniam iusto vel rerum,
      voluptatem sequi? Laborum, eius quae eveniet asperiores quis quasi illo
      vitae pariatur perferendis reiciendis exercitationem dignissimos suscipit
      et sunt. Quisquam eum ex tempora! Nesciunt voluptatum ad, quod fugit quia
      nulla repellat commodi? Magnam earum qui similique aliquam cupiditate
      deserunt quas atque numquam, dignissimos id recusandae alias ratione
      molestiae non blanditiis. Quas enim dolorum tempora repudiandae?
    </p>
  </section>
</main>
