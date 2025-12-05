import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Users, ArrowUpRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Galerie",
    description: "Revivez les moments forts de la communauté Blockchain Bénin en images. Hackathons, conférences et rencontres.",
};

const GalleryPage = () => {
    const events = [
        {
            id: 1,
            title: "Campus Meetup Tour 2025",
            color: "bg-[#7AD04F]",
            date: "Janvier - Mars 2025",
            location: "Universités du Bénin",
            participants: "500+ étudiants",
            description: "Tournée de sensibilisation dans les campus universitaires du Bénin pour démocratiser la blockchain."
        },
        {
            id: 2,
            title: "FAB Summit",
            color: "bg-[#DDD64B]",
            date: "Avril 2025",
            location: "Cotonou, Bénin",
            participants: "200+ participants",
            description: "Sommet francophone africain blockchain rassemblant experts, entrepreneurs et passionnés."
        },
        {
            id: 3,
            title: "Club Blockchain",
            color: "bg-[#D4E055]",
            date: "Hebdomadaire",
            location: "Campus & En ligne",
            participants: "100+ membres",
            description: "Rencontres hebdomadaires pour apprendre, partager et construire ensemble."
        },
        {
            id: 4,
            title: "Cérémonie de Certification",
            color: "bg-[#4CAF50]",
            date: "Juin 2025",
            location: "Cotonou, Bénin",
            participants: "150+ certifiés",
            description: "Remise des certificats aux apprenants ayant complété nos formations blockchain."
        },
        {
            id: 5,
            title: "BB Week 2026",
            color: "bg-[#E6DE45]",
            date: "Septembre 2026",
            location: "Cotonou, Bénin",
            participants: "1000+ participants",
            description: "Semaine blockchain au Bénin : conférences, hackathons, ateliers et networking."
        },
        {
            id: 6,
            title: "Bootcamp 2026",
            color: "bg-[#D4E055]",
            date: "Octobre 2026",
            location: "Cotonou, Bénin",
            participants: "50+ développeurs",
            description: "Formation intensive de 12 semaines pour devenir développeur blockchain professionnel."
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="pt-24 lg:pt-44 pb-12">
                {/* Header Section */}
                <div className="container mx-auto px-4 mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#4CAF50] mb-4">
                        Notre Galerie
                    </h1>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        Revivez nos meilleurs moments en images : événements, formations, rencontres et célébrations de notre communauté blockchain
                    </p>
                </div>

                {/* Events Grid */}
                <div className="container mx-auto px-4 max-w-6xl mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map((event) => (
                            <div
                                key={event.id}
                                className={`${event.color} rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group`}
                            >
                                {/* Image Placeholder */}
                                <div className="aspect-video bg-black/10 flex items-center justify-center">
                                    <div className="text-white/30 text-6xl font-bold">
                                        {event.id}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-white font-bold text-2xl mb-4 drop-shadow-md">
                                        {event.title}
                                    </h3>

                                    <p className="text-white/90 text-sm mb-4">
                                        {event.description}
                                    </p>

                                    {/* Event Info */}
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-white/80 text-sm">
                                            <Calendar size={16} />
                                            <span>{event.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-white/80 text-sm">
                                            <MapPin size={16} />
                                            <span>{event.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-white/80 text-sm">
                                            <Users size={16} />
                                            <span>{event.participants}</span>
                                        </div>
                                    </div>

                                    {/* View Button */}
                                    <button className="mt-6 w-full bg-white/20 hover:bg-white/30 text-white py-3 px-6 rounded-full font-medium transition-colors backdrop-blur-sm">
                                        Voir les photos →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="container mx-auto px-4 max-w-4xl mb-16">
                    <div className="bg-gradient-to-r from-[#4CAF50] to-[#7AD04F] rounded-3xl p-12 text-center text-white">
                        <h2 className="text-3xl font-bold mb-8">
                            En chiffres
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <div className="text-5xl font-bold mb-2">30+</div>
                                <div className="text-white/90">Événements organisés</div>
                            </div>
                            <div>
                                <div className="text-5xl font-bold mb-2">2000+</div>
                                <div className="text-white/90">Participants</div>
                            </div>
                            <div>
                                <div className="text-5xl font-bold mb-2">500+</div>
                                <div className="text-white/90">Photos partagées</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-[#0066CC] rounded-3xl p-12 text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">
                            Rejoignez nos prochains événements
                        </h2>
                        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                            Ne manquez pas nos prochaines rencontres, formations et célébrations. Inscrivez-vous pour être informé !
                        </p>
                        <button className="px-8 py-4 bg-white text-[#0066CC] rounded-full font-bold hover:bg-gray-100 transition-colors">
                            Voir le calendrier d&apos;événements
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default GalleryPage;
