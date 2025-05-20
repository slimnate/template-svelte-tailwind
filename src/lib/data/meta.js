// This file contains the site metadata for the example business site.
// It includes the business name, description, address, phone number,
// email, and social media URLs.
// This data is used in the footer and other parts of the site.

// Name, description, address, and phone number
// are used for SEO and contact information.
export const name = 'Example Business';
export const description = 'An example business site';
export const address = '123 Example St, Example City, EX 12345';
export const phone = '+1 (123) 456-7890';

// The following URLs are placeholders and should be replaced with actual URLs
// for your business's social media profiles.
// Set values to null and they will not be rendered in the footer.
// For example, if you don't have a Facebook page, set fb_url to null.
export const email = 'example@example.com';
export const fb_url = 'https://www.facebook.com/examplebusiness';
export const ig_url = 'https://www.instagram.com/examplebusiness';
export const tw_url = 'https://twitter.com/examplebusiness';
export const yt_url = 'https://www.youtube.com/channel/examplebusiness';
export const li_url = 'https://www.linkedin.com/company/examplebusiness';
export const tiktok_url = 'https://www.tiktok.com/@examplebusiness';

export const cp_year = `${new Date().getFullYear()}`;
export const cp_holder = 'slimnate';
export const cp_url = 'https://www.slimnate.net/';

export default {
	name,
	description,
	address,
	phone,
	email,
	fb_url,
	ig_url,
	tw_url,
	yt_url,
	li_url,
	tiktok_url,
	cp_year,
	cp_holder,
	cp_url
};
