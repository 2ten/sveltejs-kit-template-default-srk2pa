<script>
	export let slice;
  import * as prismicH from "@prismicio/helpers";
</script>
  
  <section class="section-text">
		<div class="container">
			{@html prismicH.asHTML(slice.primary.section_title)}
			{@html prismicH.asHTML(slice.primary.section_text)}
			<div class="list-items">
			{#each slice.items as item, index}
				<div class="item" key={`item-${index}`}>
				<p>{item.section_bulletpoint[0].text}</p>
				</div>
			{/each}
			</div>
		</div>
	</section>
	
