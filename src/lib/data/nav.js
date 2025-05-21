/**
 * @typedef {Object} NavItem
 * @property {string} href - The URL or path the navigation item links to.
 * @property {string} text - The display text for the navigation item.
 */

/** @type {NavItem[]} */
const navItems = [
	{
		href: '/pricing',
		text: 'Pricing'
	},
	{
		href: '/booking',
		text: 'Booking'
	},
	{
		href: '/about',
		text: 'About'
	},
	{
		href: '/faq',
		text: 'FAQ'
	}
];

export { navItems };
