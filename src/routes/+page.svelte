<script>
	import metaData from '$lib/data/meta.js';
	import TitleHero from '$lib/components/TitleHero.svelte';
	import PricingCard from '$lib/components/PricingCard.svelte';
	import { pricing } from '$lib/data/pricing.js';
	import { reviews } from '$lib/data/reviews.js';
	import ReviewCarousel from '$lib/components/ReviewCarousel.svelte';
</script>

<TitleHero
	title="Welcome to {metaData.name}"
	subtitle={metaData.description}
	heroImage="https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp"
	size="large"
	cta_text="Book Now"
	cta_link="/booking"
/>

<section class="px-6 py-12 text-center">
	<div class="mx-auto max-w-4xl space-y-6">
		<h2 class="text-3xl font-bold">About {metaData.name}</h2>
		<p>
			At {metaData.name}, we are dedicated to providing top-notch services to our customers. Our
			mission is to deliver innovative solutions that meet the unique needs of each client. With
			years of experience and a team of passionate professionals, we strive to exceed expectations
			and create lasting relationships.
		</p>
		<p>
			Located at {metaData.address}, we are proud to serve our community and beyond. Whether you're
			looking for expert advice, reliable services, or just a friendly chat, we're here to help.
			Contact us at
			<a href="mailto:{metaData.email}" class="text-primary underline">{metaData.email}</a> or call
			us at
			<a href="tel:{metaData.phone}" class="text-primary underline">{metaData.phone}</a>.
		</p>
	</div>
</section>

<section class="bg-accent px-6 py-12 text-center">
	<div class="mx-auto max-w-6xl">
		<h2 class="mb-6 text-3xl font-bold">Our Pricing Plans</h2>
		<p class="mb-8">
			Choose a plan that fits your needs. Whether you're just starting out or need advanced
			features, we have you covered.
		</p>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			{#each pricing.packages as pkg}
				<PricingCard
					name={pkg.name}
					price={pkg.price}
					featuresIncluded={pricing.features.filter((f, index) =>
						pkg.includedFeatures.includes(index)
					)}
					featuresNotIncluded={pricing.features.filter(
						(f, index) => !pkg.includedFeatures.includes(index)
					)}
					featured={pkg.featured}
				/>
			{/each}
		</div>
	</div>
</section>

<ReviewCarousel {reviews} />
