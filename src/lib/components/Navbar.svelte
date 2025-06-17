<script lang="ts">
	/** @typedef {import('$lib/data/nav').NavItem} NavItem */
	import IconHamburger from '$lib/components/icons/IconHamburger.svelte';
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';

	import daisyThemes from 'daisyui/theme/object.js';

	const themes = Object.keys(daisyThemes).toSorted((a, b) => {
		if (a === 'light') return -1;
		if (b === 'light') return 1;
		if (a === 'dark') return -1;
		if (b === 'dark') return 1;
		return a.localeCompare(b);
	});

	onMount(async () => {
		const { Collapse, initTWE } = await import('tw-elements');
		initTWE({ Collapse });
	});

	/**
	 * Handles navigation item clicks and collapses the navbar.
	 */
	async function closeNavMenu(event: MouseEvent) {
		const { Collapse } = await import('tw-elements');
		const collapse = Collapse.getInstance(document.querySelector('#navbarContent'));
		if (collapse) collapse.hide();
	}

	/**
	 * @typedef {Object} Props
	 * @property {NavItem[]} navItems - An array of navigation items.
	 * @property {string} [siteName] - The name of the site.
	 *
	 * @param {Props} props - The props object.
	 */
	/** @type {Props} */
	let { navItems, siteName } = $props();
</script>

<nav
	class="navbar bg-secondary text-secondary-content relative min-h-0 shadow-sm"
	data-twe-navbar-ref
>
	<!-- Hamburger button for mobile view -->
	<button
		class="btn btn-ghost absolute top-3 left-2 my-auto md:hidden"
		type="button"
		data-twe-collapse-init
		data-twe-target="#navbarContent"
		aria-controls="navbarContent"
		aria-expanded="false"
		aria-label="Toggle navigation"
	>
		<IconHamburger />
	</button>
	<div class="my-auto flex w-full flex-wrap items-center justify-between">
		<!-- Navbar title -->
		<div class="flex grow items-center justify-center md:justify-start">
			<a class="btn btn-ghost text-xl" href="/" onclick={closeNavMenu}>{siteName}</a>
		</div>

		<!-- Collapsible navbar container -->
		<div
			class="menu !visible hidden flex-grow basis-[100%] p-0 md:mt-0 md:!flex md:basis-auto md:justify-end"
			id="navbarContent"
			data-twe-collapse-item
		>
			<!-- Left links -->
			<ul class="list-style-none flex flex-col justify-end pl-0 font-semibold md:flex-row">
				<!-- Loop through navItems and create a list item for each -->
				{#each navItems as { href, text, featured }, index}
					<li
						class:mt-4={index === 0}
						class:mb-0={index === navItems.length - 1}
						class:featured
						class="md:mt-0 md:mb-0"
					>
						<a class="sm:text-lg" onclick={closeNavMenu} {href}>
							{text}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<!-- Theme switcher -->
	<!-- This is only shown in dev mode -->
	{#if dev}
		<div class="divider divider-horizontal h-10"></div>
		<div class="dropdown theme-controller clearfix">
			<div tabindex="0" role="button" class="btn m-1">
				Theme
				<svg
					width="12px"
					height="12px"
					class="inline-block h-2 w-2 fill-current opacity-60"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 2048 2048"
				>
					<path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
				</svg>
			</div>
			<ul class="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl">
				{#each themes as theme}
					<li>
						<input
							type="radio"
							name="theme-dropdown"
							class="theme-controller btn btn-sm btn-ghost justify-start"
							aria-label={theme}
							value={theme}
						/>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</nav>

<style>
	.featured {
		background-color: var(--color-primary);
		color: var(--color-primary-content);
		margin-left: calc(var(--spacing) * 2);
	}
</style>
