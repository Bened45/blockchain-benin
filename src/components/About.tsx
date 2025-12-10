'use client';
import React from 'react';
import {
    Shield,
    Rocket,
    Users,
    Sparkles,
    ChevronRight,
    Globe2,
    Zap,
    Heart,
    Code,
    Lightbulb,
    TrendingUp,
    BookOpen,
    Award,
    Target
} from 'lucide-react';
import Image from 'next/image';

const About = () => {
    const values = [
        {
            icon: Shield,
            title: "Transparence",
            description: "Une gouvernance ouverte et des actions mesurables",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: Heart,
            title: "Inclusion",
            description: "Accessible à tous, sans distinction",
            gradient: "from-green-500 to-emerald-500"
        },
        {
            icon: Lightbulb,
            title: "Innovation",
            description: "À la pointe de la technologie blockchain",
            gradient: "from-yellow-500 to-orange-500"
        },
        {
            icon: Target,
            title: "Impact",
            description: "Résultats concrets pour notre communauté",
            gradient: "from-purple-500 to-pink-500"
        }
    ];

    const milestones = [
        {
            year: "2024",
            title: "Fondation",
            description: "Création de Blockchain Bénin avec une vision claire",
            icon: Rocket
        },
        {
            year: "2024",
            title: "Première Communauté",
            description: "Constitution d'un réseau de passionnés engagés",
            icon: Users
        },
        {
            year: "2024",
            title: "Premiers Programmes",
            description: "Lancement de formations et d&apos;ateliers éducatifs",
            icon: BookOpen
        },
        {
            year: "2024",
            title: "Reconnaissance",
            description: "Devenu un acteur clé de l&apos;écosystème tech béninois",
            icon: Award
        }
    ];

    const achievements = [
        { number: "1000+", label: "Membres", icon: Users },
        { number: "50+", label: "Événements", icon: Rocket },
        { number: "30+", label: "Partenaires", icon: Globe2 },
        { number: "100%", label: "Engagement", icon: Heart }
    ];

    return (
        <div className="relative bg-white">
            {/* HERO SECTION */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                {/* Gradient Orbs */}
                <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-500/30 rounded-full blur-3xl animate-pulse-slow animation-delay-400"></div>

                {/* Floating Elements */}
                <div className="absolute top-1/4 left-10 animate-float">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-2xl shadow-blue-500/50 flex items-center justify-center">
                        <Code className="text-white" size={28} />
                    </div>
                </div>
                <div className="absolute bottom-1/4 right-10 animate-float animation-delay-600">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-2xl shadow-green-500/50 flex items-center justify-center">
                        <Zap className="text-white" size={32} />
                    </div>
                </div>

                {/* Content */}
                <div className="container-custom relative z-10 py-20">
                    <div className="max-w-5xl mx-auto text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-6 py-3 glass-premium rounded-full text-white mb-8 animate-slide-down">
                            <Sparkles className="text-yellow-400 animate-pulse" size={20} />
                            <span className="font-semibold">Découvrez Notre Histoire</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6 leading-tight animate-slide-up">
                            Construire l&apos;Avenir de la
                            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                                Blockchain en Afrique
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up animation-delay-200">
                            Nous sommes une communauté de visionnaires, développeurs et entrepreneurs qui croient au pouvoir transformateur de la technologie blockchain pour l&apos;Afrique francophone.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-400">
                            <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold text-lg shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                                Rejoindre la Communauté
                                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </button>
                            <button className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105">
                                Notre Mission
                            </button>
                        </div>

                        {/* Stats Bar */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-slide-up animation-delay-600">
                            {achievements.map((achievement, index) => {
                                const Icon = achievement.icon;
                                return (
                                    <div key={index} className="glass-premium rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                                        <Icon className="text-blue-400 mb-3 mx-auto" size={32} />
                                        <div className="text-3xl md:text-4xl font-bold text-white mb-1">{achievement.number}</div>
                                        <div className="text-sm text-blue-200 font-medium">{achievement.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                        <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* STORY SECTION */}
            <section className="py-20 md:py-32 bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left - Image Collage */}
                        <div className="relative">
                            <div className="relative">
                                {/* Main Image */}
                                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                    <div className="w-full h-full bg-gradient-to-br from-blue-500 via-cyan-500 to-green-500 flex items-center justify-center">
                                        <Globe2 className="text-white w-32 h-32 opacity-50" />
                                    </div>
                                </div>

                                {/* Floating Card */}
                                <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-6 border-4 border-white">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                                            <TrendingUp className="text-white" size={28} />
                                        </div>
                                        <div>
                                            <div className="text-3xl font-bold text-gray-900">2024</div>
                                            <div className="text-sm text-gray-600 font-medium">Année de Fondation</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-2xl opacity-60 animate-pulse animation-delay-400"></div>
                            </div>
                        </div>

                        {/* Right - Content */}
                        <div>
                            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-6">
                                NOTRE HISTOIRE
                            </div>

                            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
                                D&apos;une Vision à une
                                <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                                    Révolution Technologique
                                </span>
                            </h2>

                            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                                <p>
                                    En 2024, un groupe de passionnés de technologie blockchain s&apos;est réuni avec une mission claire : <strong className="text-gray-900">démocratiser l&apos;accès à la blockchain en Afrique francophone</strong>.
                                </p>
                                <p>
                                    Ce qui a commencé comme des rencontres informelles est rapidement devenu un <strong className="text-gray-900">mouvement national</strong>, rassemblant développeurs, entrepreneurs, étudiants et visionnaires autour d&apos;une passion commune.
                                </p>
                                <p>
                                    Aujourd&apos;hui, Blockchain Bénin est reconnu comme <strong className="text-gray-900">le hub incontournable</strong> de l&apos;innovation blockchain dans la région, avec des programmes de formation, des événements réguliers et un réseau de partenaires stratégiques.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span className="text-sm font-medium text-gray-700">Éducation Accessible</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    <span className="text-sm font-medium text-gray-700">Communauté Active</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <span className="text-sm font-medium text-gray-700">Impact Mesurable</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VALUES SECTION */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50/50">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-bold mb-6">
                            NOS VALEURS
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                            Ce Qui Nous Guide
                        </h2>
                        <p className="text-xl text-gray-600">
                            Des principes forts qui façonnent notre approche et notre impact
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={index}
                                    className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                                >
                                    {/* Gradient Background on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`}></div>

                                    <div className="relative">
                                        {/* Icon */}
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                            <Icon className="text-white" size={28} />
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>

                                    {/* Corner Accent */}
                                    <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-gray-200 group-hover:border-gray-300 rounded-tr-2xl transition-colors"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* TIMELINE SECTION */}
            <section className="py-20 md:py-32 bg-white">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-bold mb-6">
                            NOTRE PARCOURS
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                            Les Étapes Clés
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-green-500 to-purple-500"></div>

                            {/* Milestones */}
                            <div className="space-y-12">
                                {milestones.map((milestone, index) => {
                                    const Icon = milestone.icon;
                                    const isEven = index % 2 === 0;
                                    return (
                                        <div key={index} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                            {/* Timeline Dot */}
                                            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg z-10">
                                                <Icon className="text-white" size={24} />
                                            </div>

                                            {/* Content Card */}
                                            <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12 pl-24 md:pl-0' : 'md:pl-12 pl-24 md:pr-0'}`}>
                                                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                                                    <div className="text-sm font-bold text-blue-600 mb-2">{milestone.year}</div>
                                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                                                    <p className="text-gray-600">{milestone.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            Prêt à Faire Partie de l&apos;Aventure ?
                        </h2>
                        <p className="text-xl text-blue-200 mb-10">
                            Rejoignez une communauté de visionnaires qui construisent l&apos;avenir de la blockchain en Afrique
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="group px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold text-lg shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                                Devenir Membre
                                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </button>
                            <button className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
                                Nous Contacter
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
