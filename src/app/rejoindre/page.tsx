import React from 'react';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import JoinForm from '@/components/JoinForm';
import { CheckCircle2, Users, Briefcase, Heart, ArrowRight } from 'lucide-react';

export const metadata = {
    title: 'Rejoindre | Blockchain Bénin',
    description: 'Devenez membre, partenaire ou bénévole et participez à la révolution blockchain au Bénin.',
};

export default function JoinPage() {
    return (
        <main className="bg-dark-bg min-h-screen">
            {/* Hero Section */}
            <div className="relative pt-32 lg:pt-44 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 to-dark-bg pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-300 mb-8 animate-fade-in">
                        <Users size={16} />
                        <span className="text-sm font-medium">Communauté & Écosystème</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 animate-slide-up">
                        Rejoignez l&apos;Écosystème <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Blockchain du Bénin</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 animate-slide-up animation-delay-200">
                        Devenez acteur du changement. Que vous soyez étudiant, professionnel ou entreprise, il y a une place pour vous dans notre communauté grandissante.
                    </p>
                </div>
            </div>

            {/* Membership Options */}
            <Section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Member Card */}
                        <div className="glass p-8 rounded-3xl border border-white/10 hover:border-primary/50 transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary-400 mb-6 group-hover:scale-110 transition-transform">
                                <Users size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Membre Individuel</h3>
                            <p className="text-gray-400 mb-8">
                                Pour les étudiants, développeurs et passionnés qui veulent apprendre et grandir.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['Accès aux formations', 'Réseau communautaire', 'Mentorat exclusif', 'Événements privés'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle2 size={18} className="text-primary-500" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Partner Card */}
                        <div className="glass p-8 rounded-3xl border border-secondary/30 bg-secondary/5 hover:border-secondary/50 transition-all duration-300 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-secondary text-dark-bg text-xs font-bold px-3 py-1 rounded-bl-xl">POPULAIRE</div>
                            <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary-400 mb-6 group-hover:scale-110 transition-transform">
                                <Briefcase size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Partenaire / Entreprise</h3>
                            <p className="text-gray-400 mb-8">
                                Pour les entreprises qui souhaitent innover et recruter les meilleurs talents.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['Visibilité marque', 'Accès aux talents', 'Innovation lab', 'Sponsoring événements'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle2 size={18} className="text-secondary-500" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Volunteer Card */}
                        <div className="glass p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
                            <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                                <Heart size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Bénévole</h3>
                            <p className="text-gray-400 mb-8">
                                Pour ceux qui veulent donner de leur temps et contribuer à l&apos;impact social.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['Impact social direct', 'Expérience terrain', 'Certificat bénévolat', 'Réseau étendu'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle2 size={18} className="text-purple-500" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Application Form Section */}
            <Section className="py-20 bg-dark-surface/50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/2 sticky top-32">
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                                Prêt à faire <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">le grand saut ?</span>
                            </h2>
                            <p className="text-xl text-gray-300 mb-8">
                                Remplissez le formulaire ci-contre pour initier votre demande d&apos;adhésion. Notre équipe examinera votre profil et vous contactera sous 48h.
                            </p>

                            <div className="relative h-64 w-full rounded-3xl overflow-hidden">
                                <Image
                                    src="/images/community-team.png"
                                    alt="Community"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-primary-900/40 mix-blend-multiply"></div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <div className="glass p-8 md:p-10 rounded-3xl border border-white/10">
                                <JoinForm />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
