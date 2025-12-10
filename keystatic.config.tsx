import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },
    ui: {
        brand: {
            name: 'Blockchain Benin',
            mark: () => {
                return <img src="/logo.png" alt="Blockchain Benin Logo" height={24} />;
            },
        },
    },
    collections: {
        events: collection({
            label: 'Événements',
            slugField: 'title',
            path: 'src/content/events/*',
            format: { contentField: 'fullDescription' },
            schema: {
                title: fields.slug({ name: { label: 'Titre' } }),
                subtitle: fields.text({ label: 'Sous-titre' }),
                date: fields.date({ label: 'Date', validation: { isRequired: true } }),
                time: fields.text({ label: 'Heure (ex: 11:00 GMT+1)' }),
                location: fields.text({ label: 'Lieu (Ville, Pays)' }),
                venue: fields.text({ label: 'Salle / Endroit précis' }),
                address: fields.text({ label: 'Adresse complète' }),
                mapEmbedUrl: fields.text({ label: 'URL d\'intégration Google Maps (src de l\'iframe)', description: 'Copiez le lien dans le "src" du code d\'intégration Google Maps' }),
                description: fields.text({ label: 'Description courte', multiline: true }),
                fullDescription: fields.document({
                    label: 'Description complète',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: true,
                }),
                participants: fields.text({ label: 'Participants (ex: 50+)' }),
                type: fields.select({
                    label: 'Type d\'événement',
                    options: [
                        { label: 'Meetup', value: 'Meetup' },
                        { label: 'Conférence', value: 'Conférence' },
                        { label: 'Hackathon', value: 'Hackathon' },
                        { label: 'Formation', value: 'Formation' },
                        { label: 'Charité', value: 'Charité' },
                    ],
                    defaultValue: 'Meetup',
                }),
                color: fields.select({
                    label: 'Couleur',
                    options: [
                        { label: 'Primary (Bleu)', value: 'primary' },
                        { label: 'Secondary (Vert)', value: 'secondary' },
                        { label: 'Accent (Or)', value: 'accent' },
                    ],
                    defaultValue: 'primary',
                }),
                price: fields.text({ label: 'Prix (ex: Gratuit, 5000 FCFA)' }),
                registrationLink: fields.url({ label: 'Lien d\'inscription', validation: { isRequired: false } }),
                image: fields.image({
                    label: 'Image de l\'événement',
                    directory: 'public/images/events',
                    publicPath: '/images/events/',
                }),
                featured: fields.checkbox({ label: 'Mettre en avant', defaultValue: false }),
                agenda: fields.array(
                    fields.object({
                        time: fields.text({ label: 'Heure' }),
                        title: fields.text({ label: 'Titre de la session' }),
                    }),
                    {
                        label: 'Programme',
                        itemLabel: props => `${props.fields.time.value} - ${props.fields.title.value}`,
                    }
                ),
                speakers: fields.array(
                    fields.object({
                        name: fields.text({ label: 'Nom' }),
                        role: fields.text({ label: 'Rôle' }),
                    }),
                    {
                        label: 'Intervenants',
                        itemLabel: props => props.fields.name.value,
                    }
                ),
            },
        }),
        partners: collection({
            label: 'Partenaires',
            slugField: 'name',
            path: 'src/content/partners/*',
            schema: {
                name: fields.slug({ name: { label: 'Nom' } }),
                logo: fields.image({
                    label: 'Logo',
                    directory: 'public/images/partners',
                    publicPath: '/images/partners/',
                    validation: { isRequired: true },
                }),
            },
        }),
        gallery: collection({
            label: 'Galerie',
            slugField: 'title',
            path: 'src/content/gallery/*',
            schema: {
                title: fields.slug({ name: { label: 'Titre' } }),
                category: fields.text({ label: 'Catégorie' }),
                image: fields.image({
                    label: 'Image',
                    directory: 'public/images/gallery',
                    publicPath: '/images/gallery/',
                    validation: { isRequired: true },
                }),
                size: fields.select({
                    label: 'Taille',
                    options: [
                        { label: 'Normal (1x1)', value: 'normal' },
                        { label: 'Large (2x2)', value: 'large' },
                        { label: 'Wide (2x1)', value: 'wide' },
                        { label: 'Tall (1x2)', value: 'tall' },
                        { label: 'Small (1x1)', value: 'small' },
                    ],
                    defaultValue: 'normal',
                }),
            },
        }),
        programs: collection({
            label: 'Programmes',
            slugField: 'title',
            path: 'src/content/programs/*',
            schema: {
                title: fields.slug({ name: { label: 'Titre' } }),
                description: fields.text({ label: 'Description', multiline: true }),
                stats: fields.text({ label: 'Statistiques (ex: 300+ apprenants)' }),
                action: fields.text({ label: 'Texte Bouton (ex: Découvrir)' }),
                icon: fields.select({
                    label: 'Icône',
                    options: [
                        { label: 'GraduationCap', value: 'GraduationCap' },
                        { label: 'Users', value: 'Users' },
                        { label: 'Code', value: 'Code' },
                        { label: 'Trophy', value: 'Trophy' },
                    ],
                    defaultValue: 'GraduationCap',
                }),
                size: fields.select({
                    label: 'Taille',
                    options: [
                        { label: 'Large', value: 'large' },
                        { label: 'Small', value: 'small' },
                    ],
                    defaultValue: 'small',
                }),
                gradient: fields.select({
                    label: 'Couleur',
                    options: [
                        { label: 'Primary (Bleu)', value: 'primary' },
                        { label: 'Secondary (Vert)', value: 'secondary' },
                        { label: 'Accent (Or)', value: 'accent' },
                    ],
                    defaultValue: 'primary',
                }),
            },
        }),
    },
    singletons: {
        stats: singleton({
            label: 'Statistiques',
            path: 'src/content/stats/data',
            schema: {
                members: fields.text({ label: 'Membres Actifs (ex: 2000)' }),
                events: fields.text({ label: 'Événements (ex: 50)' }),
                trained: fields.text({ label: 'Personnes Formées (ex: 1500)' }),
                partners: fields.text({ label: 'Partenaires (ex: 30)' }),
            },
        }),
    },
});
