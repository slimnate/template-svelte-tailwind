<script>
	import { name, description } from '$lib/data/meta.js';

	import TitleHero from '$lib/components/TitleHero.svelte';
</script>

<TitleHero
	title="Welcome to {name}"
	subtitle={description}
	heroImage="https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp"
	size="large"
	cta_text="Book Now"
	cta_link="/booking"
/>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
