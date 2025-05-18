<script>
	import TitleHero from '$lib/components/TitleHero.svelte';
	import { faqs } from '$lib/data/faq.js';
</script>

<TitleHero
	title="Frequently Asked Questions"
	subtitle="Your questions answered"
	size="small"
	heroImage="https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp"
/>

<div class="bg-base-200 flex flex-col items-center py-12 text-left">
	<div class="w-full max-w-3xl space-y-2">
		{#each faqs as faq, index}
			<div class="bg-base-100 border-base-300 collapse-arrow collapse border">
				<input type="radio" name="faq-accordion" checked={index === 0} />
				<div class="collapse-title font-semibold">{faq.question}</div>
				<div class="collapse-content text-sm">
					{faq.answer}
				</div>
			</div>
		{/each}
	</div>
</div>
