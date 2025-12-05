import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, Zap, Rocket, PresentationIcon, Check } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Nos Programmes",
    description: "Formations certifiantes, hackathons, bootcamps et ateliers. Découvrez nos programmes éducatifs pour maîtriser la blockchain au Bénin.",
};

const ProgramsPage = () => {
    const stats = [
        { value: '50+', label: 'Formations Dispensées' },
        { value: '2000+', label: 'Personnes formées' },
        { value: '30+', label: 'Évènements Organisés' }
    ];

    const programs = [
        {
            id: 'formations',
            icon: GraduationCap,
            title: 'Formations',
            description: 'Plonger de la blockchain au Bénin avec 8 ans d&apos;expérience. Passionné par l&apos;éducation, j&apos;accélère la transition blockchain en Afrique.',
            features: [
                'Plus de 50 formations dispensées',
                'Certifications reconnues',
                'Formateurs experts',
                'Accès à vie aux contenus',
                'Communauté d&apos;entraide'
            ]
        },
        {
            id: 'hackathons',
            icon: Zap,
            title: 'Hackathons',
            description: 'Relevez des défis réels, développez des projets blockchain innovants en équipe et gagnez des prix.',
            features: [
                '48h de développement intense',
                'Mentors d&apos;experts',
                'Prix jusqu&apos;à 5000€',
                'Networking avec investisseurs',
                'Visibilité médiatique'
            ]
        },
        {
            id: 'bootcamps',
            icon: Rocket,
            title: 'Bootcamps',
            description: 'Programmes intensifs de 8 à 12 semaines pour une immersion totale dans une carrière blockchain.',
            features: [
                'Formation immersive temps plein',
                'Projets d&apos;entreprises',
                'Accompagnement continu',
                'Taux de placement >80%',
                'Réseau d&apos;alumni actif'
            ]
        },
        {
            id: 'evenements',
            icon: PresentationIcon,
            title: 'Évènements',
            description: 'Conférences, meetups, ateliers et BENIN BLOCKCHAIN Week pour dynamiser l&apos;écosystème.',
            features: [
                'Évènements mensuels réguliers',
                'Interventions internationales',
                'Networking de qualité',
                'Gratuit et tout niveau',
                'Certificat d&apos;assistance'
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="pt-24 lg:pt-44 pb-12">
                {/* Header Section */}
                <div className="container mx-auto px-4 mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0066CC] mb-4">
                        Nos Programmes
                    </h1>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Formations, hackathons, bootcamps et évènements pour vous propulser dans l&apos;univers blockchain
                    </p>
                </div>

                {/* Stats Section */}
                <div className="container mx-auto px-4 mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-5xl md:text-6xl font-bold text-[#4CAF50] mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-600 text-sm">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Programs Title */}
                <div className="container mx-auto px-4 mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0066CC] mb-2">
                        Découvrez Nos Programmes
                    </h2>
                    <p className="text-gray-600">
                        Des parcours adaptés à tous les niveaux pour maîtriser la blockchain
                    </p>
                </div>

                {/* Programs Grid */}
                <div className="container mx-auto px-4 max-w-6xl mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {programs.map((program) => {
                            const Icon = program.icon;
                            return (
                                <div
                                    key={program.id}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                                >
                                    {/* Blue Header with Icon */}
                                    <div className="bg-[#0066CC] p-8 flex items-center justify-center">
                                        <Icon size={64} className="text-white" strokeWidth={1.5} />
                                    </div>

                                    {/* Content */}
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-[#0066CC] mb-4">
                                            {program.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                            {program.description}
                                        </p>

                                        {/* Features List */}
                                        <ul className="space-y-3 mb-6">
                                            {program.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                                    <Check size={18} className="text-[#4CAF50] mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA Button */}
                                        <button className="w-full bg-[#0066CC] text-white py-3 px-6 rounded-full font-medium hover:bg-[#0052A3] transition-colors">
                                            Découvrir le programme →
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Catalogue de Formations Section */}
                <div className="container mx-auto px-4 max-w-6xl mb-16">
                    {/* Section Title */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#4CAF50] mb-2">
                            Catalogue de Formations
                        </h2>
                        <p className="text-gray-600">
                            Choisissez la formation adaptée à votre niveau et vos objectifs
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {['Tout', 'Débutant', 'Intermédiaire', 'Avancé', 'En ligne', 'Présentiel'].map((filter, index) => (
                            <button
                                key={index}
                                className={`px-6 py-2 rounded-full font-medium transition-colors ${index === 0
                                    ? 'bg-[#0066CC] text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* Formations Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: 'Introduction à la Blockchain',
                                level: 'Débutant',
                                levelColor: '#4CAF50',
                                description: 'Découvrir les fondamentaux de la blockchain, les bases des protocoles, comprendre la décentralisation.',
                                duration: '4 semaines',
                                hours: '10 heures',
                                certificate: 'Certificat',
                                topics: [
                                    'Qu&apos;est-ce que la blockchain ?',
                                    'Cryptographie et sécurité',
                                    'Consensus et protocoles',
                                    'Applications décentralisées'
                                ]
                            },
                            {
                                title: 'Développement Smart Contracts',
                                level: 'Intermédiaire',
                                levelColor: '#FCD34D',
                                description: 'Maîtrisez Solidity et développez vos premiers smart contracts sécurisés sur Ethereum.',
                                duration: '8 semaines',
                                hours: '16 heures',
                                certificate: 'Certificat',
                                topics: [
                                    'Langage Solidity',
                                    'Sécurité et bonnes pratiques',
                                    'Test de smart contracts',
                                    'Projet final guidé'
                                ]
                            },
                            {
                                title: 'Architecture DeFi',
                                level: 'Avancé',
                                levelColor: '#FF9800',
                                description: 'Concevez et déployez des protocoles DeFi complexes (DEX, lending, farming).',
                                duration: '12 semaines',
                                hours: '20 heures',
                                certificate: 'Certificat',
                                topics: [
                                    'Protocoles DeFi',
                                    'AMM et liquidité',
                                    'Yield farming et staking',
                                    'Audit de sécurité DeFi'
                                ]
                            },
                            {
                                title: 'Web3 & dApps',
                                level: 'Intermédiaire',
                                levelColor: '#FCD34D',
                                description: 'Créez des applications décentralisées complètes avec React, Web3.js et des smart contracts.',
                                duration: '8 semaines',
                                hours: '16 heures',
                                certificate: 'Certificat',
                                topics: [
                                    'Web3.js et Ethers.js',
                                    'Wallet connectivity (Metamask)',
                                    'Frontend React pour dApps',
                                    'Projet dApp de A à Z'
                                ]
                            },
                            {
                                title: 'NFT & Métaverse',
                                level: 'Débutant',
                                levelColor: '#4CAF50',
                                description: 'Explorez l&apos;univers des NFT et du métaverse. Créez, vendez et gérez vos collections NFT.',
                                duration: '6 semaines',
                                hours: '10 heures',
                                certificate: 'Certificat',
                                topics: [
                                    'Standards NFT (ERC-721, ERC-1155)',
                                    'Plateformes de mint',
                                    'Métaverse et cas d&apos;usage',
                                    'Stratégie de monétisation'
                                ]
                            },
                            {
                                title: 'Blockchain pour Business',
                                level: 'Débutant',
                                levelColor: '#4CAF50',
                                description: 'Formation exclusive pour managers et entrepreneurs pour intégrer la blockchain dans votre activité.',
                                duration: '4 semaines',
                                hours: '8 heures',
                                certificate: 'Certificat',
                                topics: [
                                    'Cas d&apos;usage métier blockchain',
                                    'ROI et stratégie d&apos;implémentation',
                                    'Réglementation et conformité',
                                    'Transformation et conduite'
                                ]
                            }
                        ].map((formation, index) => (
                            <div
                                key={index}
                                className="bg-[#0066CC] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
                            >
                                {/* Header with Badge */}
                                <div className="p-8 relative">
                                    <div
                                        className="absolute top-4 right-4 px-4 py-1 rounded-full text-sm font-bold text-white"
                                        style={{ backgroundColor: formation.levelColor }}
                                    >
                                        {formation.level}
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4 pr-24">
                                        {formation.title}
                                    </h3>

                                    <p className="text-white/90 text-sm mb-6">
                                        {formation.description}
                                    </p>

                                    {/* Info Pills */}
                                    <div className="flex flex-wrap gap-3 mb-6">
                                        <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">
                                            {formation.duration}
                                        </span>
                                        <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">
                                            {formation.hours}
                                        </span>
                                        <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">
                                            {formation.certificate}
                                        </span>
                                    </div>

                                    {/* Topics List */}
                                    <ul className="space-y-2 mb-6">
                                        {formation.topics.map((topic, i) => (
                                            <li key={i} className="flex items-start gap-2 text-white text-sm">
                                                <Check size={16} className="mt-0.5 flex-shrink-0" strokeWidth={3} />
                                                <span>{topic}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <button className="w-full bg-[#4CAF50] text-white py-3 px-6 rounded-full font-bold hover:bg-[#45a049] transition-colors">
                                        S&apos;inscrire →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default ProgramsPage;
