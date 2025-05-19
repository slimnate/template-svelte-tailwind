<script>
	// Add any necessary logic here if needed

	import TitleHero from '$lib/components/TitleHero.svelte';
</script>

<TitleHero
	title="About Us"
	subtitle="We are a forward-thinking company dedicated to providing innovative solutions to our customers. Our mission is to deliver excellence in every aspect of our business."
	heroImage="https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp"
	size="small"
/>

<div class="max-w-6xl px-12 text-left">
	<div class="grid grid-cols-1 gap-8 pt-12 md:grid-cols-3">
		<!-- Mission Card -->
		<div class="card card-border shadow-xl">
			<div class="card-body">
				<h2 class="card-title">Our Mission</h2>
				<p>
					To empower businesses and individuals with cutting-edge technology and unparalleled
					support, enabling them to achieve their goals.
				</p>
			</div>
		</div>

		<!-- Vision Card -->
		<div class="card card-border shadow-xl">
			<div class="card-body">
				<h2 class="card-title">Our Vision</h2>
				<p>
					To be a global leader in our industry, recognized for our commitment to innovation,
					quality, and customer satisfaction.
				</p>
			</div>
		</div>

		<!-- Values Card -->
		<div class="card card-border shadow-xl">
			<div class="card-body">
				<h2 class="card-title">Our Values</h2>
				<ul class="list-disc pl-5">
					<li>Integrity and transparency</li>
					<li>Customer-centric approach</li>
					<li>Innovation and creativity</li>
					<li>Commitment to excellence</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="mt-12 max-w-4xl text-center">
		<h2 class="mb-4 text-3xl font-bold">Meet Our Team</h2>
		<p class="mb-8">
			Our team is composed of passionate professionals who are dedicated to making a difference.
			Together, we strive to create a positive impact for our customers and the community.
		</p>
		<div class="my-12 flex flex-wrap justify-center gap-6">
			<!-- Team Member 1 -->
			<div>
				<div class="avatar">
					<div class="w-32 rounded-full">
						<img src="https://placeholderjs.com/150x150" alt="Team Member 1" />
					</div>
				</div>
				<p class="mt-2 text-center">John Doe</p>
				<p class="text-center text-sm text-gray-500">CEO</p>
			</div>

			<div>
				<div class="avatar">
					<div class="w-32 rounded-full">
						<img src="https://placeholderjs.com/150x150" alt="Team Member 2" />
					</div>
				</div>
				<p class="mt-2 text-center">Jane Smith</p>
				<p class="text-center text-sm text-gray-500">CTO</p>
			</div>

			<div>
				<div class="avatar">
					<div class="w-32 rounded-full">
						<img src="https://placeholderjs.com/150x150" alt="Team Member 3" />
					</div>
				</div>
				<p class="mt-2 text-center">Alice Johnson</p>
				<p class="text-center text-sm text-gray-500">COO</p>
			</div>
		</div>
	</div>
</div>
