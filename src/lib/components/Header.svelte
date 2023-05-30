<script>
	export let data;
	import * as prismicH from "@prismicio/helpers";
	let menuItems = [];
	const mainMenu = data.document.find((item) => item.uid === 'main-menu');
	if (mainMenu && mainMenu.data.items) {
		menuItems = mainMenu.data.items
	}
</script>
<header class="main-header">
	<div class="container mx-auto">
		<div class="header-flex flex items-center justify-between">
			<div class="logo">Logo</div>
			<nav class="bg-white flex flex-wrap items-center justify-between p-4">
				{#if menuItems}
					{#each menuItems as item}
						<a href={prismicH.asLink(item.link)} class="text-gray-700 font-semibold uppercase transition-all duration-300 hover:text-gray-100 hover:bg-gray-600 hover:border-transparent rounded-lg px-4 py-2 m-1">
							{item.name}
						</a>
					{/each}
				{/if}
			</nav>
		</div>
	</div>
</header>
<style>
.main-header{
	border-bottom:solid 1px #ccc;
}
.logo{
	font-weight:bold;
	text-transform:uppercase;
}
</style>