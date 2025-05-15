<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';

	import { name } from '$lib/data/site.js';
	import { navItems } from '$lib/data/nav.js';

	let { children } = $props();
</script>

<Navbar siteName={name} {navItems} />

<div class="mx-auto text-center">
	{@render children()}
</div>
