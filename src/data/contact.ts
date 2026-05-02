export const contactDetails = {
	companyName: 'DASMARK PHARMA',
	tagline:
		'Agence spécialisée en promotion médicale, représentation de laboratoires, affaires réglementaires et formation.',
	addressLine: 'Cocody Angré Djorobité 2, derrière la pharmacie Sainte Clémentine',
	city: 'Abidjan',
	country: "Côte d'Ivoire",
	fullAddress:
		"Cocody Angré Djorobité 2, derrière la pharmacie Sainte Clémentine, Abidjan, Côte d'Ivoire",
	phoneDisplay: '+225 07 49 94 27 44',
	phoneHref: 'tel:+2250749942744',
	whatsappHref: 'https://wa.me/2250749942744',
	email: 'dasmarkpharmaci@gmail.com'
};

export const contactChannels = [
	{
		name: 'WhatsApp',
		value: '+225 07 49 94 27 44',
		href: 'https://wa.me/2250749942744',
		note: 'Le canal le plus rapide pour lancer une demande ou obtenir un premier retour.',
		toneClass: 'is-success'
	},
	{
		name: 'Téléphone',
		value: '+225 07 49 94 27 44',
		href: 'tel:+2250749942744',
		note: 'Idéal pour parler directement avec notre équipe et cadrer votre besoin.',
		toneClass: 'is-info'
	},
	{
		name: 'Email',
		value: 'dasmarkpharmaci@gmail.com',
		href: 'mailto:dasmarkpharmaci@gmail.com',
		note: 'Pratique pour partager un besoin détaillé, un dossier ou une présentation.',
		toneClass: 'is-violet'
	}
];

export const serviceAreaCards = [
	{
		title: 'Abidjan',
		label: 'Zone cœur',
		href: '/zones/abidjan/',
		description:
			"Notre base d'action se situe à Abidjan. C'est ici que nous coordonnons la majorité des prises de contact, des activations terrain et des échanges avec les structures de santé.",
		points: [
			'hôpitaux, cliniques, pharmacies et laboratoires partenaires',
			'présence de proximité depuis Cocody Angré',
			'suivi terrain, représentation et coordination locale'
		]
	},
	{
		title: "Côte d'Ivoire",
		label: 'Couverture nationale',
		href: '/fournisseur-pharmaceutique-cote-divoire/',
		description:
			"Au-delà d'Abidjan, DASMARK PHARMA accompagne les projets qui demandent une lecture du marché ivoirien, une présence relais et une exécution structurée.",
		points: [
			"accompagnement de marques et de laboratoires sur l'ensemble du territoire",
			'orientation vers les bons interlocuteurs et les bons circuits',
			'pilotage progressif des actions locales et nationales'
		]
	}
];

export const supportThemes = [
	'Représentation de laboratoires',
	'Promotion médicale et pharmaceutique',
	'Affaires réglementaires',
	'Formation des délégués médicaux',
	'Organisation du déploiement terrain',
	'Besoin de contact commercial rapide'
];
