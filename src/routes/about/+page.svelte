<script>
	import TitleHero from '$lib/components/TitleHero.svelte';
	import { aboutData } from '$lib/data/about.js';
</script>

<TitleHero
	title="About Us"
	subtitle={aboutData.subtitle}
	heroImage="https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp"
	size="small"
/>

<div class="max-w-6xl px-12">
	<div class="grid grid-cols-1 gap-8 pt-12 text-left md:grid-cols-3">
		<!-- Mission Card -->
		<div class="card card-border shadow-xl">
			<div class="card-body">
				<h2 class="card-title">Our Mission</h2>
				<p>{aboutData.mission}</p>
			</div>
		</div>

		<!-- Vision Card -->
		<div class="card card-border shadow-xl">
			<div class="card-body">
				<h2 class="card-title">Our Vision</h2>
				<p>{aboutData.vision}</p>
			</div>
		</div>

		<!-- Values Card -->
		<div class="card card-border shadow-xl">
			<div class="card-body">
				<h2 class="card-title">Our Values</h2>
				<ul class="list-disc pl-5">
					{#each aboutData.values as value}
						<li>{value}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>

	<div class="mx-auto mt-12 max-w-4xl text-center">
		<h2 class="mb-4 text-3xl font-bold">Meet Our Team</h2>
		<p class="mb-8">
			Our team is composed of passionate professionals who are dedicated to making a difference.
			Together, we strive to create a positive impact for our customers and the community.
		</p>
		<div class="my-12 flex flex-wrap justify-center gap-6">
			{#each aboutData.team as member}
				<div>
					<div class="avatar">
						<div class="w-32 rounded-full">
							<img src={member.image} alt={member.name} />
						</div>
					</div>
					<p class="mt-2 text-center">{member.name}</p>
					<p class="text-center text-sm text-gray-500">{member.role}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
