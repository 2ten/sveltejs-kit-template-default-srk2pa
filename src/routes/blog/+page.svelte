<script>
  export let data;
  import { SliceZone } from '@prismicio/svelte';
  import { dev } from "$app/environment"
  import * as components from "$lib/slices"
  import * as prismicH from "@prismicio/helpers";
</script>

{#if data && data.documents.document}
  {@html prismicH.asHTML(data.documents.document.data.title)}
  {@html prismicH.asHTML(data.documents.document.data.description)}
  <SliceZone slices={data.documents.document.data.body} {components} {dev} />
{/if}

{#if data && data.documents.blogs}
<ul>
  {#each data.documents.blogs as blog}
    <li><a href={`/blog/${blog.uid}`}>{blog.uid}</a></li>
  {/each}
</ul>
{/if}