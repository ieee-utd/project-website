import PageIndex from "./pages/PageIndex.svelte";
import PageNotFound from "./pages/PageNotFound.svelte";
import PagePrograms from "./pages/PagePrograms.svelte";

export const routes = {
  "/": PageIndex,
  "/programs": PagePrograms,
  "*": PageNotFound
};
