import { existsSync, readdirSync } from 'node:fs';
import { extname, resolve } from 'node:path';

const imageExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

const readPublicImages = (folder?: string) => {
	if (!folder) return [];

	const folderPath = resolve(process.cwd(), 'public', folder);

	if (!existsSync(folderPath)) return [];

	return readdirSync(folderPath, { withFileTypes: true })
		.filter((entry) => entry.isFile() && imageExtensions.has(extname(entry.name).toLowerCase()))
		.map((entry) => entry.name)
		.sort((left, right) => left.localeCompare(right, undefined, { numeric: true, sensitivity: 'base' }))
		.map((name) => `/${folder}/${encodeURIComponent(name)}`);
};

export interface PartnerCatalogItem {
	slug: string;
	name: string;
	shortName: string;
	logo: string;
	logoAlt: string;
	subtitle: string;
	partnersBadgeClass?: string;
	folder?: string;
	images: string[];
	intro: string;
	seoDescription: string;
	emptyStateText?: string;
}

export const partnerCatalog: PartnerCatalogItem[] = [
	{
		slug: 'axa-parenterals',
		name: 'laboratoire AXA PARENTERALS',
		shortName: 'AXA PARENTERALS',
		logo: '/partal.png',
		logoAlt: 'Logo AXA PARENTERALS',
		subtitle: 'Partenaire santé',
		folder: 'axa',
		images: readPublicImages('axa'),
		intro:
			'DASMARK PHARMA accompagne AXA PARENTERALS dans la mise en avant de sa gamme avec un dispositif de diffusion et de présentation adapté aux professionnels de santé.',
		seoDescription:
			"Catalogue visuel des produits AXA PARENTERALS présentés par DASMARK PHARMA pour les professionnels de santé en Côte d'Ivoire."
	},
	{
		slug: 'niya-healthcare',
		name: 'laboratoire NIYA HEALTHCARE',
		shortName: 'NIYA HEALTHCARE',
		logo: '/niya.png',
		logoAlt: 'Logo NIYA HEALTHCARE',
		subtitle: 'Partenaire santé',
		partnersBadgeClass: 'partner-badge-alt',
		images: [],
		intro:
			'DASMARK PHARMA référence NIYA HEALTHCARE parmi ses laboratoires partenaires et structure la mise à disposition de ses solutions pour le marché local.',
		seoDescription:
			'Page partenaire NIYA HEALTHCARE sur DASMARK PHARMA avec présentation du laboratoire et espace catalogue en cours de mise à jour.',
		emptyStateText:
			'Les visuels produits NIYA HEALTHCARE seront ajoutés ici prochainement. Notre équipe peut déjà vous orienter vers la gamme et les disponibilités.'
	},
	{
		slug: 'galpha',
		name: 'laboratoire GALPHA',
		shortName: 'GALPHA',
		logo: '/dsph.png',
		logoAlt: 'Logo GALPHA',
		subtitle: 'Partenaire santé',
		folder: 'galpha',
		images: readPublicImages('galpha'),
		intro:
			'DASMARK PHARMA valorise la gamme GALPHA avec une présentation claire des produits et un accompagnement destiné aux pharmacies, cliniques et hôpitaux.',
		seoDescription:
			"Catalogue visuel des produits GALPHA présentés par DASMARK PHARMA pour les acteurs de santé en Côte d'Ivoire."
	}
];
