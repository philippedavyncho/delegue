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
		subtitle: 'Partenaire sante',
		folder: 'axa',
		images: readPublicImages('axa'),
		intro:
			'DASMARK PHARMA accompagne AXA PARENTERALS dans la mise en avant de sa gamme avec un dispositif de diffusion et de presentation adapte aux professionnels de sante.',
		seoDescription:
			'Catalogue visuel des produits AXA PARENTERALS presentes par DASMARK PHARMA pour les professionnels de sante en Cote d Ivoire.'
	},
	{
		slug: 'niya-healthcare',
		name: 'laboratoire NIYA HEALTHCARE',
		shortName: 'NIYA HEALTHCARE',
		logo: '/niya.png',
		logoAlt: 'Logo NIYA HEALTHCARE',
		subtitle: 'Partenaire sante',
		partnersBadgeClass: 'partner-badge-alt',
		images: [],
		intro:
			'DASMARK PHARMA reference NIYA HEALTHCARE parmi ses laboratoires partenaires et structure la mise a disposition de ses solutions pour le marche local.',
		seoDescription:
			'Page partenaire NIYA HEALTHCARE sur DASMARK PHARMA avec presentation du laboratoire et espace catalogue en cours de mise a jour.',
		emptyStateText:
			'Les visuels produits NIYA HEALTHCARE seront ajoutes ici prochainement. Notre equipe peut deja vous orienter vers la gamme et les disponibilites.'
	},
	{
		slug: 'galpha',
		name: 'laboratoire GALPHA',
		shortName: 'GALPHA',
		logo: '/dsph.png',
		logoAlt: 'Logo GALPHA',
		subtitle: 'Partenaire sante',
		folder: 'galpha',
		images: readPublicImages('galpha'),
		intro:
			'DASMARK PHARMA valorise la gamme GALPHA avec une presentation claire des produits et un accompagnement destine aux pharmacies, cliniques et hopitaux.',
		seoDescription:
			'Catalogue visuel des produits GALPHA presentes par DASMARK PHARMA pour les acteurs de sante en Cote d Ivoire.'
	}
];
