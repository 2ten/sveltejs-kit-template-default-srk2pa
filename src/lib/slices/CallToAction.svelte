<script>
	export let slice;
	import { PrismicImage } from "@prismicio/svelte"
  import * as prismicH from "@prismicio/helpers";
	console.log(slice.primary.title)
</script>
  
	<div class="primary">
	{#if slice.primary.icon_image?.url}
		<PrismicImage field={slice.primary.icon_image} />
	{/if}

	{#if slice.primary.title?.text }
  	{@html prismicH.asHTML(slice.primary.title)}
	{/if}

	{#if slice.primary.paragraph?.text }
  	{@html prismicH.asHTML(slice.primary.paragraph)}
	{/if}

	{#if slice.primary.button_link?.url && slice.primary.button_label}
	  <a href={slice.primary.button_link.url} class="button">{slice.primary.button_label}</a>
	{/if}
  </div>
  
  
	<style>
	.primary {
	  width: 100%;
	  max-width: 3960px;
	  height: auto;
	  position: relative;
	}
	
	.primary img {
	  display: block;
	  margin: 0;
	}
	
	.primary h1 {
	  font-size: 2em;
	  margin: 0;
	  padding: 1em;
	}
	
	.primary p {
	  font-size: 1em;
	  margin: 0;
	  padding: 1em;
	}
	
	.primary .button {
	  display: inline-block;
	  background-color: #007bff;
	  color: #fff;
	  font-size: 1em;
	  text-align: center;
	  padding: 1em;
	  margin: 1em;
	  text-decoration: none;
	  border-radius: 4px;
	}
	</style>