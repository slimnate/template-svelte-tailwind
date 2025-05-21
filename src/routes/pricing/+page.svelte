<script>
	import PricingCard from '$lib/components/PricingCard.svelte';
	import TitleHero from '$lib/components/TitleHero.svelte';
	import { pricing } from '$lib/data/pricing.js';
</script>

<TitleHero
	title="Pricing"
	heroImage="https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp"
	size="small"
/>
<div class="grid grid-cols-1 gap-6 px-12 py-12 md:grid-cols-3">
	{#each pricing.packages as pkg}
		<PricingCard
			name={pkg.name}
			price={pkg.price}
			featuresIncluded={pricing.features.filter((f, index) => pkg.includedFeatures.includes(index))}
			featuresNotIncluded={pricing.features.filter(
				(f, index) => !pkg.includedFeatures.includes(index)
			)}
			featured={pkg.featured}
		/>
	{/each}
</div>
