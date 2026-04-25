import { existsSync, readdirSync, statSync } from 'node:fs';
import { extname, relative, resolve, sep } from 'node:path';
import type { APIRoute } from 'astro';
import { partnerCatalog } from '../data/partners';

const BASE_URL = 'https://dasmarkpharma.ci';
const PAGES_ROOT = resolve(process.cwd(), 'src', 'pages');
const PARTNERS_PAGE_TEMPLATE = resolve(PAGES_ROOT, 'partenaires', '[slug].astro');
const PARTNERS_DATA_FILE = resolve(process.cwd(), 'src', 'data', 'partners.ts');
const PAGE_EXTENSIONS = new Set(['.astro', '.md', '.mdx']);
const EXCLUDED_FILES = new Set(['sitemap.xml.ts']);

const filePathToRoute = (filePath: string) => {
	const normalized = filePath.replace(/\.(astro|md|mdx)$/i, '').split(sep).join('/');

	if (normalized.includes('[')) return null;
	if (normalized === 'index') return '/';
	if (normalized.endsWith('/index')) return `/${normalized.slice(0, -'/index'.length)}/`;

	return `/${normalized}/`;
};

const collectStaticPageEntries = (directory: string): Array<{ route: string; lastmod: string }> =>
	readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
		const absolutePath = resolve(directory, entry.name);

		if (entry.isDirectory()) {
			return collectStaticPageEntries(absolutePath);
		}

		if (!entry.isFile()) return [];
		if (EXCLUDED_FILES.has(entry.name)) return [];
		if (!PAGE_EXTENSIONS.has(extname(entry.name).toLowerCase())) return [];

		const route = filePathToRoute(relative(PAGES_ROOT, absolutePath));

		if (!route) return [];

		return [{ route, lastmod: statSync(absolutePath).mtime.toISOString() }];
	});

const getLatestFolderMtime = (folder?: string) => {
	if (!folder) return 0;

	const folderPath = resolve(process.cwd(), 'public', folder);

	if (!existsSync(folderPath)) return 0;

	const fileTimes = readdirSync(folderPath, { withFileTypes: true })
		.filter((entry) => entry.isFile())
		.map((entry) => statSync(resolve(folderPath, entry.name)).mtimeMs);

	return fileTimes.length > 0 ? Math.max(...fileTimes) : 0;
};

const partnerPageEntries = partnerCatalog.map((partner) => {
	const lastmod = new Date(
		Math.max(
			statSync(PARTNERS_PAGE_TEMPLATE).mtimeMs,
			statSync(PARTNERS_DATA_FILE).mtimeMs,
			getLatestFolderMtime(partner.folder)
		)
	).toISOString();

	return {
		route: `/partenaires/${partner.slug}/`,
		lastmod
	};
});

const sitemapEntries = [...collectStaticPageEntries(PAGES_ROOT), ...partnerPageEntries]
	.filter((entry, index, entries) => entries.findIndex((candidate) => candidate.route === entry.route) === index)
	.sort((left, right) => {
		if (left.route === '/') return -1;
		if (right.route === '/') return 1;
		return left.route.localeCompare(right.route);
	});

export const GET: APIRoute = () => {
	const urls = sitemapEntries
		.map(({ route, lastmod }) => {
			return `<url><loc>${BASE_URL}${route}</loc><lastmod>${lastmod}</lastmod></url>`;
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
