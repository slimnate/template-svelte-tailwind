<script>
	import TitleHero from '$lib/components/TitleHero.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import { faqs } from '$lib/data/faq.js';
</script>

<TitleHero
	title="Frequently Asked Questions"
	size="small"
	heroImage="https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp"
/>

<FAQ {faqs} />
