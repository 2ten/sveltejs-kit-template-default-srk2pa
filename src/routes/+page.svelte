<script>
  export let data;
  import { SliceZone } from '@prismicio/svelte';
  import { dev } from "$app/environment"
  import * as components from "$lib/slices"
  import * as prismicH from "@prismicio/helpers";
</script>

<svelte:head>
  <title>{prismicH.asText(data?.document?.data?.title)}</title>
</svelte:head>

{#if data && data.document}
  <div class="container">
  {@html prismicH.asHTML(data.document.data.title)}
  {@html prismicH.asHTML(data.document.data.description)}
  </div>
  <SliceZone slices={data.document.data.body} {components} {dev} />
{/if}