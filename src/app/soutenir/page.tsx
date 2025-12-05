import React from 'react';
import Section from '@/components/ui/Section';
import SupportCard from '@/components/SupportCard';
import SupportForm from '@/components/SupportForm';
import { Heart, Briefcase, User, ArrowRight } from 'lucide-react';

export const metadata = {
    title: 'Nous soutenir | Blockchain Bénin',
    description: 'Découvrez comment soutenir le projet : dons, partenariats ou bénévolat.',
};

export default function SupportPage() {
    return (
        <main className="bg-dark-bg min-h-screen">
            {/* Hero Section */}
            <div className="relative pt-32 lg:pt-44 pb-20 overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 via-dark-bg to-secondary-900/20 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-500/10 via-transparent to-transparent pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-300 mb-8">
                        <Heart size={16} />
                        <span className="text-sm font-medium">Soutenez notre mission</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                        Nous <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">soutenir</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                        Contribuez à la révolution blockchain au Bénin. Chaque geste compte pour construire un avenir décentralisé en Afrique.
                    </p>
                    <a
                        href="/don"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full hover:shadow-glow-primary transition-all duration-300 font-semibold"
                    >
                        Faire un don <ArrowRight size={20} />
                    </a>
                </div>
            </div>

            {/* Support Options */}
            <Section background="dark" padding="lg">
                <div className="pt-32 lg:pt-44 pb-12">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                        Comment nous aider ?
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Plusieurs façons de contribuer à notre mission éducative et sociale.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <SupportCard
                        icon={<Heart size={32} className="text-primary-400" />}
                        title="Donations"
                        description="Soutenez financièrement nos projets et formations pour démocratiser l'accès à la blockchain."
                        link="/don"
                    />
                    <SupportCard
                        icon={<Briefcase size={32} className="text-secondary-400" />}
                        title="Partenariats"
                        description="Devenez partenaire et bénéficiez d'une visibilité accrue auprès de notre communauté."
                        link="#form"
                    />
                    <SupportCard
                        icon={<User size={32} className="text-accent-400" />}
                        title="Bénévolat"
                        description="Apportez votre temps et vos compétences pour aider la communauté à grandir."
                        link="#form"
                    />
                </div>
            </Section>

            {/* Form Section */}
            <Section id="form" background="dark" padding="lg" className="bg-dark-surface/50">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            Contactez-nous
                        </h2>
                        <p className="text-gray-400">
                            Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                        </p>
                    </div>
                    <div className="glass p-8 md:p-10 rounded-3xl border border-white/10">
                        <SupportForm />
                    </div>
                </div>
            </Section>
        </main>
    );
}
