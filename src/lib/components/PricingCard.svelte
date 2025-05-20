<script>
	let { featured, name, price, featuresIncluded, featuresNotIncluded } = $props();
</script>

<div
	class={featured ? 'card bg-primary text-primary-content shadow-lg' : 'card bg-base-100 shadow-lg'}
>
	<div class="card-body relative flex h-full flex-col justify-between pt-8">
		{#if featured}
			<div class="badge badge-warning absolute top-2 left-2">Most Popular</div>
		{/if}
		<h2 class="text-3xl font-bold">{name}</h2>
		<span class="text-xl">${price}</span>
		<ul class="mt-6 flex flex-col gap-2 text-xs">
			<!-- Included features -->
			{#each featuresIncluded as feature}
				<li>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="text-success me-2 inline-block size-4"
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
					{feature}
				</li>
			{/each}
			<!-- Not included features -->
			{#each featuresNotIncluded as feature}
				<li class="opacity-50">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="text-base-content/50 me-2 inline-block size-4"
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
					<span class="line-through">
						{feature}
					</span>
				</li>
			{/each}
		</ul>
		<div class="mt-auto">
			<button class={featured ? 'btn btn-success btn-block' : 'btn btn-primary btn-block'}
				>Subscribe</button
			>
		</div>
	</div>
</div>
