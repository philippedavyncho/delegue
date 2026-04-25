export const contactDetails = {
	companyName: 'DASMARK PHARMA',
	tagline:
		'Agence specialisee en promotion medicale, representation de laboratoires, affaires reglementaires et formation.',
	addressLine: 'Cocody Angre Djrorobite 2, derriere la pharmacie Sainte Clementine',
	city: 'Abidjan',
	country: 'Cote d Ivoire',
	fullAddress:
		'Cocody Angre Djrorobite 2, derriere la pharmacie Sainte Clementine, Abidjan, Cote d Ivoire',
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
		name: 'Telephone',
		value: '+225 07 49 94 27 44',
		href: 'tel:+2250749942744',
		note: 'Ideal pour parler directement avec notre equipe et cadrer votre besoin.',
		toneClass: 'is-info'
	},
	{
		name: 'Email',
		value: 'dasmarkpharmaci@gmail.com',
		href: 'mailto:dasmarkpharmaci@gmail.com',
		note: 'Pratique pour partager un besoin detaille, un dossier ou une presentation.',
		toneClass: 'is-violet'
	}
];

export const serviceAreaCards = [
	{
		title: 'Abidjan',
		label: 'Zone coeur',
		href: '/zones/abidjan/',
		description:
			'Notre base d action se situe a Abidjan. C est ici que nous coordonnons la majorite des prises de contact, des activations terrain et des echanges avec les structures de sante.',
		points: [
			'pharmacies, cliniques, hopitaux et laboratoires partenaires',
			'presence de proximite depuis Cocody Angre',
			'suivi terrain, representation et coordination locale'
		]
	},
	{
		title: 'Cote d Ivoire',
		label: 'Couverture nationale',
		href: '/fournisseur-pharmaceutique-cote-divoire/',
		description:
			'Au dela d Abidjan, DASMARK PHARMA accompagne les projets qui demandent une lecture du marche ivoirien, une presence relai et une execution structuree.',
		points: [
			'accompagnement de marques et laboratoires sur l ensemble du territoire',
			'orientation vers les bons interlocuteurs et circuits',
			'pilotage progressif des actions locales et nationales'
		]
	}
];

export const supportThemes = [
	'Representation de laboratoires',
	'Promotion medicale et pharmaceutique',
	'Affaires reglementaires',
	'Formation des delegues medicaux',
	'Organisation du deploiement terrain',
	'Besoin de contact commercial rapide'
];
