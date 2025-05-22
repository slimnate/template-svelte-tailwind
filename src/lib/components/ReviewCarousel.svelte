<script>
	/** @typedef {import('$lib/data/reviews').Review} Review */

	let activeIndex = $state(0);

	/** @type {HTMLDivElement} */
	let carouselElement;

	/**
	 * @description Scrolls to the specified element in the carousel.
	 * @param {number} index
	 * @param index
	 */
	function scrollToElement(index) {
		const element = document.getElementById(`slide-${index}`);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
			activeIndex = index;
		}
	}

	/**
	 * @type {{reviews : Review[]}}
	 * @description An array of customer reviews.
	 */
	let { reviews } = $props();
</script>

<section class="px-6 py-12 text-center">
	<div class="mx-auto w-full">
		<h2 class="mb-6 text-3xl font-bold">What Our Customers Say</h2>
		<div class="carousel max-w-[80vw] space-y-6 md:max-w-lg" bind:this={carouselElement}>
			{#each reviews as review, index}
				<div
					id={`slide-${index}`}
					class="carousel-item card flex w-full max-w-[80vw] flex-col items-center md:max-w-lg"
				>
					<img src={review.profileImage} alt={review.name} class="mb-4 h-24 w-24 rounded-full" />
					<h3 class="text-xl font-semibold">{review.name}</h3>
					<p class="text-yellow-500">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
					<p class="max-w-2xl">{review.review}</p>
				</div>
			{/each}
		</div>
		<div class="mt-6 flex justify-center space-x-2">
			{#each reviews as _, index}
				<button
					type="button"
					class={activeIndex === index
						? 'btn btn-primary btn-xs btn-circle'
						: 'btn btn-xs btn-circle'}
					aria-label={`Go to slide ${index + 1}`}
					onclick={() => scrollToElement(index)}
				></button>
			{/each}
		</div>
	</div>
</section>
