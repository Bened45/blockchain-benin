import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_CLIENT_ID &&
        process.env.KEYSTATIC_GITHUB_CLIENT_SECRET
        ? {
            kind: 'github',
            repo: {
                owner: 'Bened45',
                name: 'blockchain-benin',
            },
        }
        : {
            kind: 'local',
        },

    collections: {
        // Collection pour les événements
        events: collection({
            label: 'Événements',
            slugField: 'title',
            path: 'content/events/*',
            format: { contentField: 'description' },
            schema: {
                title: fields.slug({ name: { label: 'Titre' } }),
                date: fields.date({
                    label: 'Date',
                    validation: { isRequired: true },
                }),
                subtitle: fields.text({
                    label: 'Sous-titre',
                    validation: { length: { min: 1, max: 200 } },
                }),
                description: fields.document({
                    label: 'Description',
                    formatting: true,
                    dividers: true,
                    links: true,
                }),
                image: fields.image({
                    label: 'Image',
                    directory: 'public/images/events',
                    publicPath: '/images/events/',
                }),
                category: fields.select({
                    label: 'Catégorie',
                    options: [
                        { label: 'Conférence', value: 'conference' },
                        { label: 'Hackathon', value: 'hackathon' },
                        { label: 'Formation', value: 'formation' },
                        { label: 'Meetup', value: 'meetup' },
                        { label: 'Atelier', value: 'atelier' },
                    ],
                    defaultValue: 'meetup',
                }),
                action: fields.text({
                    label: 'Texte du bouton',
                    defaultValue: "S'inscrire",
                }),
                location: fields.text({
                    label: 'Lieu (Ville)',
                }),
                venue: fields.text({
                    label: 'Salle / Endroit précis',
                }),
                time: fields.text({
                    label: 'Heure (ex: 14:00)',
                }),
                mapEmbedUrl: fields.text({
                    label: 'URL Google Maps Embed',
                    description: 'Lien src de l\'iframe Google Maps',
                }),
                participants: fields.text({
                    label: 'Nombre de participants (ex: 50+)',
                }),
                price: fields.text({
                    label: 'Prix (ex: Gratuit)',
                }),
                type: fields.text({
                    label: 'Type (Badge)',
                    defaultValue: 'Événement',
                }),
                color: fields.select({
                    label: 'Couleur du thème',
                    options: [
                        { label: 'Primary (Bleu)', value: 'primary' },
                        { label: 'Secondary (Vert)', value: 'secondary' },
                        { label: 'Accent (Or)', value: 'accent' },
                    ],
                    defaultValue: 'primary',
                }),
                featured: fields.checkbox({
                    label: 'Mettre en avant',
                    defaultValue: false,
                }),
                agenda: fields.array(
                    fields.object({
                        time: fields.text({ label: 'Heure' }),
                        title: fields.text({ label: 'Titre' }),
                    }),
                    {
                        label: 'Programme',
                        itemLabel: (props) => `${props.fields.time.value} - ${props.fields.title.value}`,
                    }
                ),
                speakers: fields.array(
                    fields.object({
                        name: fields.text({ label: 'Nom' }),
                        role: fields.text({ label: 'Rôle' }),
                    }),
                    {
                        label: 'Intervenants',
                        itemLabel: (props) => props.fields.name.value,
                    }
                ),
                registrationLink: fields.url({
                    label: "Lien d'inscription (optionnel)",
                }),
            },
        }),

        // Collection pour la galerie (Albums)
        albums: collection({
            label: 'Galerie / Albums',
            slugField: 'title',
            path: 'content/albums/*',
            schema: {
                title: fields.slug({ name: { label: 'Titre de l\'album' } }),
                date: fields.date({
                    label: 'Date de l\'événement',
                    validation: { isRequired: true },
                }),
                category: fields.select({
                    label: 'Catégorie',
                    options: [
                        { label: 'Événement', value: 'event' },
                        { label: 'Formation', value: 'workshop' },
                        { label: 'Communauté', value: 'community' },
                    ],
                    defaultValue: 'event',
                }),
                cover: fields.image({
                    label: 'Image de couverture',
                    directory: 'public/images/albums',
                    publicPath: '/images/albums/',
                    validation: { isRequired: true },
                }),
                content: fields.document({
                    label: 'Contenu (Glissez vos photos ici)',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: {
                        directory: 'public/images/albums',
                        publicPath: '/images/albums/',
                    },
                }),
            },
        }),

        // Collection pour les produits/goodies du club
        products: collection({
            label: 'Produits / Goodies',
            slugField: 'name',
            path: 'content/products/*',
            format: { contentField: 'description' },
            schema: {
                name: fields.slug({ name: { label: 'Nom du produit' } }),
                price: fields.number({
                    label: 'Prix (FCFA)',
                    validation: { isRequired: true, min: 0 },
                }),
                image: fields.image({
                    label: 'Image du produit',
                    directory: 'public/images/products',
                    publicPath: '/images/products/',
                }),
                description: fields.document({
                    label: 'Description',
                    formatting: true,
                    dividers: true,
                    links: true,
                }),
                category: fields.select({
                    label: 'Catégorie',
                    options: [
                        { label: 'Vêtements', value: 'clothing' },
                        { label: 'Accessoires', value: 'accessories' },
                        { label: 'Papeterie', value: 'stationery' },
                        { label: 'Autre', value: 'other' },
                    ],
                    defaultValue: 'clothing',
                }),
                sizes: fields.array(
                    fields.text({ label: 'Taille' }),
                    {
                        label: 'Tailles disponibles',
                        itemLabel: (props) => props.value,
                    }
                ),
                colors: fields.array(
                    fields.text({ label: 'Couleur' }),
                    {
                        label: 'Couleurs disponibles',
                        itemLabel: (props) => props.value,
                    }
                ),
                stock: fields.number({
                    label: 'Stock disponible',
                    defaultValue: 0,
                }),
                featured: fields.checkbox({
                    label: 'Produit en vedette',
                    defaultValue: false,
                }),
                available: fields.checkbox({
                    label: 'Disponible à la vente',
                    defaultValue: true,
                }),
            },
        }),

        // Collection pour les programmes
        programs: collection({
            label: 'Programmes',
            slugField: 'title',
            path: 'content/programs/*',
            schema: {
                title: fields.slug({ name: { label: 'Titre' } }),
                description: fields.text({
                    label: 'Description',
                    multiline: true,
                }),
                stats: fields.text({
                    label: 'Statistiques (Badge)',
                }),
                icon: fields.select({
                    label: 'Icône',
                    options: [
                        { label: 'Chapeau (Formation)', value: 'GraduationCap' },
                        { label: 'Utilisateurs (Communauté)', value: 'Users' },
                        { label: 'Code (Technique)', value: 'Code' },
                        { label: 'Trophée (Hackathon)', value: 'Trophy' },
                    ],
                    defaultValue: 'GraduationCap',
                }),
                gradient: fields.select({
                    label: 'Style de dégradé',
                    options: [
                        { label: 'Primary (Bleu)', value: 'primary' },
                        { label: 'Secondary (Vert)', value: 'secondary' },
                        { label: 'Accent (Or)', value: 'accent' },
                    ],
                    defaultValue: 'primary',
                }),
                size: fields.select({
                    label: 'Taille de la carte',
                    options: [
                        { label: 'Normale', value: 'regular' },
                        { label: 'Large', value: 'large' },
                    ],
                    defaultValue: 'regular',
                }),
                action: fields.text({
                    label: 'Texte du bouton',
                    defaultValue: 'En savoir plus',
                }),
            },
        }),

        // Collection pour les partenaires
        partners: collection({
            label: 'Partenaires',
            slugField: 'name',
            path: 'content/partners/*',
            schema: {
                name: fields.slug({ name: { label: 'Nom du partenaire' } }),
                logo: fields.image({
                    label: 'Logo',
                    directory: 'public/Partenaires',
                    publicPath: '/Partenaires/',
                }),
                website: fields.url({
                    label: 'Site web (optionnel)',
                }),
                description: fields.text({
                    label: 'Description (optionnelle)',
                    multiline: true,
                }),
                order: fields.number({
                    label: 'Ordre d\'affichage',
                    defaultValue: 0,
                }),
            },
        }),
    },
});
