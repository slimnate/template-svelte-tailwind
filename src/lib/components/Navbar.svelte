<script>
	import IconHamburger from '$lib/components/icons/IconHamburger.svelte';
	import { onMount } from 'svelte';

	onMount(async () => {
		const { Collapse, initTWE } = await import('tw-elements');
		initTWE({ Collapse });
	});

	/**
	 * @param {MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement; }} event
	 */
	async function handleNavItemClick(event) {
		const { Collapse } = await import('tw-elements');
		const collapse = Collapse.getInstance(document.querySelector('#navbarContent'));
		collapse.hide();
	}

	let { navItems, siteName = 'Example Business' } = $props();
</script>

<nav class="navbar bg-secondary text-secondary-content relative shadow-sm" data-twe-navbar-ref>
	<div class="my-auto flex w-full flex-wrap items-center justify-between px-3">
		<!-- Hamburger button for mobile view -->
		<button
			class="btn btn-ghost md:hidden"
			type="button"
			data-twe-collapse-init
			data-twe-target="#navbarContent"
			aria-controls="navbarContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<IconHamburger />
		</button>

		<!-- Navbar title -->
		<div class="flex grow items-center justify-center md:justify-start">
			<a class="btn btn-ghost text-xl" href="/">{siteName}</a>
		</div>

		<!-- Collapsible navbar container -->
		<div
			class="menu !visible hidden flex-grow basis-[100%] md:mt-0 md:!flex md:basis-auto md:justify-end"
			id="navbarContent"
			data-twe-collapse-item
		>
			<!-- Left links -->
			<ul
				class="list-style-none flex flex-col justify-end pl-0 font-semibold md:flex-row"
				data-twe-navbar-nav-ref
			>
				<!-- Loop through navItems and create a list item for each -->
				{#each navItems as { href, text }, index}
					<li
						class:mt-4={index === 0}
						class:mb-0={index === navItems.length - 1}
						class="md:mt-0 md:mb-0"
						data-twe-nav-item-ref
					>
						<a class="sm:text-lg" onclick={handleNavItemClick} {href} data-twe-nav-link-ref
							>{text}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>
