<script>
  export let data;
  import { SliceZone } from '@prismicio/svelte';
  import Pagination from '$lib/components/Pagination.svelte';
  import { dev } from "$app/environment"
  import * as components from "$lib/slices"
	import * as prismic from '@prismicio/client';
</script>

<svelte:head>
  <title>{prismic.asText(data?.documents?.document?.data?.title)}</title>
</svelte:head>

{#if data && data.documents.document}
  <div class="container">
  {@html prismic.asHTML(data.documents.document.data.title)}
  {@html prismic.asHTML(data.documents.document.data.description)}
  </div>
  <SliceZone slices={data.documents.document.data.body} {components} {dev} />
{/if}

<div class="container">
  <div class="blog-grid">
    {#if data && data.documents.blogs.results}
      {#each data.documents.blogs.results as blog}

        <div class="blog-item">
          <a href={prismic.asLink(blog)} class="blog-item--link">
          {#if blog.data.image.url}
          <div class="blog-item--image">
            <div class="image-container">
              <img  
			          src={prismic.asImageSrc(blog.data.image)}
			          srcset={prismic.asImageWidthSrcSet(blog.data.image).srcset} 
			          alt={blog.data.image.alt} />
            </div>
          </div>
          {/if}
          <div class="blog-item--caption">
            {#if blog.data.title[0] && blog.data.title[0].text}<h3>{@html prismic.asText(blog.data.title)}</h3>{/if}
            {#if blog.data.description[0] && blog.data.description[0].text}<p>{@html prismic.asText(blog.data.description)}</p>{/if}
          </div>
          </a>
        </div>

      {/each}
    {/if}
  </div>
  <Pagination data={data.documents.blogs} />
</div>

<style>
.blog-grid {
  display: grid;
  gap: 20px;
}
.blog-item {
  width: 100%;
}
.blog-item--link{
  display:block;
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
@media (min-width: 640px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .blog-item {
    margin-bottom: 20px;
  }
}
@media (min-width: 960px) {
  .blog-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .blog-item {
    margin-bottom: 40px;
  }
}
</style>