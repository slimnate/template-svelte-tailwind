<script>
	let {
		title = 'Welcome to SvelteKit',
		subtitle = 'A SvelteKit starter template',
		heroImage = '/images/hero.jpg',
		cta_text = 'Book Now',
		cta_link = '/booking',
		heroImageHeight = '40vh'
	} = $props();
</script>

<div class="hero min-h-[{heroImageHeight}]" style="background-image: url({heroImage});">
	<div class="hero-overlay"></div>
	<div class="hero-content text-neutral-content text-center">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">{title}</h1>
			<p class="mb-5">
				{subtitle}
			</p>
			<a href={cta_link}><button class="btn btn-primary">{cta_text}</button></a>
		</div>
	</div>
</div>
