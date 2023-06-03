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


<div class="container">
  <div class="blog-container">
    {#if data && data.documents.blogs}
      {#each data.documents.blogs as blog}
        <div class="blog-item">
          <div class="blog-item--image">
            <div class="image-container">
              <a href={blog.url}>  <img src={blog.data.image.url} alt={blog.data.image.alt} /></a>
            
            </div>
          </div>
          <div class="blog-item--caption">
            <h3><a href={blog.url}>{#if blog.data.title[0] && blog.data.title[0].text}{blog.data.title[0].text}{/if}</a></h3>
            <p>{#if blog.data.description[0] && blog.data.description[0].text}{blog.data.description[0].text}{/if}</p>
          </div>
        </div>
      {/each}
    {/if}
  </div>
</div>



<style>
.blog-container {
  display: grid;
  gap: 20px;
}

.blog-item {
  width: 100%;
}

@media (min-width: 640px) {
  .blog-container {
    grid-template-columns: repeat(2, 1fr);
  }
  .blog-item {
    margin-bottom: 20px;
  }
}

@media (min-width: 960px) {
  .blog-container {
    grid-template-columns: repeat(3, 1fr);
  }
  .blog-item {
    margin-bottom: 40px;
  }
}

.blog-item--image .image-container {
  aspect-ratio: 3/2;
}

.blog-item--image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-item--caption h3 {
  margin: 10px 0 5px;
}

.blog-item--caption p {
  margin: 0;
}
</style>