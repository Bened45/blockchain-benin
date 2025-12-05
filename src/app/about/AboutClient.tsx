'use client';
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    BookOpen,
    Globe,
    Rocket,
    Target,
    AlertTriangle,
    Lightbulb,
    GraduationCap,
    Heart,
    Check,
    Sparkles,
    TrendingUp,
    Users,
    Award,
    Shield,
    Zap,
    Code,
    ChevronRight,
    ArrowRight
} from 'lucide-react';

const AboutPage = () => {
    const stats = [
        { number: "2024", label: "Année de Fondation", icon: Globe },
        { number: "1000+", label: "Membres Actifs", icon: Users },
        { number: "50+", label: "Événements", icon: Rocket },
        { number: "30+", label: "Partenaires", icon: Award }
    ];

    const problems = [
        {
            icon: AlertTriangle,
            title: "Retard Technologique",
            description: "L'Afrique francophone accuse un retard dans l'adoption blockchain"
        },
        {
            icon: BookOpen,
            title: "Manque d'Éducation",
            description: "Peu de ressources éducatives accessibles en français"
        },
        {
            icon: Users,
            title: "Communauté Dispersée",
            description: "Absence d'une structure communautaire organisée"
        }
    ];

    const solutions = [
        {
            icon: GraduationCap,
            title: "Formation Structurée",
            description: "Programmes éducatifs adaptés et certifications"
        },
        {
            icon: Users,
            title: "Communauté Active",
            description: "Réseau de passionnés et experts blockchain"
        },
        {
            icon: Rocket,
            title: "Innovation Locale",
            description: "Développement de solutions adaptées à l'Afrique"
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-20 lg:pt-44">
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
                <div className="absolute top-1/4 left-10 animate-float hidden md:block">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-2xl shadow-blue-500/50 flex items-center justify-center">
                        <Code className="text-white" size={28} />
                    </div>
                </div>
                <div className="absolute bottom-1/4 right-10 animate-float animation-delay-600 hidden md:block">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-2xl shadow-green-500/50 flex items-center justify-center">
                        <Zap className="text-white" size={32} />
                    </div>
                </div>

                {/* Content */}
                <div className="container-custom relative z-10 py-20">
                    <div className="max-w-5xl mx-auto text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white mb-8 animate-slide-down">
                            <Sparkles className="text-yellow-400 animate-pulse" size={20} />
                            <span className="font-semibold">À Propos de Blockchain Bénin</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6 leading-tight animate-slide-up">
                            Qui Sommes-Nous ?
                            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                                Notre Histoire & Mission
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up animation-delay-200">
                            Découvrez l&apos;histoire, la mission et l&apos;équipe passionnée qui œuvre pour démocratiser la blockchain en Afrique francophone.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-slide-up animation-delay-400">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                                        <Icon className="text-blue-400 mb-3 mx-auto" size={32} />
                                        <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                                        <div className="text-sm text-blue-200 font-medium">{stat.label}</div>
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

            {/* NOTRE HISTOIRE */}
            <section className="py-20 md:py-32 bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left - Visual Card */}
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-green-500 p-12 flex flex-col justify-center text-white relative">
                                <div className="absolute inset-0 opacity-10" style={{
                                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
                                    backgroundSize: '30px 30px'
                                }}></div>

                                <div className="relative z-10">
                                    <BookOpen className="mb-6" size={56} />
                                    <h3 className="text-4xl font-bold mb-4">Notre Histoire</h3>
                                    <p className="text-blue-100 text-lg leading-relaxed">
                                        D&apos;un groupe de passionnés à une organisation nationale influente
                                    </p>
                                </div>

                                {/* Decorative circles */}
                                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-yellow-400/30 rounded-full blur-2xl"></div>
                                <div className="absolute -top-8 -left-8 w-40 h-40 bg-green-400/30 rounded-full blur-2xl"></div>
                            </div>
                        </div>

                        {/* Right - Content */}
                        <div>
                            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-6">
                                NOTRE PARCOURS
                            </div>

                            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
                                Des Passionnés qui
                                <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                                    Changent l&apos;Histoire
                                </span>
                            </h2>

                            <div className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                                <p>
                                    Face au constat d&apos;un <strong className="text-gray-900">retard technologique croissant</strong> en Afrique francophone, nous avons décidé d&apos;agir.
                                </p>
                                <p>
                                    Des passionnés de technologie, développeurs, entrepreneurs et éducateurs se sont unis pour créer un <strong className="text-gray-900">mouvement qui transforme</strong> l&apos;écosystème blockchain africain.
                                </p>
                                <p>
                                    Ce qui a commencé comme des rencontres informelles est devenu une <strong className="text-gray-900">organisation nationale influente</strong>, reconnue comme le hub incontournable de l&apos;innovation blockchain en Afrique francophone.
                                </p>
                            </div>

                            <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
                                Notre Impact
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* OBJECTIF PRINCIPAL */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50/50">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-6">
                                NOTRE OBJECTIF
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                                Ce Que Nous Visons
                            </h2>
                        </div>

                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-1">
                                <div className="bg-white rounded-3xl p-8 md:p-12">
                                    <div className="flex items-start gap-6 mb-8">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center flex-shrink-0">
                                            <Target className="text-white" size={32} />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                                Contribuer à l&apos;Émergence d&apos;une Communauté Structurée
                                            </h3>
                                            <p className="text-xl text-gray-600 leading-relaxed">
                                                Au Bénin, nous voulons créer une <strong className="text-gray-900">communauté structurée de jeunes formés à la blockchain</strong>, capables de comprendre les enjeux, de participer aux projets et, pour certains, de porter des initiatives technologiques ou sociales à fort impact.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="p-6 bg-blue-50 rounded-2xl">
                                            <div className="text-3xl font-bold text-blue-600 mb-2">Former</div>
                                            <p className="text-sm text-gray-600">Des milliers de jeunes aux technologies blockchain</p>
                                        </div>
                                        <div className="p-6 bg-green-50 rounded-2xl">
                                            <div className="text-3xl font-bold text-green-600 mb-2">Structurer</div>
                                            <p className="text-sm text-gray-600">Une communauté organisée et active</p>
                                        </div>
                                        <div className="p-6 bg-yellow-50 rounded-2xl">
                                            <div className="text-3xl font-bold text-yellow-600 mb-2">Innover</div>
                                            <p className="text-sm text-gray-600">Des solutions à fort impact social</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROBLÉMATIQUE & SOLUTION */}
            <section className="py-20 md:py-32 bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Problématique */}
                        <div>
                            <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-bold mb-6">
                                LE CONSTAT
                            </div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8">
                                Contexte & Problématique
                            </h2>

                            <div className="space-y-6">
                                {problems.map((problem, index) => {
                                    const Icon = problem.icon;
                                    return (
                                        <div key={index} className="flex gap-4 p-6 bg-red-50 rounded-2xl border-l-4 border-red-500">
                                            <div className="w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center flex-shrink-0">
                                                <Icon className="text-white" size={24} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">{problem.title}</h3>
                                                <p className="text-gray-600">{problem.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Solution */}
                        <div>
                            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-6">
                                NOTRE RÉPONSE
                            </div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8">
                                Notre Solution
                            </h2>

                            <div className="space-y-6">
                                {solutions.map((solution, index) => {
                                    const Icon = solution.icon;
                                    return (
                                        <div key={index} className="flex gap-4 p-6 bg-green-50 rounded-2xl border-l-4 border-green-500">
                                            <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0">
                                                <Icon className="text-white" size={24} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">{solution.title}</h3>
                                                <p className="text-gray-600">{solution.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NOS DEUX VOLETS */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white mb-6">
                            NOTRE STRUCTURE
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                            Nos Deux Volets
                        </h2>
                        <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                            Une double approche pour maximiser notre impact
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* BB Card */}
                        <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="relative">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-2xl shadow-blue-500/50">
                                    <GraduationCap className="text-white" size={40} />
                                </div>

                                <h3 className="text-3xl font-bold text-white mb-4">
                                    Blockchain BENIN (BB)
                                </h3>

                                <p className="text-blue-100 leading-relaxed mb-6">
                                    Focalisé sur l&apos;éducation, les formations et la sensibilisation du grand public aux opportunités de la blockchain.
                                </p>

                                <ul className="space-y-3">
                                    {[
                                        "Programmes de formation structurés",
                                        "Bootcamps intensifs",
                                        "Hackathons stimulants",
                                        "Ressources éducatives gratuites"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-blue-100">
                                            <Check size={18} className="text-green-400 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* BBC Card */}
                        <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="relative">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6 shadow-2xl shadow-green-500/50">
                                    <Heart className="text-white" size={40} fill="white" />
                                </div>

                                <h3 className="text-3xl font-bold text-white mb-4">
                                    Blockchain BENIN Charity (BBC)
                                </h3>

                                <p className="text-blue-100 leading-relaxed mb-6">
                                    Utilise la blockchain pour des initiatives à impact social et le développement durable.
                                </p>

                                <ul className="space-y-3">
                                    {[
                                        "Transparence dans l'aide humanitaire",
                                        "Développement durable",
                                        "Traçabilité des dons",
                                        "Autonomisation des communautés"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-blue-100">
                                            <Check size={18} className="text-green-400 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MISSION & VISION */}
            <section className="py-20 md:py-32 bg-white">
                <div className="container-custom max-w-7xl">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full text-sm font-bold mb-6">
                            NOS AMBITIONS
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                            Mission & Vision
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Ce qui nous guide et où nous voulons aller
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Mission */}
                        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-10 text-white shadow-2xl">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                    <Target className="text-white" size={32} />
                                </div>
                                <h3 className="text-3xl font-bold">Notre Mission</h3>
                            </div>

                            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                                Éduquer, former et habiliter les jeunes africains à maîtriser la technologie blockchain et à créer des solutions innovantes.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <ChevronRight size={20} />
                                        Objectifs à Court Terme
                                    </h4>
                                    <ul className="space-y-3">
                                        {[
                                            "Former 10 000 personnes d'ici fin 2025",
                                            "Organiser 100 événements majeurs",
                                            "Établir 100 partenariats stratégiques",
                                            "Lancer 10 programmes de certification",
                                            "Créer un réseau de 100 ambassadeurs"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-blue-100">
                                                <Check size={18} className="mt-1 flex-shrink-0 text-green-400" />
                                                <span className="text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <ChevronRight size={20} />
                                        Objectifs à Long Terme
                                    </h4>
                                    <ul className="space-y-3">
                                        {[
                                            "Devenir le principal hub blockchain en Afrique francophone",
                                            "Former 50 000 professionnels d'ici 2030",
                                            "Accompagner 100 startups blockchain",
                                            "Influencer les politiques dans 15 pays",
                                            "Créer un fonds d'investissement dédié"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-blue-100">
                                                <Check size={18} className="mt-1 flex-shrink-0 text-green-400" />
                                                <span className="text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-10 text-white shadow-2xl">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                    <Rocket className="text-white" size={32} />
                                </div>
                                <h3 className="text-3xl font-bold">Notre Vision</h3>
                            </div>

                            <p className="text-xl text-green-100 mb-8 leading-relaxed">
                                Construire le premier centre communautaire blockchain de l&apos;Afrique francophone.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <ChevronRight size={20} />
                                        Nos Aspirations
                                    </h4>
                                    <ul className="space-y-3">
                                        {[
                                            "Positionner l'Afrique francophone comme référence blockchain",
                                            "Créer un écosystème où les talents prospèrent",
                                            "Développer des solutions adaptées à l'Afrique",
                                            "Construire des passerelles avec l'écosystème mondial",
                                            "Démontrer l'impact transformateur de la blockchain"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-green-100">
                                                <Check size={18} className="mt-1 flex-shrink-0 text-yellow-400" />
                                                <span className="text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <ChevronRight size={20} />
                                        Impact Recherché
                                    </h4>
                                    <ul className="space-y-3">
                                        {[
                                            "Réduction de la fracture technologique",
                                            "Création de milliers d'emplois qualifiés",
                                            "Développement de cas d'usage à impact social",
                                            "Rayonnement international de l'expertise africaine",
                                            "Contribution à l'économie numérique africaine"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-green-100">
                                                <Check size={18} className="mt-1 flex-shrink-0 text-yellow-400" />
                                                <span className="text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NOTRE ÉQUIPE */}
            <section className="py-20 md:py-32 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full text-sm font-bold mb-6">
                            L&apos;ÉQUIPE
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                            Rencontrez les <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Visionnaires</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Une équipe passionnée et dévouée qui construit l&apos;avenir de la blockchain en Afrique
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                name: "Bénédict AHOULOUMA",
                                role: "Fondateur & CEO",
                                bio: "Visionnaire et entrepreneur passionné par la blockchain",
                                gradient: "from-blue-500 to-cyan-500",
                                social: { twitter: "#", linkedin: "#", github: "#" }
                            },
                            {
                                name: "Membre 2",
                                role: "CTO",
                                bio: "Expert technique et développeur blockchain",
                                gradient: "from-green-500 to-emerald-500",
                                social: { twitter: "#", linkedin: "#", github: "#" }
                            },
                            {
                                name: "Membre 3",
                                role: "Directeur Formation",
                                bio: "Éducateur et formateur blockchain certifié",
                                gradient: "from-purple-500 to-pink-500",
                                social: { twitter: "#", linkedin: "#", github: "#" }
                            },
                            {
                                name: "Membre 4",
                                role: "Responsable Communauté",
                                bio: "Community manager et stratège des réseaux",
                                gradient: "from-yellow-500 to-orange-500",
                                social: { twitter: "#", linkedin: "#", github: "#" }
                            },
                            {
                                name: "Membre 5",
                                role: "Directeur Partenariats",
                                bio: "Expert en développement de partenariats stratégiques",
                                gradient: "from-red-500 to-pink-500",
                                social: { twitter: "#", linkedin: "#", github: "#" }
                            },
                            {
                                name: "Membre 6",
                                role: "Directeur Innovation",
                                bio: "Chercheur et innovateur en technologies blockchain",
                                gradient: "from-indigo-500 to-purple-500",
                                social: { twitter: "#", linkedin: "#", github: "#" }
                            }
                        ].map((member, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >
                                {/* Gradient Header */}
                                <div className={`h-32 bg-gradient-to-br ${member.gradient} relative`}>
                                    <div className="absolute inset-0 opacity-20" style={{
                                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
                                        backgroundSize: '20px 20px'
                                    }}></div>
                                </div>

                                {/* Avatar */}
                                <div className="px-8 -mt-16 mb-4">
                                    <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${member.gradient} p-1 shadow-2xl mx-auto group-hover:scale-110 transition-transform duration-300`}>
                                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                            <Users className="text-gray-400" size={48} />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="px-8 pb-8 text-center">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {member.name}
                                    </h3>
                                    <div className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r ${member.gradient} text-white`}>
                                        {member.role}
                                    </div>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {member.bio}
                                    </p>

                                    {/* Social Links */}
                                    <div className="flex gap-3 justify-center">
                                        <a
                                            href={member.social.twitter}
                                            className={`w-10 h-10 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg`}
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                            </svg>
                                        </a>
                                        <a
                                            href={member.social.linkedin}
                                            className={`w-10 h-10 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg`}
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </a>
                                        <a
                                            href={member.social.github}
                                            className={`w-10 h-10 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg`}
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                {/* Hover Border Effect */}
                                <div className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-br ${member.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none`}></div>
                            </div>
                        ))}
                    </div>

                    {/* Join Team CTA */}
                    <div className="mt-16 text-center">
                        <div className="inline-block bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 md:p-12 shadow-lg max-w-3xl">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                Envie de Rejoindre l&apos;Équipe ?
                            </h3>
                            <p className="text-lg text-gray-600 mb-6">
                                Nous sommes toujours à la recherche de talents passionnés pour renforcer notre équipe
                            </p>
                            <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                                Voir les Opportunités
                                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* PARTENAIRES */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50/50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-bold mb-6">
                            COLLABORATIONS
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                            Nos <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Partenaires</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            Ensemble, nous construisons l&apos;avenir de la blockchain en Afrique
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { name: "Universités", icon: "🎓", color: "from-blue-500 to-cyan-500" },
                            { name: "Entreprises Tech", icon: "🌐", color: "from-green-500 to-emerald-500" },
                            { name: "Institutions", icon: "💡", color: "from-yellow-500 to-orange-500" },
                        ].map((partner, index) => (
                            <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
                                <div className="relative text-center">
                                    <div className="text-6xl mb-4">{partner.icon}</div>
                                    <div className="text-2xl font-bold text-gray-900">{partner.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
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
                            Rejoignez Notre Mouvement
                        </h2>
                        <p className="text-xl text-blue-200 mb-10">
                            Faites partie de la révolution blockchain en Afrique francophone
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="group px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold text-lg shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                                Devenir Membre
                                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </button>
                            <a href="/contact" className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center">
                                Nous Contacter
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default AboutPage;
