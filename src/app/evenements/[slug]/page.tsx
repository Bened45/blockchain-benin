import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { Calendar, MapPin, Users, Clock, ArrowLeft, Share2, CheckCircle2, User } from 'lucide-react';
import { Metadata } from 'next';

// Event data (in a real app, this would come from a database or CMS)
const eventsData: Record<string, EventType> = {
    'stellar-pop-city': {
        id: 1,
        slug: 'stellar-pop-city',
        title: 'Stellar Pop City',
        subtitle: 'Blockchain BENIN Week 2026',
        date: '06 Décembre 2025',
        day: '06',
        month: 'Décembre',
        year: '2025',
        time: '09:00 - 18:00',
        location: 'Cotonou, Bénin',
        venue: 'Centre de Conférences INFOSEC',
        address: 'Boulevard de la Marina, Cotonou',
        description: 'Une semaine dédiée à la blockchain avec conférences, ateliers et networking pour tous les passionnés de blockchain en Afrique.',
        fullDescription: `La Blockchain BENIN Week est l'événement phare de l'année pour la communauté blockchain béninoise et ouest-africaine.

Pendant une semaine complète, rejoignez-nous pour:
• Des conférences inspirantes par des experts internationaux
• Des ateliers pratiques pour tous les niveaux
• Des sessions de networking avec plus de 500 participants
• Des opportunités de partenariat et d'investissement

Que vous soyez développeur, entrepreneur, investisseur ou simplement curieux de la technologie blockchain, cet événement est fait pour vous.`,
        participants: '500+',
        type: 'Conférence',
        color: 'primary',
        price: 'Gratuit',
        image: '/images/event-conference.png',
        agenda: [
            { time: '09:00 - 09:30', title: 'Accueil et enregistrement' },
            { time: '09:30 - 10:30', title: 'Keynote: L\'avenir de la blockchain en Afrique' },
            { time: '10:30 - 11:00', title: 'Pause café & networking' },
            { time: '11:00 - 12:30', title: 'Panel: DeFi et inclusion financière' },
            { time: '12:30 - 14:00', title: 'Déjeuner' },
            { time: '14:00 - 15:30', title: 'Ateliers pratiques (3 tracks parallèles)' },
            { time: '15:30 - 16:00', title: 'Pause' },
            { time: '16:00 - 17:30', title: 'Hackathon pitch session' },
            { time: '17:30 - 18:00', title: 'Clôture et remise de prix' },
        ],
        speakers: [
            { name: 'Dr. Aimé Bienvenu', role: 'CEO, Blockchain Bénin' },
            { name: 'Sarah Johnson', role: 'Stellar Foundation' },
            { name: 'Kofi Mensah', role: 'DeFi Expert' },
        ],
    },
    'crypto-treasury': {
        id: 2,
        slug: 'crypto-treasury',
        title: 'Crypto Treasury',
        subtitle: 'Hackathon Finance',
        date: '06 Décembre 2025',
        day: '06',
        month: 'Décembre',
        year: '2025',
        time: '10:00 - 17:00',
        location: 'Cotonou, Bénin',
        venue: 'Hub Innovation Cotonou',
        address: 'Quartier Haie Vive, Cotonou',
        description: '48h pour développer des solutions blockchain innovantes pour l\'Afrique.',
        fullDescription: `Le Crypto Treasury Hackathon est un événement de 48 heures où les meilleurs développeurs et entrepreneurs d'Afrique se réunissent pour créer des solutions blockchain innovantes.

Thèmes du hackathon:
• Finance décentralisée (DeFi)
• Paiements transfrontaliers
• Tokenisation d'actifs
• Identité numérique

Prix à gagner:
• 1er prix: 500 000 FCFA + incubation
• 2ème prix: 300 000 FCFA
• 3ème prix: 200 000 FCFA`,
        participants: '100+',
        type: 'Hackathon',
        color: 'secondary',
        price: '5 000 FCFA',
        image: '/images/event-hackathon.png',
        agenda: [
            { time: 'Jour 1 - 10:00', title: 'Lancement et présentation des défis' },
            { time: 'Jour 1 - 12:00', title: 'Formation des équipes' },
            { time: 'Jour 1 - 14:00', title: 'Début du hacking' },
            { time: 'Jour 2 - 14:00', title: 'Soumission des projets' },
            { time: 'Jour 2 - 15:00', title: 'Présentations des projets' },
            { time: 'Jour 2 - 17:00', title: 'Remise des prix' },
        ],
        speakers: [],
    },
    'noel-en-or': {
        id: 3,
        slug: 'noel-en-or',
        title: 'Noël en Or',
        subtitle: 'Bootcamp Développeur Blockchain',
        date: '14 Décembre 2025',
        day: '14',
        month: 'Décembre',
        year: '2025',
        time: '6 semaines intensives',
        location: 'Cotonou, Bénin',
        venue: 'Campus Blockchain Bénin',
        address: 'Quartier Haie Vive, Cotonou',
        description: 'Formation intensive de 6 semaines pour devenir développeur blockchain professionnel.',
        fullDescription: `Le Bootcamp Noël en Or est une formation intensive de 6 semaines conçue pour transformer des développeurs traditionnels en experts blockchain.

Programme:
• Semaine 1-2: Fondamentaux de la blockchain
• Semaine 3-4: Développement de smart contracts (Solidity)
• Semaine 5: Développement frontend Web3
• Semaine 6: Projet final et certification

Ce que vous obtenez:
• Formation pratique par des experts
• Certification reconnue
• Accès au réseau d'entreprises partenaires
• Opportunités d'emploi`,
        participants: '50',
        type: 'Formation',
        color: 'accent',
        price: '150 000 FCFA',
        image: '/images/event-workshop.png',
        agenda: [],
        speakers: [],
    },
    'web3-meetup': {
        id: 4,
        slug: 'web3-meetup',
        title: 'Web3 Meetup',
        subtitle: 'Networking Cotonou',
        date: '20 Janvier 2026',
        day: '20',
        month: 'Janvier',
        year: '2026',
        time: '18:00 - 21:00',
        location: 'Cotonou, Bénin',
        venue: 'Espace Coworking BeninTech',
        address: 'Akpakpa, Cotonou',
        description: 'Rencontre mensuelle de la communauté blockchain béninoise.',
        fullDescription: `Rejoignez-nous pour notre meetup mensuel dédié à la communauté Web3 et blockchain du Bénin.

Au programme:
• Présentations de projets locaux
• Discussions sur les tendances du marché
• Networking avec professionnels et passionnés
• Rafraîchissements offerts

C'est l'occasion idéale de rencontrer d'autres passionnés, partager vos idées et découvrir les opportunités de l'écosystème blockchain local.`,
        participants: '80+',
        type: 'Meetup',
        color: 'primary',
        price: 'Gratuit',
        image: '/images/event-meetup.png',
        agenda: [
            { time: '18:00 - 18:30', title: 'Accueil et networking' },
            { time: '18:30 - 19:30', title: 'Présentations (3 projets)' },
            { time: '19:30 - 20:00', title: 'Discussion ouverte' },
            { time: '20:00 - 21:00', title: 'Networking libre' },
        ],
        speakers: [],
    },
};

interface EventType {
    id: number;
    slug: string;
    title: string;
    subtitle: string;
    date: string;
    day: string;
    month: string;
    year: string;
    time: string;
    location: string;
    venue: string;
    address: string;
    description: string;
    fullDescription: string;
    participants: string;
    type: string;
    color: string;
    price: string;
    image: string;
    agenda: { time: string; title: string }[];
    speakers: { name: string; role: string }[];
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const event = eventsData[slug];

    if (!event) {
        return { title: 'Événement non trouvé' };
    }

    return {
        title: `${event.title} | Événements | Blockchain Bénin`,
        description: event.description,
    };
}

export async function generateStaticParams() {
    return Object.keys(eventsData).map((slug) => ({ slug }));
}

export default async function EventDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const event = eventsData[slug];

    if (!event) {
        notFound();
    }

    const getColorClasses = (color: string) => {
        switch (color) {
            case 'primary':
                return { bg: 'bg-primary-500', text: 'text-primary-400', border: 'border-primary-500' };
            case 'secondary':
                return { bg: 'bg-secondary-500', text: 'text-secondary-400', border: 'border-secondary-500' };
            case 'accent':
                return { bg: 'bg-accent-500', text: 'text-accent-400', border: 'border-accent-500' };
            default:
                return { bg: 'bg-primary-500', text: 'text-primary-400', border: 'border-primary-500' };
        }
    };

    const colors = getColorClasses(event.color);

    return (
        <main className="min-h-screen bg-dark-bg">
            {/* Hero with Event Image */}
            <div className="relative pt-24 lg:pt-44 pb-0 overflow-hidden">
                {/* Back Link */}
                <div className="container mx-auto px-4 mb-6">
                    <Link href="/evenements" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                        <ArrowLeft size={20} />
                        <span>Retour aux événements</span>
                    </Link>
                </div>

                {/* Event Image */}
                <div className="container mx-auto px-4">
                    <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden">
                        <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/20 to-transparent" />

                        {/* Event Type Badge */}
                        <div className="absolute top-6 left-6">
                            <div className={`px-4 py-2 rounded-full text-sm font-semibold ${colors.bg} text-white`}>
                                {event.type}
                            </div>
                        </div>

                        {/* Date Badge */}
                        <div className="absolute top-6 right-6">
                            <div className="bg-white rounded-xl px-4 py-3 text-center shadow-lg">
                                <div className="text-2xl font-bold text-dark-bg">{event.day}</div>
                                <div className="text-xs uppercase text-gray-600">{event.month}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Event Info Header */}
            <Section background="dark" padding="md">
                <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                    <div className="flex-grow">
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                            {event.title}
                        </h1>
                        <p className={`text-xl ${colors.text} font-medium mb-6`}>{event.subtitle}</p>

                        <div className="flex flex-wrap gap-6 text-gray-300">
                            <div className="flex items-center gap-2">
                                <Calendar size={18} className={colors.text} />
                                <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={18} className={colors.text} />
                                <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={18} className={colors.text} />
                                <span>{event.venue}, {event.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users size={18} className={colors.text} />
                                <span>{event.participants} participants</span>
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 lg:flex-col">
                        <Button variant="primary" size="lg" className="whitespace-nowrap">
                            S&apos;inscrire — {event.price}
                        </Button>
                        <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors">
                            <Share2 size={18} />
                            <span>Partager</span>
                        </button>
                    </div>
                </div>
            </Section>

            {/* Main Content */}
            <Section background="dark" padding="lg">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Column - Details */}
                    <div className="lg:w-2/3 space-y-10">
                        {/* Description */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">À propos de l&apos;événement</h2>
                            <div className="prose prose-invert prose-lg max-w-none">
                                <p className="text-gray-300 whitespace-pre-line">{event.fullDescription}</p>
                            </div>
                        </div>

                        {/* Agenda */}
                        {event.agenda.length > 0 && (
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-6">Programme</h2>
                                <div className="space-y-3">
                                    {event.agenda.map((item, index) => (
                                        <div key={index} className="flex gap-4 items-center">
                                            <div className={`text-sm font-medium ${colors.text} w-32 flex-shrink-0`}>
                                                {item.time}
                                            </div>
                                            <div className="flex-grow glass py-3 px-4 rounded-xl border border-white/5">
                                                <span className="text-white">{item.title}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Speakers */}
                        {event.speakers && event.speakers.length > 0 && (
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-6">Intervenants</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {event.speakers.map((speaker, index) => (
                                        <div key={index} className="glass p-4 rounded-xl border border-white/5 text-center">
                                            <div className="w-16 h-16 rounded-full bg-white/10 mx-auto mb-3 flex items-center justify-center">
                                                <User size={32} className="text-gray-400" />
                                            </div>
                                            <div className="font-semibold text-white">{speaker.name}</div>
                                            <div className="text-sm text-gray-400">{speaker.role}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column - Info Card */}
                    <div className="lg:w-1/3">
                        <div className="glass p-6 rounded-2xl border border-white/10 sticky top-28">
                            <div className="text-center mb-6">
                                <div className="text-3xl font-bold text-white mb-1">{event.price}</div>
                                <div className="text-gray-400 text-sm">par personne</div>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 size={18} className="text-secondary-500" />
                                    <span>Accès complet à l&apos;événement</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 size={18} className="text-secondary-500" />
                                    <span>Certificat de participation</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 size={18} className="text-secondary-500" />
                                    <span>Networking exclusif</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 size={18} className="text-secondary-500" />
                                    <span>Supports de formation</span>
                                </div>
                            </div>

                            <Button variant="primary" size="lg" className="w-full">
                                S&apos;inscrire
                            </Button>

                            <p className="text-xs text-gray-500 text-center mt-4">
                                Places limitées. Inscrivez-vous dès maintenant !
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
