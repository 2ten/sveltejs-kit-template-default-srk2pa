<script>
	export let data;
	import * as prismicH from "@prismicio/helpers";
	import { page } from '$app/stores';
	let menuItems = [];
	const mainMenu = data.document.find((item) => item.uid === 'main-menu');
	if (mainMenu && mainMenu.data.items) {
		menuItems = mainMenu.data.items
	}
	let active = false;
	$: $page.url && (active = false)
</script>
<header class="main-header">
	<div class="main-header--wrap">
		<div class="logo">Logo</div>
		<span class="main-nav--toggle" id="menuToggle"
			 data-label-active="Close"
			 data-label="Menu"
			 class:active
			 on:click={() => active = !active}>Menu</span>
		<nav class="main-nav">
			{#if menuItems}
			<ul class="main-nav--list">
				{#each menuItems as item}
					{@const activeLink = item.link.url === $page.url.pathname}
					<li class="main-nav--item">
					{#if activeLink}
						<span class="main-nav--link">{item.name}</span>
					{:else}
						<a href={prismicH.asLink(item.link)} class="main-nav--link">{item.name}</a>
					{/if}
					</li>
				{/each}
			</ul>
			{/if}
		</nav>
	</div>
</header>
<style>
.main-header{
	border-bottom:solid 1px #ccc;
	padding-left:15px;
	padding-right:15px;
}
.main-header--wrap{
	display:flex;
	align-items:center;
	justify-content:space-between;
	min-height:60px;
}
.main-nav--list{
	margin:0;
	padding:0;
	list-style:none;
}
@media(max-width:1024px){
	.main-nav{
		position:fixed;
		background:black;
		top:0;
		left:0;
		right:0;
		bottom:0;
		width:100%;
		height:100%;
		z-index:10;
		pointer-events:none;
		opacity:0;
		transition:opacity 0.2s ease;
	}
	.main-nav--toggle{
		cursor: pointer;
	}
	.main-nav--toggle.active{
		color:white;
		z-index:11;
	}
	.main-nav--toggle.active + .main-nav{
		pointer-events:all;
		opacity:1;
	}
	.main-nav--list{
		margin-top:30px;
	}
	.main-nav--item{

	}
	.main-nav--link{
		padding:10px 15px;
		color:white;
		display:block;
		text-align:center;
		font-size:1.5em;
	}
	span.main-nav--link{
		opacity:0.5;
	}
}
@media(min-width:1025px){
	.main-header{
		padding-left:30px;
		padding-right:30px;
	}
	.main-nav--toggle{
		display:none;
	}
	.main-nav{
		display:flex;
		align-items:center;
		justify-content:space-between;
	}
	.main-nav--list{
		
	}
	.main-nav--item{
		display:inline-block;
	}
	.main-nav--link{
		padding:5px 8px;
		color:black;
		font-size:1em;
		display:block;
	}
	span.main-nav--link{
		opacity:0.5;
	}
}
.logo{
	font-weight:bold;
	text-transform:uppercase;
}
</style>