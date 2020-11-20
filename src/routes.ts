import PageIndex from "./pages/PageIndex.svelte";
import PageNotFound from "./pages/PageNotFound.svelte";
import Programs from "./pages/Programs.svelte";

export const routes = {
  '/': PageIndex,
  '/programs': Programs,
  "*": PageNotFound
};
