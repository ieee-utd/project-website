import PageIndex from "./pages/PageIndex.svelte";
import PageNotFound from "./pages/PageNotFound.svelte";
import PagePrograms from "./pages/PagePrograms.svelte";
import PageAboutUs from "./pages/PageAboutUs.svelte";
import PageContact from "./pages/PageContact.svelte";
import PageHKN from "./pages/PageHKN.svelte";
import PageOurTeam from "./pages/PageOurTeam.svelte";
import PageTutoring from "./pages/PageTutoring.svelte";

export const routes = [
  { name: "/", component: PageIndex },
  { name: "programs", component: PagePrograms },
  { name: "aboutUs", component: PageAboutUs },
  { name: "contact", component: PageContact },
  { name: "hkn", component: PageHKN },
  { name: "ourTeam", component: PageOurTeam },
  { name: "tutoring", component: PageTutoring },
  { name: "*", component: PageNotFound }
];
