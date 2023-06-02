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

<div class="blog-container">
  {#if data && data.documents.blogs}
    {#each data.documents.blogs as blog}
      <div class="blog-item">
        <div class="blog-item--image">
          <div class="image-container">
            <img src={blog.data.image.url} alt={blog.data.image.alt} />
          </div>
        </div>
        <div class="blog-item--caption">
          <h3>{#if blog.data.title[0] && blog.data.title[0].text}{blog.data.title[0].text}{/if}</h3>
          <p>{#if blog.data.description[0] && blog.data.description[0].text}{blog.data.description[0].text}{/if}</p>
        </div>
      </div>
    {/each}
  {/if}
</div>