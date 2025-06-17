/**
 * @typedef {Object} NavItem
 * @property {string} href - The URL or path the navigation item links to.
 * @property {string} text - The display text for the navigation item.
 * @property {boolean} [featured] - Optional flag to indicate if the item is featured.
 */

/** @type {NavItem[]} */
const navItems = [
	{
		href: '/pricing',
		text: 'Pricing'
	},
	{
		href: '/about',
		text: 'About'
	},
	{
		href: '/faq',
		text: 'FAQ'
	},
	{
		href: '/booking',
		text: 'Book Now',
		featured: true
	}
];

export { navItems };
