import React from 'react';
import Section from '@/components/ui/Section';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Users, Calendar, Award, BookOpen } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Club Blockchain",
    description: "Rejoignez la communauté étudiante blockchain du Bénin. Networking, formation et innovation pour la prochaine génération de leaders Web3.",
};

export default function ClubBlockchainPage() {
    return (
        <main className="bg-dark-bg min-h-screen text-white">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 lg:pt-44 pb-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/event-workshop.png"
                        alt="Club Blockchain Hero"
                        fill
                        className="object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-dark-bg/50 to-dark-bg"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary-500/20 text-primary-400 text-sm font-medium mb-4 border border-primary-500/30">
                        Communauté Étudiante
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                        Club <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Blockchain</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                        Rejoignez la prochaine génération de leaders Web3 au Bénin. Apprenez, construisez et innovez ensemble.
                    </p>
                    <Link href="#join" className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-full font-medium transition-all inline-flex items-center gap-2">
                        Rejoindre le Club <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            {/* About Section */}
            <Section className="py-20" background="dark">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                                Plus qu&apos;un club, <br />
                                <span className="text-primary-400">une famille.</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-6">
                                Le Club Blockchain est une initiative de Blockchain Bénin visant à rassembler les passionnés, étudiants et professionnels autour des technologies décentralisées.
                            </p>
                            <p className="text-gray-400 text-lg mb-6">
                                Notre mission est de démocratiser l&apos;accès au savoir Web3 et de créer un environnement propice à l&apos;innovation et à l&apos;entrepreneuriat numérique.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 text-white">
                                    <div className="w-10 h-10 rounded-full bg-secondary-500/20 flex items-center justify-center text-secondary-400">
                                        <Users size={20} />
                                    </div>
                                    <span className="font-medium">Networking</span>
                                </div>
                                <div className="flex items-center gap-2 text-white">
                                    <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400">
                                        <BookOpen size={20} />
                                    </div>
                                    <span className="font-medium">Formation</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl opacity-20 blur-xl"></div>
                            <Image
                                src="/images/community-team.png"
                                alt="Club Meeting"
                                width={600}
                                height={400}
                                className="relative rounded-3xl shadow-2xl border border-white/10"
                            />
                        </div>
                    </div>
                </div>
            </Section>

            {/* Activities Section */}
            <Section className="bg-white/5 py-20" background="dark">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Nos Activités</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Nous organisons régulièrement des événements pour dynamiser la communauté et favoriser le partage de connaissances.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Calendar className="w-8 h-8 text-primary-400" />,
                                title: "Meetups Mensuels",
                                description: "Des rencontres physiques pour échanger sur les dernières tendances crypto et Web3."
                            },
                            {
                                icon: <BookOpen className="w-8 h-8 text-secondary-400" />,
                                title: "Ateliers Pratiques",
                                description: "Des sessions de formation hands-on pour apprendre à coder, trader ou créer des NFTs."
                            },
                            {
                                icon: <Award className="w-8 h-8 text-purple-400" />,
                                title: "Hackathons",
                                description: "Des compétitions de code pour résoudre des problèmes locaux grâce à la blockchain."
                            }
                        ].map((activity, index) => (
                            <div key={index} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary-500/50 transition-colors group">
                                <div className="mb-6 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    {activity.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{activity.title}</h3>
                                <p className="text-gray-400">{activity.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Join Section */}
            <Section id="join" className="py-20 relative overflow-hidden" background="dark">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-primary-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Prêt à nous rejoindre ?</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                        L&apos;adhésion est ouverte à tous les passionnés. Rejoignez notre communauté Discord et participez à nos prochains événements.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link href="https://discord.gg/blockchainbenin" target="_blank" className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2">
                            Rejoindre le Discord
                        </Link>
                        <Link href="/contact" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-all backdrop-blur-sm border border-white/10">
                            Nous Contacter
                        </Link>
                    </div>
                </div>
            </Section>
        </main>
    );
}
