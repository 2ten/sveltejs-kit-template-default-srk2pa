<script>
	export let slice;
  </script>
  
  <div class="primary">
	<h1>{slice.primary.section_title[0].text}</h1>
	<p>{slice.primary.section_text[0].text}</p>
  </div>
  <div class="items">
	{#each slice.items as item, index}
	  <div class="item" key={`item-${index}`}>
		<p>{item.section_bulletpoint[0].text}</p>
	  </div>
	{/each}
  </div>
	
