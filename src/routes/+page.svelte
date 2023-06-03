<script>
  export let data;
  import { SliceZone } from '@prismicio/svelte';
  import { dev,browser} from "$app/environment"
  import * as components from "$lib/slices"
  import * as prismicH from "@prismicio/helpers";
</script>

<svelte:head>
  <title>{prismicH.asText(data?.document?.data?.title)}</title>
  <script src={data.scripts.data.header_scripts}></script>
</svelte:head>

  

<pre>{JSON.stringify(data.scripts.data.header_scripts,null,2)}</pre>
{#if data && data.document}
  <div class="container">
  {@html prismicH.asHTML(data.document.data.title)}
  {@html prismicH.asHTML(data.document.data.description)}
  </div>
  <SliceZone slices={data.document.data.body} {components} {dev} />
{/if}

{#if data && data.scripts.data.footer_scripts}
<script src={data.scripts.data.footer_scripts}></script>
{/if}