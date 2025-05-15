<script>
	import IconHouse from './icons/IconHouse.svelte';
	import IconFacebook from './icons/IconFacebook.svelte';
	import IconGoogle from './icons/IconGoogle.svelte';
	import IconInstagram from './icons/IconInstagram.svelte';
	import IconMail from './icons/IconMail.svelte';
	import IconPhone from './icons/IconPhone.svelte';

	import { navItems } from '$lib/data/nav';
	import IconTwitter from './icons/IconTwitter.svelte';
	import IconYoutube from './icons/IconYoutube.svelte';
	import IconLinkedIn from './icons/IconLinkedIn.svelte';
	import IconTikTok from './icons/IconTikTok.svelte';

	const {
		footerLinks = navItems,
		email = null,
		address = null,
		phone = null,
		ig_url = null,
		fb_url = null,
		tw_url = null,
		yt_url = null,
		li_url = null,
		tiktok_url = null,
		cp_url = null,
		cp_holder = null,
		cp_year = null
	} = $props();
</script>

<footer class="text-center lg:text-left">
	<div
		class="border-xanadu flex items-center justify-center border-b p-4 md:justify-between md:p-6"
	>
		<div class="mr-12 hidden md:block">
			<span>Get connected on social networks:</span>
		</div>
		<div class="flex justify-center">
			{#if fb_url}
				<a href={fb_url} class="mr-6" target="_blank" rel="noreferrer">
					<IconFacebook />
				</a>
			{/if}
			{#if ig_url}
				<a href={ig_url} class="mr-6" target="_blank" rel="noreferrer">
					<IconInstagram />
				</a>
			{/if}
			{#if tw_url}
				<a href={tw_url} class="mr-6" target="_blank" rel="noreferrer">
					<IconTwitter />
				</a>
			{/if}
			{#if yt_url}
				<a href={yt_url} class="mr-6" target="_blank" rel="noreferrer">
					<IconYoutube />
				</a>
			{/if}
			{#if li_url}
				<a href={li_url} class="mr-6" target="_blank" rel="noreferrer">
					<IconLinkedIn />
				</a>
			{/if}
			{#if tiktok_url}
				<a href={tiktok_url} class="mr-6" target="_blank" rel="noreferrer">
					<IconTikTok />
				</a>
			{/if}
		</div>
	</div>
	<div class="mx-6 py-6 text-center md:text-left">
		<div class="grid-1 grid gap-8 md:grid-cols-3">
			<div class="border-blackcoffee flex flex-col md:col-span-2 md:border-r-2 md:text-center">
				<h6 class="mb-4 flex justify-center font-semibold uppercase">Links</h6>
				<div class="grid-1 grid gap-4 sm:grid-cols-2">
					{#each footerLinks as { href, text }}
						<a {href} class="hover:scale-[1.02] hover:drop-shadow-lg">{text}</a>
					{/each}
				</div>
			</div>
			<div class="">
				<h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">Contact</h6>
				{#if address}
					<p class="mb-4 flex items-center justify-center md:justify-start">
						<IconHouse />
						{address}
					</p>
				{/if}
				{#if email}
					<p class="mb-4 flex items-center justify-center md:justify-start">
						<IconMail />
						{email}
					</p>
				{/if}
				{#if phone}
					<p class="mb-4 flex items-center justify-center md:justify-start">
						<IconPhone />
						{phone}
					</p>
				{/if}
			</div>
		</div>
	</div>
	<div class="p-4 text-center text-sm">
		<span>© {cp_year} Copyright</span>
		<a class="font-semibold text-gray-600" href={cp_url}>{cp_holder}</a>
	</div>
</footer>
