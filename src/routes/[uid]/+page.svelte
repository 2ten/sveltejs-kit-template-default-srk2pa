<script>
  import * as components from "$lib/slices";
  import { SliceZone } from "@prismicio/svelte";
  import { dev } from "$app/environment";
  import * as prismicH from "@prismicio/helpers";
  export let data;
</script>

<svelte:head>
  <title>{prismicH.asText(data?.document?.data?.title)}</title>
</svelte:head>

{#if data && data.document}
  {@html prismicH.asHTML(data.document.data.title)}
  {@html prismicH.asHTML(data.document.data.description)}
  <SliceZone slices={data.document.data.body} {components} {dev} />
{/if}
