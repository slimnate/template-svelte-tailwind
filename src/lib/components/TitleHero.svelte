<script>
	let {
		title = 'Welcome to SvelteKit',
		subtitle = null,
		heroImage = '/images/hero.jpg',
		cta_text = null,
		cta_link = null,
		size = 'large',
		customClass = ''
	} = $props();
</script>

<div
	class="hero {size == 'small'
		? 'min-h-40'
		: size == 'medium'
			? 'min-h-72'
			: size == 'large'
				? 'min-h-96'
				: ''} {customClass}"
	style="background-image: url({heroImage});"
>
	<div class="hero-overlay"></div>
	<div class="hero-content text-neutral-content text-center">
		<div class="max-w-md">
			<h1 class="mb-5 text-5xl font-bold">{title}</h1>
			{#if subtitle}
				<p class="mb-5">
					{subtitle}
				</p>
			{/if}
			{#if cta_text}
				<a href={cta_link}><button class="btn btn-primary">{cta_text}</button></a>
			{/if}
		</div>
	</div>
</div>
