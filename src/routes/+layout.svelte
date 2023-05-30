<script>
export let data
import Header from '$lib/components/Header.svelte';
import Footer from '$lib/components/Footer.svelte';
</script>

<Header data={data}/>
<main>
<slot />
</main>
<Footer data={data}/>