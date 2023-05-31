<script>
	import { SliceZone } from '@prismicio/svelte';
  import { dev } from "$app/environment"
  export let data
  import * as components from "$lib/slices"
  import * as prismicH from "@prismicio/helpers";
</script>

<svelte:head>
  <title>{prismicH.asText(data?.document?.data?.title)}</title>
</svelte:head>

{#if data && data.document}
<div class="container container--article">
  {@html prismicH.asHTML(data.document.data.title)}
  {@html prismicH.asHTML(data.document.data.description)}
  <SliceZone slices={data.document.data.body} {components} {dev} />
</div>
{/if}