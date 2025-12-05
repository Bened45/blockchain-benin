import React from 'react';
import Section from '@/components/ui/Section';
import { Calendar, MapPin, Users, Clock, ArrowRight, Sparkles, History } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Événements | Blockchain Bénin",
    description: "Conférences, hackathons, meetups et ateliers. Restez informé des prochains événements blockchain au Bénin.",
};

const EventsPage = () => {
    const upcomingEvents = [
        {
            id: 1,
            slug: 'stellar-pop-city',
            title: 'Stellar Pop City',
            date: '06 Décembre 2025',
            day: '06',
            month: 'Déc',
            time: '09:00 - 18:00',
            location: 'Cotonou, Bénin',
            subtitle: 'Blockchain BENIN Week 2026',
            description: 'Une semaine dédiée à la blockchain avec conférences, ateliers et networking pour tous les passionnés.',
            participants: '500+',
            type: 'Conférence',
            color: 'primary',
            featured: true,
        },
        {
            id: 2,
            slug: 'crypto-treasury',
            title: 'Crypto Treasury',
            date: '06 Décembre 2025',
            day: '06',
            month: 'Déc',
            time: '10:00 - 17:00',
            location: 'Cotonou, Bénin',
            subtitle: 'Hackathon Finance',
            description: '48h pour développer des solutions blockchain innovantes pour l\'Afrique.',
            participants: '100+',
            type: 'Hackathon',
            color: 'secondary',
            featured: false,
        },
        {
            id: 3,
            slug: 'noel-en-or',
            title: 'Noël en Or',
            date: '14 Décembre 2025',
            day: '14',
            month: 'Déc',
            time: '6 semaines',
            location: 'Cotonou, Bénin',
            subtitle: 'Bootcamp Développeur',
            description: 'Formation intensive pour devenir développeur blockchain professionnel.',
            participants: '50',
            type: 'Formation',
            color: 'accent',
            featured: false,
        },
        {
            id: 4,
            slug: 'web3-meetup',
            title: 'Web3 Meetup',
            date: '20 Janvier 2026',
            day: '20',
            month: 'Jan',
            time: '18:00 - 21:00',
            location: 'Cotonou, Bénin',
            subtitle: 'Networking Cotonou',
            description: 'Rencontre mensuelle de la communauté blockchain béninoise.',
            participants: '80+',
            type: 'Meetup',
            color: 'primary',
            featured: false,
        },
    ];

    const pastEvents = [
        {
            id: 1,
            title: 'Campus Meetup Tour 2024',
            date: 'Octobre 2024',
            location: 'Universités du Bénin',
            description: 'Tournée dans 10 universités pour sensibiliser les étudiants.',
            participants: '500+ étudiants',
        },
        {
            id: 2,
            title: 'Hackathon DeFi 2024',
            date: 'Août 2024',
            location: 'Cotonou, Bénin',
            description: '48h de développement intensif avec 15 projets présentés.',
            participants: '80 développeurs',
        },
        {
            id: 3,
            title: 'Formation Smart Contracts',
            date: 'Juin 2024',
            location: 'En ligne & Présentiel',
            description: 'Formation de 8 semaines sur le développement de smart contracts.',
            participants: '150 certifiés',
        },
    ];

    const getColorClasses = (color: string) => {
        switch (color) {
            case 'primary':
                return { bg: 'bg-primary-500', text: 'text-primary-400', border: 'border-primary-500/30' };
            case 'secondary':
                return { bg: 'bg-secondary-500', text: 'text-secondary-400', border: 'border-secondary-500/30' };
            case 'accent':
                return { bg: 'bg-accent-500', text: 'text-accent-400', border: 'border-accent-500/30' };
            default:
                return { bg: 'bg-primary-500', text: 'text-primary-400', border: 'border-primary-500/30' };
        }
    };

    return (
        <main className="min-h-screen bg-dark-bg">
            {/* Hero Section */}
            <div className="relative pt-32 lg:pt-44 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/30 via-dark-bg to-primary-900/20 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary-500/10 via-transparent to-transparent pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary-300 mb-8">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">Calendrier 2025-2026</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                        Événements <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-400">Blockchain</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Conférences, hackathons, formations et meetups. Rejoignez notre communauté lors de nos prochains événements.
                    </p>
                </div>
            </div>

            {/* Featured Event */}
            {upcomingEvents.filter(e => e.featured).map((event) => (
                <Section key={event.id} background="dark" padding="md" className="border-b border-white/5">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-900/50 to-secondary-900/50 border border-white/10">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary-500/20 via-transparent to-transparent" />
                        <div className="relative p-8 md:p-12">
                            <div className="flex flex-col lg:flex-row gap-8 items-center">
                                {/* Date Badge */}
                                <div className="flex-shrink-0 text-center">
                                    <div className="w-24 h-24 rounded-2xl bg-primary-500 flex flex-col items-center justify-center text-white">
                                        <span className="text-3xl font-bold">{event.day}</span>
                                        <span className="text-sm uppercase">{event.month}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-grow text-center lg:text-left">
                                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                                        <Sparkles size={16} className="text-accent-400" />
                                        <span className="text-accent-400 text-sm font-semibold uppercase tracking-wider">Événement vedette</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                                        {event.title}
                                    </h2>
                                    <p className="text-primary-300 font-medium mb-4">{event.subtitle}</p>
                                    <p className="text-gray-300 mb-6 max-w-2xl">{event.description}</p>

                                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-400 mb-6">
                                        <div className="flex items-center gap-2">
                                            <Clock size={16} />
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} />
                                            <span>{event.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users size={16} />
                                            <span>{event.participants} participants attendus</span>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="flex-shrink-0">
                                    <Link href={`/evenements/${event.slug}`} className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-glow-primary flex items-center gap-2">
                                        Voir les détails <ArrowRight size={20} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            ))}

            {/* Upcoming Events Grid */}
            <Section background="dark" padding="lg">
                <div className="flex items-center gap-2 text-secondary-400 mb-2">
                    <Calendar size={20} />
                    <span className="text-sm font-semibold uppercase tracking-wider">À venir</span>
                </div>
                <h2 className="text-3xl font-display font-bold text-white mb-10">
                    Prochains événements
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {upcomingEvents.filter(e => !e.featured).map((event) => {
                        const colors = getColorClasses(event.color);
                        return (
                            <div
                                key={event.id}
                                className={`group glass rounded-2xl overflow-hidden border ${colors.border} hover:border-white/20 transition-all duration-300`}
                            >
                                {/* Header with date */}
                                <div className="pt-32 lg:pt-44 pb-12">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.bg} text-white`}>
                                            {event.type}
                                        </div>
                                        <div className="text-right">
                                            <div className={`text-2xl font-bold ${colors.text}`}>{event.day}</div>
                                            <div className="text-sm text-gray-400">{event.month}</div>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-300 transition-colors">
                                        {event.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-3">{event.subtitle}</p>
                                    <p className="text-gray-300 text-sm mb-4">{event.description}</p>
                                </div>

                                {/* Footer */}
                                <div className="p-6 pt-0">
                                    <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-4">
                                        <div className="flex items-center gap-1">
                                            <Clock size={12} />
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin size={12} />
                                            <span>{event.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Users size={12} />
                                            <span>{event.participants}</span>
                                        </div>
                                    </div>

                                    <Link href={`/evenements/${event.slug}`} className="w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white py-3 rounded-xl font-medium transition-all duration-300 block text-center">
                                        Voir les détails →
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Section>

            {/* Past Events */}
            <Section background="dark" padding="lg" className="bg-dark-surface/30">
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <History size={20} />
                    <span className="text-sm font-semibold uppercase tracking-wider">Rétrospective</span>
                </div>
                <h2 className="text-3xl font-display font-bold text-white mb-10">
                    Événements passés
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pastEvents.map((event) => (
                        <div
                            key={event.id}
                            className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 cursor-pointer group"
                        >
                            <div className="text-sm text-gray-500 mb-3">{event.date}</div>
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                                {event.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-4">{event.description}</p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                                <div className="flex items-center gap-1">
                                    <MapPin size={12} />
                                    <span>{event.location}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Users size={12} />
                                    <span>{event.participants}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <Section background="dark" padding="lg">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 to-secondary-600 p-10 md:p-16 text-center">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            Ne manquez aucun événement
                        </h2>
                        <p className="text-white/80 mb-8 max-w-xl mx-auto">
                            Abonnez-vous pour recevoir les notifications de nos prochains événements blockchain.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/rejoindre"
                                className="px-8 py-4 bg-white text-primary-600 rounded-full font-bold hover:bg-gray-100 transition-colors"
                            >
                                Rejoindre la communauté
                            </Link>
                            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-colors">
                                Proposer un événement
                            </button>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
};

export default EventsPage;
