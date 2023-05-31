<script>
  export let data;
  import { SliceZone } from '@prismicio/svelte';
  import { dev } from "$app/environment"
  import * as components from "$lib/slices"
  import * as prismicH from "@prismicio/helpers";
</script>

{#if data && data.documents.document}
  <div class="container">
  {@html prismicH.asHTML(data.documents.document.data.title)}
  {@html prismicH.asHTML(data.documents.document.data.description)}
  </div>
  <SliceZone slices={data.documents.document.data.body} {components} {dev} />
{/if}

{#if data && data.documents.blogs}
<div class="container">
  <ul>
    {#each data.documents.blogs as blog}
      <li><a href={`/blog/${blog.uid}`}>{blog.uid}</a></li>
    {/each}
  </ul>
</div>
{/if}