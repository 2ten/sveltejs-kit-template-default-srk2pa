<script>
	export let data;
	let footerItems = [];
  const mainMenu = data.document.find((item) => item.uid === 'footer-menu');
  if (mainMenu && mainMenu.data.items) {
    footerItems = mainMenu.data.items;
  }
</script>

<footer class="main-footer">
	<div class="container mx-auto">
		<nav>
			{#if footerItems}
				{#each footerItems as item}
					{#if item.link.url}
						<a href={item.link.url} class="text-gray-700 uppercase transition-all duration-300">
							{item.name}
						</a>
					{/if}
				{/each}
			{/if}
		</nav>
	</div>
</footer>

<style>
.main-footer{
	background:#efefef;
	padding:30px 0;
}
</style>
