<script>
	import TitleHero from '$lib/components/TitleHero.svelte';
	import { pricing } from '$lib/data/pricing.js';
</script>

<div class="bg-base-200 flex flex-col">
	<TitleHero
		title="Pricing"
		heroImage="https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp"
		size="small"
	/>
	<div class="grid grid-cols-1 gap-6 px-12 py-12 md:grid-cols-3">
		{#each pricing.packages as pkg}
			<div
				class={pkg.featured
					? 'card bg-primary text-primary-content shadow-lg'
					: 'card bg-base-100 shadow-sm'}
			>
				<div class="card-body flex h-full flex-col justify-between">
					{#if pkg.featured}
						<div class="badge badge-warning">Most Popular</div>
					{/if}
					<h2 class="text-3xl font-bold">{pkg.name}</h2>
					<span class="text-xl">${pkg.price}</span>
					<ul class="mt-6 flex flex-col gap-2 text-xs">
						{#each pricing.features as feature, index}
							<li class={pkg.includedFeatures.includes(index) ? '' : 'opacity-50'}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class={pkg.includedFeatures.includes(index)
										? 'text-success me-2 inline-block size-4'
										: 'text-base-content/50 me-2 inline-block size-4'}
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
								<span class={pkg.includedFeatures.includes(index) ? '' : 'line-through'}>
									{feature}
								</span>
							</li>
						{/each}
					</ul>
					<div class="mt-auto">
						<button class={pkg.featured ? 'btn btn-success btn-block' : 'btn btn-primary btn-block'}
							>Subscribe</button
						>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
