import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { Calendar, MapPin, Users, Clock, ArrowLeft, Share2, CheckCircle2, User } from 'lucide-react';
import { Metadata } from 'next';
import { reader } from '@/lib/keystatic';
import { DocumentRenderer } from '@keystatic/core/renderer';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const event = await reader.collections.events.read(slug);

    if (!event) {
        return { title: 'Événement non trouvé' };
    }

    return {
        title: `${event.title} | Événements | Blockchain Bénin`,
        description: event.description,
    };
}

export async function generateStaticParams() {
    const slugs = await reader.collections.events.list();
    return slugs.map((slug) => ({ slug }));
}

export default async function EventDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const eventData = await reader.collections.events.read(slug);

    if (!eventData) {
        notFound();
    }

    // Format date
    const dateObj = new Date(eventData.date);
    const day = dateObj.getDate().toString().padStart(2, '0');
    const month = dateObj.toLocaleString('fr-FR', { month: 'short' }).replace('.', '');
    const formattedDate = dateObj.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

    const fullDescription = await eventData.fullDescription();

    const event = {
        ...eventData,
        day,
        month,
        date: formattedDate,
        image: eventData.image || '/images/placeholder-event.jpg',
    };

    // Helper to extract URL from iframe tag if user pasted the whole code
    const getMapUrl = (input: string | undefined) => {
        if (!input) return null;
        if (input.startsWith('<iframe')) {
            const match = input.match(/src="([^"]+)"/);
            return match ? match[1] : null;
        }
        return input;
    };

    const mapUrl = getMapUrl(event.mapEmbedUrl);

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
                        <Button href={event.registrationLink || '#'} variant="primary" size="lg" className="whitespace-nowrap">
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
                                <DocumentRenderer document={fullDescription} />
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
                                    <span>Networking exclusif</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 size={18} className="text-secondary-500" />
                                    <span>Supports de formation</span>
                                </div>
                            </div>

                            <Button href={event.registrationLink || '#'} variant="primary" size="lg" className="w-full">
                                S&apos;inscrire
                            </Button>

                            <p className="text-xs text-gray-500 text-center mt-4">
                                Places limitées. Inscrivez-vous dès maintenant !
                            </p>
                        </div>

                        {/* Google Map Embed */}
                        {mapUrl && (
                            <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 h-64 w-full shadow-lg">
                                <iframe
                                    src={mapUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        )}
                    </div>
                </div>
            </Section>
        </main>
    );
}
