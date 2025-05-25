<script lang="ts">
	import TitleHero from '$lib/components/TitleHero.svelte';
	import { pricing } from '$lib/data/pricing.js';

	let bookingData = {
		firstName: '',
		lastName: '',
		phone: '',
		email: '',
		date: '',
		time: '',
		package: '',
		additionalInfo: ''
	};

	function submitBooking(event: SubmitEvent) {
		// Check if the form is valid
		if (event.target instanceof HTMLFormElement && !event.target.checkValidity()) {
			alert('Please fix the errors before submitting.');
			return;
		}

		console.log('Booking Data:', bookingData);
		alert('Booking submitted successfully!');
	}
</script>

<TitleHero
	title="Book Now"
	size="small"
	heroImage="https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp"
/>

<div class="flex flex-col items-center py-12">
	<div class="card bg-base-100 w-full max-w-2xl shadow-xl">
		<div class="card-body">
			<form on:submit|preventDefault={submitBooking} class="grid grid-cols-2 gap-6" novalidate>
				<!-- First Name -->
				<div class="relative col-span-2 md:col-span-1">
					<input
						id="firstName"
						type="text"
						class="input input-bordered validator w-full"
						bind:value={bookingData.firstName}
						placeholder="First Name"
						required
						minlength="2"
					/>
					<div class="validator-hint absolute mt-0">First name required</div>
				</div>

				<!-- Last Name -->
				<div class="relative col-span-2 md:col-span-1">
					<input
						id="lastName"
						type="text"
						class="input input-bordered validator w-full"
						bind:value={bookingData.lastName}
						placeholder="Last Name"
						required
						minlength="2"
					/>
					<div class="validator-hint absolute mt-0">Last name required</div>
				</div>

				<!-- Phone -->
				<div class="relative col-span-2 md:col-span-1">
					<input
						id="phone"
						type="tel"
						class="input input-bordered validator w-full"
						bind:value={bookingData.phone}
						placeholder="Phone Number"
						required
						pattern="[0-9]{`{10}`}"
					/>
					<div class="validator-hint absolute mt-0">Phone number must be 10 digits</div>
				</div>

				<!-- Email -->
				<div class="relative col-span-2 md:col-span-1">
					<input
						id="email"
						type="email"
						class="input input-bordered validator w-full"
						bind:value={bookingData.email}
						placeholder="Email Address"
						required
					/>
					<div class="validator-hint absolute mt-0">Valid email required</div>
				</div>

				<!-- Date -->
				<div class="relative col-span-2 md:col-span-1">
					<input
						id="date"
						type="text"
						class="input input-bordered validator w-full"
						bind:value={bookingData.date}
						placeholder="Date"
						required
					/>
					<div class="validator-hint absolute mt-0">Date required</div>
				</div>

				<!-- Time -->
				<div class="relative col-span-2 md:col-span-1">
					<input
						id="time"
						type="text"
						class="input input-bordered validator w-full"
						bind:value={bookingData.time}
						placeholder="Time"
						required
					/>
					<div class="validator-hint absolute mt-0">Time required</div>
				</div>

				<!-- Requested Package -->
				<div class="relative col-span-2 md:col-span-1">
					<select
						id="package"
						class="select select-bordered w-full"
						bind:value={bookingData.package}
						required
					>
						<option value="" disabled selected>Requested Package</option>
						{#each pricing.packages as pkg}
							<option value={pkg.name}>{pkg.name} - ${pkg.price}</option>
						{/each}
					</select>
				</div>

				<!-- Additional Info -->
				<div class="relative col-span-2 md:col-span-1">
					<textarea
						id="additionalInfo"
						class="textarea textarea-bordered w-full"
						bind:value={bookingData.additionalInfo}
						placeholder="Additional Info"
					></textarea>
				</div>

				<!-- Submit Button -->
				<div class="col-span-2">
					<button type="submit" class="btn btn-primary btn-block">Submit Booking</button>
				</div>
			</form>
		</div>
	</div>
</div>
