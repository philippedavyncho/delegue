import type { APIRoute } from 'astro';

const BASE_URL = 'https://dasmarkpharma.ci';

const staticRoutes = [
	'/services/',
	'/services/marketing-pharmaceutique/',
	'/formation/',
	'/formation/delegue-medical/',
	'/zones/abidjan/',
	'/contact/',
	'/'
];

export const GET: APIRoute = () => {
	const now = new Date().toISOString();

	const urls = staticRoutes
		.map((route) => {
			return `<url><loc>${BASE_URL}${route}</loc><lastmod>${now}</lastmod></url>`;
		})
		.join('');

	const body =
		'<?xml version="1.0" encoding="UTF-8"?>' +
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
		urls +
		'</urlset>';

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
};
