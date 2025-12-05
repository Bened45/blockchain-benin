import React from 'react';
import Section from '@/components/ui/Section';
import DonationForm from '@/components/DonationForm';
import { Heart, Users, BookOpen, Award, Sparkles } from 'lucide-react';

export const metadata = {
    title: 'Faire un don | Blockchain Bénin',
    description: 'Soutenez la révolution blockchain au Bénin. Votre don finance nos formations, événements et projets communautaires.',
};

export default function DonatePage() {
    const impactStats = [
        { icon: Users, value: '2000+', label: 'Personnes formées', color: 'text-primary-400' },
        { icon: BookOpen, value: '50+', label: 'Formations gratuites', color: 'text-secondary-400' },
        { icon: Award, value: '30+', label: 'Certifications délivrées', color: 'text-accent-400' },
    ];

    return (
        <main className="bg-dark-bg min-h-screen">
            {/* Hero Section */}
            <div className="relative pt-32 lg:pt-44 pb-16 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-dark-bg to-secondary-900/20 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-500/10 via-transparent to-transparent pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary-300 mb-8">
                        <Heart size={16} className="animate-pulse" />
                        <span className="text-sm font-medium">Chaque don compte</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                        Faire un <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">don</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Votre générosité finance nos formations gratuites, événements communautaires et projets d&apos;innovation. Ensemble, construisons l&apos;avenir blockchain de l&apos;Afrique.
                    </p>
                </div>
            </div>

            {/* Impact Stats */}
            <Section background="dark" padding="md" className="border-y border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {impactStats.map((stat, index) => (
                        <div key={index} className="flex items-center justify-center gap-4 py-4">
                            <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                                <stat.icon size={28} />
                            </div>
                            <div className="text-left">
                                <div className="text-2xl font-bold text-white">{stat.value}</div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Main Content */}
            <Section background="dark" padding="lg">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Left - Why donate */}
                    <div className="lg:w-1/3 lg:sticky lg:top-32">
                        <div className="flex items-center gap-2 text-primary-400 mb-4">
                            <Sparkles size={20} />
                            <span className="text-sm font-semibold uppercase tracking-wider">Votre impact</span>
                        </div>
                        <h2 className="text-3xl font-display font-bold text-white mb-6">
                            Où va votre don ?
                        </h2>
                        <ul className="space-y-4">
                            {[
                                { amount: '5 000 FCFA', desc: 'Finance une place en formation' },
                                { amount: '10 000 FCFA', desc: 'Soutient un meetup communautaire' },
                                { amount: '25 000 FCFA', desc: 'Offre une certification à un étudiant' },
                                { amount: '50 000 FCFA', desc: 'Sponsorise un atelier complet' },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-secondary-500 mt-2 flex-shrink-0" />
                                    <div>
                                        <span className="font-semibold text-white">{item.amount}</span>
                                        <span className="text-gray-400"> — {item.desc}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right - Donation Form */}
                    <div className="lg:w-2/3 w-full">
                        <div className="glass p-6 md:p-10 rounded-3xl border border-white/10">
                            <DonationForm />
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
